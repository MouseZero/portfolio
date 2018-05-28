import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './home/Home.jsx'
import registerServiceWorker from './registerServiceWorker';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { BrowserRouter as Router, Route } from "react-router-dom";

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
      <Route exact path="/" component={Home} />
    </MuiThemeProvider>
  </Router>
), document.getElementById('root'));
registerServiceWorker();
