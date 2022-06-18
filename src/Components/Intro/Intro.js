import { useContext } from 'react'
import './intro.css'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import github from '../../img/github.png'
import linkedin from '../../img/linkedin.png'
import instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import glassesimoji from '../../img/glassesimoji.png'
import thumbup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import { themeContext } from "../../Context"
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

const Intro = () => {
    //animation
    const transition = { duration: 2, type: 'spring' }

    //dark mode
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    return (
        <div className='intro' id='Navbar'>
            <div className='i-left'>
                <div className='i-name'>
                    <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
                    <span>Kamran Pathan</span>
                    <span>Frontend Developer with huge interest in web designing and development</span>
                </div>
                <Link spy={true} to='Contact' smooth={true}>
                    <button className='button i-button'>Contact me</button>
                </Link>
                <div className='i-icons'>
                    <img src={github} alt='' />
                    <img src={linkedin} alt='' />
                    <img src={instagram} alt='' />
                </div>
            </div>
            <div className='i-right'>
                <img src={Vector1} alt='' />
                <img src={Vector2} alt='' />
                <img src={boy} alt='' />
                <motion.img
                    initial={{ left: '-36%' }}
                    whileInView={{ left: '-24%' }}
                    transition={transition}
                    src={glassesimoji} alt='' />
                <motion.div
                    initial={{ top: "-4%", left: "74%" }}
                    whileInView={{ left: "58%" }}
                    transition={transition}
                    className="floating-div"
                    style={{ top: '-4%', left: '58%' }}>
                    <FloatingDiv image={crown} text1='Web' text2='Developer' />
                </motion.div>
                <motion.div initial={{ left: "9rem", top: "18rem" }}
                    whileInView={{ left: "2rem" }}
                    transition={transition}
                    className="floating-div" style={{ top: '18rem', left: '2rem' }}>
                    <FloatingDiv image={thumbup} text1='Love' text2='Designing' />
                </motion.div>
                {/*blur background*/}
                <div className='blur' style={{ background: 'rgb(236 210 255)' }}>
                </div>
                <div className='blur' style={{ background: '#C1F5FF', top: '17rem', width: '21rem', height: '11rem', left: '-9rem' }}>

                </div>
            </div>
        </div >
    )
}

export default Intro