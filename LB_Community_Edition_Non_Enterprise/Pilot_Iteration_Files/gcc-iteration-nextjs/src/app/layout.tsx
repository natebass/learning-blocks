import { siteConfig } from '@/utility/constants'
import { fontMono, fontSans } from '@/utility/fonts'
import type { Metadata, Viewport } from 'next'
import "./globals.css";
import "../../styles/main.scss"
import clsx from 'clsx'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
}

export const viewport: Viewport = {
  themeColor: [
    {media: '(prefers-color-scheme: light)', color: 'white'},
    {media: '(prefers-color-scheme: dark)', color: 'black'},
  ],
}

/**
 * Root layout and application context providers.
 * * Styles are meant to override and provide a base layer. More styles will be applied in the application container.
 * Global styles apply Tailwind CSS
 * main.scss applies SASS styles
 * @see [Application context provider documentation](/docs/contexts.md)
 * @param children Application container.
 */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const bodyStyle = 'min-h-screen text-foreground bg-background font-sans antialiased'
  const bodyClassName = `${bodyStyle} ${fontSans.variable} ${fontMono.variable} antialiased`

  return (
    <html lang="en">
    <body className={clsx(bodyClassName, fontSans.variable)}>
    {children}
    </body>
    </html>
  )
}
