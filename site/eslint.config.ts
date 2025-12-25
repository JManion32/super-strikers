import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  globalIgnores([
    // dependencies
    "**/node_modules/**",

    // build output (future-proof)
    "**/dist/**",
    "**/build/**",

    // config & tooling files
    ".config/**",
    "*.config.js",
    "*.config.ts",
    "*.config.mjs",
    ".prettierrc*",
    ".stylelint*",

    // TypeScript configs
    "tsconfig*.json",

    // misc
    "package-lock.json",
    "README.md",
    "index.html"
  ]),
]);
