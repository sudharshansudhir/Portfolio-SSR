import React from 'react'
import Navbar from '../components/Navbar'

import bgImage from '../assets/imagess/BG-LINES.png'
import Aboutsection from '../components/Aboutsection'
import Footer from '../components/Footer'
const About = () => {
  return (
    <div className='bg-center bg-cover' style={{ backgroundImage: `url(${bgImage})` }}>
      <Navbar/>
      <Aboutsection/>
      <Footer/>
    </div>
  )
}

export default About