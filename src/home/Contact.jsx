import React from 'react'
import Section from './partials/Section.jsx'
import image from '../images/title-backgrounds/phone.jpg'

const style = {
  content: {
    "display": "flex",
    "flex-wrap": "wrap",
    "flex-direction": "column",
    "justisfy-content": "space-arround",
    "margin": "2rem 0 2rem 0"
  },
  skill: {
    "marginBottom": "2rem",
    "flex": "1",
    "minWidth": "300px",
    "text-align": "center",
  },
  a: {
    "color": "#c7c7c7",
    "textDecoration": "none"
  }
}

function Component(props) {
  return (
    <Section
      id="contact"
      title="Contact"
      image={image}
    >
    <div style={style.content}>
      <div style={style.skill}>
        <a style={style.a} href="mailto:rm.russmurray@gmail.com">
          rm.russemurray@gmail.com
        </a>
      </div>
      <div style={style.skill}>
        <a style={style.a} href="https://www.linkedin.com/in/russmurraydev/">
          LinkedIn
        </a>
      </div>
      <div style={style.skill}>
        (949) 310 - 7106
      </div>
    </div>
    </Section>
  )
}

export default Component
