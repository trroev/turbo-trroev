import { type Config } from 'tailwindcss'

import baseConfig from '@trroev/tailwind-config'

export default {
  content: baseConfig.content,
  presets: [baseConfig],
} satisfies Config
