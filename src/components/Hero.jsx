import React from 'react'
import  Heroimg from '../assets/imagess/HERO.png'
import bgImage from '../assets/imagess/BG-LINES.png'
import html from "../assets/imagess/html-color.svg"
import css from "../assets/imagess/css-color.svg"
import javascript from "../assets/imagess/js-color.svg"
import bootstrap from "../assets/imagess/bs-color.svg"
import tailwind from "../assets/imagess/tw-color.svg"
import reactimg from "../assets/imagess/react-color.svg"
import node from "../assets/imagess/node-color.svg"
import express from "../assets/imagess/express.png"
import mongodb from "../assets/imagess/mongo-color.svg"
import python from "../assets/imagess/py-color.svg"
import java from "../assets/imagess/java-color.svg"
import figma from "../assets/imagess/figma-color.svg"
import canva from "../assets/imagess/canva-color.svg"
import sql from "../assets/imagess/mysql-logo.svg"
import git from "../assets/imagess/git.svg"
import github from "../assets/imagess/github.svg"

const Hero = () => {

    const langs=[html,css,javascript,bootstrap,tailwind,reactimg,node,express,mongodb,figma,canva,java,python,sql,git,github]


  return (
    <div className='h-full bg-cover bg-center '  style={{backgroundImage:`url(${bgImage})`}}>

     <div className='flex justify-around items-center'>
        <div className='text-[#e9e3dc] hidden md:block opacity-3 rotate-90 absolute top-[50%] left-[-340px] text-[140px]'>
            Full Stack
        </div>
        <div className='md:flex hidden text-2xl w-[20%] text-[#ffffff] justify-center items-center flex-col'>
            <span>S</span>
            <span>c</span>
            <span>r</span>
            <span>o</span>
            <span>l</span>
            <span>l</span>
            <span className='text-[28px]'>🔻</span>

        </div>
        <div className='flex justify-center w-[60%] mx-4 items-center'>
            <img src={Heroimg} alt="mypic" className='w-190'/>
        </div>
        <div className='hidden md:block text-[#e9e3dc] text-xl w-[20%]'>
            <div>UI/UX Developer</div>
            <div>MERN Stack Developer</div>
            <div>Script Writer</div>
        </div>
        <div className='hidden md:block text-[#ffffff] opacity-3 rotate-270 absolute top-[56%] right-[-320px] text-[140px]'>
            Developer
        </div>
      </div>

    <div className='flex justify-center items-center'>
        <div className='bg-[#ff2226] rounded-2xl text-lg md:flex-row flex flex-col justify-between items-center md:px-[75px] md:py-[50px] md:w-[65%] w-[90%]'>
            <div className='text-[#121212] text-lg md:text-4xl w-[25%]'>ABOUT MYSELF</div>
            <div className='not text-[#121212] w-[75%] text-justify'>I am Sudharshan Rajendran, a Full Stack Developer skilled in transforming ideas into dynamic, user-focused digital solutions. I am passionate about blending creativity and technology to build seamless, high-performance applications that deliver both functionality and exceptional user experiences.</div>
        </div>
    </div>

    <div className='flex justify-center items-center'>
        <div className='flex flex-wrap w-[90%] md:w-[85%] justify-center items-center gap-3 sm:gap-4 md:gap-6 bg-[#323232ff] rounded-2xl px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 border border-white'>
          {langs && langs.map((value, index) => {
            return <img key={index} src={value} alt={value} className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12' />
          })}
        </div>
      </div>
        

    </div>
  )
}

export default Hero


// #FF2226, #1E1E1E, #E9E3DC, #121212, #323232ff, #db0306, #FFFFFF