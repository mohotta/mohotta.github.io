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
                    variant={'secondary'}
                    aria-label='scroll-up'
                    size={'icon'}
                    onClick={handleClick}
                    className='rounded-full'
                >
                    <FiArrowUp/>
                </Button>
                :
                <></>
            }
        </div>
    )

}
