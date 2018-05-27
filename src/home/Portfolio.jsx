import React from 'react'
import Section from './partials/Section.jsx'
import MediaCardProject from './partials/MediaCardProject.jsx'
import image from '../images/title-backgrounds/portfolio.jpg'
import billo from '../images/project-thumbs/thumb-billo.png'
import calc from '../images/project-thumbs/thumb-calc.png'
import voting from '../images/project-thumbs/thumb-voting.png'
import life from '../images/project-thumbs/thumb-life.png'
import simon from '../images/project-thumbs/thumb-simon.png'
import crawler from '../images/project-thumbs/thumb-crawler.png'
import recipe from '../images/project-thumbs/thumb-recipe.png'

const style = {
  container: {
    "display": "flex",
    "flex-wrap": "wrap",
    "justify-content": "center"
  }
}

function Component(props) {
  return (
    <Section
      title="Portfolio"
      image={image}
    >
      <div style={style.container}>
        <MediaCardProject
          image={billo}
          title="Billo's Adventure"
          content="Android Game"
        />
        <MediaCardProject
          image={voting}
          title="Voting App"
          content="React, Redux, Node, PostgreSQL, Express"
        />
        <MediaCardProject
          image={life}
          title="Game Of Life"
          content="React JS"
        />
        <MediaCardProject
          image={crawler}
          title="Dungeon Crawler"
          content="React JS, Responsive Design"
        />
        <MediaCardProject
          image={simon}
          title="Simon"
          content="HTML5 Canvas, Responsive Design"
        />
        <MediaCardProject
          image={recipe}
          title="Recipe Box"
          content="React JS, Responsive Design"
        />
      </div>
    </Section>
  )
}

export default Component
