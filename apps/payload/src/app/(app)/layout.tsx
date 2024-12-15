import type { Metadata } from 'next'

import '@trroev/themes/default.css'
import '@trroev/ui/styles.css'
import './globals.css'

export const metadata: Metadata = {
  description:
    'Boilerplate for creating a new Fusionary project using Next.js and TypeScript.',
  title: {
    default: '',
    template: '%s | Fusionary Template',
  },
}

export { RootLayout as default } from '@trroev/layout/RootLayout'
