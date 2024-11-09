import type { Metadata } from 'next'

import '@trroev/themes/default.css'
import '@trroev/ui/styles.css'
import '../globals.css'

export const metadata: Metadata = {
  description: 'Generated by create next app',
  title: 'Create Next App',
}

export { RootLayout as default } from '@trroev/layout/RootLayout'
