import { Button, Image, Card, CardBody, CardFooter, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";

export default function Articles() {

    // const [modalOpen, setModelOpen] = useState(0)

    const articles = [
        {
            id: 1,
            name: 'Getting Started with Linux: Introduction',
            description: 'Linux is a free and open source operating system kernel (Kernel is the backbone of an operating system which enables an operating system to manage all the underlying hardware including input-output and memory) developed by Linus Torvalds. Linux kernel-based operating systems (i.e. Linux operating systems) are the best operating systems out there because of many reasons like customizability, availability of different flavors and desktop environments, and also the best reason, you are the boss here, OS does not restrict anything for you, you just need to know how to do it.',
            image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/0*u9zsQ2ewcXy1-UMK',
            url: 'https://medium.com/@mohotta/start-with-the-linux-operating-system-c6276642d1c5'
        },
        {
            id: 2,
            name: 'Getting Started with Linux: Downloading and Preparing',
            description: 'Linux Mint is an operating system created based on Ubuntu which is by far the most popular Linux-based operating system in the world. But Linux Mint comes first regarding beginner friendliness especially if you are a Windows operating system user. Linux Mint is now offering a separate version of itself based on Debian Linux (ubuntu is created using this too) called Linux Mint LMDE. But I am using the Ubuntu-based Linux Mint version to give you the best first Linux experience as much as possible.',
            image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/0*dH3OA5QXhmrP4YKB',
            url: 'https://medium.com/@mohotta/getting-started-with-linux-downloading-and-preparing-c283a33710a3'
        },
    ]

    return (
        <Flex 
            id="articles"
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
                    browse knowledge
                </Text>
                <Heading
                    fontFamily={`"Poetsen One", sans-serif`}
                    fontSize={'3rem'}
                    fontWeight={'bold'}
                    textAlign={'center'}
                >
                    articles
                </Heading>
            </Flex>
            <SimpleGrid minChildWidth={'300px'} spacing={'20px'} width={'90%'} paddingY={'20px'}>
            {
                    articles.map((item) => (
                        <Card maxW='300px' bgColor={'gray.100'} id={item.id.toString()}>
                            <CardBody>
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    borderRadius='lg'
                                    width={'98%'}
                                    height={'150px'}
                                    overflow={'hidden'}
                                    loading='lazy'
                                />
                                <Stack mt='6' spacing='3'>
                                <Heading size='md' fontFamily={`"Poetsen One", sans-serif`}> {item.name} </Heading>
                                <Text fontFamily={`"Poetsen One", sans-serif`} textOverflow={'ellipsis'} noOfLines={5}>
                                    {item.description}
                                </Text>
                                </Stack>
                            </CardBody>
                            <CardFooter>
                                <Flex
                                    flexDirection={'row'}
                                    justifyContent={'space-evenly'}
                                    alignItems={'center'}
                                    width={'100%'}
                                >
                                    <Button 
                                        variant='link' 
                                        colorScheme='gray' 
                                        fontFamily={`"Poetsen One", sans-serif`}
                                        // onClick={() => setModelOpen(0)} // change to item.id when ready
                                        isDisabled={true} // make false or remove when ready
                                    >
                                        read here
                                    </Button>
                                    <Button 
                                        variant='link' 
                                        colorScheme='gray' 
                                        isDisabled={item.url == ''}
                                        fontFamily={`"Poetsen One", sans-serif`}
                                        as={'a'}
                                        href={item.url}
                                        target="_blank"
                                    >
                                        external link
                                    </Button>
                                </Flex>
                            </CardFooter>
                            </Card>
                    ))
                }
            </SimpleGrid>
            {/* <Modal 
                isOpen={modalOpen!=0} 
                onClose={() => setModelOpen(0)} 
                isCentered 
                size={'full'}
                scrollBehavior="inside"
            >
                <ModalContent>
                    <ModalHeader 
                        fontFamily={`"Poetsen One", sans-serif`} 
                        textAlign={'center'}
                    > 
                        {
                            modalOpen != 0 ? articles[modalOpen-1].name : ""
                        } 
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex
                            flexDirection={'column'}
                        >
                            <Text fontFamily={`"Poetsen One", sans-serif`}>
                                {modalOpen != 0 ? articles[modalOpen-1].description : ""}
                            </Text>
                        </Flex>
                    </ModalBody>
                    <ModalFooter>
                        <Button 
                            variant='link' 
                            colorScheme='gray' 
                            fontFamily={`"Poetsen One", sans-serif`}
                            isDisabled={modalOpen != 0 ? articles[modalOpen-1].url == '' : true}
                            as={'a'}
                            href={modalOpen != 0 ? articles[modalOpen-1].url : ""}
                            target="_blank"
                        >
                            github url
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal> */}
        </Flex>
    )
}

