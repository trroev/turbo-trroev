import { type Config } from 'tailwindcss'

import baseConfig from '@trroev/tailwind-config'

export default {
  content: [
    ...baseConfig.content,
    '../../packages/ui/src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './stories/**/*.{js,ts,tsx,jsx}',
  ],
  darkMode: ['selector', '[data-mode="dark"]'],
  presets: [baseConfig],
} satisfies Config
