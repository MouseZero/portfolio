import React from 'react'
import Section from './partials/Section.jsx'
import image from '../images/title-backgrounds/glasses.jpg'
import image_wide from '../images/title-backgrounds/glasses_wide.jpg'
import {isWideImageFormat} from '../util/screen'

function Component(props) {
  const imageToUse = isWideImageFormat ? image_wide : image
  return (
    <Section
      id="about"
      title="About"
      image={imageToUse}
    >
    Some content
    </Section>
  )
}

export default Component
