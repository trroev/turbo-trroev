/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    './base',
    // 'next',
    'plugin:@next/next/core-web-vitals',
    // './react',
  ],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    '@typescript-eslint/require-await': 'off',
  },
}
