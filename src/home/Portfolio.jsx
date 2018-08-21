import React from 'react'
import Section from './partials/Section.jsx'
import MediaCard from './partials/MediaCard.jsx'
import image from '../images/title-backgrounds/portfolio.jpg'
import billo from '../images/project-thumbs/thumb-billo.png'
import voting from '../images/project-thumbs/thumb-voting.png'
import life from '../images/project-thumbs/thumb-life.png'
import simon from '../images/project-thumbs/thumb-simon.png'
import crawler from '../images/project-thumbs/thumb-crawler.png'
import recipe from '../images/project-thumbs/thumb-recipe.png'

const style = {
  container: {
    "display": "flex",
    "flexWrap": "wrap",
    "justifyContent": "center"
  }
}

function Component(props) {
  return (
    <Section
      id="portfolio"
      title="Toy Apps"
      image={image}
    >
      <div style={style.container}>
        <MediaCard
          image={billo}
          title="Billo's Adventure"
          content="Android Game"
          isMobile={props.isMobile}
          href="https://play.google.com/store/apps/details?id=ws.codelogic.wombat"
        />
        <MediaCard
          image={voting}
          title="Voting App"
          content="React, Redux, Node, PostgreSQL, Express"
          isMobile={props.isMobile}
        />
        <MediaCard
          image={life}
          title="Game Of Life"
          content="React JS"
          isMobile={props.isMobile}
          href="https://codepen.io/mousezero/pen/beGMqP"
        />
        <MediaCard
          image={crawler}
          title="Dungeon Crawler"
          content="React JS, Responsive Design"
          isMobile={props.isMobile}
          href="https://codepen.io/mousezero/pen/RRPBZr"
        />
        <MediaCard
          image={simon}
          title="Simon"
          content="HTML5 Canvas, Responsive Design"
          isMobile={props.isMobile}
          href="https://codepen.io/mousezero/pen/vGMrgd"
        />
        <MediaCard
          image={recipe}
          title="Recipe Box"
          content="React JS, Responsive Design"
          isMobile={props.isMobile}
          href="https://codepen.io/mousezero/pen/YqmNYL"
        />
      </div>
    </Section>
  )
}

export default Component
