'use client'

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { FiEdit, FiFileText, FiHome, FiMail, FiSave, FiUser } from "react-icons/fi"

export default function NavigationSidebar() {

    const [showLabelHome, setShowLabelHome] = useState(false)
    const [showLabelAbout, setShowLabelAbout] = useState(false)
    const [showLabelResume, setShowLabelResume] = useState(false)
    const [showLabelPortfolio, setShowLabelPortfolio] = useState(false)
    const [showLabelArticles, setShowLabelArticles] = useState(false)
    const [showLabelContact, setShowLabelContact] = useState(false)

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
            name: 'about',
            show: showLabelAbout,
            setShow: setShowLabelAbout,
            icon: <FiUser/>,
            title: 'About'
        },
        {
            name: 'resume',
            show: showLabelResume,
            setShow: setShowLabelResume,
            icon: <FiFileText/>,
            title: 'Resume'
        },
        {
            name: 'portfolio',
            show: showLabelPortfolio,
            setShow: setShowLabelPortfolio,
            icon: <FiSave/>,
            title: 'Portfolio'
        },
        {
            name: 'articles',
            show: showLabelArticles,
            setShow: setShowLabelArticles,
            icon: <FiEdit/>,
            title: 'Articles'
        },
        {
            name: 'contact',
            show: showLabelContact,
            setShow: setShowLabelContact,
            icon: <FiMail/>,
            title: 'Contact'
        },
    ]

    const [active, setActive] = useState("home")

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
                            {
                                item.show?
                                <Button
                                    aria-label="label"
                                    variant={'secondary'}
                                    className={`rounded-full font-bold text-lg flex flex-row justify-start gap-3 items-center ${active===item.name && 'text-step7-foreground border border-step7-foreground'}`}
                                >
                                    {item.icon}{item.title}
                                </Button>
                                :
                                <Button
                                    size={'icon'}
                                    variant={'secondary'}
                                    aria-label="icon"
                                    className={`rounded-full h-10 ${active===item.name && 'text-step7-foreground border border-step7-foreground'}`}
                                >
                                    {item.icon}
                                </Button>
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )

}
