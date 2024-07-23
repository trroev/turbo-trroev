import { type Config } from 'tailwindcss/types/config'

export const ExtendedConfig = {}

export default {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      ...ExtendedConfig,
    },
  },
} as const satisfies Config
