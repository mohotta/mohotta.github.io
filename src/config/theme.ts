// 1. Import the utilities
import { extendTheme } from '@chakra-ui/react'

// 2. Update the breakpoints as key-value pairs
const breakpoints = {
  lg: '1030px'
}

// 3. Extend the theme
export const theme = extendTheme({ breakpoints })