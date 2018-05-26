import React from 'react'
import Parallax from './Parallax'

const style = {
  content: {
    margin: "20px 0 20px 0"
  },
  section: {
    "min-height": "100vh"
  },
  title: {
    "height": "25vw",
    "display": "flex",
    "align-items": "center",
    "justify-content": "center",
    "text-shadow": "0px 0px 4px #000"
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
          <h2>{title}</h2>
        </div>
      </Parallax>
      <div style={style.content}>
        {children}
      </div>
    </div>
  )
}

export default Section
