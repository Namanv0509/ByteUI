const fs = require('fs');
const path = require('path');

const COMPONENTS_DIR = path.resolve(__dirname, '../components');
const HOOKS_DIR = path.resolve(__dirname, '../hooks');
const OUTPUT_DIR = path.resolve(__dirname, '../public');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'registry.json');

const EXCLUDED_DIRS = ['gallery', 'component-previews'];

const registry = {
  styles: {},
  components: {}
};

// CSS variable blocks to embed per namespace.
// Each key matches a component namespace directory name.
// The value is the raw CSS to inject into the consumer's globals.css.
const NAMESPACE_STYLES = {
  'neo-brutalism': {
    label: 'Neo-Brutalism',
    marker: '[data-theme="neo"]',  // Used to detect if already injected
    css: `
/* ============================================
   ByteUI - Neo-Brutalism Theme Variables
   Add data-theme="neo" to any wrapper element
   ============================================ */

[data-theme="neo"] {
  --color-accent-1: #f76a9b;
  --shadow-lg-1: 10px 10px 0 #1e1e1e;
  --shadow-md-1: 6px 6px 0 #1e1e1e;

  --color-accent-2: #A8DADC;
  --shadow-lg-2: 10px 10px 0 #0c2d32;
  --shadow-md-2: 6px 6px 0 #0c2d32;

  --color-accent-3: #a0a0a0;
  --shadow-lg-3: 10px 10px 0 #1a1a1a;
  --shadow-md-3: 6px 6px 0 #1a1a1a;

  --color-accent-4: #F9C74F;
  --shadow-lg-4: 10px 10px 0 #222222;
  --shadow-md-4: 6px 6px 0 #222222;

  --color-accent-5: #5294ff;
  --shadow-lg-5: 10px 10px 0 #0a192f;
  --shadow-md-5: 6px 6px 0 #0a192f;

  --font-lexend: 'Lexend', sans-serif;
  --font-sans: 'Public Sans', sans-serif;
  --border-width: 3px;
  --border-width-thick: 4px;
  --border-radius: 15px;

  --warning: #F9C74F;
  --error: #E63946;
  --success: #2A9D8F;
  --default: #A8DADC;

  --color-bg: #F4F4F4;
  --color-surface: #FFFFFF;
  --color-text: #1c1c1e;
  --color-text-white: #ffffff;
  --color-text-black: #1c1c1e;
  --color-text-muted: #585757;
  --border-color: #000000;
}

/* Dark Mode overrides for Neo-Brutalism */
.dark [data-theme="neo"],
[data-theme="neo"].dark {
  --color-accent-1: #f76a9b;
  --shadow-lg-1: 10px 10px 0 #1e1e1e;
  --shadow-md-1: 6px 6px 0 #1e1e1e;

  --color-accent-2: #A8DADC;
  --shadow-lg-2: 10px 10px 0 #0c2d32;
  --shadow-md-2: 6px 6px 0 #0c2d32;

  --color-accent-3: #444444;
  --shadow-lg-3: 10px 10px 0 #1a1a1a;
  --shadow-md-3: 6px 6px 0 #1a1a1a;

  --color-accent-4: #F9C74F;
  --shadow-lg-4: 10px 10px 0 #222222;
  --shadow-md-4: 6px 6px 0 #222222;

  --color-accent-5: #5294ff;
  --shadow-lg-5: 10px 10px 0 #0a192f;
  --shadow-md-5: 6px 6px 0 #0a192f;

  --color-bg: #000000;
  --color-surface: #1a1a1a;
  --color-text: #ffffff;
  --color-text-white: #ffffff;
  --color-text-black: #000000;
  --color-text-muted: #A0A0A0;
  --border-color: #000000;
  --success: #2A9D8F;
  --warning: #F9C74F;
  --error: #E63946;
  --default: #b9f9f7;
}
`
  }
  // Future namespaces like 'new-component' can be added here:
  // 'new-component': { label: 'New Component', marker: '[data-theme="new"]', css: `...` }
};

// Helper to check if file should be processed
function shouldProcessFile(file, filePath) {
  const ext = path.extname(file);
  if (ext !== '.tsx' && ext !== '.ts') return false;
  if (file.endsWith('.stories.tsx') || file.endsWith('.stories.ts')) return false;
  if (file.endsWith('.test.tsx') || file.endsWith('.test.ts')) return false;
  if (file.startsWith('.')) return false;
  return true;
}

