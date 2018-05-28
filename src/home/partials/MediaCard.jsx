import React from 'react'
import Card from '@material-ui/core/Card';

function Component({title, image, content, children, imageProps, cardProps, isMobile}) {
  let style
  if (isMobile) {
    style = {
      card: {
        "margin": "1rem",
        "display": "flex",
        "flexWrap": "wrap",
        "alignItems": "flex-start"
      },
      image: {
        width: "100px",
        "maxHeight": "100px",
        "minHeight": "100px",
        "flex": "1"
      },
      title: {
        "margin": "0",
        "height": "100px",
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center",
        "background": "#222",
        "flex": "20"
      },
      content: {
        "minWidth": "90vw",
        "margin": "2rem 1rem 2rem 1rem"
      },
      action: {
        "minWidth": "90vw",
      }
    }
  } else {
    style = {
      image: {
        width: "300px"
      },
      card: {
        "maxWidth": "300px",
        "margin": "1rem",
      },
      content: {},
      action: {}
    }

  }
  return (
    <div>
    <Card
      style={style.card}
    >
      <img
        alt={title + '_image'}
        src={image}
        style={style.image}
      />
      <h3 style={style.title}>
        {title}
      </h3>
      <div style={style.content}>
        {content}
      </div>
      <div style={style.action}>
        {children}
      </div>
    </Card>
  </div>
  )
}

export default Component
