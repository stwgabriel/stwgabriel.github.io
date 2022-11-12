import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  *{
    box-sizing: border-box;

    padding: 0;
    margin: 0;
  }

  :root {

    font-family: sans-serif;
    font-size: 62.5%;
  }

  body {

    background: ${props => props.theme.color.main.background};
    color: ${props => props.theme.color.main.textColor};
  }
`

export default GlobalStyles
