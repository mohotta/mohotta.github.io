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

    const [active, setActive] = useState("home")

    const handleScroll = () => {
        const sections = document.querySelectorAll<HTMLElement>(".section")

        for (let i = 0; i < sections.length; i++) {
            const pos = window.scrollY

            console.log(i, pos, sections[i].offsetTop)

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

    return (
        <>
           <Flex
            display={{base: 'none', lg:'flex'}}
            position={'fixed'}
            height={'100vh'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'left'}
           >
            <ButtonGroup 
                onClick={() => {
                    const element = document.getElementById("home")
                    element?.scrollIntoView({
                        behavior: 'smooth'
                    })
                }}
                onMouseOver={() => setShowLabelHome(true)} 
                onMouseLeave={() => setShowLabelHome(false)}
                margin={'10px'}
                isAttached
            >
                <IconButton aria-label="icon" icon={<FiHome/>} size={'lg'} rounded={'3xl'} colorScheme={active == 'home'? "cyan": "gray"} _hover={active == 'home'? { bgColor:'cyan.400' } : { bgColor:'gray.100' }}/>
                { 
                    showLabelHome ? 
                    <Button size={'lg'} rounded={'3xl'} paddingLeft={'0.5rem'} colorScheme={active == 'home'? "cyan": "gray"} _hover={active == 'home'? { bgColor:'cyan.400' } : { bgColor:'gray.100' }} width={"100px"}> Home </Button> 
                    : <></> 
                }
            </ButtonGroup>
            <ButtonGroup 
                onClick={() => {
                    const element = document.getElementById("about")
                    element?.scrollIntoView({
                        behavior: 'smooth'
                    })
                }}
                onMouseOver={() => setShowLabelAbout(true)} 
                onMouseLeave={() => setShowLabelAbout(false)}
                margin={'10px'}
                isAttached
            >
                <IconButton aria-label="icon" icon={<FiUser/>} size={'lg'} rounded={'3xl'} colorScheme={active == 'about'? "cyan": "gray"} _hover={active == 'about'? { bgColor:'cyan.400' } : { bgColor:'gray.100' }}/>
                { showLabelAbout ? <Button size={'lg'} rounded={'3xl'} paddingLeft={'0.5rem'} colorScheme={active == 'about'? "cyan": "gray"} _hover={active == 'about'? { bgColor:'cyan.400' } : { bgColor:'gray.100' }} width={"100px"}> About </Button> : <></> }
            </ButtonGroup>
            <ButtonGroup 
                onClick={() => {
                    const element = document.getElementById("resume")
                    element?.scrollIntoView({
                        behavior: 'smooth'
                    })
                }}
                onMouseOver={() => setShowLabelResume(true)} 
                onMouseLeave={() => setShowLabelResume(false)}
                margin={'10px'}
                isAttached
            >
                <IconButton aria-label="icon" icon={<FiFileText/>} size={'lg'} rounded={'3xl'} colorScheme={active == 'resume'? "cyan": "gray"} _hover={active == 'resume'? { bgColor:'cyan.400' } : { bgColor:'gray.100' }}/>
                { showLabelResume ? <Button size={'lg'} rounded={'3xl'} paddingLeft={'0.5rem'} colorScheme={active == 'resume'? "cyan": "gray"} _hover={active == 'resume'? { bgColor:'cyan.400' } : { bgColor:'gray.100' }} width={"100px"}> Resume </Button> : <></> }
            </ButtonGroup>
            <ButtonGroup 
                onClick={() => {
                    const element = document.getElementById("portfolio")
                    element?.scrollIntoView({
                        behavior: 'smooth'
                    })
                }}
                onMouseOver={() => setShowLabelPortfolio(true)} 
                onMouseLeave={() => setShowLabelPortfolio(false)}
                margin={'10px'}
                isAttached
            >
                <IconButton aria-label="icon" icon={<FiSave/>} size={'lg'} rounded={'3xl'} colorScheme={active == 'portfolio'? "cyan": "gray"} _hover={active == 'portfolio'? { bgColor:'cyan.400' } : { bgColor:'gray.100' }}/>
                { showLabelPortfolio ? <Button size={'lg'} rounded={'3xl'} paddingLeft={'0.5rem'} colorScheme={active == 'portfolio'? "cyan": "gray"} _hover={active == 'portfolio'? { bgColor:'cyan.400' } : { bgColor:'gray.100' }} width={"100px"}> Portfolio </Button> : <></> }
            </ButtonGroup>
            <ButtonGroup 
                onClick={() => {
                    const element = document.getElementById("articles")
                    element?.scrollIntoView({
                        behavior: 'smooth'
                    })
                }}
                onMouseOver={() => setShowLabelArticles(true)} 
                onMouseLeave={() => setShowLabelArticles(false)}
                margin={'10px'}
                isAttached
            >
                <IconButton aria-label="icon" icon={<FiEdit/>} size={'lg'} rounded={'3xl'} colorScheme={active == 'articles'? "cyan": "gray"} _hover={active == 'articles'? { bgColor:'cyan.400' } : { bgColor:'gray.100' }}/>
                { showLabelArticles ? <Button size={'lg'} rounded={'3xl'} paddingLeft={'0.5rem'} colorScheme={active == 'articles'? "cyan": "gray"} _hover={active == 'articles'? { bgColor:'cyan.400' } : { bgColor:'gray.100' }} width={"100px"}> Articles </Button> : <></> }
            </ButtonGroup>
            <ButtonGroup 
                onClick={() => {
                    const element = document.getElementById("contact")
                    element?.scrollIntoView({
                        behavior: 'smooth'
                    })
                }}
                onMouseOver={() => setShowLabelContact(true)} 
                onMouseLeave={() => setShowLabelContact(false)}
                margin={'10px'}
                isAttached
            >
                <IconButton aria-label="icon" icon={<FiMail/>} size={'lg'} rounded={'3xl'} colorScheme={active == 'contact'? "cyan": "gray"} _hover={active == 'contact'? { bgColor:'cyan.400' } : { bgColor:'gray.100' }}/>
                { showLabelContact ? <Button size={'lg'} rounded={'3xl'} paddingLeft={'0.5rem'} colorScheme={active == 'contact'? "cyan": "gray"} _hover={active == 'contact'? { bgColor:'cyan.400' } : { bgColor:'gray.100' }} width={"100px"}> Contact </Button> : <></> }
            </ButtonGroup>
           </Flex>
        </>
    )

}
