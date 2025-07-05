import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppChat from '../components/WhatsAppChat'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zayka - Digital Menu Solutions',
  description: 'Transform your restaurant menu into a digital experience with QR codes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body className={`${inter.className} min-h-screen bg-white text-gray-900 antialiased overflow-x-hidden`}>
        <Header />
        <main className="flex-1 w-full">
          {children}
        </main>
        <Footer />
        <WhatsAppChat />
      </body>
    </html>
  )
}
