
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import ColorModeSwitch from './ColorModeSwitch'
import AnchorLink from 'react-anchor-link-smooth-scroll'


interface Props {
  link: React.ReactNode
  children: string
}

const Links = [
  {
    title: 'ABOUT ME', 
    link:'about'
  },
  {
    title: 'MY SKILLS', 
    link:'skills'
  },  
  {
    title: 'MY PROJECTS', 
    link:'projects'
  }, 
  {
    title: 'BLOG POSTS', 
    link:'posts'
  }]

const NavLink = (props: Props) => {
  const { link, children } = props
  return (
    <Button
      variant={'ghost'}
      _hover={{
        color: useColorModeValue('blue.500', 'blue.200')
      }}
    >
      <AnchorLink href={'#' + link}> {children} </AnchorLink>
    </Button>
  )
}

export default function NavBar() {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={4} alignItems={'center'}>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link.link} link={link.link}>{link.title}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <ColorModeSwitch />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.link} link={link.link}>{link.title}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}
