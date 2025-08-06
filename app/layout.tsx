import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SnusZone - Premium Snus Online Shop',
  description: 'Exklusiver Zugang zu Premium Snus Produkten. Melde dich jetzt an und sei dabei, wenn wir live gehen!',
  keywords: 'snus, online shop, premium, exklusiv, pre-order',
  authors: [{ name: 'SnusZone' }],
  openGraph: {
    title: 'SnusZone - Premium Snus Online Shop',
    description: 'Exklusiver Zugang zu Premium Snus Produkten. Melde dich jetzt an!',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className="bg-gradient-to-br from-primary-50 to-primary-100 min-h-screen">
        {children}
      </body>
    </html>
  )
} 