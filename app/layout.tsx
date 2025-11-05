import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MESH - פלטפורמת גילוי אופנה מבוססת AI',
  description: 'פלטפורמת גילוי אופנה מבוססת AI שמחברת בין השראת סטייל לקנייה חכמה',
  keywords: 'אופנה, AI, חיפוש חזותי, סטייל, קנייה',
  authors: [{ name: 'MESH' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
