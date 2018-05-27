import React from 'react'
import Section from './partials/Section.jsx'
import image from '../images/title-backgrounds/code.png'

function Component(props) {
  return (
    <Section
      title="Experience"
      image={image}
    >
      <div>
        Jul 2017 – Present
      </div>
      <div>
        Full Stack Developer, VandePoel Productions
      </div>
      <div>
        <ul>
          <li>
            Caught and fixed data loss issues on 3 occasions before production release.
          </li>
          <li>
            Was able to find a bug that was stopping 30% of the user base from registering on a pears application. Some content
          </li>
        </ul>
      </div>
      Jun 2015 – Jun 2017
      Full Stack Developer, Redhill Group, Inc.
      •	Had key involvement in the success of an algorithm required to find duplicates in a large data set. This program was paramount to the completion of the project as it could not be solved by brute force alone. A hash table was created to facilitate duplicate detection.
      •	In a matter of hours I was able to correct 15,000 unique incorrect links in emails to the wrong  domain.
      •	Was able to quickly prototype an application in a language I was not proficient in, by working additional hours. The review was that of a perfectly working program without issue.
    </Section>
  )
}

export default Component
