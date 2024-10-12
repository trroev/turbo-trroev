import { type Metadata } from 'next'

import '@trroev/themes/default.css'
import '@trroev/ui/styles.css'
import './globals.css'

import { RootLayout } from '@trroev/layout/RootLayout'

export const metadata: Metadata = {
  description:
    'Boilerplate for creating a new Fusionary project using Next.js and TypeScript.',
  title: {
    default: '',
    template: '%s | Fusionary Template',
  },
}

export default RootLayout
