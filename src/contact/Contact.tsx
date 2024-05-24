import { Flex, Heading, IconButton, List, ListIcon, ListItem, Text, Tooltip } from "@chakra-ui/react";
import { IoIosMail } from "react-icons/io";
import { FaAddressBook, FaGithub, FaLinkedinIn, FaPhone, FaTwitter } from "react-icons/fa6";


export default function Contact() {

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
                        kumudulaksitha@gmail.com
                    </ListItem>
                    <ListItem>
                        <ListIcon as={FaAddressBook}/>
                        maragala, hiramadagama, kahawatte 70150
                    </ListItem>
                    <ListItem>
                        <ListIcon as={FaPhone}/>
                        +94 74 189 4745
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

