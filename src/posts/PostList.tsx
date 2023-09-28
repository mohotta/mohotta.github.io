import { Flex, Heading, Text, Stack, Container, Box } from "@chakra-ui/react";
import PostCard from "./PostCard";

export default function PostList() {

    const posts = [
        {
            title: 'Getting Started with Linux: Introduction',
            medium: 'medium.com',
            description: 'Linux is a free and open source operating system kernel ( Kernel is the backbone of an operating system which enables an operating system to manage all the underlying hardware including input-output and memory ) developed by Linus Torvalds. Linux kernel-based operating systems ( i.e. Linux operating systems) are the best operating systems out there because of many reasons like customizability, availability of different flavors and desktop environments, and also the best reason, you are the boss here, OS does not restrict anything for you, you just need to know how to do it.',
            date: 'Feb 04, 2023',
            time: 4,
            image: 'https://images.unsplash.com/photo-1640552435388-a54879e72b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGludXh8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
            link: 'https://medium.com/@mohotta/start-with-the-linux-operating-system-c6276642d1c5'
        },
        {
          title: 'Getting Started with Linux: Downloading and Preparing',
          medium: 'medium.com',
          description: 'Linux Mint is an operating system created based on Ubuntu which is by far the most popular Linux-based operating system in the world. But Linux Mint comes first regarding beginner friendliness especially if you are a Windows operating system user. Linux Mint is now offering a separate version of itself based on Debian Linux (ubuntu is created using this too) called Linux Mint LMDE. But I am using the Ubuntu-based Linux Mint version to give you the best first Linux experience as much as possible.',
          date: 'Sep 28, 2023',
          time: 3,
          image: 'https://images.unsplash.com/photo-1613677135043-a2512fbf49fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGxpbnV4fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
          link: 'https://mohotta.medium.com/getting-started-with-linux-downloading-and-preparing-c283a33710a3'
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

