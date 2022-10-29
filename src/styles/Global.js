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



  /* --------------------- */
  /* archivo-100 - vietnamese_latin-ext_latin */
@font-face {
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 100;
  src: url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-100.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-100.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-100.woff2') format('woff2'), /* Super Modern Browsers */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-100.woff') format('woff'), /* Modern Browsers */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-100.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-100.svg#Archivo') format('svg'); /* Legacy iOS */
}
/* archivo-200 - vietnamese_latin-ext_latin */
@font-face {
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 200;
  src: url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-200.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-200.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-200.woff2') format('woff2'), /* Super Modern Browsers */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-200.woff') format('woff'), /* Modern Browsers */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-200.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-200.svg#Archivo') format('svg'); /* Legacy iOS */
}
/* archivo-300 - vietnamese_latin-ext_latin */
@font-face {
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 300;
  src: url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-300.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-300.woff2') format('woff2'), /* Super Modern Browsers */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-300.woff') format('woff'), /* Modern Browsers */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-300.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-300.svg#Archivo') format('svg'); /* Legacy iOS */
}
/* archivo-regular - vietnamese_latin-ext_latin */
@font-face {
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 400;
  src: url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-regular.woff') format('woff'), /* Modern Browsers */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-regular.svg#Archivo') format('svg'); /* Legacy iOS */
}
/* archivo-600 - vietnamese_latin-ext_latin */
@font-face {
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 600;
  src: url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-600.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-600.woff2') format('woff2'), /* Super Modern Browsers */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-600.woff') format('woff'), /* Modern Browsers */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-600.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-600.svg#Archivo') format('svg'); /* Legacy iOS */
}
/* archivo-500 - vietnamese_latin-ext_latin */
@font-face {
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 500;
  src: url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-500.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-500.woff2') format('woff2'), /* Super Modern Browsers */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-500.woff') format('woff'), /* Modern Browsers */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-500.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-500.svg#Archivo') format('svg'); /* Legacy iOS */
}
/* archivo-700 - vietnamese_latin-ext_latin */
@font-face {
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 700;
  src: url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-700.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-700.woff2') format('woff2'), /* Super Modern Browsers */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-700.woff') format('woff'), /* Modern Browsers */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-700.svg#Archivo') format('svg'); /* Legacy iOS */
}
/* archivo-800 - vietnamese_latin-ext_latin */
@font-face {
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 800;
  src: url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-800.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-800.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-800.woff2') format('woff2'), /* Super Modern Browsers */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-800.woff') format('woff'), /* Modern Browsers */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-800.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-800.svg#Archivo') format('svg'); /* Legacy iOS */
}
/* archivo-900 - vietnamese_latin-ext_latin */
@font-face {
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 900;
  src: url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-900.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-900.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-900.woff2') format('woff2'), /* Super Modern Browsers */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-900.woff') format('woff'), /* Modern Browsers */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-900.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-900.svg#Archivo') format('svg'); /* Legacy iOS */
}
/* archivo-100italic - vietnamese_latin-ext_latin */
@font-face {
  font-family: 'Archivo';
  font-style: italic;
  font-weight: 100;
  src: url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-100italic.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-100italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-100italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-100italic.woff') format('woff'), /* Modern Browsers */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-100italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-100italic.svg#Archivo') format('svg'); /* Legacy iOS */
}
/* archivo-200italic - vietnamese_latin-ext_latin */
@font-face {
  font-family: 'Archivo';
  font-style: italic;
  font-weight: 200;
  src: url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-200italic.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-200italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-200italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-200italic.woff') format('woff'), /* Modern Browsers */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-200italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-200italic.svg#Archivo') format('svg'); /* Legacy iOS */
}
/* archivo-300italic - vietnamese_latin-ext_latin */
@font-face {
  font-family: 'Archivo';
  font-style: italic;
  font-weight: 300;
  src: url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-300italic.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-300italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-300italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-300italic.woff') format('woff'), /* Modern Browsers */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-300italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-300italic.svg#Archivo') format('svg'); /* Legacy iOS */
}
/* archivo-italic - vietnamese_latin-ext_latin */
@font-face {
  font-family: 'Archivo';
  font-style: italic;
  font-weight: 400;
  src: url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-italic.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-italic.woff') format('woff'), /* Modern Browsers */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-italic.svg#Archivo') format('svg'); /* Legacy iOS */
}
/* archivo-500italic - vietnamese_latin-ext_latin */
@font-face {
  font-family: 'Archivo';
  font-style: italic;
  font-weight: 500;
  src: url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-500italic.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-500italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-500italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-500italic.woff') format('woff'), /* Modern Browsers */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-500italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-500italic.svg#Archivo') format('svg'); /* Legacy iOS */
}
/* archivo-600italic - vietnamese_latin-ext_latin */
@font-face {
  font-family: 'Archivo';
  font-style: italic;
  font-weight: 600;
  src: url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-600italic.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-600italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-600italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-600italic.woff') format('woff'), /* Modern Browsers */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-600italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-600italic.svg#Archivo') format('svg'); /* Legacy iOS */
}
/* archivo-700italic - vietnamese_latin-ext_latin */
@font-face {
  font-family: 'Archivo';
  font-style: italic;
  font-weight: 700;
  src: url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-700italic.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-700italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-700italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-700italic.woff') format('woff'), /* Modern Browsers */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-700italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-700italic.svg#Archivo') format('svg'); /* Legacy iOS */
}
/* archivo-800italic - vietnamese_latin-ext_latin */
@font-face {
  font-family: 'Archivo';
  font-style: italic;
  font-weight: 800;
  src: url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-800italic.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-800italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-800italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-800italic.woff') format('woff'), /* Modern Browsers */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-800italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-800italic.svg#Archivo') format('svg'); /* Legacy iOS */
}
/* archivo-900italic - vietnamese_latin-ext_latin */
@font-face {
  font-family: 'Archivo';
  font-style: italic;
  font-weight: 900;
  src: url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-900italic.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-900italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-900italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-900italic.woff') format('woff'), /* Modern Browsers */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-900italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/assets/fonts/archivo/archivo-v18-vietnamese_latin-ext_latin-900italic.svg#Archivo') format('svg'); /* Legacy iOS */
}
  /* --------------------- */

  * {

    box-sizing: border-box;
    font-family: -apple-system, "ProDisplay", BlinkMacSystemFont, Helvetica, Tahoma, Arial Black,Verdana, Montserrat, sans-serif;
    text-shadow: ${({ theme }) => theme.effect.textShadow};

    padding: 0;
    margin: 0;

    scrollbar-color: ${({ theme }) => theme.color.main.background} ${({ theme }) => theme.color.main.selection};
  }

  @supports (scrollbar-color: ${({ theme }) => theme.color.main.selection} ${({ theme }) => theme.color.main.selection}) {

    scrollbar-color: ${({ theme }) => theme.color.main.background} ${({ theme }) => theme.color.main.selection};
  }
  &::-webkit-scrollbar {

    width: 1vw;
    height: 0;

    @media (max-width: 999px) {

      width: 0vw;
    }
  }
  &::-webkit-scrollbar-track {

    background: ${({ theme }) => theme.color.main.selection};
  }
  &::-webkit-scrollbar-thumb {

    background: ${({ theme }) => theme.color.main.background};
    border-radius: ${({ theme }) => theme.metric.borderRadius};
    border:solid .3vw ${({ theme }) => theme.color.main.selection};

    &:hover {

      border: solid .1vw ${({ theme }) => theme.color.main.selection};
    }

    @media (max-width: 999px) {

      border-radius: ${({ theme }) => theme.metric.mobileBorderRadius};
    }
  }

  &::selection {

    background: ${({ theme }) => theme.color.main.selection};
    color: ${({ theme }) => theme.color.main.textColor};
  }

  :root {

    background:  ${({ theme }) => theme.color.main.background};
    font-size: 62.5%;

    overflow: hidden;
  }

  #root {

    height: 100%;
  }

  #navigation-root {

    display: flex;
    align-items: flex-end;
    justify-content: center;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    height: 95vh;
    max-height: 100vh;
    max-width: 100vw;

    z-index: 1000;
    pointer-events: none;

    @media (max-width: 595px) {

      height: 87.2vh;
    }
  }

  body {

    color: ${({ theme }) => theme.color.main.textColor};
    font-size: 1.6rem;
    font-weight: 500;

    height: 100vh;
  }

  p,
  a,
  li,
  span,
  label,
  button {

    font-family: -apple-system, "ProDisplay", BlinkMacSystemFont, Helvetica, Tahoma, Arial Black,Verdana, Montserrat, sans-serif;

    @media (max-width: 1300px) {

      font-family: -apple-system, "ProText", BlinkMacSystemFont, Helvetica, Tahoma, Arial Black,Verdana, Montserrat, sans-serif;
    }
  }

  a,
  button {

    border: none;
    text-decoration:none;
    cursor: pointer;

    @media (max-width: 999px) {

      cursor: default;
    }
  }

  li {

    list-style: none;
  }

  img,
  .no-select {

    user-drag: none;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
  img,
  .no-events {

    pointer-events: none;
  }

  &:focus{

    outline: none;
    box-shadow: 0 0 0  .25vw ${({ theme }) => theme.color.cold.blue} ;
  }

  button#main-content {

    box-shadow: none;

    &:focus, &:active, &:hover {

      box-shadow: none !important;
    }
  }

  input,
  textarea {

    &::selection {

      background: ${({ theme }) => theme.color.cold.blue};
      color: ${({ theme }) => theme.color.main.textColor};
    }
  }
`;

export default GlobalStyle;
