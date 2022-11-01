import { ThemeProvider } from 'styled-components'
import { animated, Transition } from '@react-spring/web'

// Styles
import GlobalStyles from 'src/styles/global'
import { defaultTheme } from 'src/styles/theme'
import { AppContainer } from 'src/styles/App'

function MyApp({ Component, pageProps, router }) {
  const theme = defaultTheme

  const items = [
    {
      id: router.route,
      Component,
      pageProps,
    },
  ]

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContainer>
        <Transition
          items={items}
          keys={item => item.id}
          initial={{ opacity: 1 }}
          from={{ opacity: 1, x: 500, position: 'absolute' }}
          enter={{ opacity: 1, x: 0, position: 'absolute' }}
          leave={{ opacity: 1, x: -500, delay: 150, position: 'absolute' }}
        >
          {(styles, { pageProps, Component }) => (
            <animated.div style={{ ...styles, width: '100%' }}>
              <Component {...pageProps} />
            </animated.div>
          )}
        </Transition>
      </AppContainer>
    </ThemeProvider>
  )
}

export default MyApp
