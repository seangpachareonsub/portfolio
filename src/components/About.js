import React, { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {

  useEffect(() => {
    AOS.init()
    const text = Array.from(document.querySelectorAll('#para'))
    let currentPos = window.pageYOffset

    const distort = () => {
      const newPos = window.pageYOffset
      const diff = newPos - currentPos
      const speed = diff * 0.063

      text.map(el => el.style.transform = `skewY(${speed}deg)`)
      currentPos = newPos
      requestAnimationFrame(distort)
    }
    distort()
  }, [])

  return (
    <>
      <div id='para'
        data-aos="fade-up"
        data-aos-offset="250"
        data-aos-delay="100"
        data-aos-duration="800"
        data-aos-easing="ease">
        <h1 className='section-title' > <small> (001) </small> WHO AM I?</h1>
      </div>

      <div id='para'
        data-aos="fade-up"
        data-aos-offset="250"
        data-aos-duration="800"
        data-aos-easing="ease">
        <h2> Hello<small>,</small>I'm Kenn. </h2>
        <p>
        I'm a Junior Full Stack Developer and a recent graduate of the <span>Data Science</span> Software Engineering 
        programme at General Assembly<small>,</small> London.
        </p>
      </div>

      <div id='para'
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-offset="250"
        data-aos-easing="ease">
        <p>
          I create projects under the notion that <small>“</small>less is more
          <small>”</small> and my work
          reflects my addiction for minimal and clean design as well as my 
          desire to push boundaries.
        </p>
      </div>


      <div id='para'
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-offset="250"
        data-aos-easing="ease">
        <p >
          Beyond cultivating my ability to write good code<small>,</small> 
          I am currently learning Redux<small>,</small> Jest and basic UX 
          design to further 
          my <span>back</span> front-end focus.
        </p>
      </div>


      <div id='para'
        data-aos="fade-up"
        data-aos-offset="250"
        data-aos-duration="800"
        data-aos-easing="ease">
        <p>
          My aim is to take coding into the <span>fifth</span> professional dimension where
          I hope to bring value and continously grow myself.
        </p>
      </div>

      <div id='para'
        data-aos="fade-up"
        data-aos-offset="250"
        data-aos-duration="800"
        data-aos-easing="ease">
        <p>
          When I'm not coding<small>,</small> you can either find me 
          playing <span>tennis</span> football at 
          the <span>World Cup</span> park or
          sipping on <span>whiskey</span> gin or both...
        </p>
      </div>

    </>
  )
}

export default About