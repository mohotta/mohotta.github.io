
import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { ReactElement } from 'react'
import {
  FcLinux,
  FcGraduationCap,
  FcCollaboration,
  FcDataSheet,
  FcMultipleDevices,
} from 'react-icons/fc'

interface CardProps {
  heading: string
  description: string
  icon: ReactElement
}

const Card = ({ heading, description, icon }: CardProps) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderRadius="lg"
      overflow="hidden"
      bgColor={useColorModeValue('gray.100', '#2c313d')}
      p={5}>
      <Stack align={'start'} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={useColorModeValue('gray.100', 'gray.700')}>
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={'sm'} fontStyle={'italic'}>
            {description}
          </Text>
        </Box>
      </Stack>
    </Box>
  )
}

export default function About() {
  return (
    <Box p={4} id='about me'>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
          About Me
        </Heading>
        <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
          
        </Text>
      </Stack>

      <Container maxW={'5xl'} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={'CSE UG, UoM'}
            icon={<Icon as={FcGraduationCap} w={10} h={10} />}
            description={'Currently studying as a Computer Science and Engineering (Data Science) undergraduate in University of Moratuwa, Sri Lanka.'}
          />
          <Card
              heading={'Data Scientist'}
              icon={<Icon as={FcDataSheet} w={10} h={10} />}
              description={'Learning to become an Data Scientist. Current Tech Stack : python, numpy, pandas, scikit-learn, matplotlib, seaborn.'}
          />
          <Card
              heading={'Software Engineer'}
              icon={<Icon as={FcMultipleDevices} w={10} h={10} />}
              description={'Like to do software engineering work as well. Current tech stack : java, c++, javascript, REACT.'}
          />
          <Card
            heading={'Teamwork and Collaboration'}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description={"Have worked as a team leader/member in many professional projects and have a good skill in teamwork and collaborating with others."}
          />
          <Card
              heading={'Open Source Enthusiast'}
              icon={<Icon as={FcLinux} w={10} h={10} />}
              description={'Like to contribute to open source community. Support the concept of "Freedom in Software Use". Big fan of Linux operating system.'}
          />
        </Flex>
      </Container>
    </Box>
  )
}