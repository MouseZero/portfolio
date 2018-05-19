import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar'
import Header from './header/Header.js'
import registerServiceWorker from './registerServiceWorker';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0178CF',
    },
    secondary: {
      main: '#9b41f4'
    },
    type: 'dark',
  }
});

ReactDOM.render((
  <MuiThemeProvider theme={theme}>
    <Header/>
    <Button variant="raised" color="primary">
      Test Button
    </Button>
    <Button variant="raised" color="secondary">
      Test2 Button
    </Button>
  </MuiThemeProvider>
), document.getElementById('root'));
registerServiceWorker();
