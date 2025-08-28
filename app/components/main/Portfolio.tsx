'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { FiX } from 'react-icons/fi'
import { Fade, Slide } from "react-awesome-reveal";


type Technology = 'typescript' | 'javascript' | 'react' | 'tailwind-css' | 'spring-boot' | 'java' | 'mongodb' | 'git/github' | 'python' | 'pytorch' | 'tensorflow' | 'html/css' | 'bootstrap' | 'php' | 'mysql' | 'c++' | 'arduino' | 'hugging-face' | 'vite' | 'nextjs' | 'nodejs' | 'computer-vision';

const projects = [
  {
    id: 0,
    name: 'freebook social',
    tldr: 'Full stack instagram like social media application for a concept of open source social media platform.',
    description: '',
    category: 'se',
    technologies: ['html/css', 'typescript', 'react', 'git/github', 'tailwind-css', 'spring-boot', 'java', 'mongodb'],
    url: 'https://github.com/mohotta/freebook-backend'
  },
  {
    id: 1,
    name: 'vidly movie rental serivce',
    tldr: 'Backend service for a movie rental service called "Vidly" programmed using nodejs as my first project in nodejs.',
    description: '',
    category: 'se',
    technologies: ['javascript', 'mongodb', 'git/github', 'nodejs'],
    url: 'https://github.com/mohotta/vidly'
  },
  {
    id: 2,
    name: 'Traffic Accident Anticipation and Drivable Area Prediction',
    tldr: 'Final year project (ongoing) on anticipating upcoming accidents while predicting drivable area for 2-3 seconds in the future using dashcam video input.',
    description: '',
    category: 'ds',
    technologies: ['python', 'pytorch', 'git/github', 'computer-vision'],
    url: 'https://github.com/mohotta/Graph-Graph'
  },
  {
      id: 3,
      name: 'speech visualization',
      tldr: 'Dashboard showing the features of live recorded or uploaded audio files using machine learning models built using the wav2vec 2.0 model developed by Facebook.',
      description: 'We worked on this as semester 5 project in third year. We tried to predict speaker age, gender, emotions, pitch etc from the recorded audio. User can upload pre-recorded audio or record live directly from the dashboard. We used multiple speech datasets and state of the art models for the task. If there are no good models, we tried to buiold our own models (for example: emotion detection).',
      category: 'ds',
      technologies: ['python', 'git/github', 'hugging-face', 'pytorch', 'tensorflow', 'audio'],
      url: 'https://github.com/sp-vis'
  },
  {
      id: 4,
      name: 'personal portfolio',
      tldr: 'Portfolio site create using chakra ui and vite for myself. Hosted on github pages.',
      description: 'Portfolio site create using chakra ui and vite for myself. I started working on frontend development with this project. Learned technologies needed parellelly woth the development. First version was purely created on chakra ui templates. second version (current version) is created using chakra ui but  without usin any templates and used my imagination for ui/ux.',
      category: 'se',
      technologies: ['typescript', 'nextjs', 'react', 'vite', 'chakra ui', 'git/github', 'github pages', 'ui/ux'],
      url: 'https://github.com/mohotta/mohotta.github.io'
  },
  {
      id: 5,
      name: 'Airline ticket reservation system',
      tldr: 'Airline ticket reservation system using php, mySQL & HTML.',
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
  'nextjs': 'bg-slate-500',
  'nodejs': 'bg-green-500',
  'computer-vision': 'bg-red-500'
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
      <div className='flex flex-col justify-center items-center min-h-screen relative z-0 py-[10vh] space-y-6 section' id='portfolio'>
        <Slide direction='right' duration={1000}>
          <div className='flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8'>
            <p className='text-xs sm:text-sm md:text-base font-medium tracking-widest text-muted-foreground mb-1 sm:mb-2 uppercase'>
              {'<top projects & works>'}
            </p>
            <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight'>
              ~/portfolio
            </h1>
          </div>
        </Slide>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full'>
            {
              projects.map(project => (
                <Fade key={project.id} duration={1000} className='flex justify-center items-stretch'>
                  <div key={project.id} className='flex flex-col justify-between items-start w-full bg-card/50 backdrop-blur-sm border border-border/50 space-y-4 p-6 rounded-xl hover:bg-card/70 transition-all duration-300 hover:scale-105 hover:shadow-lg'>
                    <div className='space-y-3 w-full'>
                      <h1 className='font-bold text-lg sm:text-xl text-foreground text-center'>{project.name}</h1>
                      <p className='text-sm sm:text-base text-muted-foreground leading-relaxed text-center'>
                        {project.tldr}
                      </p>
                      <div className='flex flex-wrap gap-2 justify-center'>
                        {
                          project.technologies.slice(0, 4).map(tech => (
                            <div key={tech} className='flex items-center gap-1 bg-muted/20 px-2 py-1 rounded-full'>
                              <div className={`w-2 h-2 rounded-full ${color_dict[tech as Technology] !== undefined? color_dict[tech as Technology]: 'bg-primary' }`}>
                              </div>
                              <p className='text-xs text-muted-foreground'>{tech}</p>
                            </div>
                          ))
                        }
                        {project.technologies.length > 4 && (
                          <div className='flex items-center bg-muted/20 px-2 py-1 rounded-full'>
                            <p className='text-xs text-muted-foreground'>+{project.technologies.length - 4}</p>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className='flex flex-col sm:flex-row gap-2 w-full mt-auto'>
                      <Button disabled variant={'outline'} className='flex-1 rounded-lg text-xs sm:text-sm transition-all duration-300 hover:scale-105' onClick={() => setInforDialog(project.id)}>
                        More Info
                      </Button>
                      <Button disabled={project.url===""} variant={'outline'} className='flex-1 rounded-lg text-xs sm:text-sm transition-all duration-300 hover:scale-105 hover:bg-primary/10'>
                        <a href={project.url} target='_blank' rel='noopener noreferrer'> Repository </a>
                      </Button>
                    </div>
                  </div>
                </Fade>
              ))
            }
          </div>
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