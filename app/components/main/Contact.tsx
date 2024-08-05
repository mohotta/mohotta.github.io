'use client'

import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import React from 'react'
import { BiCopyAlt } from 'react-icons/bi'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FiPhone } from 'react-icons/fi'
import { IoMailOutline } from 'react-icons/io5'
import { PiAddressBook } from 'react-icons/pi'

const items = [
  {
    type: "email",
    icon: <IoMailOutline/>,
    value: "kumudulaksitha@gmail.com"
  },
  {
    type: "address",
    icon: <PiAddressBook/>,
    value: "maragala, hiramadagama, kahawatta 70150"
  },
  {
    type: "phone",
    icon: <FiPhone/>,
    value: "+94 74 189 4745"
  },
]

const socials = [
  {
    name: "github",
    icon: <FaGithub/>,
    link: "https://bit.ly/klm-gh"
  },
  {
    name: "linkedin",
    icon: <FaLinkedin/>,
    link: "https://bit.ly/klm-in"
  },
  {
    name: "twitter",
    icon: <FaTwitter/>,
    link: "https://bit.ly/klm-x"
  },
]

const Contact = () => {

    const { toast } = useToast()

    return (
      <div id='contact' className='flex flex-col justify-center items-center min-h-screen relative z-0 py-[10vh] space-y-4 section'>
        <div className='flex flex-col justify-center items-center'>
          <p>
            get in touch
          </p>
          <h1 className='text-6xl font-bold'>
            contact
          </h1>
        </div>
        <div className='flex flex-col lg:flex-row justify-center items-center gap-4 p-2 sm:p-4 rounded-lg bg-secondary/60'>
          <div className='flex flex-col justify-center items-start p-4'>
            {
              items.map(item => (
                <div key={item.type} className='flex flex-row justify-start items-center'>
                  <Button variant={'ghost'} disabled size={'icon'} className='rounded-full'>{item.icon}</Button>
                  <p>
                    {item.value}
                  </p>
                  <Button variant={'ghost'} size={'icon'} onClick={() => {
                    navigator.clipboard.writeText(item.value)
                  }} className='rounded-full'><BiCopyAlt/></Button>
                </div>
              ))
            }
          </div>
          <div className='flex flex-row justify-evenly items-center border-t-4 lg:border-t-0 lg:border-l-4 border-step2-foreground border-dotted space-x-4 p-4'>
            {
              socials.map(item => (
                <Button key={item.name} size="icon" variant={'ghost'} className='rounded-full'>
                  <a href={item.link} target='_blank'>{item.icon}</a>
                </Button>
              ))
            }
          </div>
        </div>
      </div>
    )
}

export default Contact