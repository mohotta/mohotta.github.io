import { FiMenu, FiX } from "react-icons/fi";
import './NavHeader.css'
import { useState } from "react";

export default function NavHeader() {

    const [showMenu, setShowMenu] = useState(false)

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
                        <div className="link-stack"></div>
                    </div>
                :
                    <div style={{display: "none"}}></div>
            }
        </div>
    )

}
