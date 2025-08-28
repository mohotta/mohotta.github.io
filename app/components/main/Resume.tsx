'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { audio, css, flask, go, html, js, lang, linux, mongodb, nextjs, numpy, pandas, postgre, python, react, sklearn, spboot, sql, team, torch, ts, vision, windows } from '@/public/icons'
import Image from 'next/image'
import { Fade, Slide } from "react-awesome-reveal";


const items = [
  {
    id: 0,
    name: 'frontend development',
    techs: [
      {
        name: 'html',
        level: 'pro',
        icon: html
      },
      {
        name: 'css',
        level: 'pro',
        icon: css
      },
      {
        name: 'js',
        level: 'medium',
        icon: js
      },
      {
        name: 'ts',
        level: 'medium',
        icon: ts
      },
      {
        name: 'react',
        level: 'pro',
        icon: react
      },
      {
        name: 'nextjs',
        level: 'medium',
        icon: nextjs
      },
    ]
  },
  {
      id: 1,
      name: 'backend development',
      techs: [
        {
          name: 'spring boot',
          level: 'medium',
          icon: spboot
        },
        {
          name: 'flask',
          level: 'medium',
          icon: flask
        },
        {
          name: 'golang',
          level: 'medium',
          icon: go
        },
        {
          name: 'mongodb',
          level: 'basic',
          icon: mongodb
        },
        {
          name: 'postgresql',
          level: 'medium',
          icon: postgre
        },
        {
          name: 'mysql',
          level: 'medium',
          icon: sql
        }
      ]
  },
  {
      id: 2,
      name: 'data science & machine learning',
      techs: [
        {
          name: 'python',
          level: 'pro',
          icon: python
        },
        {
          name: 'pytorch',
          level: 'medium',
          icon: torch
        },
        {
          name: 'numpy',
          level: 'pro',
          icon: numpy
        },
        {
          name: 'pandas',
          level: 'pro',
          icon: pandas
        },
        {
          name: 'sklearn',
          level: 'pro',
          icon: sklearn
        },
        {
          name: 'vision',
          level: 'basic',
          icon: vision
        },
        {
          name: 'audio',
          level: 'medium',
          icon: audio
        },
        {
          name: 'nlp',
          level: 'basic',
          icon: lang
        },
      ]
  },
  {
    id: 3,
    name: 'soft skills & other skills',
    techs: [
      {
        name: 'linux',
        level: 'pro',
        icon: linux
      },
      {
        name: 'windows',
        level: 'pro',
        icon: windows
      },
      {
        name: 'english',
        level: 'medium',
        icon: lang
      },
      {
        name: 'sinhala',
        level: 'pro',
        icon: lang
      },
      {
        name: 'teamwork',
        level: 'pro',
        icon: team
      },
    ]
},
]

const pros = [
  {
    id: 0,
    name: 'Codegen International Pvt Ltd',
    addr: 'Colombo, LK',
    pos: [
      {
        name: 'Software Engineer - R&D Team',
        from: 'July 2025',
        to: 'Present'
      },
    ]
  },
  {
    id: 1,
    name: 'IESL Student Chapter - UoM',
    addr: 'Moratuwa, LK',
    pos: [
      {
        name: 'Senior Web Editor',
        from: 'Sep 2024',
        to: 'July 2025'
      },
      {
        name: 'Head of PR Pillar',
        from: 'Oct 2023',
        to: 'Sep 2024'
      },
      {
        name: 'Member of PR Pillar',
        from: 'Jun 2022',
        to: 'Oct 2023'
      },
    ]
  },
  {
    id: 2,
    name: 'Department of CSE - UoM',
    addr: 'Moratuwa, LK',
    pos: [
      {
        name: 'Part-time Instructor (TA) - CS1033',
        from: 'Jun 2024',
        to: 'November 2024'
      },
    ]
  },
  {
    id: 3,
    name: 'CML Insight Inc.',
    addr: 'Austin, TX, USA',
    pos: [
      {
        name: 'Machine Learning Engineering Intern',
        from: 'Nov 2023',
        to: 'May 2024'
      },
    ]
  },
  {
    id: 4,
    name: 'ACM Student Chapter - UoM',
    addr: 'Moratuwa, LK',
    pos: [
      {
        name: 'Graphics Designer',
        from: 'Aug 2023',
        to: 'July 2025'
      },
    ]
  },
]

const Resume = () => {
  
  // TODO: icons

  return (
      <div className='flex flex-col justify-center items-center min-h-screen relative z-0 py-[10vh] space-y-6 section' id='resume'>
        <Slide duration={1000} direction='right'>
          <div className='flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8'>
            <p className='text-xs sm:text-sm md:text-base font-medium tracking-widest text-muted-foreground mb-1 sm:mb-2 uppercase'>
              {'<journey & milestones>'}
            </p>
            <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight'>
              ~/experience
            </h1>
          </div>
        </Slide>
          <div className='w-full px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20 lg:mt-24'>
            <div className='max-w-7xl mx-auto'>
              <div className='flex flex-wrap justify-center gap-6 w-full'>
              {
                pros.map(pro => (
                  <Fade key={pro.id} duration={1000} className='flex justify-center items-stretch w-full sm:w-80 md:w-72 lg:w-80'>
                    <div key={pro.id} className='flex flex-col justify-start items-center p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl w-full hover:bg-card/70 transition-all duration-300 hover:scale-105'>
                      <h1 className='w-full font-bold text-lg text-foreground mb-2 text-center'> {pro.name} </h1>
                      <p className='w-full text-sm text-muted-foreground text-right mb-4'> {pro.addr} </p>
                      {
                        pro.pos.map(position => (
                          <div key={position.name} className='w-full'>
                            <hr className='my-2 border-border/30'/>
                            <p className='text-base font-semibold text-foreground'> {position.name} </p>
                            <p className='text-sm text-muted-foreground'> {position.from} - {position.to} </p>
                          </div>
                        ))
                      }
                    </div>
                  </Fade>
                ))
              }
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center w-full mt-12'>
            <Button className='px-8 py-4 text-base font-medium bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105' size={'lg'}> 
              <a href="https://bit.ly/moh-cv" target='_blank' rel='noopener noreferrer'>View Full CV</a> 
            </Button>
          </div>
      </div>
  )
}

export default Resume
