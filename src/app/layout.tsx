import { defaultUiEndpoint } from '../../config'
import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

const openSuace = localFont({
  src: [
    {
      path: '../../public/fonts/OpenSauce/OpenSauceOne-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/OpenSauce/OpenSauceOne-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/OpenSauce/OpenSauceOne-Light.ttf',
      weight: '300',
      style: 'normal',
    },
  ],
  variable: '--open-sauce',
})

const archivo = localFont({
  src: [
    {
      path: '../../public/fonts/Archivo/Archivo-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Archivo/Archivo-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--archivo',
})

const metas = {
  metadataBase: new URL(`${defaultUiEndpoint}`),
  title: 'Blockprint',
  description:
    'Blockprint employs a machine learning model to categorize blocks, conducting its analysis based on a cluster of consensus clients that produce blocks in every slot.',
  image: '/blockprint.png',
}

export const metadata: Metadata = {
  ...metas,
  twitter: {
    title: metas.title,
    description: metas.description,
    creator: 'sigmaPrime',
    images: [metas.image],
  },
  openGraph: {
    title: metas.title,
    description: metas.description,
    siteName: metas.title,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: metas.image,
        width: 800,
        height: 600,
      },
      {
        url: metas.image,
        width: 1800,
        height: 1600,
        alt: metas.title,
      },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${openSuace.variable} ${archivo.variable} bg-dark`}>{children}</body>
    </html>
  )
}
