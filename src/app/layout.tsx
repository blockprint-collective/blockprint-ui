import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

const openSuace = localFont({
  src: [
    {
      path: '../../public/fonts/OpenSauce/OpenSauceOne-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/OpenSauce/OpenSauceOne-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../public/fonts/OpenSauce/OpenSauceOne-Light.ttf',
      weight: '300',
      style: 'normal'
    }
  ],
  variable: '--open-sauce'
})

const archivo = localFont({
  src: [
    {
      path: '../../public/fonts/Archivo/Archivo-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Archivo/Archivo-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
  ],
  variable: '--archivo'
})

export const metadata: Metadata = {
  title: 'Blockprint',
  description:
    'Blockprint is a tool for determining which consensus clients produced which blocks on the Ethereum mainnet.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${openSuace.variable} ${archivo.variable} bg-dark`}>{children}</body>
    </html>
  )
}
