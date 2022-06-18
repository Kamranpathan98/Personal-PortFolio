import React, {useContext} from 'react'
import './Project.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import HosWeb from '../../img/HosWeb.jpg'
import musicapp from '../../img/musicapp.png'
import 'swiper/css'
import { themeContext } from "../../Context"

const Project = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    return (
        <div className='project' id='Project'>
            {/* heading */}
            <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
            <span>PortFolio</span>
            {/* slider */}
            <Swiper spaceBetween={-190} slidesPerView={3} grabCursor={true} className='project-slider'>
                <SwiperSlide>
                    <img src={HosWeb} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={musicapp} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={HosWeb} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={musicapp} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={musicapp} alt='' />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Project