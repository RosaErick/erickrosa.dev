import { Box, Flex, HStack, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import LanguageSwitch from "./LanguageSwitch";
import DarkModeSwitch from "./DarkModeSwitch";
import MenuHamburguer from "./Menu";
import { useTranslation } from "../../lib/i18n";

const routes = [
  { href: "/", key: "home" },
  { href: "/projects", key: "projects" },
  { href: "/work", key: "work" },
  { href: "/guestbook", key: "guestbook" },
];

// Single top bar shared by every page (home + inner pages), so navigation stays
// pixel-identical and never shifts between routes. Aligned to the same wide
// container and pinned to the right.
export default function TopBar() {
  const { t } = useTranslation();
  const path = typeof window !== "undefined" ? window.location.pathname : "";

  const inactive = "var(--text-muted)";
  const active = "var(--text)";
  const accent = "var(--accent)";

  return (
    <Box
      as="nav"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={20}
      css={{ backdropFilter: "blur(10px)" }}
    >
      <Flex
        maxW="1152px"
        mx="auto"
        px={[5, 8, 12]}
        py={2.5}
        align="center"
        justify={{ base: "space-between", md: "flex-end" }}
        gap={6}
      >
        <Box display={{ base: "flex", md: "none" }}>
          <MenuHamburguer />
        </Box>

        <HStack
          display={{ base: "none", md: "flex" }}
          spacing={7}
          fontSize="sm"
          fontWeight="medium"
        >
          {routes.map(({ href, key }) => {
            const isActive = path === href;
            return (
              <Link
                key={key}
                as={NextLink}
                href={href}
                scroll={false}
                position="relative"
                color={isActive ? active : inactive}
                transition="color .2s ease"
                _hover={{ textDecoration: "none", color: active }}
                _after={{
                  content: '""',
                  position: "absolute",
                  left: 0,
                  bottom: "-4px",
                  height: "1px",
                  width: isActive ? "100%" : "0%",
                  bg: accent,
                  transition: "width .25s ease",
                }}
                sx={{ "&:hover::after": { width: "100%" } }}
              >
                {t(`nav.${key}`)}
              </Link>
            );
          })}
        </HStack>

        <HStack spacing={1} align="center">
          <LanguageSwitch />
          <DarkModeSwitch />
        </HStack>
      </Flex>
    </Box>
  );
}
