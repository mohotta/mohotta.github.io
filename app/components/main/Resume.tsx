import React, { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { audio, css, flask, go, html, js, lang, linux, mongodb, nextjs, numpy, pandas, postgre, python, react, sklearn, spboot, sql, team, torch, ts, vision, windows } from '@/public/icons'
import Image from 'next/image'

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
    id: 1,
    name: 'CML Insight Inc.',
    addr: 'Austin, TX, USA',
    pos: [
      {
        name: 'machine learning engineering intern',
        from: 'Nov 2023',
        to: 'may 2024'
      },
    ]
  },
  {
    id: 2,
    name: 'IESL Student Chapter - UoM',
    addr: 'Moratuwa, LK',
    pos: [
      {
        name: 'Member of PR Pillar',
        from: 'jun 2022',
        to: 'oct 2023'
      },
      {
        name: 'Head of PR Pillar',
        from: 'oct 2023',
        to: 'present'
      }
    ]
  },
  {
    id: 3,
    name: 'ACM Student Chapter - UOM',
    addr: 'Moratuwa, LK',
    pos: [
      {
        name: 'graphics designer',
        from: 'aug 2023',
        to: 'present'
      },
    ]
  },
  {
    id: 4,
    name: 'Department of CSE - UOM',
    addr: 'Moratuwa, LK',
    pos: [
      {
        name: 'part-time instructor (TA) - CS1033',
        from: 'jun 2024',
        to: 'present'
      },
    ]
  },
]

const Resume = () => {
  
  // TODO: icons

  return (
      <div className='flex flex-col justify-center items-center min-h-screen relative z-0 py-[10vh] space-y-8 section' id='resume'>
        <div className='flex flex-col justify-center items-center'>
          <p>
          skills & experience
          </p>
          <h1 className='text-6xl font-bold'>
          resume
          </h1>
        </div>
        <div className='flex flex-row justify-evenly items-stretch content-start flex-wrap space-x-0 md:space-x-4'>
          {
            items.map(item => (
              <div key={item.id} className='flex flex-col justify-evenly items-center w-[280px] min-h-max bg-secondary/60 space-y-4 p-4 mb-4 rounded-lg'>
                <h1 className='text-bold text-center text-xl text-step2-foreground w-3/5'>{item.name}</h1>
                <div className='grid grid-cols-4 gap-2'>
                  {
                    item.techs.map(tech => (
                      <div key={tech.name} className='flex flex-col justify-start items-center'>
                          <div className='relative h-[40px] w-[40px]'>
                            <Image src={tech.icon.src} blurDataURL={tech.icon.blurDataURL} alt={tech.name} layout='fill' objectFit='cover' className='rounded-full'/>
                          </div>
                        <p className='text-center text-step1-foreground/50 text-sm leading-4'>
                          {tech.name}
                        </p>
                      </div>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
        <div className='flex flex-col justify-center items-center space-y-4 p-4 rounded-lg '>
          <h1 className='text-bold text-center text-xl text-step2-foreground'> professional affiliations </h1>
          <div className='flex flex-row flex-wrap justify-evenly items-stretch gap-4'>
            {
              pros.map(pro => (
                <div key={pro.id} className='flex flex-col justify-start items-start p-4 bg-secondary/60 rounded-lg w-[280px]'>
                  <h1 className='w-full text-bold text-center text-lg text-step3-foreground mb-2'> {pro.name} </h1>
                  <p className='w-full text-sm text-step4-foreground/50 text-right'> {pro.addr} </p>
                  {
                    pro.pos.map(position => (
                      <div key={position.name} className='w-full'>
                        <hr className='my-1'/>
                        <p className='text-md'> {position.name} </p>
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
  )
}

export default Resume