import {
  Box,
  Stack,
    Text,
  Flex,
  Container,
  ButtonGroup,
  IconButton,
  Link,
  Divider,
} from "@chakra-ui/react";

import NextLink from 'next/link'

import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";


const Footer = () => (
  <Box
    as="footer"
    role="contentinfo"
        m=" 0 auto"
        width={"100%"}
    maxW="7xl"
       
    px={{ base: "4", md: "8" }}
  >
  
      <Stack
        direction="row"
        spacing="6"
            align="center"
            alignSelf={"center"}
        justify="center"
                pb={5}
                textAlign="center"
      >
            <ButtonGroup variant="default">
          <IconButton
            as="a"
            href="mailto:erickpmotta@gmail.com"
            aria-label="Email: erickpmotta@gmail.com"
            icon={<FaEnvelope fontSize="20px" />}
          />
          <IconButton
                    as="a"
                    variant={"default"}
            href="https://www.instagram.com/erickrozza/"
            aria-label="instagram"
            icon={<FaInstagram fontSize="20px" />}
          />
          <IconButton
            as="a"
            href="https://www.linkedin.com/in/erick-rosa-dev/"
            aria-label="Linkedin"
            icon={<FaLinkedin fontSize="20px" />}
          />
          <IconButton
            as="a"
            href="https://github.com/RosaErick"
            aria-label="Github"
            icon={<FaGithub fontSize="20px" />}
          />
        </ButtonGroup>
        </Stack>
        <Flex justifyContent={"center"} fontWeight="bold"  fontSize={9} fontFamily={"monospace"} gap="10px">
        <NextLink href="/blog">
        Blog
        </NextLink>
          <NextLink href="/snippets">
        Snippets
        </NextLink>
              <NextLink href="https://erickrosa.dev/images/Erick_Rosa_CV_2022.pdf" passHref>
        Resume
        </NextLink>
    <NextLink href="/About">
   About
            </NextLink>
            </Flex>
      <Divider pt={2} />
      <Stack direction="row" align="center" justify="space-between" pt={5}>
        <Text fontSize="11px" fontWeight={'medium'} >
              &copy; Erick Rosa {new Date().getFullYear()}
        </Text>
        <IconButton
          as={Link}
                rounded="md"
                background={"none"}
                _hover={{background:"none"}}
          aria-label="Github Repo"
          rel="noopener"
          href="https://github.com/RosaErick/erickrosa.dev"
          isExternal
          icon={<FaGithub fontSize="18px" />}
        />
      </Stack>
 
  </Box>
);

export default Footer;