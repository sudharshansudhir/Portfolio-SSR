import React, { useState } from 'react'
import logo from '../assets/imagess/LOGO.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  const[ham,setham]=useState(false)

  function opennavbar(){
    setham(!ham)
  }

  return (


    <div className='sticky top-0 z-50'>


        <div className='md:h-16 flex justify-between items-center bg-[#1e1e1ec6] backdrop-blur-md z-50'>
            <img src={logo} alt="logo" className='md:w-20 w-14' />
            <div className='sm:flex gap-3 hidden md:text-[16px] text-[12px] text-white md:w-[40%] justify-between items-center'>
                <NavLink to="/" className={({ isActive }) => isActive ? 'nav-hover active-link' : 'nav-hover'}>Home</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-hover active-link' : 'nav-hover'}>About</NavLink>
                <NavLink to="/projects" className={({ isActive }) => isActive ? 'nav-hover active-link' : 'nav-hover'}>Projects</NavLink>
                <NavLink to="/skills" className={({ isActive }) => isActive ? 'nav-hover active-link' : 'nav-hover'}>Skills</NavLink>
                <NavLink to="/contact" className='border p-2 md:p-3 bg-[#FF2226] rounded text-[#121212] hover:bg-[#121212] hover:duration-[0.5s] hover:text-[#ff2226]'>Contact</NavLink>
            </div>
            <div className='sm:hidden flex flex-col text-[#ff2226]'>
                <GiHamburgerMenu onClick={opennavbar} className='text-3xl cursor-pointer' />

                {ham&&
                <div className='text-[10px] flex flex-col justify-center items-center text-white absolute bg-[#121212] p-2 top-8 right-0 text-end'>
                  <NavLink to="/" className={({ isActive }) => isActive ? 'nav-hover active-link' : 'nav-hover m-2'}>Home</NavLink>
                  <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-hover active-link' : 'nav-hover m-2'}>About</NavLink>
                  <NavLink to="/projects" className={({ isActive }) => isActive ? 'nav-hover active-link' : 'nav-hover m-2'}>Projects</NavLink>
                  <NavLink to="/skills" className={({ isActive }) => isActive ? 'nav-hover active-link' : 'nav-hover m-2'}>Skills</NavLink>
                  <NavLink to="/contact" className='border p-1 bg-[#FF2226] rounded text-[#121212] hover:bg-[#121212] hover:duration-[0.5s] hover:text-[#ff2226]'>Contact</NavLink>
                </div>
                }

            </div>
        </div>


    </div>
  )
}

export default Navbar


// #FF2226-RED
// #121212-BG BLACK