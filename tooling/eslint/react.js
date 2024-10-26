/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    browser: true,
  },
  extends: ['plugin:@shopify/react', 'plugin:jsx-a11y/recommended', './base'],
  globals: {
    React: 'writable',
  },
  rules: {
    '@shopify/strict-component-boundaries': ['off'],

    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        controlComponents: ['Input', 'Select', 'Textarea', 'RadioGroupItem'],
        depth: 3,
        labelAttributes: ['children'],
        labelComponents: ['FormLabel'],
      },
    ],

    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': ['off'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
