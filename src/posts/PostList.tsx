import { Flex, Heading, Text, Stack, Container, Box } from "@chakra-ui/react";
import PostCard from "./PostCard";

export default function PostList() {

    type Post = {
        title: string,
        medium: string,
        description: string,
        date: string,
        time: number,
        image: string,
        link: string
    }

    let posts : Post[] = [
        {
            title: 'Start with the Linux Operating System',
            medium: 'medium.com',
            description: 'Linux is a free and open source operating system kernel ( Kernel is the backbone of an operating system which enables an operating system to manage all the underlying hardware including input-output and memory ) developed by Linus Torvalds. Linux kernel-based operating systems ( i.e. Linux operating systems) are the best operating systems out there because of many reasons like customizability, availability of different flavors and desktop environments, and also the best reason, you are the boss here, OS does not restrict anything for you, you just need to know how to do it.',
            date: 'Feb 04, 2023',
            time: 2,
            image: 'https://images.unsplash.com/photo-1640552435388-a54879e72b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGludXh8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
            link: 'https://medium.com/@mohotta/start-with-the-linux-operating-system-c6276642d1c5'
        }
    ]

    return (
        <Box p={4} id='posts'>
          <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
            <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'} marginTop={'70px'}>
              Posts
            </Heading>
            <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
              
            </Text>
          </Stack>
    
          <Container maxW={'5xl'} mt={12}>
            <Flex flexWrap="wrap" gridGap={6} justify="center">
              {posts.map((post) => (
                <PostCard
                    title={post.title}
                    medium={post.medium}
                    description={post.description}
                    date={post.date}
                    time={post.time}
                    image={post.image}
                    link={post.link}
                />
              ))}
            </Flex>
          </Container>
        </Box>
      )

}

