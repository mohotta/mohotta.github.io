'use client'

import {
  Container,
  Heading,
  Stack,
  Text,
  Button, 
  Show,
  useColorModeValue
} from '@chakra-ui/react'
import { TfiGithub, TfiLinkedin, TfiTwitterAlt } from 'react-icons/tfi'
import { HiDocumentText } from 'react-icons/hi'
import imgUrl from '../assets/image.jpeg'


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
          Science and Engineering, University of Moratuwa, Sri Lanka. My Interests are
          Data Science, Machine Learning, Web Development  and Open Source Software.
        </Text>
        <Stack spacing={6} direction={{base:'column', md:'row'}}>
          <Stack spacing={6} direction={{base:'column', sm:'row'}} padding={0}>
            <Button
              leftIcon = {<HiDocumentText/>}
              px={6}
              colorScheme={'gray'}>
              <a href="https://bit.ly/klm-cv">Resume</a>
            </Button>
            <Button
              leftIcon = {<TfiLinkedin/>}
              px={6}
              colorScheme={'gray'}>
              <a href="https://www.linkedin.com/in/mohotta/">LinkedIn</a>
            </Button>
          </Stack>
          <Stack spacing={6} direction={{base:'column', sm:'row'}} padding={0}>
            <Button
              leftIcon = {<TfiGithub/>}
              px={6}
              colorScheme={'gray'}>
              <a href="https://github.com/mohotta">Github</a>
            </Button>
            <Button
              leftIcon = {<TfiTwitterAlt/>}
              px={6}
              colorScheme={'gray'}>
              <a href="https://twitter.com/_mohotta_">Twitter</a>
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  )
}