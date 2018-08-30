import React from 'react'
import Section from './partials/Section.jsx'
import MediaCard from './partials/MediaCard.jsx'
import image from '../images/title-backgrounds/portfolio.jpg'
import billo from '../images/project-thumbs/thumb-billo.png'
import studyit from '../images/project-thumbs/studyit.png'
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
      title="Shareable Works"
      image={image}
    >
      <div style={style.container}>
        <MediaCard
          image={studyit}
          title="Study It Flashcards"
          content="JavaScript, React, Redux, Material Design, PWA, Service Workers, Node, Webpack,
REST, Mongo, AWS, NGINX, Docker, Linux, Mocha, Chai, Git, webdriverReact JS, Responsive Design, "
          isMobile={props.isMobile}
          href="https://studyit.app"
        />
        <MediaCard
          image={billo}
          title="Billo's Adventure"
          content="C#, Unity, Android"
          isMobile={props.isMobile}
          href="https://play.google.com/store/apps/details?id=ws.codelogic.wombat"
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
      </div>
    </Section>
  )
}

export default Component
