import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'

import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
  static async getInitialProps(
    context: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = context.renderPage

    try {
      context.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(context)

      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>,
        ],
      }
    } finally {
      sheet.seal()
    }
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />

          {/*  */}
          <meta
            name="description"
            content={`Gabriel's personal website -
             Gabriel is a front-end developer and a UX Designer.`}
          />
          <meta name="robots" content="index" />
          <meta name="Googlebot" content="index" />
          <meta name="AdsBot-Google" content="index" />
          <meta name="author" content="stwGabriel - https://stwgabriel.space" />
          <meta
            name="copyright"
            content="stwGabriel - https://stwgabriel.space"
          />

          {/* WEB APP */}
          <meta name="theme-color" content="#22212C" />
          <meta name="msapplication-navbutton-color" content="#22212C" />

          <link rel="manifest" href="/manifest.json" />

          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="Gabriel's personal website" />
          <meta
            name="apple-mobile-web-app-title"
            content="Gabriel's personal website"
          />

          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <meta name="msapplication-starturl" content="/" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />

          <link
            rel="icon"
            type="image/webp"
            sizes="210x210"
            href="favicon.webp"
          />
          <link
            rel="apple-touch-icon"
            type="image/webp"
            sizes="210x210"
            href="favicon.webp"
          />
          <link rel="icon" sizes="32x32" href="favicon.ico" />
          <link rel="apple-touch-icon" sizes="32x32" href="favicon.ico" />
          <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
          <link rel="apple-touch-icon" href="favicon.webp" />

          {/* Icons */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />

          {/* SEO */}
          <meta name="author" content="Gabriel Silva - stwabriel" />
          <meta
            name="keywords"
            content={`
              front-end developer, front-end, front end, frontend, stwgabriel,
              stwGabriel, StwGabriel, gabriel, Gabriel, gabriel silva,
              Gabriel Silva, gabriel souza, Gabriel Souza, Gabriel Silva Souza,
              gabriel silva souza, React, Developer, react, developer,
              UX Design, UX, ux, UX Designer, ux designer, ux design, react.js,
              reactjs,ReactJS
            `}
          />

          <meta name="language" content="English" />
          <meta name="revisit-after" content="2 days" />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Gabriel's personal website" />
          <meta property="og:site_name" content="Gabriel's personal website" />
          <meta property="og:url" content="httś://stwgabriel.space" />
          <meta
            property="og:description"
            content={`
              Gabriel's personal website - Gabriel is a front-end developer
              and a UX Designer
            `}
          />
          <meta property="og:image" content="images/open-graph-image.png" />

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="assets/open-graph-image.png" />
          <meta property="twitter:url" content="Gabriel's personal website" />
          <meta property="twitter:title" content="" />
          <meta property="twitter:description" content="" />
          <meta
            property="twitter:image"
            content="assets/open-graph-image.png"
          />

          <link rel="canonical" href="https://stwgabriel.space" />

          {/* Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />

          {/*  */}
          <title>Gabriel&apos;s personal website</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
