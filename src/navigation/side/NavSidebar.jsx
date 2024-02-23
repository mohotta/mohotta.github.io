import './NavSidebar.css'
import { useState } from 'react' 
import { FiHome, FiUser, FiMail, FiFileText, FiEdit, FiSave } from "react-icons/fi";

export default function NavSidebar() {

    const [showLabelHome, setShowLabelHome] = useState(false)
    const [showLabelAbout, setShowLabelAbout] = useState(false)
    const [showLabelResume, setShowLabelResume] = useState(false)
    const [showLabelPortfolio, setShowLabelPortfolio] = useState(false)
    const [showLabelArticles, setShowLabelArticles] = useState(false)
    const [showLabelContact, setShowLabelContact] = useState(false)

    const active = "home"

    return (
        <>
            <div className="link-stack">
                <div onClick={() => {
                    const element = document.getElementById("home")
                    element?.scrollIntoView({
                        behavior: 'smooth'
                    })
                }}
                    className='click-btn'
                >
                    <div onMouseOver={() => setShowLabelHome(true)} onMouseLeave={() => setShowLabelHome(false)}>
                    {
                        showLabelHome?
                        <div className="link-btn">
                            <FiHome className="link-btn-icon"/>
                            <div className="link-btn-text"> Home </div>
                        </div>
                        :
                        <div className={`link-btn-only ${active=='home'? 'active': 'inactive'}`}>
                            <FiHome className="link-btn-icon-only"/>
                        </div>
                    }
                    </div>
                </div>
                <div onClick={() => {
                    const element = document.getElementById("about")
                    element?.scrollIntoView({
                        behavior: 'smooth'
                    })
                }}
                    className='click-btn'
                >
                    <div onMouseOver={() => setShowLabelAbout(true)} onMouseLeave={() => setShowLabelAbout(false)}>
                    {
                        showLabelAbout?
                        <div className="link-btn">
                            <FiUser className="link-btn-icon"/>
                            <div className="link-btn-text"> About </div>
                        </div>
                        :
                        <div className={`link-btn-only ${active=='about'? 'active': 'inactive'}`}>
                            <FiUser className="link-btn-icon-only"/>
                        </div>
                    }
                    </div>
                </div>
                <div onClick={() => {
                    const element = document.getElementById("resume")
                    element?.scrollIntoView({
                        behavior: 'smooth'
                    })
                }}
                    className='click-btn'
                >
                    <div onMouseOver={() => setShowLabelResume(true)} onMouseLeave={() => setShowLabelResume(false)}>
                    {
                        showLabelResume?
                        <div className="link-btn">
                            <FiFileText className="link-btn-icon"/>
                            <div className="link-btn-text"> Resume </div>
                        </div>
                        :
                        <div className={`link-btn-only ${active=='resume'? 'active': 'inactive'}`}>
                            <FiFileText className="link-btn-icon-only"/>
                        </div>
                    }
                    </div>
                </div>
                <div onClick={() => {
                    const element = document.getElementById("portfolio")
                    element?.scrollIntoView({
                        behavior: 'smooth'
                    })
                }}
                    className='click-btn'
                >
                    <div onMouseOver={() => setShowLabelPortfolio(true)} onMouseLeave={() => setShowLabelPortfolio(false)}>
                    {
                        showLabelPortfolio?
                        <div className="link-btn">
                            <FiSave className="link-btn-icon"/>
                            <div className="link-btn-text"> Portfolio </div>
                        </div>
                        :
                        <div className={`link-btn-only ${active=='portfolio'? 'active': 'inactive'}`}>
                            <FiSave className="link-btn-icon-only"/>
                        </div>
                    }
                    </div>
                </div>
                <div onClick={() => {
                    const element = document.getElementById("articles")
                    element?.scrollIntoView({
                        behavior: 'smooth'
                    })
                }}
                    className='click-btn'
                >
                    <div onMouseOver={() => setShowLabelArticles(true)} onMouseLeave={() => setShowLabelArticles(false)}>
                    {
                        showLabelArticles?
                        <div className="link-btn">
                            <FiEdit className="link-btn-icon"/>
                            <div className="link-btn-text"> Articles </div>
                        </div>
                        :
                        <div className={`link-btn-only ${active=='articles'? 'active': 'inactive'}`}>
                            <FiEdit className="link-btn-icon-only"/>
                        </div>
                    }
                    </div>
                </div>
                <div onClick={() => {
                    const element = document.getElementById("contact")
                    element?.scrollIntoView({
                        behavior: 'smooth'
                    })
                }}
                    className='click-btn'
                >
                    <div onMouseOver={() => setShowLabelContact(true)} onMouseLeave={() => setShowLabelContact(false)}>
                    {
                        showLabelContact?
                        <div className="link-btn">
                            <FiMail className="link-btn-icon"/>
                            <div className="link-btn-text"> Contact </div>
                        </div>
                        :
                        <div className={`link-btn-only ${active=='contact'? 'active': 'inactive'}`}>
                            <FiMail className="link-btn-icon-only"/>
                        </div>
                    }
                    </div>
                </div>
            </div>
        </>
    )

}
