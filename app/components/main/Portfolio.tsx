'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { FiX, FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { Fade, Slide } from "react-awesome-reveal";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import portfolioConfig from '@/data/portfolio.json'


type Technology = 'typescript' | 'javascript' | 'react' | 'tailwind-css' | 'spring-boot' | 'java' | 'mongodb' | 'git/github' | 'python' | 'pytorch' | 'tensorflow' | 'html/css' | 'bootstrap' | 'php' | 'mysql' | 'c++' | 'arduino' | 'hugging-face' | 'vite' | 'nextjs' | 'nodejs' | 'computer-vision' | 'flutter' | 'docker' | 'aws' | 'firebase' | 'graphql' | 'redux';

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
  {
      id: 6,
      name: 'E-Commerce Mobile App',
      tldr: 'Cross-platform mobile application for online shopping with real-time inventory and payment integration.',
      description: '',
      category: 'mobile',
      technologies: ['flutter', 'firebase', 'nodejs', 'mongodb'],
      url: ''
  },
  {
      id: 7,
      name: 'Task Management Dashboard',
      tldr: 'Modern task management dashboard with team collaboration features and real-time updates.',
      description: '',
      category: 'se',
      technologies: ['react', 'typescript', 'tailwind-css', 'nodejs', 'postgresql'],
      url: ''
  },
  {
      id: 8,
      name: 'Weather Prediction System',
      tldr: 'ML-based weather forecasting system using historical data and satellite imagery.',
      description: '',
      category: 'ds',
      technologies: ['python', 'tensorflow', 'computer-vision', 'aws'],
      url: ''
  },
  {
      id: 9,
      name: 'Blockchain Voting System',
      tldr: 'Secure decentralized voting platform built on blockchain technology with smart contracts.',
      description: '',
      category: 'se',
      technologies: ['javascript', 'nodejs', 'mongodb', 'git/github'],
      url: ''
  },
  {
      id: 10,
      name: 'IoT Home Automation',
      tldr: 'Smart home automation system using IoT sensors and mobile app control interface.',
      description: '',
      category: 'iot',
      technologies: ['c++', 'arduino', 'firebase', 'flutter'],
      url: ''
  },
  {
      id: 11,
      name: 'GraphQL API Gateway',
      tldr: 'Microservices architecture with GraphQL API gateway for scalable backend systems.',
      description: '',
      category: 'se',
      technologies: ['graphql', 'nodejs', 'docker', 'mongodb'],
      url: ''
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
  'computer-vision': 'bg-red-500',
  'flutter': 'bg-blue-400',
  'docker': 'bg-blue-600',
  'aws': 'bg-orange-600',
  'firebase': 'bg-yellow-600',
  'graphql': 'bg-pink-600',
  'redux': 'bg-purple-600'
}

