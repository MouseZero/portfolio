import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class Header extends React.Component {
  state = {
    value: 2,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
                Russell Murray
              </Typography>
          </Toolbar>
        </AppBar>

        <Paper>
          <Tabs
            value={this.state.value}
            indicatorColor="secondary"
            textColor="secondary"
            onChange={this.handleChange}
          >
            <Tab label="Cover" />
            <Tab label="Experiance" />
            <Tab label="Portfolio" />
            <Tab label="Skills" />
            <Tab label="About"/>
            <Tab label="Contact" />
          </Tabs>
        </Paper>
      </div>
    )
  }
}

export default Header
