import defaultTheme from 'tailwindcss/defaultTheme'

import type {ThemeConfig} from './types';

export const fontFamily: ThemeConfig['fontFamily'] = {
  sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
  serif: ['var(--font-serif)', ...defaultTheme.fontFamily.serif],
}
