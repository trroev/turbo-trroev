import type { Config } from 'tailwindcss'

import baseConfig from '@trroev/tailwind-config'

export default {
  // We need to append the path to the UI package to the content array so that
  // those classes are included correctly.
  content: [
    ...baseConfig.content,
    '../../packages/icon/**/*.{ts,tsx}',
    '../../packages/layout/**/*.{ts,tsx}',
    '../../packages/page/**/*.{ts,tsx}',
    '../../packages/svg/**/*.{ts,tsx}',
    '../../packages/ui/**/*.{ts,tsx}',
  ],
  presets: [baseConfig],
} satisfies Config
