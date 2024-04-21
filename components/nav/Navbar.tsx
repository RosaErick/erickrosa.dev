import {
  Flex,
  Stack,
  useColorModeValue,
  Link,
  Container,
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
  const path = typeof window !== "undefined" ? window.location.pathname : "";

  return (
    <Stack
      as="nav"
      spacing={8}
      w="100%"
      px={[0, 0, 4, 4]}
      position="fixed"
      top="5"
      left="0"
      right="0"
      zIndex="10"
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        justifyContent="space-between"
      >
        <MenuHamburguer />
        <Flex align="center">
          <Stack
            direction={{ base: "column", md: "row" }}
            display={{ base: "none", md: "flex" }}
            width={{ base: "full", md: "auto" }}
            alignItems="center"
            flexGrow={1}
          >
            <LinkItem href="/" path={path} target="_self">
              home
            </LinkItem>
            <LinkItem target="_self" href="/projects" path={path}>
              projects
            </LinkItem>
            <LinkItem target="_self" href="/work" path={path}>
              work
            </LinkItem>
          </Stack>
        </Flex>
        <DarkModeSwitch />
      </Container>
    </Stack>
  );
};

export default Navbar;
