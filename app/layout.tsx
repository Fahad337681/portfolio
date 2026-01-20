import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'Portfolio - Modern Developer Portfolio',
  description: 'A modern portfolio website showcasing projects and skills',
  keywords: ['portfolio', 'web developer', 'projects', 'skills'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
