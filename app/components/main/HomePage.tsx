'use client'

import { Fade } from 'react-awesome-reveal';
import { TypeAnimation } from 'react-type-animation';


const HomePage = () => {

  return (
    <div id='home' className='min-h-screen flex flex-col w-full justify-center items-center section relative z-0'>
      <Fade duration={1000}>
        <h1 className='text-center text-7xl md:text-8xl font-bold mt-[10vh] text-step2-foreground'> Kumudu Mohottala </h1>
      </Fade>
      <TypeAnimation
        sequence={[
          'data scientist',
          3000,
          'software engineer', 
          3000, 
          'tech enthusiast',
          1000,
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        className={`text-3xl md:text-4xl font-semibold tracking-widest w-full text-center text-step4-foreground`}
      />
    </div>
  )
}

export default HomePage
