/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable import/no-named-as-default-member */
import path from 'node:path'
import { fileURLToPath } from 'node:url'
// @ts-expect-error - no types
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import typescriptParser from '@typescript-eslint/parser'
// @ts-expect-error - no types
import eslintConfigPrettier from 'eslint-config-prettier'
// @ts-expect-error - no types
import importPlugin from 'eslint-plugin-import'
import perfectionist from 'eslint-plugin-perfectionist'
import { configs as regexpPluginConfigs } from 'eslint-plugin-regexp'
// @ts-expect-error - no types
import storybook from 'eslint-plugin-storybook'
// @ts-expect-error - no types
import tailwindcss from 'eslint-plugin-tailwindcss'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import unusedImports from 'eslint-plugin-unused-imports'
import globals from 'globals'
import tseslint from 'typescript-eslint'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  allConfig: js.configs.all,
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
})

const baseRules = {
  'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
  'import/first': ['error'],
  'import/newline-after-import': ['error'],
  'import/no-duplicates': ['error'],
  'import/no-extraneous-dependencies': ['off'],
  'import/order': ['off'],
  'import/prefer-default-export': ['off'],

  'no-console': ['warn'],

  'perfectionist/sort-enums': ['off'],
  'perfectionist/sort-imports': ['off'],

  'unicorn/better-regex': ['warn'],
  'unicorn/consistent-function-scoping': ['off'],
  'unicorn/filename-case': ['off'],
  'unicorn/no-array-reduce': ['off'],
  'unicorn/no-null': ['off'],
  'unicorn/prevent-abbreviations': ['off'],

  'unused-imports/no-unused-imports': ['error'],
}

const tailwindRules = {
  'tailwindcss/classnames-order': ['off'],
  'tailwindcss/no-custom-classname': ['off'],
}

const typescriptRules = {
  '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
  '@typescript-eslint/consistent-type-imports': [
    'error',
    { fixStyle: 'inline-type-imports', prefer: 'type-imports' },
  ],
  '@typescript-eslint/no-empty-function': ['warn'],
  '@typescript-eslint/no-explicit-any': ['error'],
  '@typescript-eslint/no-misused-promises': [
    2,
    { checksVoidReturn: { attributes: false } },
  ],
  '@typescript-eslint/no-unused-vars': [
    'error',
    {
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
    },
  ],
  '@typescript-eslint/no-use-before-define': [
    'error',
    { classes: false, functions: false },
  ],
}

/** @typedef {import('eslint').Linter.Config} Config */

/** @type {Config[]} */
export const rootEslintConfig = [
  {
    ignores: ['**/.next', '**/dist', '**/pnpm-lock.yaml', '**/next-env.d.ts'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  perfectionist.configs['recommended-natural'],
  regexpPluginConfigs['flat/recommended'],
  eslintPluginUnicorn.configs['flat/recommended'],
  importPlugin.flatConfigs.recommended,
  ...storybook.configs['flat/recommended'],
  ...tailwindcss.configs['flat/recommended'],
  ...compat.extends('turbo'),
  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.node,
      },
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      sourceType: 'module',
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    name: 'Settings',
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      ...baseRules,
      ...tailwindRules,
    },
    settings: {
      'import/extensions': [
        '.ts',
        '.cts',
        '.mts',
        '.tsx',
        '.js',
        '.jsx',
        '.mjs',
        '.cjs',
      ],
      'import/resolver': {
        node: {
          extensions: [
            '.ts',
            '.cts',
            '.mts',
            '.tsx',
            '.js',
            '.jsx',
            '.mjs',
            '.cjs',
          ],
        },
        typescript: true,
      },
      react: {
        defaultVersion: '18',
      },
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        project: 'tsconfig.json',
      },
    },
    name: 'TypeScript Settings',
    rules: {
      ...typescriptRules,
    },
  },
  eslintConfigPrettier,
]

export default rootEslintConfig
