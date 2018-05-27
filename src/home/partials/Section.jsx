import React from 'react'
import Parallax from './Parallax'

const style = {
  content: {
    margin: "2rem",
    display: "flex",
    "align-items": "center",
    "justify-content": "center",
    "margin": "4vh",
    "font-size": "3vw"
  },
  section: {
  },
  title: {
    "height": "25vw",
    "display": "flex",
    "align-items": "center",
    "justify-content": "center",
    "text-shadow": "0px 0px 4px #000"
  },
  h2: {
    "font-size": "5vw"
  }
}

function Section({image, title, children}) {
  console.log(image)
  return (
    <div style={style.section}>
      <Parallax
        bgImage={image}
      >
        <div style={style.title}>
          <h2 style={style.h2}>{title}</h2>
        </div>
      </Parallax>
      <div style={style.content}>
        {children}
      </div>
    </div>
  )
}

export default Section
