import { createGlobalStyle } from 'styled-components';

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

    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }
`;

export default GlobalStyles;
