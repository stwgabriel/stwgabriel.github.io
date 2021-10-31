import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import GlobalStyles from './styles/Global';
import defaultStyles from './styles/themes/default';

import App from './components/App';

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <StyledThemeProvider theme={defaultStyles}>
        <GlobalStyles />
        <App />
      </StyledThemeProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
