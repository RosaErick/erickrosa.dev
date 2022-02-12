import {
    useColorMode,
    Image,
    Button,
    Flex,
    Box
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import DarkModeSwitch from './DarkModeSwitch'
import { GiSloth } from 'react-icons/gi'
const Navbar = () => {
    const { colorMode } = useColorMode()
    const router = useRouter()

    const navHoverBg = {
        light: 'pink.400',
        dark: 'pink.500',
    }

    return (
        <Flex
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            maxWidth="820px"
            minWidth="356px"
            width="100%"
            as="nav"
            px={5}
            my={8}
            mx="auto"
        >
        <GiSloth  fontSize="30px" /> 
            
            <Box>
                    <NextLink href="/" passHref>
                    <Button
                        as="a"
                        variant="ghost"
                        p={[1, 2, 4]}
                        
                        _hover={{ border: '2px solid',
                            borderColor: navHoverBg[colorMode] }} 
                        aria-label="Home"
                    >
                        Home
                    </Button>
                </NextLink>
                <NextLink href="/blog" passHref>
                    <Button
                        as="a"
                        variant="ghost"
                        p={[1, 2, 4]}
                        _hover={{
                            border: '2px solid',
                            borderColor: navHoverBg[colorMode]
                        }}
                        aria-label="Blog"
                    >
                        Blog
                    </Button>
                </NextLink>
                <NextLink href="/projects" passHref>
                    <Button
                        as="a"
                        variant="ghost"
                        p={[1, 2, 4]}
                        _hover={{border: '2px solid',
                            borderColor: navHoverBg[colorMode] }} 
                        aria-label="Projects"
                    >
                        Projects
                    </Button>
                </NextLink>
            
                    <NextLink href="/snippets" passHref>
                    <Button
                        as="a"
                        variant="ghost"
                        p={[1, 2, 4]}
                        _hover={{ border: '2px solid',
                            borderColor: navHoverBg[colorMode] }} 
                        aria-label="Snippets"
                    >
                        Snippets
                    </Button>
                    
                </NextLink>
                <DarkModeSwitch  />
            </Box>
            
        </Flex>
    )
}

export default Navbar