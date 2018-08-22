import React from 'react'

const style = {
  point: {
    "marginBottom": "2rem"
  }
}

function Point(props) {
  return (
    <div style={style.point}>
      { props.children }
    </div>
  )
}

export default Point
