import { Flex, Stack, Link, Container } from "@chakra-ui/react";
import NextLink from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";
import LanguageSwitch from "./LanguageSwitch";
import MenuHamburguer from "./Menu";
import { useTranslation } from "../../lib/i18n";

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href;
  const inactiveColor = "var(--text-muted)";
  const activeColor = "var(--text)";
  const bgColor = "";

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
  const { t } = useTranslation();

  return (
    <Stack
      as="nav"
      spacing={8}
      w="100%"
      px={[4, 4, 4, 4]}
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex={2}
      css={{ backdropFilter: "blur(10px)" }}
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
              {t("nav.home")}
            </LinkItem>
            <LinkItem target="_self" href="/projects" path={path}>
              {t("nav.projects")}
            </LinkItem>
            <LinkItem target="_self" href="/work" path={path}>
              {t("nav.work")}
            </LinkItem>
            <LinkItem target="_self" href="/guestbook" path={path}>
              {t("nav.guestbook")}
            </LinkItem>
          </Stack>
        </Flex>
        <Flex align="center">
          <LanguageSwitch />
          <DarkModeSwitch />
        </Flex>
      </Container>
    </Stack>
  );
};

export default Navbar;
