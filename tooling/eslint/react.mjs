/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

// @ts-expect-error - no types
import jsxA11y from 'eslint-plugin-jsx-a11y'
import reactPlugin from 'eslint-plugin-react'
// @ts-expect-error - no types
import reactHooks from 'eslint-plugin-react-hooks'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import base from '@trroev/eslint-config'

const reactRules = {
  'jsx-a11y/label-has-associated-control': [
    'error',
    {
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
  'react/no-array-index-key': ['warn'],
  'react/prop-types': 'off',
  'react/react-in-jsx-scope': ['off'],
}

/** @typedef {import('eslint').Linter.Config} Config */

/** @type {Config[]} */
const _default = [
  ...base,
  reactPlugin.configs.flat?.recommended ?? {},
  reactPlugin.configs.flat?.['jsx-runtime'] ?? {},
  jsxA11y.flatConfigs.recommended,
  {
    name: 'React Hooks',
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
    },
  },
  {
    languageOptions: {
      ...reactPlugin.configs.flat?.recommended?.languageOptions,
    },
    name: 'React',
    rules: {
      ...reactRules,
    },
    settings: {
      react: {
        version: '19',
      },
    },
  },
]

export default _default
