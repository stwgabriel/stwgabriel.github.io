import { createGlobalStyle, css } from 'styled-components';

import SFProRegular from '../assets/fonts/SFPro/SFPro-Regular.ttf';
import SFProMedium from '../assets/fonts/SFPro/SFPro-Medium.ttf';
import SFProBold from '../assets/fonts/SFPro/SFPro-Bold.ttf';
import SFProHeavy from '../assets/fonts/SFPro/SFPro-Heavy.ttf';

const GlobalStyle = createGlobalStyle`

  @font-face {

    font-family: "SF Pro";
    src        : url(${SFProHeavy}) format("truetype");
    font-weight: 800;
  }
  @font-face {

    font-family: "SF Pro";
    src        : url(${SFProBold}) format("truetype");
    font-weight: 700;
  }
  @font-face {

    font-family: "SF Pro";
    src        : url(${SFProMedium}) format("truetype");
    font-weight: 600;
  }
  @font-face {

    font-family: "SF Pro";
    src        : url(${SFProRegular}) format("truetype");
    font-weight: 500;
  }

  * {

    box-sizing: border-box;
    font-family:"SF Pro", -apple-system, BlinkMacSystemFont, 'Segoe WPC', 'Segoe UI', system-ui, 'Ubuntu', 'Droid Sans', sans-serif;

    padding: 0;
    margin: 0;
  }

  ${({ theme }) => css`

    * {

      text-shadow: ${theme.effect.textShadow}
      scrollbar-width: thin;
      scrollbar-color: ${theme.color.selection} ${theme.color.black};

      @suports (scrollbar-color) {

        scrollbar-color: ${theme.color.background} ${theme.color.black};
      }

      &::-webkit-scrollbar {

        background: ${theme.color.white};
        width: 1.2rem;
        height: 0;

        &:hover {

          width:1.7rem;
        }
      }

      &::-webkit-scrollbar-track {

        background: ${theme.color.black};
      }

      &::-webkit-scrollbar-thumb {

        background: ${theme.color.selection};
        border-radius:1rem;
        border:solid .3rem ${theme.color.black};

        &:hover {

          border:solid .1rem ${theme.color.black};
        }
      }

      &::selection {

        background: ${theme.color.selection};
        color: ${theme.color.white};
      }
    }

    :root {

      background: ${theme.color.background};
      color: ${theme.color.white};

      font-size: 62.5%;
      font-weight: 600;

      scroll-behavior: smooth;
    }
  `}

  body {

    font-size: 1.6rem;
  }

  a,
  button {

    text-decoration:none;
    cursor: pointer;
  }

  .no-select {

    user-drag: none;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
`;

export default GlobalStyle;
