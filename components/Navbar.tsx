import {
  Button,
  Flex,
  Box,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";
import MenuHamburguer from "./Menu";

const Navbar = () => {
  const textColor = useColorModeValue("gray.600", "gray.400");

  return (
    <Stack
      as="nav"
      spacing={8}
      justifyContent="center"
      alignItems="flex-start"
      m="0 auto 4rem auto"
      maxWidth="45.625rem"
      px={[0, 0, 4, 4]}
      position="relative"
    >
      <MenuHamburguer />
      <Flex
        display={["none", "none", "flex", "flex"]}
        flexDirection="row"
        m="0 auto 4rem auto"
        justifyContent="space-between"
        alignItems="center"
        w="90%"
        maxWidth="720px"
        my={8}
        position="relative"
      >
        <Box>
          <NextLink href="/" passHref>
            <Button
              as="button"
              variant="ghost"
              p={[1, 2, 3]}
              fontSize="m"
              _hover={{ border: ".125rem solid" }}
              aria-label="Home"
              color={textColor}
            >
              Home
            </Button>
          </NextLink>
          {/* <NextLink href="/blog" passHref>
            <Button
              as="button"
              variant="ghost"
              p={[1, 2, 3]}
              _hover={{
                border: ".0625rem solid",
              }}
              aria-label="Blog"
              fontSize="m"
              colorScheme="dark"
              color={textColor}
            >
              Blog
            </Button>
          </NextLink> */}
          <NextLink href="/projects" passHref>
            <Button
              as="button"
              variant="ghost"
              p={[1, 2, 3]}
              _hover={{ border: ".0625rem solid" }}
              aria-label="Projects"
              fontSize="m"
              color={textColor}
            >
              Projects
            </Button>
          </NextLink>

          {/* <NextLink href="/snippets" passHref>
            <Button
              as="button"
              variant="ghost"
              p={[1, 2, 3]}
              _hover={{ border: ".0625rem solid" }}
              aria-label="Snippets"
              fontSize="m"
              color={textColor}
            >
              Snippets
            </Button>
          </NextLink> */}
          <NextLink href="/About" passHref>
            <Button
              as="button"
              variant="ghost"
              p={[1, 2, 3]}
              _hover={{ border: ".0625rem solid" }}
              aria-label="About"
              fontSize="m"
              color={textColor}
            >
              About
            </Button>
          </NextLink>
          <NextLink
            href="https://erickrosa.dev/images/Erick_Rosa_CV_2022.pdf"
            passHref
          ></NextLink>
        </Box>

        <DarkModeSwitch />
      </Flex>
    </Stack>
  );
};

export default Navbar;
