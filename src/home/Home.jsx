import React from 'react'
import Button from '@material-ui/core/Button';

import Cover from './Cover.jsx'
import Experience from './Experience.jsx'
import Portfolio from './Portfolio.jsx'
import Skills from './Skills.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'

const style = {
  general: {
    "font-size": "2rem"
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
        "font-size": "14px"
      })
    } else {
      style.general = Object.assign({}, style.general, {
        "font-size": "24px"
      })
    }
    return (
      <div style={style.general}>
        <Cover isMobile={isMobile}/>
        <Experience/>
        <Portfolio
          isMobile={isMobile}
        />
        <Skills/>
        <About/>
        <Contact/>
        <Button variant="raised" color="primary">
          Test Button
        </Button>
        <Button variant="raised" color="secondary">
          Test2 Button
        </Button>
      </div>
    )
  }
}

export default Home
