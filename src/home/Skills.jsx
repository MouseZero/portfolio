import React from 'react'
import Section from './partials/Section.jsx'
import image from '../images/title-backgrounds/books.jpg'

const style = {
  content: {
    "display": "flex",
    "flex-wrap": "wrap",
    "justisfy-content": "center",
    alignItems: "center",
    "margin": "2rem 0 2rem 0"
  },
  skill: {
    "flex": "1",
    "margin": "0.5rem",
    "marginBottom": "2rem",
    "minWidth": "10rem",
    "text-align": "center",
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
      <div style={style.skill}>React/Redux</div>
      <div style={style.skill}>SASS/CSS</div>
      <div style={style.skill}>Flexbox</div>
      <div style={style.skill}>REST API’s</div>
      <div style={style.skill}>Node & Express</div>
      <div style={style.skill}>HTML5</div>
      <div style={style.skill}>MySQL</div>
      <div style={style.skill}>REST API’s</div>
      <div style={style.skill}>Linux</div>
      <div style={style.skill}>NGINX</div>
      <div style={style.skill}>Git</div>
      <div style={style.skill}>PHP</div>
      <div style={style.skill}>Vue</div>
      <div style={style.skill}>Larevel</div>
      <div style={style.skill}>Mocha & Chai</div>
      <div style={style.skill}>webdriver.io</div>
      <div style={style.skill}>AWS</div>
    </div>

    </Section>
  )
}

export default Component
