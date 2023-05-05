import 'src/styles/index.css'

import { Analytics } from '@vercel/analytics/react'
import { AppProps } from 'next/app'
import { IBM_Plex_Mono, Inter, PT_Serif } from 'next/font/google'
//
import RootProvider from 'src/providers'
import AppStyles from 'src/styles/App'
import GlobalStyles from 'src/styles/global'

const mono = IBM_Plex_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['500', '700'],
})

const sans = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['500', '700', '800'],
})

const serif = PT_Serif({
  variable: '--font-serif',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <style jsx global>
        {`
          :root {
            --font-mono: ${mono.style.fontFamily};
            --font-sans: ${sans.style.fontFamily};
            --font-serif: ${serif.style.fontFamily};
          }
        `}
      </style>
      <RootProvider>
        <GlobalStyles />
        <AppStyles>
          <Component {...pageProps} />
        </AppStyles>
        <div id="outer-view" />
        <Analytics />
      </RootProvider>
    </>
  )
}
