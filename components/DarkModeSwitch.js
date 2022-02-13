import { useColorMode, IconButton } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const DarkModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const iconColor = {
        light: 'black',
        dark: 'white'
    }
    const backgroundColor = {
        light: 'white',
        dark: 'black'
    }

    return (
        <IconButton
            aria-label="Toggle dark mode"
            icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode}
            color={iconColor[colorMode]}
            variant="ghost"
        />
    )
}

export default DarkModeSwitch
