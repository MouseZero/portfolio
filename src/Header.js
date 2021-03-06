import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography';

function Component() {
  return (
    <div id="appBar">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Russell Murray
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Component
