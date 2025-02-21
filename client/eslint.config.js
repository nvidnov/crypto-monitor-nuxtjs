import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import eslintPluginVue from 'eslint-plugin-vue';
import eslintPluginNuxt from 'eslint-plugin-nuxt';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginPromise from 'eslint-plugin-promise';
/** @type {import('eslint').Linter.Config[]} */
export default tseslint.config(
  {
    plugins: {
      vue: eslintPluginVue.rules,
      nuxt: eslintPluginNuxt.rules,
      unicorn: eslintPluginUnicorn,
      prettier: eslintPluginPrettier,
      'prettier-config': eslintConfigPrettier,
      import: eslintPluginImport,
      promise: eslintPluginPromise,
    },
    ignores: ['node_modules', '.nuxt', '.output'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2025,
        ...globals.node,
      },
      parserOptions: eslintPluginVue.configs.recommended.parserOptions,
    },
  },
  {
    files: ['**/*.{js,ts,vue}'],
    rules: {
      ...eslintConfigPrettier.rules,
      'prefer-const': 'error',
    },
  }
);
