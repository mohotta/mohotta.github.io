'use client'

import {
  Container,
  Heading,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import imgUrl from '../assets/image.jpeg'
import SocialButtons from './SocialButtons'


export default function Hero() {

  

  return (
    <Container maxW={'5xl'} background={imgUrl}>
      <Stack
        
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 6, md: 8 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={700}
          fontSize={{ base: '2xl', sm: '3xl', md: '5xl' }}
          lineHeight={'110%'}
          color={useColorModeValue('blue.900', 'blue.500')}>
          KUMUDU LAKSITHA MOHOTTALA
        </Heading>
        <Text fontStyle={'italic'} color={useColorModeValue('black', 'white')} maxW={'2xl'} fontWeight={500}>
          A dedicated professional and technology enthusiast with strong
          teamwork and collaboration skills. Passionate about leveraging
          technology for growth, I aim to contribute significantly to a
          company’s success, always striving for excellence and continuous learning. My Interests are
          Data Science, Machine Learning, and Web Development.
        </Text>

        <SocialButtons />
        
      </Stack>
    </Container>
  )
}