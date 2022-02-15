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
import MenuHamburguer from './Menu'

const Navbar = () => {
    const { colorMode } = useColorMode()
    const router = useRouter()

    const navHoverBg = {
        light: 'pink.400',
        dark: 'pink.500',
    }

    return (<>
        <MenuHamburguer />
        <Flex
            display={['none', 'none', 'flex', 'flex']}
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            maxWidth="820px"
            minWidth="356px"
            width="100%"
            as="nav"
            px={6}
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
                        fontSize="sm"
                        _hover={{ border: '2px solid',
                           }} 
                        aria-label="Home"
                        colorScheme='dark'
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
                            border: '1px solid',
                          
                        }}
                        aria-label="Blog"
                        fontSize="sm"
                        colorScheme='dark'
                    >
                        Blog
                    </Button>
                </NextLink>
                <NextLink href="/projects" passHref>
                    <Button
                        as="a"
                        variant="ghost"
                        p={[1, 2, 4]}
                        _hover={{border: '1px solid',
                             }} 
                        aria-label="Projects"
                        fontSize="sm"
                         colorScheme='dark'
                    >
                        Projects
                    </Button>
                </NextLink>
            
                    <NextLink href="/snippets" passHref>
                    <Button
                        as="a"
                        variant="ghost"
                        p={[1, 2, 4]}
                        _hover={{ border: '1px solid',
                        }} 
                        aria-label="Snippets"
                        fontSize="sm"
                         colorScheme='dark'
                    >
                        Snippets
                    </Button>
                    
                </NextLink>
                    <NextLink href="/About" passHref>
                    <Button
                        as="a"
                        variant="ghost"
                        p={[1, 2, 4]}
                        _hover={{ border: '1px solid',
                          }} 
                        aria-label="About"
                        fontSize="sm"
                         colorScheme='dark'
                    >
                        About
                    </Button>
                    
                </NextLink>
                <DarkModeSwitch  />
            </Box>
            
        </Flex>
        </>
    )
}

export default Navbar