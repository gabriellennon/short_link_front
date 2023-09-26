import { i18n } from '@/config/i18n.config'
import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  weight: ['400', '500', '600' ,'700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export async function generateStaticParams() {
  const languages = i18n.locales.map((lang) => ({ lang }));
  return languages
}

export const metadata: Metadata = {
  title: 'Icut.li',
  description: 'Encurtador de links fácil, rápido e GRATUITO!',
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: { lang: string }
}) {
  return (
    <html lang={params.lang}>
      <head>
        {process.env.NODE_ENV === "production" && (
          <script 
            async 
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5605608693723393" 
            crossOrigin="anonymous"
          ></script>
        )}
      </head>
      <body className={montserrat.className} suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
