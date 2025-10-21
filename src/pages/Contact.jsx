import React from 'react'
import Contactus from '../components/Contactus'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import bgImage from "../assets/imagess/projects-bg.png"


const Contact = () => {
  return (
    <div className='bg-center bg-cover' style={{ backgroundImage: `url(${bgImage})` }}>
      <Navbar/>
      <Contactus/>
      <Footer/>
    </div>
  )
}

export default Contact