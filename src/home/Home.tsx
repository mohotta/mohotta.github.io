import { Box, Button, Flex, Heading, Icon, IconButton, Image, Stack, Text, Tooltip, createIcon, useColorModeValue, useToast } from "@chakra-ui/react";
import image from './image.svg'
import { useState } from "react";
import { FaFileInvoice, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

export default function Home() {

    const roles = ["DATA SCIENTIST", "SOFT. ENGINEER"]
    const [roleIndex, setRoleIndex] = useState(0)

    const toast = useToast()

    const copyEmail = () => {

        navigator.clipboard.writeText("kumudu.20@cse.mrt.ac.lk");
        
        toast({
            title: 'Email Copied!',
            description: "Email is copied to your clipboard",
            status: 'info',
            duration: 3000,
            isClosable: true,
        })

    }

    return (
        <Flex 
            id="home"
            className="section"
            flexDirection={{base: "column", lg: "row"}}
            justifyContent={'center'}
            alignItems={'center'}
            height={'100vh'}
            width={'95vw'}
            marginLeft={{base: "0px", lg:"70px"}}
            position={'relative'}
            marginTop={{base:'180px', lg: 'auto'}}
        >
            <Flex
                width={{base: "80%", lg: "55%"}}
                justifyContent={'center'}
                position={'relative'}
            >
                <Flex
                    alignItems={'center'}
                    justifyContent={'space-evenly'}
                    flexDirection={'column'}
                    gap={10}
                    position={'relative'}
                >
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: '4xl', lg: '5xl', xl: '6xl'}}
                        lineHeight={'110%'}
                        textAlign={'center'}
                        fontFamily={`"Josefin Sans", sans-serif`}
                        width={'80%'}
                    > 
                        {roles[roleIndex]}
                    </Heading>
                    <Stack
                        direction={'column'}
                        spacing={3}
                        align={'center'}
                        alignSelf={'center'}
                        position={'relative'}>
                        <Button
                        colorScheme={'cyan'}
                        rounded={'full'}
                        variant={'ghost'}
                        px={6}
                        size={{base:'md', md:'lg'}}
                        onClick={() => setRoleIndex((roleIndex+1)%roles.length)}
                        fontFamily={`"Balsamiq Sans", sans-serif`}
                        fontWeight={600}
                        fontSize={'lg'}
                        >
                        And ..
                        </Button>
                        <Box>
                        <Icon
                            as={Arrow}
                            color={useColorModeValue('gray.800', 'gray.300')}
                            w={71}
                            position={'absolute'}
                            right={-71}
                            top={'10px'}
                        />
                        <Text
                            fontSize={'lg'}
                            fontFamily={`"Balsamiq Sans", sans-serif`}
                            position={'absolute'}
                            right={'-125px'}
                            top={'-15px'}
                            transform={'rotate(10deg)'}>
                            Click Me!
                        </Text>
                        </Box>
                    </Stack>
                    <Text 
                        fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} 
                        color={'gray.500'} 
                        width={'80%'} 
                        textAlign={'justify'}
                        fontFamily={`"Balsamiq Sans", sans-serif`}
                        fontWeight={600}
                    >
                        ‟A dedicated professional and technology enthusiast with strong teamwork and collaboration skills.
                        I thrive in diverse environments and am committed to driving team success. Passionate about 
                        leveraging technology for growth, I aim to contribute significantly to a company’s success, 
                        always striving for excellence and continuous learning.”
                    </Text>
                    <Flex
                        flexDirection={'row'}
                        justifyContent={'space-evenly'}
                        alignItems={'center'}
                        gap={{base: 1, sm:3, md:6}}
                    >
                        <Tooltip label='My Resume'>
                            <IconButton zIndex={0} icon={<FaFileInvoice/>} aria-label="cv" rounded={'full'} variant={'ghost'} size={'lg'} as={'a'} href="https://bit.ly/moh-cv" target="_blank"/>
                        </Tooltip>
                        <Tooltip label='Copy Email'>
                            <IconButton zIndex={0} icon={<IoMail/>} aria-label="mail" rounded={'full'} variant={'ghost'} size={'lg'} onClick={copyEmail}/>
                        </Tooltip>
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
                    <Flex
                        flexDirection={'row'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        gap={{base: 5, md: 10}}
                    >
                        <Button 
                            size={{base:'md', md:'lg'}} 
                            rounded={'full'} 
                            colorScheme="cyan" 
                            width={{base:'120px', md:'150px'}} 
                            onClick={() => {
                            const element = document.getElementById("about")
                            element?.scrollIntoView({
                                behavior: 'smooth'
                            })}}
                            zIndex={0}
                        > 
                            Learn More 
                        </Button>
                        <Button 
                            size={{base:'md', md:'lg'}} 
                            rounded={'full'} 
                            colorScheme="gray" 
                            width={{base:'120px', md:'150px'}} 
                            onClick={() => {
                            const element = document.getElementById("portfolio")
                            element?.scrollIntoView({
                                behavior: 'smooth'
                            })}}
                            zIndex={0}
                        > 
                            Projects
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
            <Flex
                width={{base: "90%", md: "45%"}}
                justifyContent={'center'}
                alignItems={'center'}
                margin={'100px'}
            >
                <Image src={image}/>
            </Flex>
        </Flex>
    )

}

const Arrow = createIcon({
    displayName: 'Arrow',
    viewBox: '0 0 72 24',
    path: (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
        fill="currentColor"
      />
    ),
})

