import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Connecteire - Voice-First Website Updates for Irish Businesses',
  description: 'Update your website with a simple phone call. Perfect for Irish pubs, cafes, B&Bs, and GAA clubs. No tech skills needed - just describe what you want changed.',
  keywords: 'Irish website, voice updates, website management, rural Ireland, pub website, cafe website, B&B website, GAA website',
  authors: [{ name: 'Connecteire' }],
  openGraph: {
    title: 'Connecteire - Voice-First Website Updates for Irish Businesses',
    description: 'Update your website with a simple phone call. No tech skills needed.',
    type: 'website',
    locale: 'en_IE',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
