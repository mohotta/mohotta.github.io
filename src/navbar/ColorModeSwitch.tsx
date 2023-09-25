import { HStack, Switch, useColorMode } from "@chakra-ui/react"
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md'


export default function ColorModeSwitch() {

    const { colorMode, toggleColorMode } = useColorMode()
    
    return (
        <HStack padding='5px' paddingX='15px'>
            <MdOutlineLightMode />
            <Switch isChecked={colorMode=='dark'} onChange={toggleColorMode} />
            <MdOutlineDarkMode />
        </HStack>
    )

}
