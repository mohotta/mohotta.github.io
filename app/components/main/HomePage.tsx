'use client'

import { Button } from '@/components/ui/button';
import { RxDoubleArrowDown } from "react-icons/rx";
import { Fade } from 'react-awesome-reveal';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';


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


const HomePage = () => {

  const onClick = () => {
    const element = document.getElementById('about')
    element?.scrollIntoView({
        behavior: 'smooth'
    })
}

  return (
    <div id='home' className='min-h-screen w-full flex flex-col justify-center items-center section relative z-0'>
      
      <div className='flex flex-col justify-center items-center text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        
        <Fade duration={1000} direction="up" triggerOnce>
          <div className='mb-2 sm:mb-3'>
            <p className='text-xs sm:text-sm md:text-base font-medium tracking-widest text-muted-foreground mb-0 sm:mb-1 uppercase'>
              Welcome to my world
            </p>
            <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-0 sm:mb-1 leading-tight'>
              Kumudu <span className='text-primary/80'>Mohottala</span>
            </h1>
          </div>
        </Fade>
        
        <div className='w-full h-[35px] sm:h-[40px] md:h-[50px] mb-2 sm:mb-3'>
          <TypeAnimation
            sequence={[
              'Full-Stack Developer',
              3000,
              'Data Science Enthusiast',
              3000,
              'Machine Learning Explorer',
              3000,
              'Continuous Learner',
              3000,
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground/80 h-full flex items-center justify-center'
          />
        </div>
        
        <Fade duration={1000} direction="up" triggerOnce delay={200}>
          <p className='text-xs sm:text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-3 sm:mb-4'>
            Software Engineer at Codegen International and Computer Science & Engineering graduate at University of Moratuwa, passionate about creating innovative solutions through code and data.
          </p>
        </Fade>
        
        <Fade duration={1000} direction="up" triggerOnce delay={400}>
          <div className='flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full'>
            <Button 
              className='w-full sm:w-auto px-6 py-4 text-sm font-medium bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105' 
              onClick={onClick}
            >
              Explore My Work
              <RxDoubleArrowDown className='ml-2 animate-bounce'/>
            </Button>
            
            <div className='flex items-center gap-2 sm:gap-3'>
              {socials.map(item => (
                <a 
                  key={item.name} 
                  href={item.link} 
                  target='_blank' 
                  aria-label={`Visit ${item.name}`}
                >
                  <Button 
                    size="icon" 
                    variant='outline' 
                    className='w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover:scale-110 text-base sm:text-lg'
                  >
                    {item.icon}
                  </Button>
                </a>
              ))}
            </div>
          </div>
        </Fade>
        
      </div>
      
    </div>
  )
}

export default HomePage
