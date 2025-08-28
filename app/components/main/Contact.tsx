'use client'

import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { BiCopyAlt } from 'react-icons/bi'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FiPhone, FiCheck } from 'react-icons/fi'
import { IoMailOutline } from 'react-icons/io5'
import { PiAddressBook } from 'react-icons/pi'
import { Fade, Slide } from "react-awesome-reveal";


const items = [
  {
    type: "email",
    icon: <IoMailOutline/>,
    value: "kumudumohottala@proton.me"
  },
  {
    type: "address",
    icon: <PiAddressBook/>,
    value: "hostel village complex, university of moratuwa"
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
    link: "https://twitter.com/mohotta_"
  },
]

const Contact = () => {
    const [copiedItem, setCopiedItem] = useState<string | null>(null)

    const handleCopy = async (item: typeof items[0]) => {
        try {
            await navigator.clipboard.writeText(item.value)
            setCopiedItem(item.type)
            setTimeout(() => setCopiedItem(null), 2000)
        } catch (error) {
            console.error('Failed to copy:', error)
        }
    }

    return (
      <div id='contact' className='flex flex-col justify-center items-center min-h-screen relative z-0 py-[10vh] space-y-6 section'>
        <Slide direction='right' duration={1000}>
          <div className='flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8'>
            <p className='text-xs sm:text-sm md:text-base font-medium tracking-widest text-muted-foreground mb-1 sm:mb-2 uppercase'>
              {'<get in touch>'}
            </p>
            <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight'>
              ~/contact
            </h1>
          </div>
        </Slide>
        <Fade duration={1000}>
          <div className='flex flex-col lg:flex-row justify-center items-center gap-6 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-card/50 backdrop-blur-sm border border-border/50 p-6 sm:p-8 rounded-xl'>
            <div className='flex flex-col justify-center items-start space-y-4 w-full lg:w-auto'>
              {
                items.map(item => (
                  <div key={item.type} className='flex flex-row justify-start items-center gap-3 w-full p-3 rounded-lg hover:bg-muted/20 transition-all duration-300'>
                    <div className='text-primary text-lg'>{item.icon}</div>
                    <p className='text-sm sm:text-base text-muted-foreground flex-1'>
                      {item.value}
                    </p>
                    <Button 
                      variant={'ghost'} 
                      size={'icon'} 
                      onClick={() => handleCopy(item)}
                      className={`w-8 h-8 rounded-full transition-all duration-300 ${
                        copiedItem === item.type 
                          ? 'bg-green-500/20 hover:bg-green-500/30 text-green-600 scale-110' 
                          : 'hover:bg-primary/10 hover:scale-105'
                      }`}
                    >
                      {copiedItem === item.type ? (
                        <FiCheck className='w-4 h-4 animate-bounce' />
                      ) : (
                        <BiCopyAlt className='w-4 h-4' />
                      )}
                    </Button>
                  </div>
                ))
              }
            </div>
            <div className='flex flex-row justify-center items-center border-t lg:border-t-0 lg:border-l border-border/30 gap-4 pt-6 lg:pt-0 lg:pl-6 w-full lg:w-auto'>
              {
                socials.map(item => (
                  <a key={item.name} href={item.link} target='_blank' aria-label={`Visit ${item.name}`}>
                    <Button size="icon" variant={'outline'} className='w-12 h-12 rounded-full border-2 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover:scale-110 text-lg'>
                      {item.icon}
                    </Button>
                  </a>
                ))
              }
            </div>
          </div>
        </Fade>
      </div>
    )
}

export default Contact
