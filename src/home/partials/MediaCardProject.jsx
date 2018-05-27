import React from 'react'
import MediaCard from './MediaCard.jsx'

const width = "300px"

const imageProps = {
  style: {
    width: width
  }
}

const cardProps = {
  style: {
    "max-width": width,
    "margin": "1rem",
    height: "420px"
  }
}

function Component({image, title, content}){
  return (
    <MediaCard
      image={image}
      title={title}
      content={content}
      imageProps={imageProps}
      cardProps={cardProps}
    />
  )
}

export default Component
