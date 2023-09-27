
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Img,
} from '@chakra-ui/react'
import imgUrl from '../assets/avatar.jpg'


interface props {
    title: string,
    medium : string,
    description: string,
    date: string,
    time: number,
    image: string,
    link: string
}


export default function PostCard({ title, medium, description, date, time, image, link } : props) {
  return (
    <Center py={6}>
      <Box
        as='a'
        href={link}
        target='_blank'
        rel='noopener'
        maxW={{ base: 'full', md: '300px' }}
        w={'full'}
        borderRadius="lg"
        overflow="hidden"
        bgColor={useColorModeValue('gray.100', '#2c313d')}
        p={5}>
        <Box h={'200px'} marginBottom={'10px'}>
            <Img
                src={image}
                roundedTop={'sm'}
                objectFit="cover"
                h="full"
                w="full"
                alt={'Blog Image'}
            />
        </Box>
        <Stack>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            {medium}
          </Text>
          <Heading
            // eslint-disable-next-line react-hooks/rules-of-hooks
            fontSize={'xl'}
            fontWeight={800}
            fontFamily={'body'}>
            {title}
          </Heading>
          <Text fontStyle={'italic'} noOfLines={6}>
            {description}
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar src={imgUrl} />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>Kumudu Mohottala</Text>
            <Text color={'gray.500'}>{date} · {time}min read</Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  )
}