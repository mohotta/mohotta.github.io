'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { FiX } from 'react-icons/fi'

const items = [
  {
    id: 0,
    name: 'frontend development',
    techs: ['javascript', 'typescript', 'react', 'nextjs', 'html/css']
  },
  {
      id: 1,
      name: 'backend development',
      techs: ['spring boot', 'go language', 'flask', 'mongodb', 'postgresql', 'mysql']
  },
  {
      id: 2,
      name: 'data science & machine learning',
      techs: ['python', 'pytorch', 'numpy', 'pandas', 'sklearn', 'computer vision', 'nlp']
  },
]

const pros = [
  {
    id: 1,
    name: 'CML Insight Inc.',
    addr: 'Austin, TX, USA',
    pos: [
      {
        name: 'machine learning engineering intern',
        from: 'Novemver 2023',
        to: 'May 2024'
      },
    ]
  },
]

const Resume = () => {

  const [infoDialog, setInforDialog] = useState(-1)

  const [ animation1, setAnimation1 ] = useState("animate-opacity-up")
  const [ animation2, setAnimation2 ] = useState("animate-popup")
  const [ opacity, setOpacity ] = useState("opacity-0 hidden")
  const [ pop, setPop ] = useState("scale-0")

  const dialogRef = useRef<HTMLDivElement>()

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

  // TODO: more info
  // TODO: icons

  return (
    <>
      <div className='flex flex-col justify-center items-center min-h-screen relative z-0 py-[10vh] space-y-8 section' id='resume'>
        <div className='flex flex-col justify-center items-center'>
          <p>
          skills & experience
          </p>
          <h1 className='text-6xl font-bold'>
          resume
          </h1>
        </div>
        <div className='flex flex-row justify-evenly items-stretch content-start flex-wrap space-x-4'>
          {
            items.map(item => (
              <div key={item.id} className='flex flex-col justify-evenly items-center w-[280px] min-h-max bg-secondary/60 space-y-4 p-4 mb-4 rounded-lg'>
                <h1 className='text-bold text-center text-xl text-step2-foreground w-3/5'>{item.name}</h1>
                <div className='grid grid-cols-4 gap-2'>
                  {
                    item.techs.map(tech => (
                      <div key={tech} className='h-[50px] w-[50px] rounded-full bg-step9 mb-2'>

                      </div>
                    ))
                  }
                </div>
                <div className='flex flex-row justify-evenly items-center justify-self-end w-[90%]'>
                  <Button variant={'secondary'} className='rounded-full' onClick={() => setInforDialog(item.id)}>
                    more info
                  </Button>
                </div>
              </div>
            ))
          }
        </div>
        <div className='bg-secondary/60 flex flex-col justify-center items-center space-y-4 p-4 rounded-lg '>
          <h1 className='text-bold text-center text-xl text-step2-foreground'> professional affiliations </h1>
          <div className='flex flex-col md:flex-row flex-wrap justify-evenly items-start md:space-x-4 md:space-y-0 space-y-4 space-x-0'>
            {
              pros.map(pro => (
                <div key={pro.id} className='flex flex-col justify-center items-start md:mb-4 p-4 bg-secondary/40 rounded-lg'>
                  <h1 className='w-full text-bold text-center text-lg text-step3-foreground mb-2'> {pro.name} </h1>
                  <p className='w-full text-sm text-step4-foreground/50 text-right'> {pro.addr} </p>
                  {
                    pro.pos.map(position => (
                      <div key={position.name}>
                        <hr />
                        <p className='font-bold text-md'> {position.name} </p>
                        <p className='text-sm text-step4-foreground/50'> {position.from} - {position.to} </p>
                      </div>
                    ))
                  }
                </div>
              ))
            }
          </div>
        </div>
        <div className='flex flex-row justify-center items-center w-full'>
            <Button className='rounded-full' size={'lg'} variant={'secondary'}> <a href="https://bit.ly/moh-cv" target='_blank'>download resume</a> </Button>
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

export default Resume