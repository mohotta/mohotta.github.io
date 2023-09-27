'use client'

import {
  Container,
  Heading,
  Stack,
  Text,
  Show,
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
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '3xl', md: '5xl' }}
          lineHeight={'110%'}>
          <Text 
            as={'span'} 
            color={useColorModeValue('black', 'white')} 
            fontWeight={700}
            >
            Kumudu
          </Text>
          {' '}
          <Show above='sm'>
          <Text as={'span'} color={useColorModeValue('black', 'white')} fontWeight={700}>
            Laksitha
          </Text>
          {' '}
          </Show>
          <Text as={'span'} color={useColorModeValue('black', 'white')} fontWeight={700}>
            Mohottala
          </Text>
        </Heading>
        <Text fontStyle={'italic'} color={useColorModeValue('black', 'white')} maxW={'2xl'} fontWeight={500}>
          I am a Data Science and Engineering Undergraduate from Department of Computer
          Science and Engineering, University of Moratuwa, Sri Lanka. I am looking for an internship opportunity to step into
          the world of work. My Interests are
          Data Science, Machine Learning, Web Development  and Open Source Software.
        </Text>

        <SocialButtons />
        
      </Stack>
    </Container>
  )
}