import { FiMenu, FiX } from "react-icons/fi";
import './NavHeader.css'
import { useState, useEffect } from "react";
import { FiHome, FiUser, FiMail, FiFileText, FiEdit, FiSave } from "react-icons/fi";


export default function NavHeader() {

    const [showMenu, setShowMenu] = useState(false)

    const [active, setActive] = useState("home")

    const handleScroll = () => {
        const sections = document.querySelectorAll(".section")

        for (let i = 0; i < sections.length; i++) {
            const pos = window.scrollY

            if (i == sections.length-1) {
                if (sections[i].offsetTop <= pos) {
                    setActive(sections[i].id)
                }
            }
            else {
                if (sections[i].offsetTop <= pos && sections[i+1].offsetTop > pos) {
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

    useEffect(() => {
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.querySelector(".link-stack-head-hide").style.opacity = "1"
            }, 1000)
        })
    })
    

    return (
        <div className="nav-header">
            {
                !showMenu?
                    <FiMenu className="nav-btn" onClick={() => setShowMenu(!showMenu)}/>
                :
                    <FiX className="nav-btn" onClick={() => setShowMenu(!showMenu)}/>
            }
            {
                showMenu ? 
                    <div className="nav-side">
                        <div className="link-stack-head">
                            <div onClick={() => {
                                setShowMenu(!showMenu)
                                const element = document.getElementById("home")
                                element?.scrollIntoView({
                                    behavior: 'smooth'
                                })
                            }}
                                className='click-btn-head'
                            >
                                <div className={`link-btn-head ${active=='home'? 'active-head': 'inactive-head'}`}>
                                    <FiHome className="link-btn-icon-head"/>
                                    <div className="link-btn-text-head"> Home </div>
                                </div>
                            </div>
                            <div onClick={() => {
                                setShowMenu(!showMenu)
                                const element = document.getElementById("about")
                                element?.scrollIntoView({
                                    behavior: 'smooth'
                                })
                            }}
                                className='click-btn-head'
                            >
                            <div className={`link-btn-head ${active=='about'? 'active-head': 'inactive-head'}`}>
                                    <FiUser className="link-btn-icon-head"/>
                                    <div className="link-btn-text-head"> About </div>
                                </div>
                            </div>
                            <div onClick={() => {
                                setShowMenu(!showMenu)
                                const element = document.getElementById("resume")
                                element?.scrollIntoView({
                                    behavior: 'smooth'
                                })
                            }}
                                className='click-btn-head'
                            >
                            <div className={`link-btn-head ${active=='resume'? 'active-head': 'inactive-head'}`}>
                                    <FiFileText className="link-btn-icon-head"/>
                                    <div className="link-btn-text-head"> Resume </div>
                                </div>
                            </div>
                            <div onClick={() => {
                                setShowMenu(!showMenu)
                                const element = document.getElementById("portfolio")
                                element?.scrollIntoView({
                                    behavior: 'smooth'
                                })
                            }}
                                className='click-btn-head'
                            >
                            <div className={`link-btn-head ${active=='portfolio'? 'active-head': 'inactive-head'}`}>
                                    <FiSave className="link-btn-icon-head"/>
                                    <div className="link-btn-text-head"> Portfolio </div>
                                </div>
                            </div>
                            <div onClick={() => {
                                setShowMenu(!showMenu)
                                const element = document.getElementById("articles")
                                element?.scrollIntoView({
                                    behavior: 'smooth'
                                })
                            }}
                                className='click-btn-head'
                            >
                            <div className={`link-btn-head ${active=='articles'? 'active-head': 'inactive-head'}`}>
                                    <FiEdit className="link-btn-icon-head"/>
                                    <div className="link-btn-text-head"> Articles </div>
                                </div>
                            </div>
                            <div onClick={() => {
                                setShowMenu(!showMenu)
                                const element = document.getElementById("contact")
                                element?.scrollIntoView({
                                    behavior: 'smooth'
                                })
                            }}
                                className='click-btn-head'
                            >
                            <div className={`link-btn-head ${active=='contact'? 'active-head': 'inactive-head'}`}>
                                    <FiMail className="link-btn-icon-head"/>
                                    <div className="link-btn-text-head"> Contact </div>
                                </div>
                            </div>
                        </div>
                    </div>
                :
                    <div className="nav-side">
                        <div className="link-stack-head-hide">
                            <div onClick={() => {
                                setShowMenu(!showMenu)
                                const element = document.getElementById("home")
                                element?.scrollIntoView({
                                    behavior: 'smooth'
                                })
                            }}
                                className='click-btn-head'
                            >
                                <div className={`link-btn-head ${active=='home'? 'active-head': 'inactive-head'}`}>
                                    <FiHome className="link-btn-icon-head"/>
                                    <div className="link-btn-text-head"> Home </div>
                                </div>
                            </div>
                            <div onClick={() => {
                                setShowMenu(!showMenu)
                                const element = document.getElementById("about")
                                element?.scrollIntoView({
                                    behavior: 'smooth'
                                })
                            }}
                                className='click-btn-head'
                            >
                            <div className={`link-btn-head ${active=='about'? 'active-head': 'inactive-head'}`}>
                                    <FiUser className="link-btn-icon-head"/>
                                    <div className="link-btn-text-head"> About </div>
                                </div>
                            </div>
                            <div onClick={() => {
                                setShowMenu(!showMenu)
                                const element = document.getElementById("resume")
                                element?.scrollIntoView({
                                    behavior: 'smooth'
                                })
                            }}
                                className='click-btn-head'
                            >
                            <div className={`link-btn-head ${active=='resume'? 'active-head': 'inactive-head'}`}>
                                    <FiFileText className="link-btn-icon-head"/>
                                    <div className="link-btn-text-head"> Resume </div>
                                </div>
                            </div>
                            <div onClick={() => {
                                setShowMenu(!showMenu)
                                const element = document.getElementById("portfolio")
                                element?.scrollIntoView({
                                    behavior: 'smooth'
                                })
                            }}
                                className='click-btn-head'
                            >
                            <div className={`link-btn-head ${active=='portfolio'? 'active-head': 'inactive-head'}`}>
                                    <FiSave className="link-btn-icon-head"/>
                                    <div className="link-btn-text-head"> Portfolio </div>
                                </div>
                            </div>
                            <div onClick={() => {
                                setShowMenu(!showMenu)
                                const element = document.getElementById("articles")
                                element?.scrollIntoView({
                                    behavior: 'smooth'
                                })
                            }}
                                className='click-btn-head'
                            >
                            <div className={`link-btn-head ${active=='articles'? 'active-head': 'inactive-head'}`}>
                                    <FiEdit className="link-btn-icon-head"/>
                                    <div className="link-btn-text-head"> Articles </div>
                                </div>
                            </div>
                            <div onClick={() => {
                                setShowMenu(!showMenu)
                                const element = document.getElementById("contact")
                                element?.scrollIntoView({
                                    behavior: 'smooth'
                                })
                            }}
                                className='click-btn-head'
                            >
                            <div className={`link-btn-head ${active=='contact'? 'active-head': 'inactive-head'}`}>
                                    <FiMail className="link-btn-icon-head"/>
                                    <div className="link-btn-text-head"> Contact </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )

}
