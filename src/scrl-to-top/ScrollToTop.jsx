import { FiArrowUp } from 'react-icons/fi'
import './ScrollToTop.css'
import { useEffect, useState } from 'react'

export default function ScrollToTop() {

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
        <div className={showBtn? 'scrl-btn-wrap ': 'hide-scrl-btn'} onClick={handleClick}>
            <FiArrowUp className="scrl-btn"/>
        </div>
    )

}
