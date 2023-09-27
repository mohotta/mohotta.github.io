'use client'

import {
  Container,
  Heading,
  Stack,
  Text,
  Show,
  useColorModeValue,
  useClipboard,
  IconButton,
  Tooltip
} from '@chakra-ui/react'
import { TfiLinkedin } from 'react-icons/tfi'
import { HiDocumentText } from 'react-icons/hi'
import { MdEmail } from 'react-icons/md'
import { BsGithub } from 'react-icons/bs'
import { FaSquareXTwitter } from 'react-icons/fa6'
import imgUrl from '../assets/image.jpeg'


export default function Hero() {

  const { hasCopied, onCopy } = useClipboard('kumudu.20@cse.mrt.ac.lk')

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
        <Stack spacing={6} direction='row'>
            <Tooltip label={hasCopied? 'Email Copied!' : 'Copy Email'} closeOnClick={false}> 
              <IconButton 
                aria-label='Email' 
                icon={<MdEmail/>} 
                onClick={onCopy}/>
            </Tooltip>
            <Tooltip label='Resume'>
              <IconButton 
                as={'a'} 
                href='https://drive.google.com/file/d/16_L6zsuIQUpB8RIwIlwjPiJg7XGa1QlD/view?usp=sharing' 
                target="_blank"
                rel='noopener'
                aria-label='Resume' 
                icon={<HiDocumentText/>} 
                onClick={onCopy}/>
            </Tooltip>
            <Tooltip label='LinkedIn'>
              <IconButton 
                as={'a'} 
                href='https://www.linkedin.com/in/mohotta' 
                target="_blank"
                rel='noopener'
                aria-label='LinkedIn' icon={<TfiLinkedin/>} 
                onClick={onCopy}/>
            </Tooltip>
            <Tooltip label='Github'>
              <IconButton 
                as={'a'} 
                href='https://www.github.com/mohotta' 
                target="_blank"
                rel='noopener'
                aria-label='Github' 
                icon={<BsGithub/>} 
                onClick={onCopy}/>
            </Tooltip>
            <Tooltip label='Twitter'>
              <IconButton 
                as={'a'} 
                href='https://www.twitter.com/_mohotta_' 
                target="_blank"
                rel='noopener'
                aria-label='Github' 
                icon={<FaSquareXTwitter/>} 
                onClick={onCopy}/>
            </Tooltip>
        </Stack>
      </Stack>
    </Container>
  )
}