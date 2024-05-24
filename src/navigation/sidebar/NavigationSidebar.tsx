import { Flex, Button, ButtonGroup, IconButton } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { FiEdit, FiFileText, FiHome, FiMail, FiSave, FiUser } from "react-icons/fi"

export default function NavigationSidebar() {

    const [showLabelHome, setShowLabelHome] = useState(false)
    const [showLabelAbout, setShowLabelAbout] = useState(false)
    const [showLabelResume, setShowLabelResume] = useState(false)
    const [showLabelPortfolio, setShowLabelPortfolio] = useState(false)
    const [showLabelArticles, setShowLabelArticles] = useState(false)
    const [showLabelContact, setShowLabelContact] = useState(false)

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
        <Flex position={'relative'} zIndex={10}>
           <Flex
            display={{base: 'none', lg:'flex'}}
            position={'fixed'}
            height={'100vh'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'left'}
           >
            {
                items.map((item) => 
                    <ButtonGroup 
                        onClick={() => {
                            const element = document.getElementById(item.name)
                            element?.scrollIntoView({
                                behavior: 'smooth'
                            })
                        }}
                        onMouseOver={() => item.setShow(true)} 
                        onMouseLeave={() => item.setShow(false)}
                        margin={'10px'}
                        isAttached
                    >
                        <IconButton aria-label="icon" icon={item.icon} size={'lg'} rounded={'3xl'} bgColor={active == item.name? 'gray.900': 'gray.100'} color={active == item.name? 'gray.50': 'gray.900'} _hover={active == item.name? { bgColor:'gray.900' } : { bgColor:'gray.100' }}/>
                        { 
                            item.show ? 
                            <Button size={'lg'} fontFamily={`"Poetsen One", sans-serif`} rounded={'3xl'} paddingLeft={'0.5rem'} bgColor={active == item.name? 'gray.900': 'gray.100'} color={active == item.name? 'gray.50': 'gray.900'} _hover={active == item.name? { bgColor:'gray.900' } : { bgColor:'gray.100' }} width={"100px"}> {item.title} </Button> 
                            : <></> 
                        }
                    </ButtonGroup>
                )
            }
           </Flex>
        </Flex>
    )

}
