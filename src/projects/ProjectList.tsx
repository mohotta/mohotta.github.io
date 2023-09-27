import { Box, Stack, Container, Flex, Heading, Text } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";


export default function ProjectList() {

    const projets = [
      {
        title: 'Email Client',
        techStack: ['java'],
        description: 'Email cliet for recieving emails using java. Used skills : java, object oriented programming, design patterns',
        image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        link: 'https://github.com/mohotta/easymail'
      },
      {
        title: 'Airline Ticket Reservation System',
        techStack: ['mySQL', 'php'],
        description: 'Airline ticket reservation system. Used skills: mySQL, php, HTML/CSS, Software Security',
        image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        link: 'https://github.com/mohotta/DBMS-MiniProject'
      },
      {
        title: 'Personal Portfolio',
        techStack: ['Typescript', 'REACT', 'ChakraUI'],
        description: 'My personal portfolio website. Used skills: HTML/CSS, typescript, REACT, ChakraUI',
        image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        link: 'https://github.com/mohotta/mohotta.github.io'
      }
    ]

    return (
        <Box p={4} id='projects'>
          <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
            <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'} marginTop={'70px'}>
              Projects
            </Heading>
            <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
              
            </Text>
          </Stack>
    
          <Container maxW={'5xl'} mt={12}>
            <Flex flexWrap="wrap" gridGap={6} justify="center">
              {projets.map((project) => (
                <ProjectCard 
                  title={project.title}
                  techStack={project.techStack}
                  description={project.description}
                  image={project.image}
                  link={project.link}
                />
              ))}
            </Flex>
          </Container>
        </Box>
      )

}
