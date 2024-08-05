'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { FiX } from 'react-icons/fi'

const projects = [
  {
    id: 1,
    name: 'freebook social',
    tldr: 'Full stack instagram like social media application for a concept of open source social media platform.',
    description: 'We worked on this as semester 5 project in third year. We tried to predict speaker age, gender, emotions, pitch etc from the recorded audio. User can upload pre-recorded audio or record live directly from the dashboard. We used multiple speech datasets and state of the art models for the task. If there are no good models, we tried to buiold our own models (for example: emotion detection).',
    category: 'se',
    technologies: ['typescript', 'react', 'tailwind css', 'spring boot', 'java', 'mongodb'],
    url: 'https://github.com/sp-vis'
  },
  {
      id: 1,
      name: 'speech visualization',
      tldr: 'Dashboard showing the features of live recorded or uploaded audio files using machine learning models built using the wav2vec 2.0 model developed by Facebook.',
      description: 'We worked on this as semester 5 project in third year. We tried to predict speaker age, gender, emotions, pitch etc from the recorded audio. User can upload pre-recorded audio or record live directly from the dashboard. We used multiple speech datasets and state of the art models for the task. If there are no good models, we tried to buiold our own models (for example: emotion detection).',
      category: 'ds',
      technologies: ['python', 'git/github', 'deep learning', 'hugging face', 'pytorch', 'tensorflow', 'audio processing'],
      url: 'https://github.com/sp-vis'
  },
  {
      id: 2,
      name: 'personal portfolio',
      tldr: 'Portfolio site create using chakra ui and vite for myself. Hosted on github pages.',
      description: 'Portfolio site create using chakra ui and vite for myself. I started working on frontend development with this project. Learned technologies needed parellelly woth the development. First version was purely created on chakra ui templates. second version (current version) is created using chakra ui but  without usin any templates and used my imagination for ui/ux.',
      category: 'se',
      technologies: ['typescript', 'react', 'vite', 'chakra ui', 'git/gihub', 'github pages', 'frontend development'],
      url: 'https://github.com/mohotta/mohotta.github.io'
  },
  {
      id: 3,
      name: 'gaze tracking system',
      tldr: 'Gaze tracking program  to see if a person is paying attention to the screen using meadiapipe libraries.',
      description: 'Gaze tracking system to track the attention of the user to the screen using facial landmarks obtained using googles mediapipe libraires. I created the training data by myself and trained a random forest model to give results.',
      category: 'ds',
      technologies: ['python', 'mediapipe', 'opencv', 'git/github', 'machine learning'],
      url: 'https://github.com/mohotta/gaze-tracker-python'
  },
  {
      id: 4,
      name: 'airline reservation system',
      tldr: 'airline ticker reservation system using php, mySQL & HTML.',
      description: 'airline reservation system created as a database management project in the university. We created a system with user management, ticket price discounts with user tier, seat booking system etc.',
      category: 'se',
      technologies: ['html/css', 'bootstrap', 'php', 'mysql', 'git/github', 'database management'],
      url: 'https://github.com/mohotta/DBMS-MiniProject.git'
  },
  {
      id: 5,
      name: 'micro-mouse project',
      tldr: 'Programmed a maze solving algorithm for a micro-mouse robot.',
      description: 'Programmed a maze solving algorithm for a micro-mouse project ot present in a competition. Used c++ to use in a micro controller board. I used flood fill algorimth for the project',
      category: 'se',
      technologies: ['c++', 'arduino', 'flood-fill algorithm'],
      url: ''
  },
  {
      id: 6,
      name: 'rpal intepreter',
      tldr: 'Intepreter program for rpal programming laguage.',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident cupiditate, maxime beatae facere nisi repudiandae atque eius sunt commodi expedita alias obcaecati exercitationem a minima totam at, dolor corrupti possimus dolorum! Ab, quod reiciendis illum qui consectetur quaerat, similique eveniet aut, facere provident tenetur eaque itaque delectus necessitatibus quo. A!",
      category: 'se',
      technologies: ['c++', 'programming laguages'],
      url: ''
  },
]

const Articles = () => {

  // FIXME: fix content
  // TODO: too long

  return (
      <div className='flex flex-col justify-center items-center min-h-screen relative z-0 py-[10vh] space-y-8 section' id='articles'>
        <div className='flex flex-col justify-center items-center'>
          <p>
          browse knowledge
          </p>
          <h1 className='text-6xl font-bold'>
          articles
          </h1>
        </div>
        <div className='flex flex-row justify-evenly items-stretch content-start flex-wrap w-full'>
          {
            projects.map(project => (
              <div key={project.id} className='flex flex-col justify-start items-center w-[280px] min-h-max bg-secondary/60 space-y-4 p-4 mb-4 rounded-lg'>
                <h1 className='text-bold text-center text-xl text-step2-foreground'>{project.name}</h1>
                <p className='w-4/5 line-clamp-6'>
                  {project.description}
                </p>
                <div className='flex flex-row justify-evenly items-center justify-self-end w-[90%]'>
                  <Button variant={'secondary'} className='rounded-full'>
                  <a href={project.url}> read here </a>
                  </Button>
                  <Button disabled variant={'secondary'} className='rounded-full'>
                    <a href={project.url}> external </a>
                  </Button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
  )
}

export default Articles