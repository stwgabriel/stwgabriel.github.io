import { ReactNode } from 'react'
// Theme
import { defaultTheme } from 'src/styles/theme'
import { ThemeProvider } from 'styled-components'

type RootProviderProps = {
  children: ReactNode
}

function RootProvider({
  children,
}: RootProviderProps) {

  const theme = defaultTheme

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export default RootProvider
