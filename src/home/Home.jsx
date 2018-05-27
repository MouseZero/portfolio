import React from 'react'
import Button from '@material-ui/core/Button';

import Cover from './Cover.jsx'
import Experience from './Experience.jsx'
import Portfolio from './Portfolio.jsx'
import Skills from './Skills.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'

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
