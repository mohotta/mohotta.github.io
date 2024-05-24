import { Image, Flex, Heading, Text, ListItem, UnorderedList, Button, SimpleGrid, Card, CardBody, CardFooter, Stack, Modal, ModalContent, ModalBody, ModalCloseButton, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import airline from './images/airline.webp'
import compiler from './images/compiler.webp'
import gaze from './images/gaze.webp'
import speech from './images/audio.webp'
import portfolio from './images/portfolio.webp'
import robot from './images/robot.webp'
import { useState } from "react";

export default function Portfolio() {

    const [modalOpen, setModelOpen] = useState(0)

    const projects = [
        {
            id: 1,
            name: 'speech visualization',
            tldr: 'Dashboard showing the features of live recorded or uploaded audio files using machine learning models built using the wav2vec 2.0 model developed by Facebook.',
            description: 'We worked on this as semester 5 project in third year. We tried to predict speaker age, gender, emotions, pitch etc from the recorded audio. User can upload pre-recorded audio or record live directly from the dashboard. We used multiple speech datasets and state of the art models for the task. If there are no good models, we tried to buiold our own models (for example: emotion detection).',
            category: 'ds',
            technologies: ['python', 'git/github', 'deep learning', 'hugging face', 'pytorch', 'tensorflow', 'audio processing'],
            image: speech,
            url: 'https://github.com/sp-vis'
        },
        {
            id: 2,
            name: 'personal portfolio',
            tldr: 'Portfolio site create using chakra ui and vite for myself. Hosted on github pages.',
            description: 'Portfolio site create using chakra ui and vite for myself. I started working on frontend development with this project. Learned technologies needed parellelly woth the development. First version was purely created on chakra ui templates. second version (current version) is created using chakra ui but  without usin any templates and used my imagination for ui/ux.',
            category: 'se',
            technologies: ['typescript', 'react', 'vite', 'chakra ui', 'git/gihub', 'github pages', 'frontend development'],
            image: portfolio,
            url: 'https://github.com/mohotta/mohotta.github.io'
        },
        {
            id: 3,
            name: 'gaze tracking system',
            tldr: 'Gaze tracking program  to see if a person is paying attention to the screen using meadiapipe libraries.',
            description: 'Gaze tracking system to track the attention of the user to the screen using facial landmarks obtained using googles mediapipe libraires. I created the training data by myself and trained a random forest model to give results.',
            category: 'ds',
            technologies: ['python', 'mediapipe', 'opencv', 'git/github', 'machine learning'],
            image: gaze,
            url: 'https://github.com/mohotta/gaze-tracker-python'
        },
        {
            id: 4,
            name: 'airline reservation system',
            tldr: 'airline ticker reservation system using php, mySQL & HTML.',
            description: 'airline reservation system created as a database management project in the university. We created a system with user management, ticket price discounts with user tier, seat booking system etc.',
            category: 'se',
            technologies: ['html/css', 'bootstrap', 'php', 'mysql', 'git/github', 'database management'],
            image: airline,
            url: 'https://github.com/mohotta/DBMS-MiniProject.git'
        },
        {
            id: 5,
            name: 'micro-mouse project',
            tldr: 'Programmed a maze solving algorithm for a micro-mouse robot.',
            description: 'Programmed a maze solving algorithm for a micro-mouse project ot present in a competition. Used c++ to use in a micro controller board. I used flood fill algorimth for the project',
            category: 'se',
            technologies: ['c++', 'arduino', 'flood-fill algorithm'],
            image: robot,
            url: ''
        },
        {
            id: 6,
            name: 'rpal intepreter',
            tldr: 'Intepreter program for rpal programming laguage.',
            description: 'Intepreter program for rpal programming laguage.',
            category: 'se',
            technologies: ['c++', 'programming laguages'],
            image: compiler,
            url: ''
        },
    ]

    return (
        <Flex 
            id="portfolio"
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
                    recent projects & works
                </Text>
                <Heading
                    fontFamily={`"Poetsen One", sans-serif`}
                    fontSize={'3rem'}
                    fontWeight={'bold'}
                    textAlign={'center'}
                >
                    portfolio
                </Heading>
            </Flex>
            <SimpleGrid minChildWidth={'300px'} spacing={'20px'} width={'90%'} paddingY={'20px'}>
            {
                    projects.map((item) => (
                        <Card maxW='300px' bgColor={'gray.100'}>
                            <CardBody>
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    borderRadius='lg'
                                    width={'98%'}
                                    height={'150px'}
                                    overflow={'hidden'}
                                />
                                <Stack mt='6' spacing='3'>
                                <Heading size='md' fontFamily={`"Poetsen One", sans-serif`}> {item.name} </Heading>
                                <Text fontFamily={`"Poetsen One", sans-serif`}>
                                    {item.tldr}
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
                                        onClick={() => setModelOpen(item.id)}
                                    >
                                        more info
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
                                        github url
                                    </Button>
                                </Flex>
                            </CardFooter>
                            </Card>
                    ))
                }
            </SimpleGrid>
            <Modal 
                isOpen={modalOpen!=0} 
                onClose={() => setModelOpen(0)} 
                isCentered 
                size={'sm'}
                scrollBehavior="inside"
            >
                <ModalOverlay />
                <ModalContent>
                <ModalHeader fontFamily={`"Poetsen One", sans-serif`}> {modalOpen != 0 ? projects[modalOpen-1].name : ""} </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Flex
                        flexDirection={'column'}
                    >
                        <Text fontFamily={`"Poetsen One", sans-serif`}>
                            {modalOpen != 0 ? projects[modalOpen-1].description : ""}
                        </Text>
                        <Text fontFamily={`"Poetsen One", sans-serif`} marginTop={2}>
                            used technologies,
                        </Text>
                        <UnorderedList  fontFamily={`"Poetsen One", sans-serif`}>
                            {
                                modalOpen != 0 ? 
                                    projects[modalOpen-1].technologies.map(tech => (
                                        <ListItem> {tech} </ListItem>
                                    )) : ""
                            }
                        </UnorderedList>
                    </Flex>
                </ModalBody>

                <ModalFooter>
                    <Button 
                        variant='link' 
                        colorScheme='gray' 
                        fontFamily={`"Poetsen One", sans-serif`}
                        isDisabled={modalOpen != 0 ? projects[modalOpen-1].url == '' : true}
                        as={'a'}
                        href={modalOpen != 0 ? projects[modalOpen-1].url : ""}
                        target="_blank"
                    >
                        github url
                    </Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </Flex>
    )
}