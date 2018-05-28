import React from 'react'

const style = {
  point: {
    "marginBottom": "2rem"
  }
}

function Point(props) {
  return (
    <div style={style.point}>
      <i className="fas fa-angle-right fa-sm">&nbsp;&nbsp;&nbsp;</i>
      { props.children }
    </div>
  )
}

export default Point
