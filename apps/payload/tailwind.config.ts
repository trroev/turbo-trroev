/*
 * This file is not used for any compilation purpose, it is only used
 * for Tailwind Intellisense & Autocompletion in the source files
 */
import type {Config} from 'tailwindcss';

import baseConfig from '@trroev/tailwind-config'

export default {
  content: [...baseConfig.content, '../../packages/*/src/**/*.{ts,tsx}'],
  presets: [baseConfig],
} satisfies Config
