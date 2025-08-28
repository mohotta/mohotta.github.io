'use client'

import schoolLogo from './images/ganaknada-logo.png'
import uniLogo from './images/University_of_Moratuwa_logo.png'
import exam from './images/exam.png'
import gpa from './images/score.png'
import hometown from './images/house.png'
import ml from './images/ml.png'
import data from './images/data.png'
import webdev from './images/coding.png'
import linux from './images/linux.png'
import tech from './images/lightbulb.png'
import program from './images/programming.png'
import photo from './images/photography.png'
import debian from './images/debian.png'
import Image from 'next/image'
import { Fade, Slide, Zoom } from "react-awesome-reveal";


const facts = [
  {
      id: 1,
      icon: schoolLogo,
      firstLine: 'Gankanda Central',
      secondLine: 'College Pelmadulla',
      attrLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRctHUaq0V6g9lx2kUv0bZRspyEr9yx-SUxRtZXj7MKA&s'
  },
  {
      id: 2,
      icon: exam,
      firstLine: 'GCE A/L 2019',
      secondLine: 'DR - 3 IR - 21',
      attrLink: 'https://www.flaticon.com/free-icons/exam'
  },
  {
      id: 3,
      icon: uniLogo,
      firstLine: 'BSc. in Engineering',
      secondLine: 'CSE (Data Science) UoM',
      attrLink: 'https://upload.wikimedia.org/wikipedia/en/6/60/University_of_Moratuwa_logo.png'
  },
  {
      id: 4,
      icon: ml,
      firstLine: 'Machine learning: ',
      secondLine: '1+ yrs experience',
      attrLink: 'https://www.flaticon.com/free-icons/machine-learning'
  },
  {
      id: 5,
      icon: data,
      firstLine: 'Data Science: ',
      secondLine: '1+ yrs experience',
      attrLink: 'https://www.flaticon.com/free-icons/epidemiology'
  },
  {
      id: 6,
      icon: webdev,
      firstLine: 'Software Engineering: ',
      secondLine: '1+ yrs experience',
      attrLink: 'https://www.flaticon.com/free-icons/web-development'
  },
  {
      id: 7,
      icon: linux,
      firstLine: 'In love with: ',
      secondLine: 'Linux & FOSS',
      attrLink: 'https://www.flaticon.com/free-icons/linux'
  },
  {
    id: 8,
    icon: debian,
    firstLine: 'I use Debian btw',
    secondLine: '🤪 😌 🧑🏽‍💻',
    attrLink: 'https://cdn1.iconfinder.com/data/icons/Vista-Inspirate_1.0/128x128/apps/debian.png'
  },
  {
      id: 9,
      icon: tech,
      firstLine: 'Love to explore: ',
      secondLine: 'New Techs',
      attrLink: 'https://www.flaticon.com/free-icons/innovation'
  },
  {
      id: 10,
      icon: program,
      firstLine: 'In love with: ',
      secondLine: 'Programming',
      attrLink: 'https://www.flaticon.com/free-icons/code'
  },
  {
      id: 11,
      icon: photo,
      firstLine: 'Favourite hobby: ',
      secondLine: 'Photography',
      attrLink: 'https://www.flaticon.com/free-icons/photography'
  },
  {
      id: 12,
      icon: hometown,
      firstLine: 'Hometown: ',
      secondLine: 'Godakalwela, LK',
      attrLink: 'https://www.flaticon.com/free-icons/house'
  },
]



const About = () => {

	return (
		<div className='flex flex-col justify-center items-center min-h-screen relative z-0 py-[10vh] space-y-6 section' id='about'>
            <Slide duration={1000} direction='right'>
                <div className='flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8'>
                    <p className='text-xs sm:text-sm md:text-base font-medium tracking-widest text-muted-foreground mb-1 sm:mb-2 uppercase'>
                        {'<get to know more>'}
                    </p>
                    <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight'>
                        ~/about-me
                    </h1>
                </div>
            </Slide>
            <div className='flex flex-col justify-center items-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8'>
                <div className='flex flex-col justify-center items-center md:flex-row w-full gap-6 sm:gap-8'>
                    <Zoom cascade duration={1000}>
                        <div className='relative w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] aspect-square'>
                            <Image alt='profile' src={'/profile.png'} layout='fill' placeholder='blur' blurDataURL='/profile-blur.png' className='rounded-full border-4 sm:border-6 border-primary/20 hover:border-primary/40 transition-all duration-300'/>
                        </div>
                    </Zoom>
                    <Fade duration={1000} className='w-full flex justify-center items-center'>
                        <p className='font-medium text-sm sm:text-base md:text-lg text-muted-foreground text-center leading-relaxed max-w-2xl'>
                            &quot;A dedicated professional and technology enthusiast with strong teamwork
                            and collaboration skills. I thrive in diverse environments and am
                            committed to driving team success. Passionate about leveraging
                            technology for growth, I aim to contribute significantly to a company&apos;s
                            success, always striving for excellence and continuous learning.&quot;
                        </p>
                    </Fade>
                </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full bg-card/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-border/50'>
                        {
                            facts.map((fact) => (
                                <Fade key={fact.id} duration={1000}>
                                    <div key={fact.id} className='flex flex-row justify-start items-center gap-3 p-3 sm:p-4 rounded-lg hover:bg-muted/20 transition-all duration-300 hover:scale-105'>
                                    <Image src={fact.icon} width={40} height={40} loading='lazy' alt={fact.firstLine} className='w-8 h-8 sm:w-10 sm:h-10'/>
                                    <p className='text-xs sm:text-sm text-muted-foreground leading-relaxed'>{fact.firstLine}<br/>{fact.secondLine}</p>
                                    </div>
                                </Fade>
                            ))
                        }
                    </div>
            </div>
		</div>
	)
}

export default About
