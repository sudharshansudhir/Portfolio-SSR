import React from 'react'
import bgImage from '../assets/imagess/projects-bg.png'
import portfolio from "../assets/imagess/proj-1.png"
import tomato from "../assets/imagess/tomato.png"
import upskills from "../assets/imagess/upskills.png"
import html from "../assets/imagess/html-color.svg"
import css from "../assets/imagess/css-color.svg"
import js from "../assets/imagess/js-color.svg"
import bs from "../assets/imagess/bs-color.svg"
import tw from "../assets/imagess/tw-color.svg"
import reactimg from "../assets/imagess/react-color.svg"
import node from "../assets/imagess/node-color.svg"
import express from "../assets/imagess/express.png"
import mongodb from "../assets/imagess/mongo-color.svg"
import py from "../assets/imagess/py-color.svg"
import java from "../assets/imagess/java-color.svg"
import figma from "../assets/imagess/figma-color.svg"
import canva from "../assets/imagess/canva-color.svg"
import mysql from "../assets/imagess/mysql-logo.svg"
import git from "../assets/imagess/git.svg"
import github from "../assets/imagess/github.svg"
import blender from "../assets/imagess/blender.svg"
import unity from "../assets/imagess/unity.svg"
import dice from "../assets/imagess/dicepro.png"
import shoecart from "../assets/imagess/shoecart.png"
import todo from "../assets/imagess/todo.png"
import rps from "../assets/imagess/rps.png"
import letter from "../assets/imagess/leave.png"
import notes from "../assets/imagess/note.png"
import svc from "../assets/imagess/svc.jpg"
import ar from "../assets/imagess/ar.jpg"
import flixplore from "../assets/imagess/flixplore.jpg"

