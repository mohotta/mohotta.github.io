'use client'
import imgUrl from "../assets/image.jpeg"
import { Avatar, Box, Flex, keyframes, useColorModeValue } from '@chakra-ui/react'

export default function ProfilePic() {
  const size = {base:'150px', md:'200px'}
  const color = useColorModeValue('blue.600', 'blue.300')

  const pulseRing = keyframes`
	0% {
    transform: scale(0.3);
  }
  40%,
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
	`

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      margin="-100px"
      marginTop='10px'
      h="250px"
      w="full"
      overflow='visible'>
      {/* Ideally, only the box should be used. The <Flex /> is used to style the preview. */}
      <Box
        as="div"
        position="relative"
        w={size}
        h={size}
        _before={{
          content: "''",
          position: 'relative',
          display: 'block',
          width: '300%',
          height: '300%',
          boxSizing: 'border-box',
          marginLeft: '-100%',
          marginTop: '-100%',
          borderRadius: '50%',
          bgColor: color,
          animation: `3s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
        }}>
        <Avatar src={imgUrl} size="full" position="absolute" top={0} />
      </Box>
    </Flex>
  )
}