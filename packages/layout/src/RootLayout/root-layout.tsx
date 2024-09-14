import { type FC, type HTMLAttributes, type ReactNode } from 'react'

type RootLayoutProps = {
  footer?: ReactNode
  head?: ReactNode
  header?: ReactNode
} & HTMLAttributes<HTMLDivElement>

const RootLayout: FC<RootLayoutProps> = ({
  children,
  footer,
  head,
  header,
}) => (
  <html lang="en" suppressHydrationWarning>
    <head>{head}</head>
    <body className="min-h-screen bg-background antialiased">
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
