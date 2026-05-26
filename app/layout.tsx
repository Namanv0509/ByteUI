import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from './providers'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'ByteUI - Premium UI Components Library',
  description: 'A curated library of unique and animated UI components with cool animations, morphing shapes, and gradient effects',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>

          {children}
          <Toaster />

        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