const Projectssection = () => {

    const projects=[
            {
                title:"Flixplore-AI",
                description:"A Movie streaming website with movie filtering BOT",
                stack:"MERN STACK",
                imageUrl:flixplore,
                projectUrl:"https://flixplore-ai.vercel.app/",
                githubUrl:"https://github.com/sudharshansudhir/Flixplore-AI",
                techs:[figma,canva,reactimg,node,express,mongodb,tw,git,github]

            },
            {
                title:"Portfolio",
                description:"A personal portfolio website to showcase my skills, projects, and experience as a Full Stack Developer.",
                stack:"REACT+TAILWIND",
                imageUrl:portfolio,
                projectUrl:"https://portfolio-ssr-five.vercel.app/",
                githubUrl:"https://github.com/sudharshansudhir/Portfolio-SSR",
                techs:[figma,canva,reactimg,tw,git,github]

            },
            {
                title:"UPSkills",
                description:"A online platform with courses and resources to help individuals enhance their skills and advance their careers.",
                stack:"MERN STACK",            
                imageUrl:upskills,
                projectUrl:"https://up-skills-lms.vercel.app/",
                githubUrl:"https://github.com/sudharshansudhir/UPSkills",
                techs:[figma,canva,reactimg,node,express,mongodb,tw,git,github]
            },
            {
                title:"Tomato",
                description:"A Online food booking platform that allows users to order various cuisines and have them delivered to their doorstep.",
                stack:"REACT+TAILWIND",
                imageUrl:tomato,
                projectUrl:"https://tomato-mern-stack-project.vercel.app/",
                githubUrl:"https://github.com/sudharshansudhir/Tomato-MERN-Stack-project",
                techs:[reactimg,node,express,mongodb,css,git,github]
            },
            {
                title:"ShoeCart",
                description:"A Online shoe booking platform that user can search and buy their favorites.",
                stack:"REACT+TAILWIND",
                imageUrl:shoecart,
                projectUrl:"https://shoe-cart-frontend-one.vercel.app/",
                githubUrl:"https://github.com/sudharshansudhir/ShoeCart-frontend",
                techs:[reactimg,tw,git,github]
            },
            {
                title:"ToDo-Website",
                description:"A well designed todo website in which user can add their task to do in future",
                stack:"MERN",
                imageUrl:todo,
                projectUrl:"https://mern-todo-frontend-gold.vercel.app/",
                githubUrl:"https://github.com/sudharshansudhir/mern-todo-frontend",
                techs:[reactimg,node,express,mongodb,git,github]
            },
            {
                title:"Smart Voice Calculator",
                description:"A Modern Voice calculator mobile app that makes user to calculate scientific complex calculations in seconds through voice command",
                stack:"React Native",
                imageUrl:svc,
                projectUrl:"",
                githubUrl:"https://github.com/sudharshansudhir/SmartVoiceCalculator-app",
                techs:[reactimg,github]
            },
            {
                title:"AR in ATLAS",
                description:"A Augumented Reality project that helps kids to understand world map in form of 3d globe",
                stack:"Blender+Unity",
                imageUrl:ar,
                projectUrl:"",
                githubUrl:"https://github.com/sudharshansudhir/AR-in-Atlas",
                techs:[blender,unity,github]
            },
            {
                title:"Roll UR Dice",
                description:"A javascript based Dice Rolling game which gives unique dice results everytime",
                stack:"HTML+CSS+JS",
                imageUrl:dice,
                projectUrl:"https://sudharshansudhir.github.io/RollUrDice-SSR/",
                githubUrl:"https://github.com/sudharshansudhir/RollUrDice-SSR",
                techs:[html,css,js,github]
            },
            {
                title:"Rock Paper Scissors",
                description:"A javascript based Rock Paper Scissor game.Never feel alone. You have a well known friend 'Computer'",
                stack:"HTML+CSS+JS",
                imageUrl:rps,
                projectUrl:"https://sudharshansudhir.github.io/MERN-training/rps.html",
                githubUrl:"https://github.com/sudharshansudhir/MERN-training/blob/main/rps.html",
                techs:[html,css,js,github]
            },
            {
                title:"Leave Letter Generator",
                description:"A javascript based leave letter generetor which helps in reducing your time of making sick leave letter",
                stack:"HTML+CSS+JS",
                imageUrl:letter,
                projectUrl:"https://sudharshansudhir.github.io/LeaveLetter-Generator",
                githubUrl:"https://github.com/sudharshansudhir/LeaveLetter-Generator",
                techs:[html,css,js,github]
            },
            {
                title:"NotePad Pro",
                description:"A javascript based Notepad which can be used for taking quick notes",
                stack:"HTML+CSS+JS",
                imageUrl:notes,
                projectUrl:"https://sudharshansudhir.github.io/NotePad-Pro",
                githubUrl:"https://github.com/sudharshansudhir/NotePad-Pro",
                techs:[html,css,js,github]
            },
        ]


  return (
    <div className='py-8'>
        <div className='flex justify-center items-center'>
        <p className='w-[80%] sm:w-[70%] md:w-[60%] rounded-2xl text-center text-2xl sm:text-3xl md:text-4xl py-3 px-4 sm:px-6 bg-[#db0306]'>
          Projects
        </p>
      </div>


    <div className='flex flex-col justify-center items-center '>
            {projects && projects.map((project,index)=>{
                return(
                    <div key={index} className='md:flex w-[70%] md:h-70 hover:scale-104 md:gap-8 my-10 border border-white rounded-2xl bg-[#1e1e1e]  justify-between items-center'>
                      
                            <div className="relative group w-full md:w-[50%] h-full rounded-2xl overflow-hidden">
  {/* Project Image */}
  <img
    className="rounded-2xl w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:blur-sm"
    src={project.imageUrl}
    alt=""
  />

  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4  opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-2xl">
    
    {project.projectUrl && <a
      href={project.projectUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-black not font-semibold transition-colors duration-300"
    >
      View Live
    </a>}
    

    <a
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-2 bg-gray-800 hover:bg-gray-900 rounded-lg text-white not font-semibold transition-colors duration-300"
    >
      GitHub
    </a>
  </div>
</div>

                        
                        <div className='flex w-[100%] p-2 md:w-[50%] text-[#e9e3dc] gap-3 flex-col items-center md:items-start'>
                            <div className='md:text-2xl'>{project.title}</div>
                            <div className='md:text-lg text-[#bd0306]'>{project.stack}</div>
                            <div className='not text-[20px]'>{project.description}</div>
                            <div className='flex flex-wrap justify-center items-center '>
                                {project.techs&&
                                    project.techs.map((items)=>{
                                        return <img src={items} alt='items' className='md:w-8 md:h-8 md:mx-3 my-2 w-5 h-5 mx-1'/>
                                    })
                                }
                            </div>
                        </div>
                        {/* <div>{project.projectUrl}</div> */}
                    </div>
                )
            })}
    </div>  

    </div>
  )
}

export default Projectssection