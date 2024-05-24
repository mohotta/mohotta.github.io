import { Text, Flex, Heading, IconButton, Image, Tooltip, useToast, Button } from "@chakra-ui/react";
import { FaFileInvoice, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { useState } from "react";
import { IoMail } from "react-icons/io5";
import image from './images/image.png'
import { FiRefreshCw } from "react-icons/fi";

export default function Home() {

    const roles = ["DATA SCIENTIST", "SOFT. ENGINEER", "TECH ENTHUSIAST"]
    const [roleIndex, setRoleIndex] = useState(0)

    const email = "kumudulaksitha@gmail.com"
    const toast = useToast()

    const copyEmail = () => {

        navigator.clipboard.writeText(email);
        
        toast({
            duration: 3000,
            render: () => (
                <Flex
                    flexDirection={'column'}
                    justifyContent={'left'}
                    alignItems={'center'}
                    bgColor={'gray.800'}
                    color={'gray.50'}
                    padding={'5px'}
                    width={'250px'}
                    borderRadius={'10px'}
                >
                    <Text
                        fontFamily={`"Poetsen One", sans-serif`}
                        fontWeight={'500'}
                        fontSize={'1rem'}
                    >
                        email copied!
                    </Text>
                    <Text
                        fontFamily={`"Poetsen One", sans-serif`}
                        fontWeight={'500'}
                        fontSize={'0.8rem'}
                    >
                        {email}
                    </Text>
                </Flex>
            )
        })

    }

    return (
        <Flex 
            id="home"
            className="section"
            flexDirection={{base: "column", lg: "row"}}
            justifyContent={'center'}
            gap={10}
            alignItems={'center'}
            minHeight={'100vh'}
            marginLeft={{base: "0px", lg:"70px"}}
            position={'relative'}
            width={{base: '98vw', lg: 'auto'}}
        >
            <Image 
                src={image} 
                width={'20vw'}
                minWidth={'250px'}
                rounded={'full'}
                border={'2px'}
                borderStyle={'dashed'}
                loading='lazy'
            />
            <Flex
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                gap={3}
            >
                <Text
                    fontFamily={`"Poetsen One", sans-serif`}
                    fontWeight={'500'}
                    fontSize={'1.3rem'}
                >
                    Hello, I'm
                </Text>
                <Heading
                    fontFamily={`"Poetsen One", sans-serif`}
                    fontSize={'3rem'}
                    fontWeight={'bold'}
                    textAlign={'center'}
                >
                    Kumudu Mohottala
                </Heading>
                <Flex
                    flexDirection={'row'}
                    justifyContent={'space-evenly'}
                    alignItems={'center'}
                    gap={2}
                >
                    <Heading
                        fontFamily={`"Poetsen One", sans-serif`}
                        fontSize={'1.5rem'}
                        fontWeight={'bold'}
                        textAlign={'center'}
                        color={'gray.600'}
                    >
                        {roles[roleIndex]}
                    </Heading>
                    <IconButton 
                        icon={<FiRefreshCw/>} 
                        aria-label="refresh"
                        variant={'link'}
                        color={'grey.900'}
                        onClick={() => setRoleIndex((roleIndex+1)%roles.length)}
                    />
                </Flex>
                <Flex
                    flexDirection={'row'}
                    justifyContent={'space-evenly'}
                    alignItems={'center'}
                    gap={1}
                    width={'80%'}
                >
                    <Button 
                        leftIcon={<FaFileInvoice/>}
                        rounded={'full'}
                        onClick={() => {
                            const element = document.getElementById('resume')
                            element?.scrollIntoView({
                                behavior: 'smooth'
                            })
                        }}
                        variant={'outline'}
                        width={'150px'}
                        fontFamily={`"Poetsen One", sans-serif`}
                    > Resume </Button>
                    <Button 
                        leftIcon={<IoMail/>}
                        rounded={'full'}
                        onClick={copyEmail}
                        color={'gray.50'}
                        bgColor={'gray.900'}
                        _hover={{
                            bgColor: 'gray.700'
                        }}
                        width={'150px'}
                        fontFamily={`"Poetsen One", sans-serif`}
                    > Email </Button>
                </Flex>
                <Flex
                    flexDirection={'row'}
                    justifyContent={'space-evenly'}
                    alignItems={'center'}
                    gap={1}
                >
                    <Tooltip label='Github Profile'>
                        <IconButton zIndex={0} icon={<FaGithub/>} aria-label="github" rounded={'full'} variant={'ghost'} size={'lg'} as={'a'} href="https://bit.ly/klm-gh" target="_blank"/>
                    </Tooltip>
                    <Tooltip label='LinkedIn Profile'>
                        <IconButton zIndex={0} icon={<FaLinkedinIn/>} aria-label="linkedin" rounded={'full'} variant={'ghost'} size={'lg'} as={'a'} href="https://bit.ly/klm-in" target="_blank"/>
                    </Tooltip>
                    <Tooltip label='Twitter Profile'>
                        <IconButton zIndex={0} icon={<FaTwitter/>} aria-label="twitter" rounded={'full'} variant={'ghost'} size={'lg'} as={'a'} href="https://bit.ly/klm-x" target="_blank"/>
                    </Tooltip>
                </Flex>
            </Flex>
        </Flex>
    )

}
