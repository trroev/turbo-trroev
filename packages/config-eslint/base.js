/** @type {import("eslint").Linter.Config} */
const config = {
  extends: [
    'turbo',
    'eslint:recommended',
    'plugin:storybook/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:@shopify/esnext',
    'plugin:@shopify/typescript',
    'plugin:@shopify/typescript-type-checking',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:@shopify/prettier',
  ],
  env: {
    es2022: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: { project: true },
  plugins: ['@typescript-eslint', 'import', 'unused-imports', 'prettier'],
  rules: {
    'import/first': ['error'],
    'import/no-extraneous-dependencies': ['off'],
    'import/newline-after-import': ['error'],
    'import/no-duplicates': ['error'],
    'import/prefer-default-export': ['off'],
    'import/order': ['off'],
    'import/consistent-type-specifier-style': ['error', 'prefer-inline'],

    'no-console': ['warn'],

    'tailwindcss/no-custom-classname': ['off'],
    'tailwindcss/classnames-order': ['off'],

    'unused-imports/no-unused-imports-ts': ['error'],

    '@typescript-eslint/consistent-type-definitions': ['warn'],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
    ],
    '@typescript-eslint/no-empty-function': ['warn'],
    '@typescript-eslint/no-explicit-any': ['error'],
    '@typescript-eslint/no-misused-promises': [
      2,
      { checksVoidReturn: { attributes: false } },
    ],
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: false },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
      },
    ],
  },
  ignorePatterns: [
    '**/*.config.js',
    '**/*.config.cjs',
    '**/.eslintrc.cjs',
    '.next',
    'dist',
    'pnpm-lock.yaml',
  ],
  reportUnusedDisableDirectives: true,
}

module.exports = config
