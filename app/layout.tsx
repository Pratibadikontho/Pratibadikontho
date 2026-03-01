import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import PageTransition from '@/components/page-transition'
import './globals.css'

/* Fonts — Inter for body, Playfair Display for headings */
const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const _playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: 'প্রতিবাদী কন্ঠ',
  description: 'প্রতিবাদী কন্ঠ গুলো বাঁধবে জোট, অন্যায় হবে প্রতিরোধ',
  generator: 'v0.app',
  icons: {
    icon: '/images/logo.jpg',
    apple: '/images/logo.jpg',
  },
}

export const viewport: Viewport = {
  themeColor: '#1b3a6b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${_inter.variable} ${_playfair.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
