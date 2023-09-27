'use client'

import { useState } from 'react'
import {
  Box,
  Heading,
  Button,
  Text,
  Img,
  Flex,
  HStack,
  useColorModeValue
} from '@chakra-ui/react'
import { BsArrowUpRight, BsHeartFill, BsHeart } from 'react-icons/bs'


interface props {
  title: string,
  techStack: string[],
  description: string,
  image: string,
  link : string
}


export default function ProjectCard({ title, techStack, description, image, link} : props) {

  const [liked, setLiked] = useState(false)

  return (
      <Box
      maxW={{ base: 'full', md: '300px' }}
      w={'full'}
      borderRadius="lg"
      overflow="hidden"
      bgColor={useColorModeValue('gray.100', '#2c313d')}
      p={5}>
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
              <Box bg="black" display={'inline-block'} px={2} py={1} color="white" mb={2} borderRadius={'lg'}>
                <Text fontSize={'xs'} fontWeight="medium">
                  {item}
                </Text>
              </Box>
            ))
          } 
          </HStack>
          <Heading fontSize={'xl'}>
            {title}
          </Heading>
          <Text fontStyle={'italic'}>
            {description}
          </Text>
        </Box>
        <HStack borderTop={'1px'}>
          <Flex
            p={4}
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            cursor={'pointer'}
            w="full">
            <Button 
              rightIcon={<BsArrowUpRight />}
              as={"a"} 
              target='_blank' 
              rel='noopener' 
              href={link} 
              fontSize={'md'} 
              fontWeight={'semibold'}>
              View more
            </Button>
          </Flex>
          <Flex
            p={4}
            alignItems="center"
            justifyContent={'space-between'}
            roundedBottom={'sm'}
            borderLeft={'1px'}
            cursor="pointer"
            onClick={() => setLiked(!liked)}>
            {liked ? (
              <BsHeartFill fill="red" fontSize={'24px'} />
            ) : (
              <BsHeart fontSize={'24px'} />
            )}
          </Flex>
        </HStack>
      </Box>
  )
}