import React from 'react'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Icon from '@material-ui/core/Icon';
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
const tabs = [
  {
    label: "Cover",
    icon: (<Icon>star</Icon>),
    href: "#appBar"
  },
  {
    label: "Experiance",
    icon: (<Icon>work</Icon>),
    href: "#experience"
  },
  {
    label: "Portfolio",
    icon: (<Icon>perm_media</Icon>),
    href: "#portfolio"
  },
  {
    label: "Skills",
    icon: (<Icon>build</Icon>),
    href: "#skills"
  },
  {
    label: "Contact",
    icon: (<Icon>perm_phone_msg</Icon>),
    href: "#contact"
  },
]

function AdaptingTab({isMobile, icon, label, href, value}) {
  return (
    <Tab
      label={label}
      icon={(<Icon>{icon}</Icon>)}
      href={href}
      value={value}
    />
  )
}

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    let displayTabs = tabs
    if (this.props.isMobile) {
      console.log('gets here')
      displayTabs = tabs.map(({icon, href}) => ({icon, href}))
    }
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
            {
              displayTabs.map(x => {
                return (
                  <Tab {...x}/>
                )
              })
            }
          </Tabs>
        </Paper>
      </div>
    )
  }
}

export default withRouter(Header)
