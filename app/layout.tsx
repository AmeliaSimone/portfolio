import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import '../styles/globals.scss'
import { LanguageProvider } from '../context/language-context'
import { Header } from '../components/header/header'

const montse = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio Amelia Feliu',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={montse.className}>
        <LanguageProvider>
          <main className="main-content">
            <Header />
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  )
}

