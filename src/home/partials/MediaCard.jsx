import React from 'react'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

function Component({title, image, content, children, imageProps, cardProps, isMobile}) {
  let style
  if (isMobile) {
    style = {
      card: {
        "margin": "1rem",
        "display": "flex",
        "flex-wrap": "wrap",
        "align-items": "flex-start"
      },
      image: {
        width: "100px",
        "max-height": "100px",
        "min-height": "100px",
        "flex": "1"
      },
      title: {
        "margin": "0",
        "height": "100px",
        "display": "flex",
        "align-items": "center",
        "justify-content": "center",
        "background": "#222",
        "flex": "20"
      },
      content: {
        "min-width": "90vw",
        "margin": "2rem 1rem 2rem 1rem"
      },
      action: {
        "min-width": "90vw",
      }
    }
  } else {
    style = {
      image: {
        width: "300px"
      },
      card: {
        "max-width": "300px",
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
