import './Home.css'
import { FiFileText, FiGithub, FiLinkedin, FiMail, FiTwitter, FiCheckCircle } from 'react-icons/fi'
// import { SiUpwork } from "react-icons/si";
// import { TbBrandFiverr } from "react-icons/tb";
import image from './image.png'
import smallImage from './small-res-image.png'
import { useEffect, useState } from 'react'
import Typed from "typed.js";


export default function Home() {

    const [currentImage, setCurrentImage] = useState(smallImage);
    const [imageLoading, setImageLoading] = useState(true);

    const fetchLargeImage = (image) => {
        const loadingImage = new Image();
        loadingImage.src = image;
        loadingImage.onload = () => {
            setCurrentImage(loadingImage.src);
            setImageLoading(false);
        }
    }

    useEffect(() => {
        fetchLargeImage(image)
    }, [])

    useEffect(() => {

        const element = document.getElementById("dyn-text")

        const typed = new Typed(element, {
            strings: ['I am a Developer ', 'I am a Data Scientist '],
            smartBackspace: true,
            typeSpeed: 150,
            loop: true
        });

        return () => {
            typed.destroy();
        };

    }, []);

    useEffect(() => {
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.querySelector(".copy-noti-hide").style.bottom = "12px"
            }, 1000)
        })
    })

    const [emailCopied, setEmailCopied] = useState(false)

    const copyEmail = () => {

        navigator.clipboard.writeText("kumudu.20@cse.mrt.ac.lk");
        
        setEmailCopied(true)
        console.log('copied')

        setTimeout(() => {
            setEmailCopied(false)
            console.log('hide')
        }, 1500)

    }

    return (
        <div className="home section" id="home">
            <div className="home-grid">
                <div className="placeholder-empty-div-1"></div>
                <div className="name-title">
                    <h1> Kumudu <span className='laksitha'>Laksitha</span> Mohottala </h1>
                </div>
                <div className="chnging-text"> <span id='dyn-text'></span> </div>
                <div className="socials-list">
                    <div className="social-btn-home-wrap" onClick={copyEmail} aria-label='copy emial address'> <FiMail className='social-btn-home'/> </div>
                    <a href="https://bit.ly/moh-cv" target='_blank' aria-label='cv'>
                        <div className="social-btn-home-wrap"> <FiFileText className='social-btn-home'/></div>
                    </a>
                    <a href="https://bit.ly/klm-gh" target='_blank' aria-label='github profile link'>
                        <div className="social-btn-home-wrap"> <FiGithub className='social-btn-home'/> </div>
                    </a>
                    <a href="https://bit.ly/klm-in" target='_blank' aria-label='linkedin profile link'>
                        <div className="social-btn-home-wrap"> <FiLinkedin className='social-btn-home'/> </div>
                    </a>
                    <a href="https://bit.ly/klm-x" target='_blank' aria-label='twitter (x) profile link'>
                        <div className="social-btn-home-wrap"> <FiTwitter className='social-btn-home'/> </div>
                    </a>
                </div>
                <div className="profile-image">
                    <img src={currentImage} alt='profile photo' className='profile-image-img'/>
                </div>
                <div className="placeholder-empty-div-2"></div>
            </div>
            {
                emailCopied
                ? 
                    <div className="copy-noti">
                        <FiCheckCircle className='copy-noti-icon'/> Email Copied
                    </div>
                :
                <div className="copy-noti-hide"> <FiCheckCircle className='copy-noti-icon'/> Email Copied </div>
            }
        </div>
    )

}

