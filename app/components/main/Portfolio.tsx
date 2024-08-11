'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { FiX } from 'react-icons/fi'
import { Fade, Slide } from "react-awesome-reveal";


type Technology = 'typescript' | 'javascript' | 'react' | 'tailwind-css' | 'spring-boot' | 'java' | 'mongodb' | 'git/github' | 'python' | 'pytorch' | 'tensorflow' | 'html/css' | 'bootstrap' | 'php' | 'mysql' | 'c++' | 'arduino' | 'hugging-face' | 'vite' | 'nextjs';

const projects = [
  {
    id: 0,
    name: 'freebook social',
    tldr: 'Full stack instagram like social media application for a concept of open source social media platform.',
    description: 'We worked on this as semester 5 project in third year. We tried to predict speaker age, gender, emotions, pitch etc from the recorded audio. User can upload pre-recorded audio or record live directly from the dashboard. We used multiple speech datasets and state of the art models for the task. If there are no good models, we tried to buiold our own models (for example: emotion detection).',
    category: 'se',
    technologies: ['html/css', 'typescript', 'react', 'git/github', 'tailwind-css', 'spring-boot', 'java', 'mongodb'],
    url: 'https://github.com/sp-vis'
  },
  {
      id: 1,
      name: 'speech visualization',
      tldr: 'Dashboard showing the features of live recorded or uploaded audio files using machine learning models built using the wav2vec 2.0 model developed by Facebook.',
      description: 'We worked on this as semester 5 project in third year. We tried to predict speaker age, gender, emotions, pitch etc from the recorded audio. User can upload pre-recorded audio or record live directly from the dashboard. We used multiple speech datasets and state of the art models for the task. If there are no good models, we tried to buiold our own models (for example: emotion detection).',
      category: 'ds',
      technologies: ['python', 'git/github', 'hugging-face', 'pytorch', 'tensorflow', 'audio'],
      url: 'https://github.com/sp-vis'
  },
  {
      id: 2,
      name: 'personal portfolio',
      tldr: 'Portfolio site create using chakra ui and vite for myself. Hosted on github pages.',
      description: 'Portfolio site create using chakra ui and vite for myself. I started working on frontend development with this project. Learned technologies needed parellelly woth the development. First version was purely created on chakra ui templates. second version (current version) is created using chakra ui but  without usin any templates and used my imagination for ui/ux.',
      category: 'se',
      technologies: ['typescript', 'nextjs', 'react', 'vite', 'chakra ui', 'git/github', 'github pages', 'ui/ux'],
      url: 'https://github.com/mohotta/mohotta.github.io'
  },
  {
      id: 3,
      name: 'airline reservation system',
      tldr: 'airline ticker reservation system using php, mySQL & HTML.',
      description: 'airline reservation system created as a database management project in the university. We created a system with user management, ticket price discounts with user tier, seat booking system etc.',
      category: 'se',
      technologies: ['html/css', 'bootstrap', 'php', 'mysql', 'git/github'],
      url: 'https://github.com/mohotta/DBMS-MiniProject.git'
  },
]

const color_dict: Record<Technology, string> = {
  'typescript': 'bg-sky-500',
  'javascript': 'bg-amber-500',
  'react': 'bg-blue-500',
  'tailwind-css': 'bg-cyan-500',
  'spring-boot': 'bg-lime-500',
  'java': 'bg-red-500',
  'mongodb': 'bg-emerald-500',
  'git/github': 'bg-red-500',
  'python': 'bg-cyan-500',
  'pytorch': 'bg-red-500',
  'tensorflow': 'bg-sky-500',
  'html/css': 'bg-orange-500',
  'bootstrap': 'bg-violet-500',
  'php': 'bg-purple-500',
  'mysql': 'bg-rose-500',
  'c++': 'bg-sky-400',
  'arduino': 'bg-cyan-500',
  'hugging-face': 'bg-yellow-500',
  'vite': 'bg-pink-500',
  'nextjs': 'bg-slate-500'
}

