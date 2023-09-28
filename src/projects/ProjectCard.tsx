'use client'

import {
  Box,
  Heading,
  Text,
  Img,
  HStack,
  useColorModeValue
} from '@chakra-ui/react'


interface props {
  title: string,
  techStack: string[],
  description: string,
  image: string,
  link : string
}


export default function ProjectCard({ title, techStack, description, image, link} : props) {


  return (
      <Box
      as='a'
      href={link}
      target='_blank'
      rel='noopener'
      maxW={{ base: 'full', md: '310px' }}
      w={'full'}
      borderRadius="lg"
      overflow="hidden"
      bgColor={useColorModeValue('gray.100', '#2c313d')}
      p={5}
      _hover={{
        backgroundColor: useColorModeValue('gray.200', '#3f444e')
      }}
      >
        <Box h={'200px'}>
          <Img
            src={image}
            roundedTop={'sm'}
            objectFit="cover"
            h="full"
            w="full"
            alt={'Blog Image'}
          />
        </Box>
        <Box p={4}>
          <HStack> {
            techStack.map((item) => (
              <Box bg="gray.800" display={'inline-block'} px={2} py={1} color="white" mb={2} borderRadius={'md'}>
                <Text fontSize={'xs'} fontWeight="medium">
                  {item}
                </Text>
              </Box>
            ))
          } 
          </HStack>
          <Heading fontSize={'xl'} fontWeight={700} color={useColorModeValue('blue.900', 'blue.100')}>
            {title}
          </Heading>
          <Text fontStyle={'italic'}>
            {description}
          </Text>
        </Box>
        
      </Box>
  )
}