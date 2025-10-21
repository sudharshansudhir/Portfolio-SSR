import React from 'react'
import Projectssection from '../components/Projectssection'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import bgImage from "../assets/imagess/projects-bg.png"

const Projects = () => {
  return (
    <div className='bg-center bg-cover' style={{ backgroundImage: `url(${bgImage})` }}>
      <Navbar/>
      <Projectssection/>
      <Footer/>
    </div>
  )
}

export default Projects