import React from 'react'
import bgImage from '../assets/imagess/BG-LINES.png'
import aboutpic from "../assets/imagess/aboutsection.jpg"
import fullpic from "../assets/imagess/others.jpg"
import Heroimg from '../assets/imagess/HERO.png'
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
import resume from "../assets/imagess/R_Sudharshan_MERN_Stack_Developer.pdf"

const Aboutsection = () => {

  const langs = [html, css, javascript, bootstrap, tailwind, reactimg, node, express, mongodb, figma, canva, java, python, sql,git,github]
  return (
    <div className='py-3 h-full'>
    
      <div className='flex justify-center items-center'>
        <p className='w-[80%] sm:w-[70%] md:w-[60%] rounded-2xl text-center text-2xl sm:text-3xl md:text-4xl py-3 px-4 sm:px-6 bg-[#db0306]'>
          About
        </p>
      </div>

      
      <div className='flex flex-col lg:flex-row my-3 justify-center items-center gap-4 lg:gap-3'>
        <div className='w-[90%] lg:w-[80%] h-auto lg:h-120 gap-4 flex flex-col lg:flex-row justify-center items-center'>
          <img src={aboutpic} alt="" className='w-full lg:w-[50%] rounded-2xl max-h-full object-cover' />
          <div className='rounded-2xl p-3 sm:p-4 md:p-5 w-full w-[50%] text-white text-[16px] sm:text-[16px] md:text-[18px] not text-start bg-[#2e2d2dc6] backdrop-blur-md border border-white z-0'>
            Born and raised in Tirupur, I am currently pursuing my Bachelor’s in Computer Science and Engineering at Sri Shakthi Institute of Engineering and Technology, Coimbatore.
            <br />
            <br />
            As a passionate learner and creative thinker, I love exploring technology, understanding how systems work, and crafting innovative solutions that make a difference.
            Specializing in Full Stack Development using the MERN stack, I transform unique ideas into functional, efficient, and user-focused web applications. I create visually appealing interfaces and seamless digital experiences that connect with users and enhance usability. My academic journey has provided hands-on experience in React, Node.js, MongoDB, Express.js, and Tailwind CSS, backed by a solid foundation in problem-solving and real-world project development.
          </div>
        </div>
      </div>

      
      <div className='flex justify-center items-center'>
        <div className='flex flex-wrap w-[90%] md:w-[80%] justify-center items-center gap-3 sm:gap-4 md:gap-6 bg-[#323232ff] rounded-2xl px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 border border-white'>
          {langs && langs.map((value, index) => {
            return <img key={index} src={value} alt={value} className='w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10' />
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

      {/* Resume Section */}
      <div className='flex flex-col md:flex-row my-4 justify-center items-center w-[90%] lg:w-[80%] mx-auto gap-3'>
        <div className='w-full not md:w-[60%] rounded-2xl border border-white bg-[#2e2d2dc6] backdrop-blur-sm p-3 sm:p-4 text-white text-[14px] sm:text-[17px] md:text-[18px]'>
          Through my work, I strive to build efficient, engaging, and user-friendly web applications that make a meaningful impact. I ensure every project I create balances functionality with modern design and smooth user experience. Whether you’re looking for a passionate full stack developer or a reliable team collaborator, I’m ready to turn your ideas into powerful digital realities. Let’s connect and create something innovative together!
        </div>
        <a href={resume} download={true} className='w-full md:w-[40%] h-16 sm:h-24 md:h-40 bg-[#db0306] text-black rounded-2xl hover:bg-[#f8273cff] text-lg sm:text-xl md:text-2xl flex justify-center items-center p-3'>
          My Resume⬇️
        </a>
      </div>

      {/* Final Image */}
      <div className='flex my-4 justify-center items-center'>
        <img src={fullpic} alt="" className='w-[90%] md:w-[80%] rounded-2xl object-cover' />
      </div>

    </div>
  )
}

export default Aboutsection

// #FF2226, #1E1E1E, #E9E3DC, #121212, #959595, #db0306, #FFFFFF- #2e2d2dc6 #f8273cff
