'use client'

import { FiEdit, FiFileText, FiHome, FiMail, FiMenu, FiSave, FiUser, FiX } from "react-icons/fi";
import { Button } from "@/components/ui/button"
import React, { useEffect, useRef, useState } from "react"
import { ModeToggle } from "@/components/shared/ModeToggle";


export default function NavigationHeader() {

    const [showMenu, setShowMenu] = useState(false)

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
                if (sections[i].offsetTop-10 <= pos && sections[i+1].offsetTop+10 > pos) {
                    setActive(sections[i].id)
                }
            }
        }
    }

    useEffect(() => {
        if (showMenu) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }, [showMenu])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    const onClick = (section: string) => {
        const element = document.getElementById(section)
        element?.scrollIntoView({
            behavior: 'smooth'
        })
        setShowMenu(false)
    }

    return (
        <div className="flex flex-row w-full justify-between lg:justify-end items-start relative z-10">
            <div className="flex flex-col justify-center items-start lg:hidden">
                <Button
                    size={'icon'}
                    variant={'outline'}
                    aria-label="menu-icon"
                    className="fixed left-4 top-4 w-12 h-12 rounded-full z-30 border-2 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover:scale-110"
                    onClick={() => setShowMenu(!showMenu)}
                >
                    {showMenu? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5"/>}
                </Button>
            </div>
            <div className="relative z-20">
                <div className="fixed right-4 top-4">
                    <ModeToggle/>
                </div>
            </div>
            <NavMenu active={active} showing={showMenu} setShowing={setShowMenu} onClick={onClick}/>
        </div>
    )

}

interface navProps {
    active: string
    showing: boolean
    setShowing: React.Dispatch<React.SetStateAction<boolean>>
    onClick: (section:string) => void
}

function NavMenu( { active, showing, setShowing, onClick }: navProps ) {

    const menuRef = useRef<HTMLDivElement | null>(null)

    const [ animation1, setAnimation1 ] = useState("animate-opacity-up")
    const [ animation2, setAnimation2 ] = useState("animate-nav-slide-right")
    const [ opacity, setOpacity ] = useState("opacity-0 hidden")
    const [ left, setLeft ] = useState("-left-[250px]")

    const onClickOutside = (e: Event) => {
        if (showing && !menuRef.current?.contains(e.target as Node)) {
            setShowing(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', onClickOutside)
    })

    useEffect(() => {
        setAnimation1(showing? "animate-opacity-up": "animate-opacity-down")
        setAnimation2(showing? "animate-nav-slide-right": "animate-nav-slide-left")
        setTimeout(() => {
            setLeft(showing? "left-[8px]": "-left-[250px]")
            setOpacity(showing? "opacity-100": "opacity-0 hidden")
        }, 300)
    }, [showing])

    // FIXME: highlighting current location

    const items = [
        {
            name: 'home',
            icon: <FiHome/>,
            title: 'Home'
        },
        {
            name: 'portfolio',
            icon: <FiSave/>,
            title: 'Portfolio'
        },
        {
            name: 'resume',
            icon: <FiFileText/>,
            title: 'Experience'
        },
        // {
        //     name: 'articles',
        //     icon: <FiEdit/>,
        //     title: 'Articles'
        // },
    ]

    return (
        <div className={`fixed flex flex-col justify-start items-start h-screen w-screen top-0 left-0 ${animation1} ${opacity} lg:hidden bg-background/80 backdrop-blur-sm`}>
            <div ref={menuRef} className={`fixed flex flex-col justify-center items-center w-[15rem] top-[68px] ${left} ${animation2} h-3/5 p-6 ml-2 gap-3 rounded-xl z-[4] bg-card/95 backdrop-blur-md border border-border/50 shadow-lg`}>
                {
                    items.map((item) => 
                        <Button 
                            onClick={() => onClick(item.name)}
                            variant={active === item.name ? 'default' : 'outline'}
                            key={item.name}
                            className={`rounded-lg w-full font-medium text-sm flex flex-row justify-start gap-3 items-center px-4 py-3 transition-all duration-300 hover:scale-105 ${active === item.name ? 'bg-primary text-primary-foreground' : 'hover:bg-primary/10 hover:border-primary/50'}`}
                        >
                            {item.icon}{item.title}
                        </Button>
                    )
                }
            </div>
        </div>
    )
}

