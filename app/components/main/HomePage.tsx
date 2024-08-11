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
    link: "https://bit.ly/klm-x"
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
      <div className='flex flex-col justify-center items-start gap-4 max-w-[90%]'>
        <Fade duration={1000}>
          <p className='text-xl font-bold tracking-widest text-step2-foreground/60'> Hi, I am </p>
          <h1 className='font-bold text-6xl text-step6-foreground dark:text-step3-foreground'> Kumudu Mohottala. </h1>
        </Fade>
        <div className='w-full h-[70px] min-[445px]:h-max'>
          <TypeAnimation
            sequence={[
              'I build things for web 🌐.',
              3000,
              'I do stuff with data 📊.',
              3000,
              'I train programs to do works 🤖.',
              3000,
              'I love to learn new things 🖥️.',
              1000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            className={`text-3xl text-left font-medium w-full text-step2-foreground/75 h-full`}
          />
        </div>
        <Fade duration={1000}>
          <p className='font-semibold text-justify max-w-[400px] text-step2-foreground/60 min-[604px]:max-w-[500px]'>
            I am a Computer Science & Engineering (Data Science) undergraduate of University of Moratuwa, Sri Lanka who searches for professional and learning opportunities to widen my horizons in software development & data science.
          </p>
        </Fade>
        <Fade duration={1000} className='flex flex-row w-full justify-center items-center'>
          <div className='flex flex-row justify-center items-center w-full my-8 gap-2 sm:gap-4'>
              <Button className='rounded-full flex gap-2' size={'lg'} variant={'secondary'} onClick={onClick}> learn more <RxDoubleArrowDown className='animate-bounce'/> </Button>
              {
                socials.map(item => (
                  <Button key={item.name} size="icon" variant={'secondary'} className='rounded-full'>
                    <a href={item.link} target='_blank' aria-label='social-link'>{item.icon}</a>
                  </Button>
                ))
              }
          </div>
        </Fade>
      </div>
    </div>
  )
}📊

export default HomePage
