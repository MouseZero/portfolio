import React from 'react'
import Button from '@material-ui/core/Button';

import Cover from './Cover.jsx'
import Experience from './Experience.jsx'
import Portfolio from './Portfolio.jsx'
import Skills from './Skills.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Nav from '../Nav.js'
import Header from '../Header.js'

const style = {
  general: {
    "fontSize": "2rem"
  },
  buffer: {
    "height": "100px"
  }
}

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      windowDimensions: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    }
    this.updateDimensions = this.updateDimensions.bind(this)
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  updateDimensions() {
    this.setState({
      windowDimensions: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    })
  }

  render() {
    const isMobile = this.state.windowDimensions.width <= 768
    if (isMobile) {
      style.general = Object.assign({}, style.general, {
        "fontSize": "14px"
      })
    } else {
      style.general = Object.assign({}, style.general, {
        "fontSize": "24px"
      })
    }
    return (
      <div style={style.general}>
        <Header/>
        <Cover
          isMobile={isMobile}
        />
        <Experience/>
        <Portfolio
          isMobile={isMobile}
        />
        <Skills/>
        <Contact/>
        <div style={style.buffer}/>
        <Nav
          isMobile={isMobile}
        />
      </div>
    )
  }
}

export default Home
