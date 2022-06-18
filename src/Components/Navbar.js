import React from 'react'
import './Navbar.css'
import Toggle from './Toggle/Toggle'
import { Link } from 'react-scroll'

const Navbar = () => {
    return (
        <div className='n-wrapper'>
            <div className='n-left'>
                <div className='n-name'>Kamran</div>
                <Toggle />
            </div>
            <div className='n-right'>
                <div className='n-list'>
                    <ul style={{ listStyleType: 'none' }}>
                        <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass' >
                            <li>Home</li>
                        </Link>
                        <Link spy={true} to='About' smooth={true}>
                            <li>About Me</li>
                        </Link>
                        {/* <Link spy={true} to='Project' smooth={true}>
                            <li>Projects</li>
                        </Link> */}
                        <Link spy={true} to='Contact' smooth={true}>
                            <li>Contact</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar