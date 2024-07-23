import { type Config } from 'tailwindcss'

import baseConfig from '@shared/tailwind-config'

export default {
  content: baseConfig.content,
  presets: [baseConfig],
} satisfies Config