const Portfolio = () => {

  const [infoDialog, setInforDialog] = useState(-1)
  const [currentProjectCount, setCurrentProjectCount] = useState(0)
  const [isExpanding, setIsExpanding] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)
  
  const projects = portfolioConfig.projects
  const color_dict = portfolioConfig.technologies
  
  // Dynamic step size based on screen size
  // Mobile (< 768px): Show 3 projects per step
  // Larger screens (>= 768px): Show 6 projects per step  
  const getStepSize = React.useCallback(() => {
    if (windowWidth < 768) { // Mobile (md breakpoint)
      return 3
    }
    return portfolioConfig.settings.initialProjectsCount // 6 for larger screens
  }, [windowWidth])
  
  const STEP_SIZE = getStepSize()
  const INITIAL_PROJECTS_COUNT = STEP_SIZE

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

  // Handle window resize for responsive project count
  useEffect(() => {
      const handleResize = () => {
          setWindowWidth(window.innerWidth)
      }
      
      // Set initial window width and project count
      if (typeof window !== 'undefined') {
          setWindowWidth(window.innerWidth)
          window.addEventListener('resize', handleResize)
          
          return () => {
              window.removeEventListener('resize', handleResize)
          }
      }
  }, [])

  // Initialize and update current project count based on window width
  useEffect(() => {
      if (windowWidth > 0) {
          const stepSize = getStepSize()
          // Reset to initial count when screen size changes
          if (currentProjectCount === 0 || currentProjectCount < stepSize) {
              setCurrentProjectCount(stepSize)
          }
      }
  }, [windowWidth, currentProjectCount, getStepSize])

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

  const showMoreProjects = () => {
      setIsExpanding(true)
      const newCount = Math.min(currentProjectCount + STEP_SIZE, projects.length)
      setCurrentProjectCount(newCount)
      
      // Reset expanding state after animation
      setTimeout(() => {
          setIsExpanding(false)
      }, 500)
  }

  const showLessProjects = () => {
      setIsExpanding(true)
      setCurrentProjectCount(INITIAL_PROJECTS_COUNT)
      
      // Reset expanding state after animation
      setTimeout(() => {
          setIsExpanding(false)
      }, 500)
  }

  const displayedProjects = projects.slice(0, currentProjectCount)
  const hasMoreProjects = currentProjectCount < projects.length
  const canShowLess = currentProjectCount > INITIAL_PROJECTS_COUNT

  return (
    <>
      <div className='flex flex-col justify-center items-center min-h-screen relative z-0 py-[10vh] space-y-6 section' id='portfolio'>
        <Slide direction='right' duration={1000}>
          <div className='flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8'>
            <p className='text-xs sm:text-sm md:text-base font-medium tracking-widest text-muted-foreground mb-1 sm:mb-2 uppercase'>
              {portfolioConfig.settings.subtitle}
            </p>
            <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight'>
              {portfolioConfig.settings.title}
            </h1>
          </div>
        </Slide>
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full transition-all duration-500 ${isExpanding ? 'transform scale-[0.98]' : ''}`}>
            {
              displayedProjects.map((project, index) => (
                <Fade 
                  key={project.id} 
                  duration={index >= INITIAL_PROJECTS_COUNT ? 800 : 1000}
                  delay={index >= INITIAL_PROJECTS_COUNT ? ((index - INITIAL_PROJECTS_COUNT) % STEP_SIZE) * 100 : 0}
                  className='flex justify-center items-stretch'
                >
                  <div className='flex flex-col justify-between items-start w-full bg-card/50 backdrop-blur-sm border border-border/50 space-y-4 p-6 rounded-xl hover:bg-card/70 transition-all duration-300 hover:scale-105 hover:shadow-lg'>
                    <div className='space-y-3 w-full'>
                      <h1 className='font-bold text-lg sm:text-xl text-foreground text-center'>{project.name}</h1>
                      <p className='text-sm sm:text-base text-muted-foreground leading-relaxed text-center'>
                        {project.description}
                      </p>
                      <div className='flex flex-wrap gap-2 justify-center'>
                        {
                          project.technologies.slice(0, 4).map((tech: string) => (
                            <div key={tech} className='flex items-center gap-1 bg-muted/20 px-2 py-1 rounded-full'>
                              <div className={`w-2 h-2 rounded-full ${color_dict[tech as Technology]?.color || 'bg-primary'}`}>
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
                      <Button variant={'outline'} className='flex-1 rounded-lg text-xs sm:text-sm transition-all duration-300 hover:scale-105' onClick={() => setInforDialog(project.id)}>
                        More Info
                      </Button>
                      <Button disabled={project.repositoryUrl===""} variant={'outline'} className='flex-1 rounded-lg text-xs sm:text-sm transition-all duration-300 hover:scale-105 hover:bg-primary/10'>
                        <a href={project.repositoryUrl} target='_blank' rel='noopener noreferrer'> Repository </a>
                      </Button>
                    </div>
                  </div>
                </Fade>
              ))
            }
          </div>
          
          {(hasMoreProjects || canShowLess) && (
            <Fade duration={1000} className='flex justify-center items-center w-full mt-8 gap-4'>
              {hasMoreProjects && (
                <Button 
                  onClick={showMoreProjects}
                  variant='outline'
                  className='px-6 py-3 text-sm font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-primary/10 border-2 hover:border-primary/50'
                >
                  <span className='flex items-center gap-2'>
                    Show More
                    <FiChevronDown className='w-4 h-4 transition-transform duration-300' />
                  </span>
                </Button>
              )}
              
              {canShowLess && (
                <Button 
                  onClick={showLessProjects}
                  variant='outline'
                  className='px-6 py-3 text-sm font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-secondary/10 border-2 hover:border-secondary/50'
                >
                  <span className='flex items-center gap-2'>
                    Show Less
                    <FiChevronUp className='w-4 h-4 transition-transform duration-300' />
                  </span>
                </Button>
              )}
            </Fade>
          )}
      </div>
      <div className='relative z-20'>
        <div className={`fixed top-0 left-0 flex flex-row justify-center items-center w-screen h-screen bg-background/80 backdrop-blur-sm ${opacity} ${animation1}`}>
          <div ref={dialogRef} className={`flex flex-col ${pop} ${animation2} bg-card/95 backdrop-blur-md border border-border/50 w-[95vw] max-w-4xl h-[90vh] rounded-xl shadow-2xl overflow-hidden`}>
            <div className='flex flex-row justify-between items-center p-4 border-b border-border/50 bg-muted/20'>
              <h2 className='text-lg font-semibold text-foreground'>
                {infoDialog !== -1 && projects.find(p => p.id === infoDialog)?.name}
              </h2>
              <Button onClick={() => setInforDialog(-1)} size={'icon'} variant={'ghost'} className='rounded-full hover:bg-destructive/10 hover:text-destructive'>
                <FiX className='w-4 h-4'/>
              </Button>
            </div>
            <div className='flex-1 overflow-y-auto p-6'>
              {infoDialog !== -1 && (
                <div className='prose prose-sm sm:prose-base prose-slate dark:prose-invert max-w-none'>
                  <ReactMarkdown 
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeHighlight]}
                    components={{
                      h1: ({children}) => (
                        <h1 className='text-2xl sm:text-3xl font-bold text-foreground mb-4 pb-2 border-b border-border/30'>
                          {children}
                        </h1>
                      ),
                      h2: ({children}) => (
                        <h2 className='text-xl sm:text-2xl font-semibold text-foreground mt-8 mb-4'>
                          {children}
                        </h2>
                      ),
                      h3: ({children}) => (
                        <h3 className='text-lg sm:text-xl font-medium text-foreground mt-6 mb-3'>
                          {children}
                        </h3>
                      ),
                      p: ({children}) => (
                        <p className='text-muted-foreground leading-relaxed mb-4'>
                          {children}
                        </p>
                      ),
                      ul: ({children}) => (
                        <ul className='list-disc list-inside text-muted-foreground space-y-2 mb-4 ml-4'>
                          {children}
                        </ul>
                      ),
                      ol: ({children}) => (
                        <ol className='list-decimal list-inside text-muted-foreground space-y-2 mb-4 ml-4'>
                          {children}
                        </ol>
                      ),
                      li: ({children}) => (
                        <li className='text-muted-foreground'>
                          {children}
                        </li>
                      ),
                      code: ({className, children, ...props}: any) => {
                        const isInline = !className
                        return isInline ? (
                          <code className='bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground' {...props}>
                            {children}
                          </code>
                        ) : (
                          <code className='block bg-muted p-4 rounded-lg overflow-x-auto text-sm font-mono text-foreground' {...props}>
                            {children}
                          </code>
                        )
                      },
                      pre: ({children}) => (
                        <pre className='bg-muted p-4 rounded-lg overflow-x-auto mb-4 border border-border/30'>
                          {children}
                        </pre>
                      ),
                      blockquote: ({children}) => (
                        <blockquote className='border-l-4 border-primary/50 pl-4 py-2 bg-muted/30 rounded-r-lg mb-4 italic text-muted-foreground'>
                          {children}
                        </blockquote>
                      ),
                      table: ({children}) => (
                        <div className='overflow-x-auto mb-4'>
                          <table className='w-full border-collapse border border-border/30 rounded-lg'>
                            {children}
                          </table>
                        </div>
                      ),
                      th: ({children}) => (
                        <th className='border border-border/30 px-4 py-2 bg-muted/50 text-left font-semibold text-foreground'>
                          {children}
                        </th>
                      ),
                      td: ({children}) => (
                        <td className='border border-border/30 px-4 py-2 text-muted-foreground'>
                          {children}
                        </td>
                      ),
                      img: ({src, alt}) => (
                        <div className='mb-6'>
                          <Image 
                            src={src || ''} 
                            alt={alt || ''} 
                            width={800}
                            height={400}
                            className='w-full rounded-lg border border-border/30 shadow-lg'
                            unoptimized
                          />
                          {alt && (
                            <p className='text-sm text-muted-foreground text-center mt-2 italic'>
                              {alt}
                            </p>
                          )}
                        </div>
                      ),
                      a: ({href, children}) => (
                        <a 
                          href={href} 
                          target='_blank' 
                          rel='noopener noreferrer'
                          className='text-primary hover:text-primary/80 underline transition-colors duration-200'
                        >
                          {children}
                        </a>
                      )
                    }}
                  >
                    {(projects.find(p => p.id === infoDialog) as any)?.detailedDescription || (projects.find(p => p.id === infoDialog) as any)?.longDescription || 'No detailed description available for this project.'}
                  </ReactMarkdown>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio