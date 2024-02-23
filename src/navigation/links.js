import { FiHome, FiUser, FiMail, FiFileText, FiServer, FiSave } from "react-icons/fi";

const Links = [
    {
        title: 'Home', 
        icon1: <FiHome className="link-btn-icon"/>,
        icon2: <FiHome className="link-btn-icon-only"/>,
        link: "#home",
        active: true,
    },
    {
        title: 'About', 
        icon1: <FiUser className="link-btn-icon"/>,
        icon2: <FiUser className="link-btn-icon-only"/>,
        link: "#about",
        active: false,
    },  
    {
        title: 'Resume', 
        icon1: <FiFileText className="link-btn-icon"/>,
        icon2: <FiFileText className="link-btn-icon-only"/>,
        link: "#resume",
        active: false,
    },
    {
        title: 'Portfolio', 
        icon1: <FiSave className="link-btn-icon"/>,
        icon2: <FiSave className="link-btn-icon-only"/>,
        link: "#portfolio",
        active: false,
    },
    {
        title: 'Sevices', 
        icon1: <FiServer className="link-btn-icon"/>,
        icon2: <FiServer className="link-btn-icon-only"/>,
        link: "#services",
        active: false,
    },
    {
        title: 'Contact', 
        icon1: <FiMail className="link-btn-icon"/>,
        icon2: <FiMail className="link-btn-icon-only"/>,
        link: "#contact",
        active: false,
    },
    ]

export default Links
