/** @type {import('eslint').Linter.Config} */
const config = {
  extends: ['plugin:@next/next/core-web-vitals', './react'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    '@typescript-eslint/require-await': 'off',
  },
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
module.exports = config
