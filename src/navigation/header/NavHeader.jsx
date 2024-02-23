import { FiMenu, FiX } from "react-icons/fi";
import './NavHeader.css'
import { useState } from "react";
import { FiHome, FiUser, FiMail, FiFileText, FiServer, FiSave } from "react-icons/fi";


export default function NavHeader() {

    const [showMenu, setShowMenu] = useState(false)

    const active = "home"

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
                            <a href="#home" onClick={() => setShowMenu(!showMenu)}>
                                <div className={`link-btn-head ${active=='home'? 'active-head': 'inactive-head'}`}>
                                    <FiHome className="link-btn-icon-head"/>
                                    <div className="link-btn-text-head"> Home </div>
                                </div>
                            </a>
                            <a href="#about" onClick={() => setShowMenu(!showMenu)}>
                            <div className={`link-btn-head ${active=='about'? 'active-head': 'inactive-head'}`}>
                                    <FiUser className="link-btn-icon-head"/>
                                    <div className="link-btn-text-head"> About </div>
                                </div>
                            </a>
                            <a href="#resume" onClick={() => setShowMenu(!showMenu)}>
                            <div className={`link-btn-head ${active=='resume'? 'active-head': 'inactive-head'}`}>
                                    <FiFileText className="link-btn-icon-head"/>
                                    <div className="link-btn-text-head"> Resume </div>
                                </div>
                            </a>
                            <a href="#portfolio" onClick={() => setShowMenu(!showMenu)}>
                            <div className={`link-btn-head ${active=='portfolio'? 'active-head': 'inactive-head'}`}>
                                    <FiSave className="link-btn-icon-head"/>
                                    <div className="link-btn-text-head"> Portfolio </div>
                                </div>
                            </a>
                            <a href="#services" onClick={() => setShowMenu(!showMenu)}>
                            <div className={`link-btn-head ${active=='services'? 'active-head': 'inactive-head'}`}>
                                    <FiServer className="link-btn-icon-head"/>
                                    <div className="link-btn-text-head"> Services </div>
                                </div>
                            </a>
                            <a href="#contact" onClick={() => setShowMenu(!showMenu)}>
                            <div className={`link-btn-head ${active=='contact'? 'active-head': 'inactive-head'}`}>
                                    <FiMail className="link-btn-icon-head"/>
                                    <div className="link-btn-text-head"> Contact </div>
                                </div>
                            </a>
                        </div>
                    </div>
                :
                    <div style={{display: "none"}}></div>
            }
        </div>
    )

}
