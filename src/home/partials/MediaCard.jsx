import React from 'react'
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

function Component({title, href, image, content, children, imageProps, cardProps, isMobile}) {
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
      title: {
        "fontWeight": "bold",
        "margin": "0 1rem 1rem 1rem",
        "display": "flex",
        "justifyContent": "center",
      },
      content: {
        "fontSize": "0.9rem",
        "margin": "0 1rem 1rem 1rem",
        "display": "flex",
        "justifyContent": "center",
        minHeight: "90px"
      },
      action: {
        "margin": "0 1rem 1rem 1rem",
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center"
      }
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
      <div style={style.title}>
        {title}
      </div>
      <div style={style.content}>
        {content}
      </div>
      <div style={style.action}>
        <Button
          variant="raised"
          color="primary"
          href={href}
        >
          Click Here
        </Button>
      </div>
    </Card>
  </div>
  )
}

export default Component
