import { Metadata } from 'next'

import { Toaster } from 'react-hot-toast'

import '@/app/globals.css'
import { fontMono, fontSans, fontTitle, fontBody } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { Providers } from '@/components/providers'
import ThreePanelContainer from '@/components/layouts/ThreePanel'
import NavBar from '@/components/NavBar'

export const metadata: Metadata = {
  title: {
    default: 'Buffalo – Turn Conversations Into Content',
    template: `%s - Buffalo`
  },
  description:
    'Publish your unique insights, opinions, and experiences in just 10 minutes a week. Professional blog articles and social posts, written by AI in your own words.',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  }
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'font-sans antialiased',
          'overflow-x-hidden',
          'h-screen',
          fontSans.variable,
          fontMono.variable,
          fontTitle.variable,
          fontBody.variable
        )}
      >
        <Toaster />
        <Providers attribute="class" defaultTheme="system" enableSystem>
          <ThreePanelContainer>{children}</ThreePanelContainer>
        </Providers>
      </body>
    </html>
  )
}
