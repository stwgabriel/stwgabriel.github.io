import { Analytics } from '@vercel/analytics/react'
import { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
//
import RootProvider from 'src/providers'
import AppStyles from 'src/styles/App'
import GlobalStyles from 'src/styles/global'

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['500', '700', '800'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <style jsx global>
        {`
          * {
            font-family: ${inter.style.fontFamily};
          }
        `}
      </style>
      <RootProvider>
        <GlobalStyles />
        <Component {...pageProps} />
        <div id="outer-view" />
        <Analytics />
      </RootProvider>
    </>
  )
}
