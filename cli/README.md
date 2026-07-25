# @explorers_111/byteui

CLI tool for adding ByteUI components directly to your React / Next.js project.

**Package:** [https://www.npmjs.com/package/@explorers_111/byteui](https://www.npmjs.com/package/@explorers_111/byteui)

## Installation & Usage

You can execute the CLI directly using `npx`:

```bash
# Initialize ByteUI configuration in your project
npx @explorers_111/byteui init

# List all available components
npx @explorers_111/byteui list

# Add a specific component (e.g. button or neo-brutalism/button)
npx @explorers_111/byteui add button

# Add multiple components at once
npx @explorers_111/byteui add button alert-dialog combobox
```

## Commands

- `init`: Setup `components.json` and utility functions in your project.
- `add [components...]`: Install one or more components into your project directory.
- `list` (or `ls` / `--list`): View all components grouped by style or category.
- `--help`: Show CLI help and options.
