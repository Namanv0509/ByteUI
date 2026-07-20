#!/usr/bin/env node

import { Command } from 'commander';
import prompts from 'prompts';
import pc from 'picocolors';
import ora from 'ora';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const program = new Command();
const REGISTRY_URL = process.env.BYTEUI_REGISTRY_URL || 'https://byte-ui.vercel.app/registry.json';

// Get current package version from package.json
const cliPkgPath = new URL('../package.json', import.meta.url);
const cliPkg = JSON.parse(fs.readFileSync(cliPkgPath, 'utf8'));

// Resolve alias path to physical path based on tsconfig.json or jsconfig.json
function getPathResolver() {
  const rootPath = process.cwd();
  let aliasMap = { '@/*': './src/*' };
  
  const tsConfigPath = path.join(rootPath, 'tsconfig.json');
  const jsConfigPath = path.join(rootPath, 'jsconfig.json');
  const configPath = fs.existsSync(tsConfigPath) ? tsConfigPath : (fs.existsSync(jsConfigPath) ? jsConfigPath : null);
  
  if (configPath) {
    try {
      const content = fs.readFileSync(configPath, 'utf8');
      // Strip comments
      const cleanJson = content.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '$1');
      const config = JSON.parse(cleanJson);
      if (config.compilerOptions && config.compilerOptions.paths) {
        aliasMap = config.compilerOptions.paths;
      }
    } catch (e) {
      // Ignore parsing errors, fallback to default src/ mapping
    }
  }
  
  return function resolveAlias(aliasPath) {
    for (const [aliasPattern, targetPaths] of Object.entries(aliasMap)) {
      // Convert alias pattern to regex, e.g. "@/*" to "^@/(.*)$"
      const escapedPattern = aliasPattern.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&').replace(/\\\*/g, '(.*)');
      const patternRegex = new RegExp('^' + escapedPattern + '$');
      const match = aliasPath.match(patternRegex);
      
      if (match) {
        const subPath = match[1] || '';
        const targetPattern = targetPaths[0];
        const resolvedPath = targetPattern.replace(/\*/g, subPath);
        return path.resolve(rootPath, resolvedPath);
      }
    }
    
    // Default fallback if no match found
    const srcExists = fs.existsSync(path.join(rootPath, 'src'));
    if (aliasPath.startsWith('@/')) {
      return path.resolve(rootPath, srcExists ? 'src' : '.', aliasPath.slice(2));
    }
    return path.resolve(rootPath, aliasPath);
  };
}

