import { Flex, Heading, IconButton, List, ListIcon, ListItem, Text, Tooltip, useToast } from "@chakra-ui/react";
import { IoIosMail } from "react-icons/io";
import { FaAddressBook, FaGithub, FaLinkedinIn, FaPhone, FaRegCopy, FaTwitter } from "react-icons/fa6";


export default function Contact() {

    const email = "kumudulaksitha@gmail.com"
    const address = "maragala, hiramadagama, kahawatte 70150"
    const phone = "+94 74 189 4745"
    const toast = useToast()

    const copyText = (text: string) => {

        navigator.clipboard.writeText(text);
        
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
                        successfully copied!
                    </Text>
                    <Text
                        fontFamily={`"Poetsen One", sans-serif`}
                        fontWeight={'500'}
                        fontSize={'0.8rem'}
                        noOfLines={1}
                        width={'90%'}
                        textAlign={'center'}
                    >
                        {text}
                    </Text>
                </Flex>
            )
        })

    }

    return (
        <Flex 
            id="contact"
            className="section"
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            minHeight={'100vh'}
            marginLeft={{base: "0px", lg:"70px"}}
            position={'relative'}
            zIndex={0}
            paddingY={'2vh'}
            paddingLeft={'2vw'}
        >
            {/* title */}
            <Flex
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Text
                    fontFamily={`"Poetsen One", sans-serif`}
                    fontWeight={'500'}
                    fontSize={'1.3rem'}
                >
                    get in touch
                </Text>
                <Heading
                    fontFamily={`"Poetsen One", sans-serif`}
                    fontSize={'3rem'}
                    fontWeight={'bold'}
                    textAlign={'center'}
                >
                    contact
                </Heading>
            </Flex>
            <Flex
                flexDirection={{base: 'column', lg: 'row'}}
                justifyContent={'center'}
                alignItems={'center'}
                gap={10}
                padding={10}
                margin={5}
                border={'1px solid'}
                rounded={'lg'}
            >
                <List fontFamily={`"Poetsen One", sans-serif`}>
                    <ListItem>
                        <ListIcon as={IoIosMail}/>
                        {email}
                        <IconButton variant={'link'} icon={<FaRegCopy/>} aria-label="mail" onClick={() => copyText(email)}/>
                    </ListItem>
                    <ListItem>
                        <ListIcon as={FaAddressBook}/>
                        {address}
                        <IconButton variant={'link'} icon={<FaRegCopy/>} aria-label="mail" onClick={() => copyText(address)}/>
                    </ListItem>
                    <ListItem>
                        <ListIcon as={FaPhone}/>
                        {phone}
                        <IconButton variant={'link'} icon={<FaRegCopy/>} aria-label="mail" onClick={() => copyText(phone)}/>
                    </ListItem>
                </List>
                <Flex
                    flexDirection={'row'}
                    justifyContent={'space-evenly'}
                    alignItems={'center'}
                    gap={1}
                    borderLeft={{base: 'none', lg:'2px dotted'}}
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

