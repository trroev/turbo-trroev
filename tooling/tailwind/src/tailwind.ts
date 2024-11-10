import ContainerQueries from '@tailwindcss/container-queries'
import type {Config} from 'tailwindcss';
import TailwindCSSAnimate from 'tailwindcss-animate'

import { colors } from './colors'
import { fontFamily } from './typography'

export const ExtendedConfig = {
  colors,
  fontFamily,
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
