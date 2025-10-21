import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Quotes from '../components/Quotes'
import RecentProjects from '../components/RecentProjects'

const Home = () => {
  return (
    <div className=''>
        <Navbar/>
        <Hero/>
        <Quotes/>
        <RecentProjects/>
    </div>
  )
}

export default Home