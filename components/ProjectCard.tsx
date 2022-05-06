import { useState } from 'react'
import {
    useColorMode,
    Heading,
    Text,
    Flex,
    Link,
    Box,
    IconButton,
    Button,
} from '@chakra-ui/react'

import { ExternalLinkIcon, ViewIcon } from '@chakra-ui/icons'

interface ProjectCardProps {
    title: string,
    description: string,
    repoHref: string,
    demoHref: string,
    languageColor: string,
    language: string,
    starCount: number,
    stargazersUrl: string,


} 

export default function ProjectCard({ title, description, repoHref, demoHref, languageColor, language, starCount, stargazersUrl } : ProjectCardProps) {
    const [opacity, setOpacity] = useState(0)
    const [lineColor, setLineColor] = useState("blue.500")
    const { colorMode } = useColorMode()

    const colorSecondary = {
        light: 'gray.600',
        dark: 'gray.400'
    }

    const boxShadowColor = {
        light: '0px 8px 26px rgba(0, 0, 0, 0.2)',
        dark: '0px 8px 26px rgba(0, 0, 0, 0.7)'
    }
    return (
        <Flex
            flexDir="column"
            _hover={{ transform: 'scale(1.05)', border: `2px solid ${languageColor}` }}
            transition="transform .5s ease-in-out, border .5s ease-in-out"
            boxShadow={boxShadowColor[colorMode]}
            borderRadius={5}
            border="2px solid transparent"
            onMouseOver={() => { setOpacity(1), setLineColor(languageColor) }}
            onMouseLeave={() => { setOpacity(0), setLineColor("blue.500") }}
        >
            <Flex p={[5, 15, 25]} flexDir="column" justify="space-between" h="100%">
                <Box>
                    <Heading as="h3" size="lg" fontWeight="semibold" mb={2}>{title}</Heading>
                    <Box h={1} w="35%" bgColor={lineColor} transition="background-color .5s ease-in-out" mb={4} />
                    <Text color={colorSecondary[colorMode]}>{description}</Text>
                </Box>
                <Flex justify="space-between" mt={2}>
                    <Flex align="center">
                        {stargazersUrl && (
                            <Link href={stargazersUrl.replace("api.", "").replace("repos/", "")} _hover={{ textDecor: 'none' }} isExternal>
                                <Flex opacity={opacity} transition="opacity .5s ease-in-out">
                                    <Button colorScheme="yellow" variant="default">{starCount}</Button>
                                </Flex>
                            </Link>
                        )}
           
                        {repoHref && (
                            <Link href={repoHref} isExternal>
                                <IconButton aria-label="Go to repo href" icon={<ExternalLinkIcon />} variant="default" opacity={opacity} transition="opacity .5s ease-in-out" />
                            </Link>
                        )}
                        {demoHref && (
                            <Link href={demoHref} isExternal>
                                <IconButton aria-label="Go to demo href" icon={<ViewIcon />} variant="default" opacity={opacity} transition="opacity .5s ease-in-out" />
                            </Link>
                        )}
                    </Flex>
                    <Flex align="center">
                        <Box w={3} h={3} mr={1} borderRadius="50%" bgColor={languageColor} />
                        <Text fontSize="sm" color={colorSecondary[colorMode]}>{language}</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}