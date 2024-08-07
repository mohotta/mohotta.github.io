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
import Image from 'next/image'


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
      firstLine: 'BSc. in Engineering UG',
      secondLine: 'CSE (Data Science) UoM',
      attrLink: 'https://upload.wikimedia.org/wikipedia/en/6/60/University_of_Moratuwa_logo.png'
  },
  {
      id: 4,
      icon: gpa,
      firstLine: 'Current GPA',
      secondLine: '3.82 / 4.0',
      attrLink: 'https://www.flaticon.com/free-icons/exam'
  },
  {
      id: 5,
      icon: ml,
      firstLine: 'Machine learning: ',
      secondLine: '0.5 yr experience',
      attrLink: 'https://www.flaticon.com/free-icons/machine-learning'
  },
  {
      id: 6,
      icon: data,
      firstLine: 'Data Science: ',
      secondLine: '0.5 yr experience',
      attrLink: 'https://www.flaticon.com/free-icons/epidemiology'
  },
  {
      id: 7,
      icon: webdev,
      firstLine: 'Web Development: ',
      secondLine: '0.5 yr experience',
      attrLink: 'https://www.flaticon.com/free-icons/web-development'
  },
  {
      id: 8,
      icon: linux,
      firstLine: 'In love with: ',
      secondLine: 'Linux & FOSS',
      attrLink: 'https://www.flaticon.com/free-icons/linux'
  },
  {
      id: 9,
      icon: tech,
      firstLine: 'In love with: ',
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
      firstLine: 'In love with: ',
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
		<div className='flex flex-col justify-center items-center min-h-screen relative z-0 py-[10vh] space-y-4 section' id='about'>
            <div className='flex flex-col justify-center items-center'>
                <p>
                get to know more
                </p>
                <h1 className='text-6xl font-bold'>
                about me
                </h1>
            </div>
            <div className='flex flex-col justify-center items-center max-w-[90%] space-y-4'>
                <div className='flex flex-col justify-center items-center md:flex-row w-full md:w-[80%] gap-4'>
                    <div className='relative w-[200px] h-[200px] aspect-square opacity-90'>
                        <Image alt='profile' src={'/profile.png'} layout='fill' placeholder='blur' blurDataURL='/profile-blur.ong' className='rounded-full'/>
                    </div>
                    <p className='font-medium italic text-step2-foreground text-center md:w-[60%] w-[90%]'>
                        “A dedicated professional and technology enthusiast with strong teamwork
                        and collaboration skills. I thrive in diverse environments and am
                        committed to driving team success. Passionate about leveraging
                        technology for growth, I aim to contribute significantly to a company’s
                        success, always striving for excellence and continuous learning.”
                    </p>
                </div>
                <div className='flex flex-row flex-wrap justify-evenly items-center content-start bg-secondary/60 p-8 rounded-lg gap-8'>
                    {
                    facts.map((fact) => (
                        <div key={fact.id} className='flex flex-row justify-start items-center min-w-[250px] h-[70px] gap-2 pl-4 '>
                        <Image src={fact.icon} width={50} height={50} loading='lazy' alt={fact.firstLine} className='w-[50px]'/>
                        <p className=''>{fact.firstLine}<br/>{fact.secondLine}</p>
                        </div>
                    ))
                    }
                </div>
            </div>
		</div>
	)
}

export default About