import { Button, Flex, IconButton, Slide } from "@chakra-ui/react"
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
                if (sections[i].offsetTop+10 <= pos) {
                    setActive(sections[i].id)
                }
            }
            else {
                if (sections[i].offsetTop+10 <= pos && sections[i+1].offsetTop+10 > pos) {
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
                    onClick={() => {
                        setShowMenu(!showMenu)
                    }}
                    left={'10px'}
                    top={'10px'}
                    width={'1rem'}
                    rounded={'3xl'}
                    size={'lg'}
                    position={'fixed'}
                    zIndex={10}
                />
            </Flex>
            {
                showMenu ?
                    <Slide in={showMenu} direction={'left'}>
                        <NavMenu active={active} onClick={onClick}/>
                    </Slide>
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

    const items = [
        {
            name: 'home',
            icon: <FiHome/>,
            title: 'Home'
        },
        {
            name: 'about',
            icon: <FiUser/>,
            title: 'About'
        },
        {
            name: 'resume',
            icon: <FiFileText/>,
            title: 'Resume'
        },
        {
            name: 'portfolio',
            icon: <FiSave/>,
            title: 'Portfolio'
        },
        {
            name: 'articles',
            icon: <FiEdit/>,
            title: 'Articles'
        },
        {
            name: 'contact',
            icon: <FiMail/>,
            title: 'Contact'
        },
    ]

    return (
        <Flex
            position={'fixed'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'left'}
            height={'60vh'}
            width={'100vw'}
            top={'100px'}
        >
            <Flex
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                width={'250px'}
                height={'100%'}
                padding={'30px'}
                gap={5}
                bgColor={'rgba(203, 213, 224, 0.6)'}
                borderRadius={'30px'}
                marginLeft={'10px'}
                zIndex={4}
            >
                {
                    items.map((item) => 
                        <Button 
                            leftIcon={item.icon} 
                            width={'80%'} 
                            rounded={'3xl'}
                            onClick={() => onClick(item.name)}
                            bgColor={active == item.name? "gray.900": "gray.100"}
                            color={active == item.name? "gray.50": "gray.900"}
                            _hover={active == item.name? { bgColor:'gray.900' } : { bgColor:'gray.100' }}
                            size={'md'} 
                            justifyContent={'left'}
                            zIndex={4}
                            fontFamily={`"Poetsen One", sans-serif`}
                        > 
                            {item.title} 
                        </Button>
                    )
                }
            </Flex>
        </Flex>
    )
}
