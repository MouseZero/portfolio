import React from 'react'
import Section from './partials/Section.jsx'
import image from '../images/title-backgrounds/code.png'

const style = {
  dates: {
    color: "#999",
    marginBottom: "0.5rem"
  },
  title: {
    marginBottom: "0.5rem",
    "fontWeight": "bold"
  },
  tech: {
    marginBottom: "0.5rem"
  },
  divide: {
    marginBottom: "2rem"
  },
  a: {
    "color": "#c7c7c7",
    "textDecoration": "none"
  }
}

function Component(props) {
  return (
    <Section
      id="experience"
      title="Experience"
      image={image}
    >
      <div>
        <div style={style.dates}>
          Jun 2018 – Present
        </div>
        <div style={style.title}>
          Full Stack Developer, Sole Proprietorship, studyit.app
        </div>
        <div style={style.tech}>
          <strong>Tech:</strong> JavaScript, React, Redux, Material Design, PWA, Service Workers, Node, Webpack, REST, Mongo, AWS, NGINX, Docker, Linux, Mocha, Chai, Git, webdriver
        </div>
        <div>
          <ul>
            <li>
              Currently creating my own product. <a href="https://studyit.app" style={{color: 'white'}}>studyit.app</a>
            </li>
            <li>Made load time 9x faster by code splitting, caching, minification and gzipping.</li>
            <li>Made the website usable offline by leveraging service workers.</li>
            <li>Converted the app to a PWA (Progressive Web App). Following the requirements set by Google.</li>
          </ul>
        </div>
        <div style={style.divide}>
          <hr></hr>
        </div>
        <div style={style.dates}>
          Jul 2017 – Jun 2018
        </div>
        <div style={style.title}>
          Full Stack Developer, VandePoel Productions
        </div>
        <div style={style.tech}>
          <strong>Tech:</strong> JavaScript, React, Redux, Webpack, REST, MySQL, AWS, NGINX, Linux, Docker, Vue, PHP, Laravel, JQuery, Node, Mocha, Chai, Git, Jira, Sketch
        </div>
        <div>
          <ul>
            <li>
              Caught and fixed data loss issues on 3 occasions before production release.
            </li>
            <li>
              Was able to fix a bug that was stopping 30% of the user base from registering in a code base I wasn’t familiar with.
            </li>
            <li>
              Integrated registration operations on the Facebook Oculus Connect website.
            </li>
          </ul>
        </div>
        <div style={style.divide}>
          <hr></hr>
        </div>
        <div style={style.dates}>
          Jun 2015 – Jun 2017
        </div>
        <div style={style.tech}>
          <strong>Tech:</strong> JavaScript, JQuery, REST, Node, PHP, MySQL, Git
        </div>
        <div style={style.title}>
          Full Stack Developer, Redhill Group, Inc.
        </div>
        <div>
          <ul>
            <li>
              Came up with an algorithm to identify duplicates in a large data set. This solved the issue where the existing solution would not work because it was too slow.
            </li>
            <li>
              In a matter of hours I was able to correct 15,000 unique incorrect links in emails to the wrong  domain.
            </li>
            <li>
              Was able to quickly prototype an application in a language I was not proficient in, by working additional hours. The review was that of a perfectly working program without issue.
            </li>
          </ul>
        </div>
        <div style={style.divide}>
          <hr></hr>
        </div>
        <div style={style.dates}>
          Feb 2005 – Sep 2005
        </div>
        <div style={style.tech}>
          <strong>Tech:</strong> HTML, JavaScript, Photoshop
        </div>
        <div style={style.title}>
          Web Design, Sole Proprietorship, Eiko Tec
        </div>
        <div>
          <ul>
            <li>
              Constructed many websites for businesses
            </li>
          </ul>
        </div>
        <div style={style.divide}>
          <hr></hr>
        </div>
        <div style={style.dates}>
          2016 – 2017
        </div>
        <div style={style.title}>
          Frontend web development certification, Free Code Camp
        </div>
        <div>
          <a style={style.a} target="_blank" href="https://www.freecodecamp.com/mousezero/front-end-certification">
            https://www.freecodecamp.com/mousezero/front-end-certification
          </a>
        </div>
      </div>
    </Section>
  )
}

export default Component
