import {
  Button,
  Flex,
  Box,
  Stack,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";
import MenuHamburguer from "./Menu";

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray.600", "gray.400");
  const activeColor = useColorModeValue("gray.900", "gray.100");
  const bgColor = useColorModeValue("", "");

  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      bg={active ? bgColor : undefined}
      color={active ? activeColor : inactiveColor}
      target={target}
      {...props}
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  const textColor = useColorModeValue("gray.600", "gray.400");
  const path = typeof window !== "undefined" ? window.location.pathname : "";

  return (
    <Stack
      as="nav"
      spacing={8}
      justifyContent="center"
      alignItems="flex-start"
      m="0 auto 4rem auto"
      maxWidth="800px"
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
        maxWidth="820px"
        my={8}
        position="relative"
      >
        <Box>
          <LinkItem href="/" path={path} target="_self">
            Home
          </LinkItem>
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
          <LinkItem href="/projects" path={path} target="_self">
            Projects
          </LinkItem>

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
          {/* <NextLink href="/About" passHref>
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
          </NextLink> */}
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
