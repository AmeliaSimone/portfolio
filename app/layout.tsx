import type { Metadata } from 'next'
import '../styles/globals.scss'
import { Montserrat, Indie_Flower } from 'next/font/google'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

const indieFlower = Indie_Flower({ 
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-indie-flower',
})

export const metadata: Metadata = {
  title: 'Portfolio Amelia Feliu',
  description: 'My professional portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${montserrat.variable} ${indieFlower.variable}`}>
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}

