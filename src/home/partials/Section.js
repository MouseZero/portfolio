import React from 'react'
import Parallax from './Parallax'
import './section.css'

function Section({image, title, children}) {
  console.log(image)
  return (
    <div class="section">
      <Parallax
        bgImage={image}
      >
        <div class="title">
          <h2>{title}</h2>
        </div>
      </Parallax>
      <div class="content">
        {children}
      </div>
    </div>
  )
}

export default Section
