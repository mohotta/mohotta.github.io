'use client'

import {
  Box,
  Container,
  Stack,
  Text
} from '@chakra-ui/react'


export default function Footer() {

    const copyright = String.fromCodePoint(0x00A9)

    return (
        <Box width={'100%'} marginTop={'80px'}>
        <Container
            as={Stack}
            w={'100%'}
            maxW={'6xl'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={'center'}
            align={{ base: 'center', md: 'center' }}>
            <Text> {copyright + ' '} 2023 mohotta </Text>
        </Container>
        </Box>
    )
}