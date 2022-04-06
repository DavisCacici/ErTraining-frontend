import './index.scss';

import { createTheme, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import { App } from './components/App';

import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
  components: {
    MuiButton: {
      styleOverrides: {},
      defaultProps: {},
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>
  </ThemeProvider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// <React.StrictMode>
//   <App />
// </React.StrictMode>,
