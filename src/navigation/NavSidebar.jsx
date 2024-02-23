import './NavSidebar.css'
import { useState } from 'react' 
import { FiHome, FiUser, FiMail, FiFileText, FiServer, FiSave } from "react-icons/fi";

export default function NavSidebar() {

    const [showLabelHome, setShowLabelHome] = useState(false)
    const [showLabelAbout, setShowLabelAbout] = useState(false)
    const [showLabelResume, setShowLabelResume] = useState(false)
    const [showLabelPortfolio, setShowLabelPortfolio] = useState(false)
    const [showLabelServices, setShowLabelServices] = useState(false)
    const [showLabelContact, setShowLabelContact] = useState(false)

    const active = "home"

    return (
        <>
            <div className="link-stack">
                <a href="#home">
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
                </a>
                <a href="#about">
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
                </a>
                <a href="#resume">
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
                </a>
                <a href="#portfolio">
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
                </a>
                <a href="#services">
                    <div onMouseOver={() => setShowLabelServices(true)} onMouseLeave={() => setShowLabelServices(false)}>
                    {
                        showLabelServices?
                        <div className="link-btn">
                            <FiServer className="link-btn-icon"/>
                            <div className="link-btn-text"> Services </div>
                        </div>
                        :
                        <div className={`link-btn-only ${active=='services'? 'active': 'inactive'}`}>
                            <FiServer className="link-btn-icon-only"/>
                        </div>
                    }
                    </div>
                </a>
                <a href="#contact">
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
                </a>
            </div>
        </>
    )

}
