import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Brennan's Seaside B&B - Doolin, Co. Clare | Wild Atlantic Way",
  description: "Family-run B&B with stunning ocean views in Doolin, Co. Clare. Minutes from the Cliffs of Moher. Award-winning Irish breakfast, comfortable rooms, genuine hospitality.",
  keywords: 'Doolin B&B, Clare accommodation, Cliffs of Moher B&B, Wild Atlantic Way, Irish B&B, Doolin accommodation, bed and breakfast Ireland',
  authors: [{ name: "Brennan's Seaside B&B" }],
  openGraph: {
    title: "Brennan's Seaside B&B - Your Home Away From Home",
    description: 'Family-run B&B in Doolin with ocean views and award-winning breakfast.',
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
      <body>{children}</body>
    </html>
  )
}
