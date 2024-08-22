/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['plugin:@shopify/react', 'plugin:jsx-a11y/recommended', './base'],
  rules: {
    '@shopify/strict-component-boundaries': ['off'],

    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        labelComponents: ['FormLabel'],
        controlComponents: ['Input', 'Select', 'Textarea', 'RadioGroupItem'],
        labelAttributes: ['children'],
        depth: 3,
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
  globals: {
    React: 'writable',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
  },
}
