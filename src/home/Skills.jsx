import React from 'react'
import Section from './partials/Section.jsx'
import image from '../images/title-backgrounds/books.jpg'

const style = {
  content: {
    "display": "flex",
    "flex-wrap": "wrap",
    "justisfy-content": "space-arround",
    "margin": "2rem 0 2rem 0"
  },
  skill: {
    "marginBottom": "2rem",
    "flex": "1",
    "minWidth": "45%",
    "text-align": "center"
  }
}

function Component(props) {
  return (
    <Section
      id="skills"
      title="Skills"
      image={image}
    >
    <div style={style.content}>
      <div style={style.skill}><i className="fas fa-angle-right fa-sm">&nbsp;&nbsp;&nbsp;</i>React/Redux</div>
      <div style={style.skill}><i className="fas fa-angle-right fa-sm">&nbsp;&nbsp;&nbsp;</i>Vue JS/VueX</div>
      <div style={style.skill}><i className="fas fa-angle-right fa-sm">&nbsp;&nbsp;&nbsp;</i>SASS/CSS</div>
      <div style={style.skill}><i className="fas fa-angle-right fa-sm">&nbsp;&nbsp;&nbsp;</i>Flexbox</div>
      <div style={style.skill}><i className="fas fa-angle-right fa-sm">&nbsp;&nbsp;&nbsp;</i>REST API’s</div>
      <div style={style.skill}><i className="fas fa-angle-right fa-sm">&nbsp;&nbsp;&nbsp;</i>AWS</div>
    </div>

    </Section>
  )
}

export default Component
