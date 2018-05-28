import React from 'react'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withRouter } from 'react-router-dom'

const style = {
  content: {
    "position": "fixed",
    "bottom": "0",
    "zIndex": "30",
    "width": "100%"
  },
  tabs: {
  }
}

class Header extends React.Component {
  state = {
    value: 2,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    return (
      <div style={style.content}>
        <Paper style={style.tabs}>
          <Tabs
            value={this.state.value}
            indicatorColor="secondary"
            textColor="secondary"
            onChange={this.handleChange}
            centered
          >
            <Tab
              label="Cover"
              href="#appBar"
            />
            <Tab
              label="Experiance"
              href="#experience"
            />
            <Tab
              label="Portfolio"
              href="#portfolio"
            />
            <Tab
              label="Skills"
              href="#skills"
            />
            <Tab
              label="About"
              href="#about"
            />
            <Tab
              label="Contact"
              href="#contact"
            />
          </Tabs>
        </Paper>
      </div>
    )
  }
}

export default withRouter(Header)
