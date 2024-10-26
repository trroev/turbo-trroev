import ContainerQueries from '@tailwindcss/container-queries'
import TailwindCSSAnimate from 'tailwindcss-animate'
import { type Config } from 'tailwindcss/types/config'

import { colors } from './colors'

export const ExtendedConfig = {
  colors,
}

export default {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: ['class', '[data-mode="dark"]'],
  plugins: [ContainerQueries, TailwindCSSAnimate],
  theme: {
    extend: {
      ...ExtendedConfig,
    },
  },
} as const satisfies Config