const Portfolio = () => {

  const [infoDialog, setInforDialog] = useState(-1)

  const [ animation1, setAnimation1 ] = useState("animate-opacity-up")
  const [ animation2, setAnimation2 ] = useState("animate-popup")
  const [ opacity, setOpacity ] = useState("opacity-0 hidden")
  const [ pop, setPop ] = useState("scale-0")

  const dialogRef = useRef<HTMLDivElement | null>(null)
  const onClickOutside = (e: Event) => {
      if (infoDialog !== -1 && !dialogRef.current?.contains(e.target as Node)) {
          setInforDialog(-1)
      }
  }

  useEffect(() => {
      document.addEventListener('mousedown', onClickOutside)
  })

  useEffect(() => {
      setAnimation1(infoDialog !== -1? "animate-opacity-up": "animate-opacity-down")
      setAnimation2(infoDialog !== -1? "animate-popup": "animate-popdown")
      setTimeout(() => {
          setPop(infoDialog !== -1? "scale-100": "scale-0")
          setOpacity(infoDialog !== -1? "opacity-100": "opacity-0 hidden")
      }, 300)
  }, [infoDialog])

  useEffect(() => {
      if (infoDialog !== -1) {
          document.body.style.overflow = "hidden"
      } else {
          document.body.style.overflow = "auto"
      }
  }, [infoDialog])

  // TODO: add more info menu content
  // TODO: too long

  return (
    <>
      <div className='flex flex-col justify-center items-center min-h-screen relative z-0 py-[10vh] space-y-8 section' id='portfolio'>
        <Slide direction='right' duration={1000}>
          <div className='flex flex-col justify-center items-center'>
            <p>
              {'<top projects & works>'}
            </p>
            <h1 className='text-6xl font-bold'>
              ~/portfolio
            </h1>
          </div>
        </Slide>
        <Fade duration={1000} className='flex w-full'>
          <div className='flex flex-row justify-evenly items-stretch content-start flex-wrap w-full'>
            {
              projects.map(project => (
                <div key={project.id} className='flex flex-col justify-start items-center w-[280px] min-h-max bg-secondary/60 space-y-4 p-4 mb-4 rounded-lg'>
                  <h1 className='text-bold text-center text-xl text-step2-foreground'>{project.name}</h1>
                  <p className='w-4/5'>
                    {project.tldr}
                  </p>
                  <div className='flex flex-row justify-evenly flex-wrap space-x-1 w-9/12'>
                    {
                      project.technologies.map(tech => (
                        <div key={tech} className='flex flex-row justify-start items-center space-x-0.5'>
                          <div className={`w-[12px] h-[12px] rounded-full ${color_dict[tech as Technology] !== undefined? color_dict[tech as Technology]: 'bg-teal-500' }`}>
                          </div>
                          <p className='text-step2-foreground text-sm'>{tech}</p>
                        </div>
                      ))
                    }
                  </div>
                  <div className='flex flex-row justify-evenly items-center justify-self-end w-[90%]'>
                    <Button disabled variant={'secondary'} className='rounded-full' onClick={() => setInforDialog(project.id)}>
                      more info
                    </Button>
                    <Button disabled={project.url===""} variant={'secondary'} className='rounded-full'>
                      <a href={project.url}> repository </a>
                    </Button>
                  </div>
                </div>
              ))
            }
          </div>
        </Fade>
      </div>
      <div className='relative z-20'>
        <div className={`fixed top-0 left-0 flex flex-row justify-center items-center w-screen h-screen bg-step1/50 ${opacity} ${animation1}`}>
          <div ref={dialogRef} className={`flex flex-col justify-center items-center ${pop} ${animation2} bg-secondary/90 w-4/5 h-4/5 rounded-lg`}>
            <div className='flex flex-row justify-end items-center w-full'>
              <Button onClick={() => setInforDialog(-1)} size={'icon'} variant={'ghost'} className='rounded-full'><FiX/></Button>
            </div>
            <div className='w-full h-full'>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio