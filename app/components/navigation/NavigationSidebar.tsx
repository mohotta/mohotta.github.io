'use client'

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { FiEdit, FiFileText, FiHome, FiMail, FiSave, FiUser } from "react-icons/fi"

export default function NavigationSidebar() {

    const [showLabelHome, setShowLabelHome] = useState(false)
    const [showLabelResume, setShowLabelResume] = useState(false)
    const [showLabelPortfolio, setShowLabelPortfolio] = useState(false)
    const [showLabelArticles, setShowLabelArticles] = useState(false)

    // FIXME: highlighting current location

    const items = [
        {
            name: 'home',
            show: showLabelHome,
            setShow: setShowLabelHome,
            icon: <FiHome/>,
            title: 'Home'
        },
        {
            name: 'portfolio',
            show: showLabelPortfolio,
            setShow: setShowLabelPortfolio,
            icon: <FiSave/>,
            title: 'Portfolio'
        },
        {
            name: 'resume',
            show: showLabelResume,
            setShow: setShowLabelResume,
            icon: <FiFileText/>,
            title: 'Experience'
        },
        // {
        //     name: 'articles',
        //     show: showLabelArticles,
        //     setShow: setShowLabelArticles,
        //     icon: <FiEdit/>,
        //     title: 'Articles'
        // },
    ]

    const [active, setActive] = useState('home')

    const handleScroll = () => {
        const sections = document.querySelectorAll<HTMLElement>(".section")

        for (let i = 0; i < sections.length; i++) {
            const pos = window.scrollY

            if (i == sections.length-1) {
                if (sections[i].offsetTop-10 <= pos) {
                    setActive(sections[i].id)
                }
            }
            else {
                if (sections[i].offsetTop-10 <= pos && sections[i+1].offsetTop-10 > pos) {
                    setActive(sections[i].id)
                }
            }
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    return (
        <div className="relative z-10">
            <div className="hidden lg:flex fixed h-screen flex-col justify-center items-start">
                {
                    items.map(item => 
                        <div
                            key={item.name}
                            className="m-2"
                            onClick={() => {
                                const element = document.getElementById(item.name)
                                element?.scrollIntoView({
                                    behavior: 'smooth'
                                })
                            }}
                            onMouseOver={() => item.setShow(true)} 
                            onMouseLeave={() => item.setShow(false)}
                        >
                            <div className="relative">
                                <Button
                                    size={'icon'}
                                    variant={active === item.name ? 'default' : 'outline'}
                                    aria-label="icon"
                                    className={`h-12 transition-all duration-500 ease-in-out hover:scale-110 border-2 flex items-center ${
                                        active === item.name 
                                            ? 'bg-primary text-primary-foreground border-primary' 
                                            : 'hover:bg-primary/10 hover:border-primary/50'
                                    }`}
                                    style={{
                                        borderRadius: (active === item.name || item.show) ? '0.5rem' : '50%',
                                        width: item.show ? 'auto' : '3rem',
                                        paddingLeft: '0.75rem',
                                        paddingRight: item.show ? '1rem' : '0.75rem',
                                        minWidth: '3rem',
                                        justifyContent: 'flex-start'
                                    }}
                                >
                                    <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center">{item.icon}</span>
                                    <span 
                                        className="font-medium text-sm whitespace-nowrap transition-all duration-500 ease-in-out overflow-hidden"
                                        style={{
                                            opacity: item.show ? 1 : 0,
                                            width: item.show ? 'auto' : 0,
                                            marginLeft: item.show ? '0.75rem' : 0
                                        }}
                                    >
                                        {item.title}
                                    </span>
                                </Button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )

}
