import type { FC, HTMLAttributes, ReactNode } from 'react'

import { cn } from '@trroev/ui/cn'

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
