import React from 'react'
import bgImage from '../assets/imagess/projects-bg.png'
import portfolio from "../assets/imagess/proj-1.png"
import tomato from "../assets/imagess/tomato.png"
import upskills from "../assets/imagess/upskills.png"
import Footer from './Footer'
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
import { Link } from 'react-router-dom'
import flixplore from "../assets/imagess/flixplore.png"

const RecentProjects = () => {

    const projects=[
                 {
                      title:"Flixplore-AI",
                      description:"A Movie streaming website with movie filtering and sorting chatBOT.",
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
                    projectUrl:"",
                    techs:[figma,canva,reactimg,tw,git,github]
    
                },
                {
                    title:"UPSkills",
                    description:"A online platform with courses and resources to help individuals enhance their skills and advance their careers.",
                    stack:"MERN STACK",            
                    imageUrl:upskills,
                    projectUrl:"",
                    techs:[figma,canva,reactimg,node,express,mongodb,tw,git,github]
                },
                {
                    title:"Tomato",
                    description:"A Online food booking platform that allows users to order various cuisines and have them delivered to their doorstep.",
                    stack:"REACT+TAILWIND",
                    imageUrl:tomato,
                    projectUrl:"",
                    techs:[reactimg,node,express,mongodb,css,git,github]
                },
            ]


  return (
    <div className='w-[100%] bg-cover bg-center' style={{backgroundImage:`url(${bgImage})`}}>
        <div className='flex py-10 md:py-16 justify-center items-center text-[20px] md:text-4xl md:font-bold'>
            <div className='w-[60%] bg-[#db0306] text-center rounded-2xl md:py-8 p-8 md:px-16'>
                Recent Projects
            </div>
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

  {/* Overlay */}
  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4  opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-2xl">
    
    {/* Live Link */}
    <a
      href={project.projectUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-black not font-semibold transition-colors duration-300"
    >
      View Live
    </a>

    {/* GitHub Link */}
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

        <div className='flex justify-center items-center'>
            <Link to="/projects" className='bg-[#db0306] px-3 py-2 rounded-md text-center hover:bg-[#a3070aff]'>View More</Link>
        </div>
        <Footer/>

    </div>
  )
}

export default RecentProjects

// #FF2226, #1E1E1E, #E9E3DC, #121212, #959595, #db0306, #a3070aff, #FFFFFF