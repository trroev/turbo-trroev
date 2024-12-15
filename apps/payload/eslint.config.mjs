import { default as base } from '@trroev/eslint-config/react'

const config = [
  {
    ignores: ['src/app/(payload)/*', 'src/payload.types.ts', 'next-env.d.ts'],
    name: 'Ignore Payload files',
  },
  ...base,
]

export default config
