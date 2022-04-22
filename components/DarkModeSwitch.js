import { useColorMode, IconButton } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const DarkModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const iconColor = {
        light: 'black',
        dark: 'white'
    }
    const backgroundColor = {
        light: 'gray',
        dark: 'black'
    }

    return (
        <IconButton
            aria-label="Toggle dark mode"
            icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode}
            color={iconColor[colorMode]}
            variant="ghost"
            _hover={{ background: "none" }}
            _focus={{background: "none", border:"none"}}
        />
    )
}

export default DarkModeSwitch
