import React from 'react'
import {NavLink} from 'react-router-dom'
import github from '../assets/imagess/github.png'
import linkedin from '../assets/imagess/linkedin.png'
import instagram from '../assets/imagess/instagram.png'
import spotify from '../assets/imagess/spotify.svg'

const Footer = () => {
  return (
    <div className='w-[100%] md:py-16 py-8 p-2 justify-center items-center flex'>
    <div className='md:flex flex-col w-[80%] bg-[#db0306] rounded-2xl md:px-15 md:py-10 gap-3 justify-center items-center'>
        <div className='hidden md:flex md:flex-row flex-col  md:justify-between items-center justify-center md:items-start'>
                <div className=' md:flex m-2 flex-col md:w-1/3 gap-3'>
                    <p className='text-[10px] text-center md:text-2xl'>Sudharshan Rajendran</p>
                    <p className='not'>A designer and filmmaker from India, dedicated to craft visually stunning designs and engaging digital experiences that captivate users.</p>
                </div>
                    
                <div className='hidden md:flex text-[14px] flex-col items-center w-1/3 gap-3'>
                    <p className='text-[14px] md:text-2xl'>SiteMap</p>
                    <NavLink className="hover:scale-104 hover:underline" to="/about">About</NavLink>
                    <NavLink className="hover:scale-104 hover:underline" to="/projects">Projects</NavLink>
                    
                </div>
                    
                <div className='flex flex-col md:w-1/3 gap-3 items-center md:w-[30%]'>
                    <p className='hidden md:block text-[14px] md:text-2xl'>Connect Me from</p>
                    <div className='flex gap-10 justify-between items-center'>
                       <a href="https://github.com/sudharshansudhir"> <img className='w-6 hover:scale-104 ' src={github} alt="github" /></a>
                       <a href="www.linkedin.com/in/sudharshan-r-ssr"> <img className='w-6 hover:scale-104 ' src={linkedin} alt="linkedin" /></a>
                       <a href="https://www.instagram.com/sudhir_ssr?igsh=MTZmenhoM3Y3OWcwbg=="> <img className='w-6 hover:scale-104 ' src={instagram} alt="instagram" /></a>
                       <a href="https://open.spotify.com/playlist/1AFPpD3KvNRcFaqkaphnIZ?si=4f2e663c54944a24"> <img className='w-6 hover:scale-104 ' src={spotify} alt="spotify" /></a>
                    </div>
                </div>
        </div>

        <div className='flex flex-col m-2 md:flex-row justify-between w-[100%] items-center'>
            <div className='text-[6px] md:text-[10px]'>
                SSR - Copyright © 2025 
            </div>
            <div className='md:px-6 hidden md:block md:py-3 px-3 py-1 mb-2 border hover:scale-104 rounded-md '>Contact</div>
            <div className='flex md:hidden flex-col md:w-1/3 gap-3 items-center md:w-[30%]'>
                    <p className='hidden md:block text-[14px] md:text-2xl'>Connect Me from</p>
                    <div className='flex gap-10 justify-between items-center'>
                       <a href="https://github.com/sudharshansudhir"> <img className='w-6 hover:scale-104 ' src={github} alt="github" /></a>
                       <a href="www.linkedin.com/in/sudharshan-r-ssr"> <img className='w-6 hover:scale-104 ' src={linkedin} alt="linkedin" /></a>
                       <a href="https://www.instagram.com/sudhir_ssr?igsh=MTZmenhoM3Y3OWcwbg=="> <img className='w-6 hover:scale-104 ' src={instagram} alt="instagram" /></a>
                       <a href="https://open.spotify.com/playlist/1AFPpD3KvNRcFaqkaphnIZ?si=4f2e663c54944a24"> <img className='w-6 hover:scale-104 ' src={spotify} alt="spotify" /></a>
                    </div>
                </div>
        </div>
    </div>
    </div>
  )
}

export default Footer