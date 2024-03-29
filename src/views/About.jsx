import React from 'react'
import Description from '../components/Description'

const About = () => (
  <div className="About fade-in">
    <Description>
      <div className="qa">
        <h3 className="question">
          Who are you?
        </h3>
        <p className="answer">
          Emmanuel Zen Price! I'm a programmer and web developer out of Providence, RI who's concerned with applying principles of good design to the composition of systems large and small. Feel free to check out my <a href={`${process.env.PUBLIC_URL}/docs/EPResume.pdf`} title="resume" target="_blank" rel="noopener noreferrer">resume</a>.
        </p>
      </div>
      <div className="qa">
        <h3 className="question">Anything more you can tell us about yourself?</h3>
        <p className="answer">
          I meditate up to an hour a day. I write short stories and poems, play indie games (some favorites are Journey, Ico, Hyper Light Drifter, Fez, Superbrothers: Swords & Sworcery), read books, create things, and, of course, code. I'm constantly thinking about how to live a more meaningful, compassionate, happy—and less distracted, morose, and complacent—life.
        </p>
      </div>
      <div className="qa">
        <h3 className="question">What do you love about programming?</h3>
        <p className="answer">
          Great question! So much. Programming is really the closest we can get to real life magic. (You use an arcane language to invoke spells (functions) and direct processes? Come on.) Plus it satisfies so many parts of myself: my desire to problem solve; my love of logic and languages; my impulse to build things. And when I can make something that's useful to others, there really are few things as satisfying.
        </p>
      </div>
      <div className="qa">
        <h3 className="question">Did you build this site yourself?</h3>
        <p className="answer">
          I did! To do so I typed <b>npx create-react-app</b> in terminal, and then everything else (except for the <a href="http://casesandberg.github.io/react-color/" target="_blank" rel="noopener noreferrer">color-picker</a> I used to add interactivity to the DiCube) was coded from scratch. Feel free to <a href="mailto:mail@emmanuelprice.com">email me</a> with questions! 
        </p>
      </div>
      <div className="qa">
        <h3 className="question">And where can we find you on the web?</h3>
        <p className="answer">It's not easy, I'll tell you that. For my own sanity I abstain from all manner of social media; however, I can be found on <a href="http://github.com/emantheman" target="_blank" title="github" rel="noopener noreferrer">github</a>, <a href="http://linkedin.com/in/emmanuelprice" title="linkedin" target="_blank" rel="noopener noreferrer">linkedin</a>, and most mornings at <a href="http://boltcoffeecompany.com" title="boltcoffeeco" target="_blank" rel="noopener noreferrer">Bolt coffee</a> in the RISD Museum.</p>
      </div>
    </Description>
  </div>
)
// web-developer; meditator; poet; writer of short stories; avid reader; repository for use<span className="strike">less</span>ful facts; indie game enthusiast; chessplayer.
export default About