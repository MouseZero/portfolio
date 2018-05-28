import React from 'react'
import Parallax from './Parallax'

const style = {
  content: {
    display: "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "margin": "2rem",
  },
  section: {
  },
  title: {
    "height": "25vw",
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "textShadow": "0px 0px 4px #000"
  },
  h2: {
    "fontSize": "5vw"
  }
}

function Section({id, image, title, children, isMobile}) {
  return (
    <div id={id} style={style.section}>
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
