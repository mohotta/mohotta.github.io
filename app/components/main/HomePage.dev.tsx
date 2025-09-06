'use client'

import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { RxDoubleArrowDown } from "react-icons/rx";
import { Fade } from 'react-awesome-reveal';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
import Image from 'next/image';
import Link from 'next/link';
import heroConfig from '@/data/hero.dev.json'; // Use dev config for localhost
import { getBlogUrl } from '@/lib/env';


// Icon mapping for social links
const iconMap: Record<string, React.ReactNode> = {
  FaGithub: <FaGithub/>,
  FaLinkedin: <FaLinkedin/>,
  FaTwitter: <FaTwitter/>
}

const HomePage = () => {

  const onClick = () => {
    const element = document.getElementById(heroConfig.cta.targetSection)
    element?.scrollIntoView({
        behavior: 'smooth'
    })
}

  return (
    <div id='home' className='min-h-screen w-full flex flex-col justify-center items-center section relative z-0'>
      
      <div className='flex flex-col lg:flex-row justify-center items-center text-center lg:text-left max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 gap-8 lg:gap-12'>
        
        {/* Profile Image Section */}
        <Fade duration={1000} direction="left" triggerOnce>
          <div className='flex-shrink-0 order-1 lg:order-2'>
            <div className='relative w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] lg:w-[260px] lg:h-[260px] aspect-square mx-auto'>
              <Image 
                alt={heroConfig.profileImage.alt} 
                src={heroConfig.profileImage.src} 
                fill
                sizes="(max-width: 640px) 160px, (max-width: 768px) 180px, (max-width: 1024px) 220px, 260px"
                priority
                placeholder='blur' 
                blurDataURL={heroConfig.profileImage.blurSrc} 
                className='rounded-full border-4 sm:border-6 lg:border-8 border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-primary/20'
              />
            </div>
          </div>
        </Fade>
        
        {/* Content Section */}
        <div className='flex flex-col justify-center items-center lg:items-start flex-1 order-2 lg:order-1 space-y-4 lg:space-y-6'>
          
          <Fade duration={1000} direction="up" triggerOnce>
            <div className='mb-2 sm:mb-3'>
              <p className='text-xs sm:text-sm md:text-base font-medium tracking-widest text-muted-foreground mb-1 sm:mb-2 uppercase'>
                {heroConfig.greeting}
              </p>
              <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-foreground mb-0 sm:mb-1 leading-tight'>
                {heroConfig.name.first} <span className='text-primary/80'>{heroConfig.name.last}</span>
              </h1>
            </div>
          </Fade>
          
          <div className='w-full h-[30px] sm:h-[35px] md:h-[40px] lg:h-[45px] mb-2 sm:mb-3'>
            <TypeAnimation
              sequence={heroConfig.roles.flatMap(role => [role, 3000])}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-muted-foreground/80 h-full flex items-center justify-center lg:justify-start'
            />
          </div>
          
          <Fade duration={1000} direction="up" triggerOnce delay={200}>
            <p className='text-xs sm:text-sm md:text-base text-muted-foreground max-w-2xl leading-relaxed mb-3 sm:mb-4 text-center lg:text-left'>
              {heroConfig.bio}
            </p>
          </Fade>
          
          <Fade duration={1000} direction="up" triggerOnce delay={400}>
            <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full lg:w-auto'>
              <div className='flex flex-col sm:flex-row gap-3 sm:gap-4'>
                <Button 
                  className='w-full sm:w-auto px-6 py-4 text-sm font-medium bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105' 
                  onClick={onClick}
                >
                  {heroConfig.cta.text}
                  <RxDoubleArrowDown className='ml-2 animate-bounce'/>
                </Button>
                
                <Link href={getBlogUrl()}>
                  <Button 
                    variant="outline"
                    className='w-full sm:w-auto px-6 py-4 text-sm font-medium border-2 hover:bg-primary/10 hover:border-primary/50 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105'
                  >
                    {heroConfig.blog.text}
                  </Button>
                </Link>
              </div>
              
              <TooltipProvider>
                <div className='flex items-center gap-2 sm:gap-3'>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a href={`mailto:${heroConfig.contact.email}`} aria-label="Send email">
                        <Button 
                          size="icon" 
                          variant='outline' 
                          className='w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover:scale-110 text-base sm:text-lg'
                        >
                          <IoMail />
                        </Button>
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Send Email</p>
                    </TooltipContent>
                  </Tooltip>
                  
                  {heroConfig.socialLinks.map(social => (
                    <Tooltip key={social.name}>
                      <TooltipTrigger asChild>
                        <a 
                          href={social.url} 
                          target='_blank' 
                          aria-label={`Visit ${social.name}`}
                          className="inline-block"
                        >
                          <Button 
                            size="icon" 
                            variant='outline' 
                            className='w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover:scale-110 text-base sm:text-lg'
                          >
                            {iconMap[social.icon]}
                          </Button>
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{social.name.charAt(0).toUpperCase() + social.name.slice(1)}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </TooltipProvider>
            </div>
          </Fade>
          
        </div>
        
      </div>
      
    </div>
  )
}

export default HomePage