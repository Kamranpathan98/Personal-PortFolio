import React, {useContext} from 'react'
import './about.css'
import Card from '../Card/Card'
import heartemoji from '../../img/heartemoji.png'
import humble from '../../img/humble.png'
import glasses from '../../img/glasses.png'
import Resume from './Resume.pdf'
import { themeContext } from "../../Context"
import { motion } from 'framer-motion'

const About = () => {
  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };
  //drak mode
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className='service' id='About'>

      {/*Left Side*/}
      <div className='awsm'>
        <span style={{ color: darkMode ? "white" : "" }}>This is</span>
        <span>About me</span>
        <span>This is a little about me.. !! Please feel free to download the CV
          <br />
          for more details
        </span>
        <a href={Resume} download>
          <button className='button a-button'>Download CV</button>
        </a>
        <div className='blur a-blur1' style={{ background: '#ABF1FF94' }}></div>
      </div>

      {/*Right Side*/}
      <div className='cards'>
        <motion.div initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition} 
          style={{ left: '14rem' }}>
          <Card emoji={heartemoji} heading={'Love'} details={'Traveling, Listening Music, Playing Cricket'} />
        </motion.div>
        <motion.div initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
          style={{ left: '-4rem', top: '12rem' }}>
          <Card emoji={glasses} heading={'Skills'} details={'Html, CSS, JavaScript, React JS, MySql, Python, Django-framework'} />
        </motion.div>
        <motion.div initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
          style={{ left: '12rem', top: '19rem' }}>
          <Card emoji={humble} heading={'Satisfactory Work Done'} details={'Web page design for the Hospital website , Personal Portfolio and more...'} />
        </motion.div>
        <div className='blur a-blur2' style={{ background: 'var(--purple)' }}></div>
      </div>
    </div>

  )
}

export default About