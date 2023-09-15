import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blockprint',
  description:
    'Blockprint is a tool for determining which consensus clients produced which blocks on the Ethereum mainnet.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-dark`}>{children}</body>
    </html>
  )
}
