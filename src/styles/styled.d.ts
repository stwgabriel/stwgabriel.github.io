import 'styled-components'

import { defaultTheme } from './theme'

const theme = defaultTheme

export type Theme = typeof theme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme { }
}
