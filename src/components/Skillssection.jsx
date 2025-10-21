import React from 'react'
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

const Skillssection = () => {
  const langs=[
    {
      lang:"HTML",
      progress:95,
      color:"#eb6200ff"
    },
    {
      lang:"CSS",
      progress:90,
      color:"#0081ebff"
    },
    {
      lang:"JAVASCRIPT",
      progress:90,
      color:"#ebeb00ff"
    },
    {
      lang:"BOOTSTRAP",
      progress:90,
      color:"#2c6bffff"
    },
    {
      lang:"TAILWIND",
      progress:95,
      color:"#00b8ebff"
    },
    {
      lang:"REACT",
      progress:85,
      color:"#143ac3ff"
    },
    {
      lang:"NODE",
      progress:85,
      color:"#047c0aff"
    },
    {
      lang:"EXPRESS",
      progress:85,
      color:"#000000ff"
    },
    {
      lang:"MONGO DB",
      progress:90,
      color:"#28c709ff"
    },
    {
      lang:"PYTHON",
      progress:85,
      color:"#0a85e9ff"
    },
    {
      lang:"FIGMA",
      progress:85,
      color:"#e20707ff"
    },
    {
      lang:"CANVA",
      progress:85,
      color:"#75eeeeff"
    },
    {
      lang:"JAVA",
      progress:80,
      color:"#d7600bff"
    },
    {
      lang:"MySQL",
      progress:80,
      color:"#1f7676ff"
    },
    {
      lang:"Github",
      progress:80,
      color:"#000000"
    },
    {
      lang:"AI Tools",
      progress:80,
      color:"#bf196fff"
    },
  ]
  return (
    <div>


      <div className='flex my-16 justify-center items-center'>
        <p className='w-[80%] sm:w-[70%] md:w-[60%] rounded-2xl text-center text-2xl sm:text-3xl md:text-4xl py-3 px-4 sm:px-6 bg-[#db0306]'>
          Skills
        </p>
      </div>
        <div className='flex my-8  justify-center items-center'>
        <div className='flex flex-wrap w-[90%] md:w-[80%] justify-center items-center gap-3 sm:gap-4 md:gap-6 bg-[#323232aa] rounded-2xl px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 border border-white'>
          {langs && langs.map((value, index) => {
            return <div key={index} className="relative w-60 h-60 rounded-full flex items-center justify-center">
              <div className="absolute inset-0 rounded-full" style={{background: `conic-gradient(${value.color} ${value.progress * 3.6}deg, #d9d9d9 ${value.progress * 3.6}deg)`,}}>
                
              </div>
              <div className="absolute w-[80%] h-[80%] rounded-full bg-white flex items-center justify-center">
                <span className="text-center not text-black" >
                  {value.lang} {value.progress}%
                </span>
              </div>
          </div>
          })}
        </div>
      </div>

      
      <div className='flex flex-col lg:flex-row items-center justify-center my-3 gap-4 w-[90%] lg:w-[80%] mx-auto'>
        <div className='w-full lg:w-[30%] rounded-2xl bg-[#2e2d2dc6] backdrop-blur-sm py-3 px-4 text-white flex flex-col text-[16px] sm:text-[18px] md:text-[20px] justify-center items-center border border-white text-start'>
          <div className='my-4 sm:my-6 md:my-8'>🎨UI Design</div>
          <div className='my-4 sm:my-6 md:my-8'>👨🏻‍💻FrontEnd Development</div>
          <div className='my-4 sm:my-6 md:my-8'>🤖BackEnd Development</div>
          <div className='my-4 sm:my-6 md:my-8'>📊Database Connectivity</div>
          <div className='my-4 sm:my-6 md:my-8'>🧪Debugging & Testing</div>
        </div>

        <div className='w-full lg:w-[70%] rounded-2xl text-white border border-white'>
          <div className='bg-[#db0306] p-3 not sm:p-4 rounded-t-2xl text-black text-[14px] sm:text-[16px] md:text-[18px] w-full'>
            Skilled in Scriptwriting & Filmmaking, I blend narrative depth and visual storytelling into my work, enhancing my ability to approach design and development with creativity and emotion-driven thinking.
            Here’s how my storytelling and filmmaking background elevate my approach in tech today:
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/20 p-3 sm:p-4 w-full bg-[#2e2d2dc6] backdrop-blur-sm rounded-b-2xl'>
            <div className='pb-3 sm:pb-0'>
              <p className='text-lg px-2 text-[#db0306]'>Storytelling🎬</p>
              <p className='px-2 text-[14px] sm:text-[15px] md:text-[16px] not'>In film and scriptwriting, every line and frame builds emotion and meaning.
                Similarly, in tech and UI design, crafting a strong user journey requires a clear narrative flow.
                Understanding user intent and designing experiences that feel like a story help create engaging and memorable digital products.</p>
            </div>
            <div className='pb-3 sm:pb-0'>
              <p className='text-lg px-2 text-[#db0306]'>Creative Vision & User Empathy🎭</p>
              <p className='px-2 text-[14px] sm:text-[15px] md:text-[16px] not'>A good filmmaker understands emotions — just as a good designer understands users.
                My experience in scripting characters and emotions translates into empathizing with users’ needs, behaviors, and challenges, allowing me to design intuitive and human-centered solutions.</p>
            </div>
            <div className='pb-3 sm:pb-0'>
              <p className='text-lg px-2 text-[#db0306]'>Collaboration & Direction🤝</p>
              <p className='px-2 text-[14px] sm:text-[15px] md:text-[16px] not'>Film production thrives on teamwork — from directors to editors, every role matters.
                Likewise, in full stack projects, collaboration between developers, designers, and clients ensures a shared creative vision.
                My background helps me manage teams effectively and communicate ideas clearly across disciplines.</p>
            </div>
            <div className='pb-3 sm:pb-0'>
              <p className='text-lg px-2 text-[#db0306]'>Attention to Detail🎞️</p>
              <p className='px-2 text-[14px] sm:text-[15px] md:text-[16px] not'>In filmmaking, each shot, frame, and cut counts.
                That precision translates into clean code, consistent design, and pixel-perfect layouts in my development work.
                Understanding composition, pacing, and visual balance helps me deliver seamless, user-focused digital experiences.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skillssection


// #eb6200ff #323232aa