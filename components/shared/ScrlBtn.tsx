'use client'

import { FiArrowUp } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { Button } from '../ui/button'

export default function ScrlBtn() {

    const [showBtn, setShowBtn] = useState(false)

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setShowBtn(true)
        }
        else {
            setShowBtn(false)
        }
    }

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    return (
        <div>
            {
                showBtn?
                <Button
                    variant={'outline'}
                    aria-label='scroll-up'
                    size={'icon'}
                    onClick={handleClick}
                    className='w-12 h-12 rounded-full border-2 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover:scale-110'
                >
                    <FiArrowUp className="w-5 h-5"/>
                </Button>
                :
                <></>
            }
        </div>
    )

}
