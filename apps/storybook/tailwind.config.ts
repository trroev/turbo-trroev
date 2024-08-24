import { type Config } from 'tailwindcss'

import baseConfig from '@shared/tailwind-config'

export default {
  content: [
    ...baseConfig.content,
    '../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}',
    './stories/**/*.{js,ts,tsx,jsx}',
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  presets: [baseConfig],
} satisfies Config
