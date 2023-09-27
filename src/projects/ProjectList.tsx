import { Box, Stack, Container, Flex, Heading, Text } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";


export default function ProjectList() {

    const projets = [
      {
        title: 'EasyMail Client',
        techStack: ['java', 'OOP'],
        description: 'Email cliet for recieving emails using java. Used skills : java, object oriented programming, design patterns',
        image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZW1haWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        link: 'https://github.com/mohotta/easymail'
      },
      {
        title: 'Airline Ticket Reservation System',
        techStack: ['mySQL', 'php'],
        description: 'Airline ticket reservation system. Used skills: mySQL, php, HTML/CSS, Software Security',
        image: 'https://images.unsplash.com/photo-1505164294036-5fad98506d20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFpciUyMHRpY2tldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        link: 'https://github.com/mohotta/DBMS-MiniProject'
      },
      {
        title: 'Speech Visualization (Ongoing)',
        techStack: ['python', 'ML', 'dashboarding'],
        description: 'dashboard showing the features of a audio file/live recording uploaded/recorded by the user',
        image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGFzaGJvYXJkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        link:'https://github.com/mushrafmim/speech-vis-be'
      },
      {
        title: 'Personal Portfolio',
        techStack: ['typescript', 'REACT', 'ChakraUI'],
        description: 'My personal portfolio website. Used skills: HTML/CSS, typescript, REACT, ChakraUI',
        image: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydGZvbGlvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
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
