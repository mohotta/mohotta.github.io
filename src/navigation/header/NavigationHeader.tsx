import { Button, Flex, IconButton } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { FiEdit, FiFileText, FiHome, FiMail, FiMenu, FiSave, FiUser, FiX } from "react-icons/fi";


export default function NavigationHeader() {

    const [showMenu, setShowMenu] = useState(false)

    const [active, setActive] = useState("home")

    const handleScroll = () => {
        const sections = document.querySelectorAll<HTMLElement>(".section")

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

    const onClick = (section: string) => {
        const element = document.getElementById(section)
        element?.scrollIntoView({
            behavior: 'smooth'
        })
        setShowMenu(false)
    }

    return (
        <Flex
            position={'relative'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'left'}
            display={{base:'flex', lg:'none'}}
            zIndex={10}
        >
            <Flex
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'left'}
            >
                <IconButton
                    icon={showMenu ? <FiX /> : <FiMenu />}
                    aria-label={"menu-icon"}
                    onClick={() => setShowMenu(!showMenu)}
                    left={'10px'}
                    top={'10px'}
                    width={'1rem'}
                    rounded={'3xl'}
                    size={'lg'}
                    position={'fixed'}
                />
            </Flex>
            {
                showMenu ?
                    <NavMenu active={active} onClick={onClick}/>
                :
                    <></>
            }
            
        </Flex>
    )

}

interface navProps {
    active: string
    onClick: (section:string) => void
}

function NavMenu( { active, onClick }: navProps ) {

    return (
        <Flex
            position={'fixed'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            height={'80vh'}
            width={'45vw'}
            top={'100px'}
        >
            <Flex
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                width={'100%'}
                height={'80%'}
                gap={5}
                bgColor={'rgba(203, 213, 224, 0.9)'}
                borderRadius={'2vw'}
                marginLeft={'4vw'}
                zIndex={4}
            >

                <Button 
                    leftIcon={<FiHome/>} 
                    width={'80%'} 
                    rounded={'3xl'}
                    onClick={() => onClick('home')}
                    colorScheme={active == 'home'? "cyan": "gray"}
                    size={{base:'md', md:'lg'}} 
                    justifyContent={'left'}
                    zIndex={4}
                > 
                    Home 
                </Button>
                <Button 
                    leftIcon={<FiUser/>} 
                    width={'80%'} 
                    rounded={'3xl'}
                    onClick={() => onClick('about')}
                    colorScheme={active == 'about'? "cyan": "gray"}
                    size={{base:'md', md:'lg'}} 
                    justifyContent={'left'}
                    zIndex={4}
                > 
                    About  
                </Button>
                <Button 
                    leftIcon={<FiFileText/>} 
                    width={'80%'} 
                    rounded={'3xl'}
                    onClick={() => onClick('resume')}
                    colorScheme={active == 'resume'? "cyan": "gray"}
                    size={{base:'md', md:'lg'}} 
                    justifyContent={'left'}
                    zIndex={4}
                > 
                    Resume 
                </Button>
                <Button 
                    leftIcon={<FiSave/>} 
                    width={'80%'} 
                    rounded={'3xl'}
                    onClick={() => onClick('portfolio')}
                    colorScheme={active == 'portfolio'? "cyan": "gray"}
                    size={{base:'md', md:'lg'}} 
                    justifyContent={'left'}
                    zIndex={4}
                > 
                    Portfolio 
                </Button>
                <Button 
                    leftIcon={<FiEdit/>} 
                    width={'80%'} 
                    rounded={'3xl'}
                    onClick={() => onClick('articles')}
                    colorScheme={active == 'articles'? "cyan": "gray"}
                    size={{base:'md', md:'lg'}} 
                    justifyContent={'left'}
                    zIndex={4}
                > 
                    Articles 
                </Button>
                <Button 
                    leftIcon={<FiMail/>} 
                    width={'80%'} 
                    rounded={'3xl'}
                    onClick={() => onClick('contact')}
                    colorScheme={active == 'contact'? "cyan": "gray"}
                    size={{base:'md', md:'lg'}} 
                    justifyContent={'left'}
                    zIndex={4}
                > 
                    Contact 
                </Button>

            </Flex>
        </Flex>
    )
}
