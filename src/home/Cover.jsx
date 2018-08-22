import React from 'react'
import Section from './partials/Section.jsx'
import image from '../images/title-backgrounds/laptop.jpg'
import Point from './partials/Point.jsx'
import Button from '@material-ui/core/Button'

const style = {
  content: {
    display: "flex",
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "space-around",
  }
}

function Component(props) {
  return (
    <Section
      id="cover"
      title="Frontend React Developer"
      image={image}
      isMobile={props.isMobile}
    >
      <div style={style.content}>
        <Point>
          Focused on React and Redux
        </Point>
        <Point>
          Conscientious about testing and preventing data loss
        </Point>
        <Point>
          <Button
            variant="raised"
            color="primary"
            href="/resume/resume.pdf"
          >
            My Resume
          </Button>
        </Point>
      </div>
    </Section>
  )
}

export default Component
