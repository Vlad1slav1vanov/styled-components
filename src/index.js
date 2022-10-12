import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import App from './App';
import Consolas from "./fonts/Consolas.woff"

const Global = createGlobalStyle`
* {
  @font-face {
    font-family: Consolas;
    src: url(${Consolas}) format('woff');
  }
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Consolas;
}
`

const theme = {
  colors: {
    primary: 'green',
    secondary: 'red',
  },
  media: {
    phone: '(max-width: 425px)',
    tablet: '(max-width: 768px) and (min-width: 425px)'
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThemeProvider theme={theme}>
    <Global/>
    <App />
  </ThemeProvider>
);
