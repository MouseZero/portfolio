import React from 'react'
import Section from './partials/Section.jsx'
import image from '../images/title-backgrounds/laptop.jpg'
import Point from './partials/Point.jsx'

const style = {
  content: {
    display: "flex",
    "flex-direction": "column",
    "align-items": "center",
    "justify-content": "space-around",
  }
}

function Component(props) {
  return (
    <Section
      title="Frontend React Developer"
      image={image}
      isMobile={props.isMobile}
    >
      <div style={style.content}>
        <Point>
          Frontend developer with 3 years of experience
        </Point>
        <Point>
          Focused on React/Redux and experienced with Vue JS.
        </Point>
        <Point>
          Conscientious about testing and preventing data loss
        </Point>
      </div>
    </Section>
  )
}

export default Component