async function fetchRegistry() {
  if (REGISTRY_URL.startsWith('http://') || REGISTRY_URL.startsWith('https://')) {
    const response = await fetch(REGISTRY_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch registry from ${REGISTRY_URL}: ${response.statusText}`);
    }
    return await response.json();
  } else {
    // Local filesystem path for development/testing
    const localPath = path.resolve(REGISTRY_URL);
    if (!fs.existsSync(localPath)) {
      throw new Error(`Local registry path not found: ${localPath}`);
    }
    const content = fs.readFileSync(localPath, 'utf8');
    return JSON.parse(content);
  }
}

/**
 * Injects CSS variables for the given namespaces into the consumer's globals.css.
 * Skips any namespace whose marker string is already present in the file.
 * @param {string} cssFilePath  - Absolute path to the target globals.css
 * @param {object} stylesMap    - registry.styles object
 * @param {string[]} namespaces - Subset of namespace keys to inject (or all if undefined)
 */
function injectNamespaceStyles(cssFilePath, stylesMap, namespaces) {
  if (!stylesMap || Object.keys(stylesMap).length === 0) return;
  if (!fs.existsSync(cssFilePath)) {
    // Create an empty file so we can append to it
    fs.mkdirSync(path.dirname(cssFilePath), { recursive: true });
    fs.writeFileSync(cssFilePath, '', 'utf8');
  }

  let cssContent = fs.readFileSync(cssFilePath, 'utf8');
  const toInject = namespaces
    ? Object.entries(stylesMap).filter(([ns]) => namespaces.includes(ns))
    : Object.entries(stylesMap);

  let injected = [];
  for (const [namespace, styleData] of toInject) {
    // Check if marker is already in the file
    if (cssContent.includes(styleData.marker)) {
      continue; // already present, skip
    }
    cssContent += styleData.css;
    injected.push(styleData.label);
  }

  if (injected.length > 0) {
    fs.writeFileSync(cssFilePath, cssContent, 'utf8');
    for (const label of injected) {
      console.log(pc.green(`✔ Injected ${label} CSS variables into ${path.relative(process.cwd(), cssFilePath)}`));
    }
  }
}

async function installNpmDeps(dependencies) {
  if (dependencies.length === 0) return;
  
  let pkg = {};
  if (fs.existsSync('package.json')) {
    try {
      pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    } catch (e) {}
  }
  
  const installedDeps = { ...pkg.dependencies, ...pkg.devDependencies };
  const missingDeps = dependencies.filter(dep => !installedDeps[dep]);
  
  if (missingDeps.length === 0) return;
  
  let pm = 'npm';
  let pmInstall = 'install';
  
  if (fs.existsSync('pnpm-lock.yaml')) {
    pm = 'pnpm';
    pmInstall = 'add';
  } else if (fs.existsSync('yarn.lock')) {
    pm = 'yarn';
    pmInstall = 'add';
  } else if (fs.existsSync('bun.lockb')) {
    pm = 'bun';
    pmInstall = 'add';
  }
  
  console.log(pc.cyan(`Installing missing dependencies using ${pm}: ${missingDeps.join(', ')}...`));
  const spinner = ora('Installing dependencies...').start();
  try {
    execSync(`${pm} ${pmInstall} ${missingDeps.join(' ')}`, { stdio: 'ignore' });
    spinner.succeed('Dependencies installed successfully!');
  } catch (error) {
    spinner.fail('Failed to install dependencies. Please run manually:');
    console.log(pc.yellow(`  ${pm} ${pmInstall} ${missingDeps.join(' ')}`));
  }
}

async function initCommand() {
  console.log(pc.bold(pc.cyan('\nByteUI CLI - Setup Assistant\n')));
  
  // Auto-detect style file
  const commonCssPaths = [
    'app/globals.css',
    'src/app/globals.css',
    'styles/globals.css',
    'src/index.css',
    'src/main.css',
    'index.css'
  ];
  let defaultCss = 'app/globals.css';
  for (const p of commonCssPaths) {
    if (fs.existsSync(path.resolve(p))) {
      defaultCss = p;
      break;
    }
  }

  const responses = await prompts([
    {
      type: 'text',
      name: 'css',
      message: 'Where is your global CSS file?',
      initial: defaultCss
    },
    {
      type: 'text',
      name: 'componentsAlias',
      message: 'Configure the import alias for components:',
      initial: '@/components'
    },
    {
      type: 'text',
      name: 'hooksAlias',
      message: 'Configure the import alias for hooks:',
      initial: '@/hooks'
    },
    {
      type: 'text',
      name: 'utilsAlias',
      message: 'Configure the import alias for utils:',
      initial: '@/lib/utils'
    }
  ]);

  if (!responses.css) {
    console.log(pc.red('Initialization cancelled.'));
    return;
  }

  const config = {
    $schema: "https://ui.shadcn.com/schema.json",
    style: "default",
    rsc: true,
    tsx: true,
    tailwind: {
      config: "tailwind.config.js",
      css: responses.css,
      baseColor: "neutral",
      cssVariables: true
    },
    aliases: {
      components: responses.componentsAlias,
      utils: responses.utilsAlias,
      hooks: responses.hooksAlias
    }
  };

  // Write components.json
  fs.writeFileSync(path.resolve('components.json'), JSON.stringify(config, null, 2), 'utf8');
  console.log(pc.green('✔ Created components.json'));

  // Write utils file
  const resolveAlias = getPathResolver();
  const utilsResolvedPath = resolveAlias(responses.utilsAlias) + '.ts';
  const utilsDir = path.dirname(utilsResolvedPath);
  
  if (!fs.existsSync(utilsDir)) {
    fs.mkdirSync(utilsDir, { recursive: true });
  }

  if (!fs.existsSync(utilsResolvedPath)) {
    const utilsContent = `import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
`;
    fs.writeFileSync(utilsResolvedPath, utilsContent, 'utf8');
    console.log(pc.green(`✔ Created utils file at ${path.relative(process.cwd(), utilsResolvedPath)}`));
  }

  // Install basic packages
  await installNpmDeps(['clsx', 'tailwind-merge']);

  // Inject theme CSS variables from the registry into the consumer's globals.css
  const cssSpinner = ora('Fetching registry styles...').start();
  try {
    const registry = await fetchRegistry();
    cssSpinner.stop();
    if (registry.styles) {
      const absCSS = path.resolve(responses.css);
      injectNamespaceStyles(absCSS, registry.styles);
    }
  } catch (e) {
    cssSpinner.warn(`Could not fetch registry styles: ${e.message}`);
    console.log(pc.yellow('  You can add CSS variables manually later by running: byteui init --styles-only'));
  }

  console.log(pc.bold(pc.green('\nByteUI successfully initialized!')));
  console.log('You can now add components. Example:');
  console.log(pc.cyan('  npx byteui add button\n'));
}

async function addCommand(componentsInput, options) {
  let registry;
  const spinner = ora('Fetching component registry...').start();
  try {
    registry = await fetchRegistry();
    spinner.succeed('Registry loaded.');
  } catch (e) {
    spinner.fail(`Failed to fetch registry: ${e.message}`);
    return;
  }

  if (!fs.existsSync('components.json')) {
    console.log(pc.red('components.json not found. Run "npx byteui init" to configure your project.'));
    return;
  }

  let config;
  try {
    config = JSON.parse(fs.readFileSync('components.json', 'utf8'));
  } catch (e) {
    console.log(pc.red('Failed to parse components.json.'));
    return;
  }

  const aliases = config.aliases || {};
  const componentsAlias = aliases.components || '@/components';
  const hooksAlias = aliases.hooks || '@/hooks';
  const utilsAlias = aliases.utils || '@/lib/utils';

  const resolveAlias = getPathResolver();
  let selectedKeys = [];

  // If no arguments, let user select from list of all component registry keys
  if (!componentsInput || componentsInput.length === 0) {
    const choices = Object.keys(registry.components)
      .filter(key => key !== 'utils')
      .map(key => ({ title: key, value: key }));

    if (choices.length === 0) {
      console.log(pc.yellow('No components available in registry.'));
      return;
    }

    const response = await prompts({
      type: 'multiselect',
      name: 'components',
      message: 'Select the components to add:',
      choices,
      min: 1,
      hint: '- Space to select. Enter to submit'
    });

    if (!response.components || response.components.length === 0) {
      console.log(pc.yellow('No components selected.'));
      return;
    }
    selectedKeys = response.components;
  } else {
    // Process input arguments
    for (const input of componentsInput) {
      // 1. Direct match (e.g. "ui/button")
      if (registry.components[input]) {
        selectedKeys.push(input);
        continue;
      }

      // 2. Suffix match (e.g. "button" -> "ui/button", "neo-brutalism/button")
      const matches = Object.keys(registry.components).filter(key => 
        key === input || key.endsWith('/' + input)
      );

      if (matches.length === 0) {
        console.log(pc.red(`Error: Component "${input}" not found in registry.`));
        return;
      }

      if (matches.length === 1) {
        selectedKeys.push(matches[0]);
      } else {
        // Prompt for style choice
        const response = await prompts({
          type: 'select',
          name: 'selected',
          message: `Multiple styles found for "${input}". Choose one:`,
          choices: matches.map(m => ({ title: m, value: m }))
        });

        if (!response.selected) {
          console.log(pc.yellow('Adding cancelled.'));
          return;
        }
        selectedKeys.push(response.selected);
      }
    }
  }

  // Resolve dependencies (BFS traversal)
  const queue = [...selectedKeys];
  const toInstall = new Set();
  
  while (queue.length > 0) {
    const current = queue.shift();
    if (toInstall.has(current)) continue;
    toInstall.add(current);

    const comp = registry.components[current];
    if (comp && comp.registryDependencies) {
      for (const regDep of comp.registryDependencies) {
        queue.push(regDep);
      }
    }
  }

  console.log(pc.cyan(`\nProcessing ${toInstall.size} items...`));
  const allNpmDeps = new Set();

  for (const key of toInstall) {
    const comp = registry.components[key];
    if (!comp) {
      console.log(pc.yellow(`Warning: Registry dependency "${key}" is missing. Skipping.`));
      continue;
    }

    if (comp.dependencies) {
      for (const d of comp.dependencies) {
        allNpmDeps.add(d);
      }
    }

    // Determine path
    let targetPath;
    if (comp.type === 'utils') {
      targetPath = resolveAlias(utilsAlias) + '.ts';
    } else if (comp.type === 'hooks') {
      const filename = path.basename(comp.path);
      targetPath = path.join(resolveAlias(hooksAlias), filename);
    } else {
      // type === 'components'
      targetPath = path.join(resolveAlias(componentsAlias), comp.path);
    }

    const dir = path.dirname(targetPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Rewrite import aliases inside content
    let content = comp.content;
    const cleanCompAlias = componentsAlias.endsWith('/') ? componentsAlias.slice(0, -1) : componentsAlias;
    const cleanHooksAlias = hooksAlias.endsWith('/') ? hooksAlias.slice(0, -1) : hooksAlias;

    content = content.replace(/@\/components\//g, cleanCompAlias + '/');
    content = content.replace(/@\/hooks\//g, cleanHooksAlias + '/');
    content = content.replace(/@\/lib\/utils/g, utilsAlias);

    fs.writeFileSync(targetPath, content, 'utf8');
    console.log(pc.green(`✔ Added ${key} -> ${path.relative(process.cwd(), targetPath)}`));
  }

  // Install NPM packages
  const npmDepsArray = Array.from(allNpmDeps);
  if (npmDepsArray.length > 0) {
    await installNpmDeps(npmDepsArray);
  }

  // Inject CSS variables for any new namespaces being installed
  if (registry.styles && config.tailwind && config.tailwind.css) {
    const absCSS = path.resolve(config.tailwind.css);
    // Collect the unique namespaces from installed component keys (e.g. "neo-brutalism" from "neo-brutalism/button")
    const installedNamespaces = new Set(
      Array.from(toInstall)
        .map(key => key.includes('/') ? key.split('/')[0] : null)
        .filter(Boolean)
    );
    if (installedNamespaces.size > 0) {
      injectNamespaceStyles(absCSS, registry.styles, Array.from(installedNamespaces));
    }
  }

  console.log(pc.bold(pc.green('\nInstallation completed successfully!\n')));
}

program
  .name('byteui')
  .description('CLI tool to integrate ByteUI components')
  .version(cliPkg.version);

program
  .command('init')
  .description('Configure the workspace config components.json')
  .action(initCommand);

program
  .command('add [components...]')
  .description('Add components to your project')
  .action(addCommand);

program.parse(process.argv);
