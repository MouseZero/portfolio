import React from 'react'

const style = {
  point: {
    "margin-bottom": "2rem"
  }
}

function Point(props) {
  return (
    <div style={style.point}>
      <i class="fas fa-angle-right fa-sm">&nbsp;&nbsp;&nbsp;</i>
      { props.children }
      &nbsp;&nbsp;
      <i class="fas fa-angle-left fa-sm"></i>
    </div>
  )
}

export default Point
