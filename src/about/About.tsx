
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
          fontWeight={700}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={useColorModeValue('gray.100', 'gray.700')}>
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md" color={useColorModeValue('blue.900', 'blue.100')}>{heading}</Heading>
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
    <Box p={4} id='about'>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'} marginTop={'70px'}>
          ABOUT ME
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
              heading={'DS & ML'}
              icon={<Icon as={FcDataSheet} w={10} h={10} />}
              description={'Interested on becoming an Data Scientist and Machine Learning Engineer.'}
          />
          <Card
              heading={'WebDev & SE'}
              icon={<Icon as={FcMultipleDevices} w={10} h={10} />}
              description={'Interested in working on software engineering projects with DS & ML components.'}
          />
          <Card
            heading={'Teamwork and Collaboration'}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description={"Expierience in working as a team in professional bodies sri lanka"}
          />
          <Card
              heading={'Open Source Enthusiast'}
              icon={<Icon as={FcLinux} w={10} h={10} />}
              description={'Supporter the concept of "Freedom in Software Use". Big fan and have years of expierience in Linux operating system.'}
          />
        </Flex>
      </Container>
    </Box>
  )
}