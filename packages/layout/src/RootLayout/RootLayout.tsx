import type { FC, HTMLAttributes, ReactNode } from 'react'
import { Merriweather, Poppins } from 'next/font/google'
import { cn } from '@trroev/ui/cn'

const merriweather = Merriweather({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['300', '400', '700', '900'],
})
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
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
        'relative isolate flex min-h-svh flex-col bg-background font-sans antialiased',
        merriweather.variable,
        poppins.variable,
        className,
      )}
    >
      {header}
      {children}
      {footer}
    </body>
  </html>
)

export { RootLayout }
export type { RootLayoutProps }
