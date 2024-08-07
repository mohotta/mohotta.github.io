import { Button } from '@/components/ui/button'
import Image from 'next/image'

const articles = [
  {
      id: 1,
      name: 'Getting Started with Linux: Introduction',
      description: 'Linux is a free and open source operating system kernel (Kernel is the backbone of an operating system which enables an operating system to manage all the underlying hardware including input-output and memory) developed by Linus Torvalds. Linux kernel-based operating systems (i.e. Linux operating systems) are the best operating systems out there because of many reasons like customizability, availability of different flavors and desktop environments, and also the best reason, you are the boss here, OS does not restrict anything for you, you just need to know how to do it.',
      image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/0*u9zsQ2ewcXy1-UMK',
      blurImage: 'https://miro.medium.com/v2/resize:fit:50/format:webp/0*u9zsQ2ewcXy1-UMK',
      url: 'https://medium.com/@mohotta/start-with-the-linux-operating-system-c6276642d1c5'
  },
  {
      id: 2,
      name: 'Getting Started with Linux: Downloading and Preparing',
      description: 'Linux Mint is an operating system created based on Ubuntu which is by far the most popular Linux-based operating system in the world. But Linux Mint comes first regarding beginner friendliness especially if you are a Windows operating system user. Linux Mint is now offering a separate version of itself based on Debian Linux (ubuntu is created using this too) called Linux Mint LMDE. But I am using the Ubuntu-based Linux Mint version to give you the best first Linux experience as much as possible.',
      image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/0*dH3OA5QXhmrP4YKB',
      blurImage: 'https://miro.medium.com/v2/resize:fit:50/format:webp/0*dH3OA5QXhmrP4YKB',
      url: 'https://medium.com/@mohotta/getting-started-with-linux-downloading-and-preparing-c283a33710a3'
  },
]

const Articles = () => {

  // TODO: too long

  return (
      <div className='flex flex-col justify-center items-center min-h-screen relative z-0 py-[10vh] space-y-8 section' id='articles'>
        <div className='flex flex-col justify-center items-center'>
          <p>
          top blog posts
          </p>
          <h1 className='text-6xl font-bold'>
          articles
          </h1>
        </div>
        <div className='flex flex-row justify-evenly items-stretch content-start flex-wrap w-full'>
          {
            articles.map(article => (
              <div key={article.id} className='flex flex-col justify-start items-center w-[280px] min-h-max bg-secondary/60 space-y-4 p-4 mb-4 rounded-lg'>
                <h1 className='text-bold text-center text-xl text-step2-foreground'>{article.name}</h1>
                <div className='relative w-[220px] h-[120px]'>
                  <Image alt={article.name} src={article.image} layout='fill' objectFit='cover' loading='lazy' blurDataURL={article.blurImage} placeholder='blur' className='rounded-lg'/>
                </div>
                <p className='w-4/5 line-clamp-6'>
                  {article.description}
                </p>
                <div className='flex flex-row justify-evenly items-center justify-self-end w-[90%]'>
                  <Button disabled variant={'secondary'} className='rounded-full'>
                  <a href={article.url}> read here </a>
                  </Button>
                  <Button variant={'secondary'} className='rounded-full'>
                    <a href={article.url}> external </a>
                  </Button>
                </div>
              </div>
            ))
          }
        </div>
        <div className='flex flex-row justify-center items-center w-full'>
            <Button disabled className='rounded-full' size={'lg'} variant={'secondary'}> <a href="/blog">go to the blog</a> </Button>
        </div>
      </div>
  )
}

export default Articles