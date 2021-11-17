import { createGlobalStyle } from 'styled-components';

import TextRegular from '../assets/fonts/SF-Pro/Text-Regular.ttf';
import TextMedium from '../assets/fonts/SF-Pro/Text-Medium.ttf';
import TextBold from '../assets/fonts/SF-Pro/Text-Bold.ttf';
import TextHeavy from '../assets/fonts/SF-Pro/Text-Heavy.ttf';

import DisplayRegular from '../assets/fonts/SF-Pro/Display-Regular.ttf';
import DisplayMedium from '../assets/fonts/SF-Pro/Display-Medium.ttf';
import DisplayBold from '../assets/fonts/SF-Pro/Display-Bold.ttf';
import DisplayHeavy from '../assets/fonts/SF-Pro/Display-Heavy.ttf';

const GlobalStyle = createGlobalStyle`

  @font-face {

    font-family: "ProText";
    src        : url(${TextHeavy}) format("truetype");
    font-weight: 800;
    font-display: fallback;
  }
  @font-face {

    font-family: "ProText";
    src        : url(${TextBold}) format("truetype");
    font-weight: 700;
    font-display: fallback;
  }
  @font-face {

    font-family: "ProText";
    src        : url(${TextMedium}) format("truetype");
    font-weight: 600;
    font-display: fallback;
  }
  @font-face {

    font-family: "ProText";
    src        : url(${TextRegular}) format("truetype");
    font-weight: 500;
    font-display: fallback;
  }

  @font-face {

    font-family: "ProDisplay";
    src        : url(${DisplayHeavy}) format("truetype");
    font-weight: 800;
    font-display: fallback;
  }
  @font-face {

    font-family: "ProDisplay";
    src        : url(${DisplayBold}) format("truetype");
    font-weight: 700;
    font-display: fallback;
  }
  @font-face {

    font-family: "ProDisplay";
    src        : url(${DisplayMedium}) format("truetype");
    font-weight: 600;
    font-display: fallback;
  }
  @font-face {

    font-family: "ProDisplay";
    src        : url(${DisplayRegular}) format("truetype");
    font-weight: 500;
    font-display: fallback;
  }

  * {

    box-sizing: border-box;
    font-family: "ProText", -apple-system, BlinkMacSystemFont, Tahoma, Arial Black,Verdana, Helvetica, Montserrat, sans-seif;
    text-shadow: ${({ theme }) => theme.effect.textShadow};

    padding: 0;
    margin: 0;

    text-shadow: ${({ theme }) => theme.effect.textShadow};
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.color.selection} ${({ theme }) => theme.color.black};
  }

  @supports (scrollbar-color: ${({ theme }) => theme.color.background} ${({ theme }) => theme.color.black}) and (scrollbar-width: thin) {

    scrollbar-color: ${({ theme }) => theme.color.background} ${({ theme }) => theme.color.black};
    scrollbar-width: thin;
  }
  &::-webkit-scrollbar {

    background: ${({ theme }) => theme.color.white};
    width: 1.2rem;
    height: 0;

    &:hover {

      width:1.7rem;
    }
  }

  &::-webkit-scrollbar-track {

    background: ${({ theme }) => theme.color.black};
  }

  &::-webkit-scrollbar-thumb {

    background: ${({ theme }) => theme.color.selection};
    border-radius:1rem;
    border:solid .3rem ${({ theme }) => theme.color.black};

    &:hover {

      border:solid .1rem ${({ theme }) => theme.color.black};
    }
  }

  &::selection {

    background: ${({ theme }) => theme.color.selection};
    color: ${({ theme }) => theme.color.white};
  }

  :root {

    background: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.white};
    font-size: 62.5%;
  }

  body {

    font-size: 1.6rem;
    font-weight: 500;
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