// Extract dependencies and registryDependencies from file content
function parseFileImports(filePath, fileContent) {
  const dependencies = new Set();
  const registryDependencies = new Set();
  
  // Match: import ... from 'package' or import 'package'
  const importRegex = /import\s+?(?:type\s+?)?(?:(?:[a-zA-Z0-9_*$}{\s,]+)\s+from\s+)?['"]([^'"]+)['"]/g;
  let match;
  
  while ((match = importRegex.exec(fileContent)) !== null) {
    const importTarget = match[1];
    
    // 1. Check for absolute alias imports
    if (importTarget.startsWith('@/components/')) {
      const depName = importTarget.replace('@/components/', '');
      registryDependencies.add(depName);
    } else if (importTarget.startsWith('@/hooks/')) {
      const depName = importTarget.replace('@/hooks/', 'hooks/');
      registryDependencies.add(depName);
    } else if (importTarget === '@/lib/utils') {
      registryDependencies.add('utils');
    }
    // 2. Check for relative imports
    else if (importTarget.startsWith('.')) {
      const absoluteTarget = path.resolve(path.dirname(filePath), importTarget);
      
      // Determine what it maps to
      if (absoluteTarget.startsWith(COMPONENTS_DIR)) {
        let relativeToComponents = path.relative(COMPONENTS_DIR, absoluteTarget);
        // Normalize slashes for windows
        relativeToComponents = relativeToComponents.replace(/\\/g, '/');
        // Strip extension if any (.ts or .tsx)
        const depKey = relativeToComponents.replace(/\.tsx?$/, '');
        registryDependencies.add(depKey);
      } else if (absoluteTarget.startsWith(HOOKS_DIR)) {
        let relativeToHooks = path.relative(HOOKS_DIR, absoluteTarget);
        relativeToHooks = relativeToHooks.replace(/\\/g, '/');
        const depKey = 'hooks/' + relativeToHooks.replace(/\.tsx?$/, '');
        registryDependencies.add(depKey);
      }
    }
    // 3. NPM dependencies
    else {
      // Exclude peer dependencies or builtins
      if (importTarget !== 'react' && importTarget !== 'react-dom' && !importTarget.startsWith('node:')) {
        // Handle scoped packages e.g. @radix-ui/react-slot vs plain packages
        const parts = importTarget.split('/');
        const pkgName = importTarget.startsWith('@') ? `${parts[0]}/${parts[1]}` : parts[0];
        dependencies.add(pkgName);
      }
    }
  }
  
  return {
    dependencies: Array.from(dependencies),
    registryDependencies: Array.from(registryDependencies)
  };
}

// Recursively scan a directory
function scanDirectory(dirPath, rootType) {
  if (!fs.existsSync(dirPath)) return;
  
  const files = fs.readdirSync(dirPath);
  
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip excluded directories in components
      if (rootType === 'components' && EXCLUDED_DIRS.includes(file)) {
        continue;
      }
      scanDirectory(fullPath, rootType);
    } else if (stat.isFile() && shouldProcessFile(file, fullPath)) {
      const fileContent = fs.readFileSync(fullPath, 'utf8');
      
      // Determine key for registry
      let registryKey = '';
      let relativePath = '';
      
      if (rootType === 'components') {
        relativePath = path.relative(COMPONENTS_DIR, fullPath).replace(/\\/g, '/');
        registryKey = relativePath.replace(/\.tsx?$/, '');
      } else if (rootType === 'hooks') {
        relativePath = path.relative(HOOKS_DIR, fullPath).replace(/\\/g, '/');
        registryKey = 'hooks/' + relativePath.replace(/\.tsx?$/, '');
      }
      
      const { dependencies, registryDependencies } = parseFileImports(fullPath, fileContent);
      
      registry.components[registryKey] = {
        name: registryKey,
        type: rootType,
        path: relativePath,
        dependencies,
        registryDependencies,
        content: fileContent
      };
    }
  }
}

// Main execution
console.log('Building component registry...');
scanDirectory(COMPONENTS_DIR, 'components');
scanDirectory(HOOKS_DIR, 'hooks');

// Embed namespace theme styles into the registry
for (const [namespace, styleData] of Object.entries(NAMESPACE_STYLES)) {
  registry.styles[namespace] = {
    label: styleData.label,
    marker: styleData.marker,
    css: styleData.css
  };
}
console.log(`Namespace styles embedded: ${Object.keys(registry.styles).join(', ')}`);

// Also inject the lib/utils.ts as a special "utils" dependency
const utilsPath = path.resolve(__dirname, '../lib/utils.ts');
if (fs.existsSync(utilsPath)) {
  const utilsContent = fs.readFileSync(utilsPath, 'utf8');
  registry.components['utils'] = {
    name: 'utils',
    type: 'utils',
    path: 'lib/utils.ts',
    dependencies: ['clsx', 'tailwind-merge'],
    registryDependencies: [],
    content: utilsContent
  };
}

// Make sure output dir exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(registry, null, 2), 'utf8');
console.log(`Registry built successfully! Output: ${OUTPUT_FILE}`);
console.log(`Total components indexed: ${Object.keys(registry.components).length}`);
