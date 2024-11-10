import type {FC, HTMLAttributes, ReactNode} from 'react';
import { Merriweather, Poppins } from 'next/font/google'

import { cn } from '@trroev/ui/cn'

const merriweather = Merriweather({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: '400',
})
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: '400',
})

type RootLayoutProps = {
  footer?: ReactNode
  head?: ReactNode
  header?: ReactNode
} & HTMLAttributes<HTMLDivElement>

const RootLayout: FC<RootLayoutProps> = ({
  children,
  className,
  footer,
  head,
  header,
}) => (
  <html lang="en" suppressHydrationWarning>
    <head>{head}</head>
    <body
      className={cn(
        'min-h-screen bg-background antialiased',
        merriweather.variable,
        poppins.variable,
        className,
      )}
    >
      {header}
      <div className="relative flex min-h-screen flex-col bg-background">
        {children}
      </div>
      {footer}
    </body>
  </html>
)

export { RootLayout }
export type { RootLayoutProps }
