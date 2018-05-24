import React from 'react'
import Button from '@material-ui/core/Button';

import Cover from './Cover'
import Experience from './Experience'
import Portfolio from './Portfolio'
import Skills from './Skills'
import About from './About'
import Contact from './Contact'

function Home() {
  return (
    <div>
      <Cover/>
      <Experience/>
      <Portfolio/>
      <Skills/>
      <About/>
      <Contact/>
      <Button variant="raised" color="primary">
        Test Button
      </Button>
      <Button variant="raised" color="secondary">
        Test2 Button
      </Button>
    </div>
  )
}

export default Home
