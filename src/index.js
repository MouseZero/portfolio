import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar'
import Header from './header/Header.js'
import Home from './home/Home.jsx'
import registerServiceWorker from './registerServiceWorker';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0178CF',
    },
    secondary: {
      main: '#4190cc'
    },
    type: 'dark',
  }
});

ReactDOM.render((
  <Router>
    <MuiThemeProvider theme={theme}>
      <Header/>
      <Route exact path="/" component={Home} />
    </MuiThemeProvider>
  </Router>
), document.getElementById('root'));
registerServiceWorker();
