'use client'

import React, { useState } from 'react'
import { Chat } from '../chat'
import { Button } from '@/components/ui/button'

const HomePage = () => {

  const [open, setOpen] = useState(false)

  return (
    <div id='home' className='min-h-screen flex w-full justify-center items-center section bg-abstractPattern bg-cover bg-fixed relative z-0'>
      <div className='h-screen w-full bg-step1/50 backdrop-blur-sm'>
        home
      </div>
    </div>
  )
}

export default HomePage
