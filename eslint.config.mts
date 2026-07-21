import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([

  globalIgnores([
    "node_modules/**",
    "dist/**",
    "build/**",
    ".next/**",
    "out/**",
    "vite.config.ts"
  ]),

  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,

  {
    rules: {
      "react/react-in-jsx-scope": "off", // 👈 Turns off the 'React must be in scope' error
    }
  }
]);
