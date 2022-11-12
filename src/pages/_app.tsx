import { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { animated, Transition } from '@react-spring/web'

// Contexts
import NavigationProvider, {
  NavigationContext,
} from 'src/contexts/NavigationContext'

// Styles
import GlobalStyles from 'src/styles/global'
import { defaultTheme } from 'src/styles/theme'
import { AppContainer, MainContent, NavigationContainer } from 'src/styles/App'

function MyApp({ Component, pageProps, router }) {
  const theme = defaultTheme

  const items = [
    {
      id: router.route,
      Component,
      pageProps,
    },
  ]

  const context = useContext(NavigationContext)

  console.debug(context)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <NavigationProvider>
        <AppContainer>
          <MainContent>
            <Transition
              items={items}
              keys={item => item.id}
              initial={{ opacity: 1, position: 'absolute' }}
              // from={pageTransition.from}
              // enter={pageTransition.enter}
              // leave={pageTransition.leave}
            >
              {(styles, { pageProps, Component }) => (
                <animated.div
                  style={{
                    ...styles,
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Component {...pageProps} />
                </animated.div>
              )}
            </Transition>
          </MainContent>

          <NavigationContainer>{''}</NavigationContainer>
        </AppContainer>
      </NavigationProvider>
    </ThemeProvider>
  )
}

export default MyApp
