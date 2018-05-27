import React from 'react'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

function Component({title, image, content, children, imageProps, cardProps}) {
  return (
    <div>
    <Card {...cardProps}>
      <img
        src={image}
        {...imageProps}
      />
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          {title}
        </Typography>
        <Typography component="p">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        {children}
      </CardActions>
    </Card>
  </div>
  )
}

export default Component
