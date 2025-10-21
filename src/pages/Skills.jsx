import React from 'react'
import Navbar from '../components/Navbar'
import Skillssection from '../components/Skillssection'
import Footer from '../components/Footer'
import bgImage from "../assets/imagess/projects-bg.png"

const Skills = () => {
  return (
    <div className='bg-center bg-cover' style={{ backgroundImage: `url(${bgImage})` }}>
        <Navbar/>
        <Skillssection/>
        <Footer/>
    </div>
  )
}

export default Skills