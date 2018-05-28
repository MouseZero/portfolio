import React from 'react'
import { Parallax } from 'react-parallax';

function CustomParallax(props) {
  return (
    <Parallax
      bgWidth="100%"
      strength={200}
      {...props}
    >
      {props.children}
    </Parallax>
  )
}

export default CustomParallax
