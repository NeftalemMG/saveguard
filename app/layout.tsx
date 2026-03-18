import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sf-pro',
})

export const metadata: Metadata = {
  title: 'SaveGuard - AI-Powered Subscription Management',
  description: 'Automatically detect, negotiate, and cancel wasteful subscriptions. Built for Canadians.',
  keywords: 'subscription management, save money, AI agent, Canadian fintech',
  icons: {
    icon: '/favicon.svg',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 0.9,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  )
}