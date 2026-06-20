import {
  Menu,
  Box,
  Flex,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { useTranslation } from "../../lib/i18n";

const MenuHamburguer = () => {
  const { t } = useTranslation();
  // Define color variables with useColorModeValue for dynamic theme colors
  const iconColor = "var(--text)";
  const menuBgColor = "var(--surface)";
  const menuTextColor = "var(--text)";
  const menuHoverBgColor = "var(--accent-soft)";

  return (
    <Flex
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      
      width="100%"
      as="nav"
      px={1}
      my={0}
      mx="auto"
      display={["flex", "flex", "none", "none"]}
      color={menuTextColor}
      zIndex={2}
    >
      <Box>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
            color={iconColor} // Use dynamic color
            _expanded={{ bg: menuHoverBgColor }}
            _hover={{ bg: menuHoverBgColor }}
            _focus={{ boxShadow: "outline" }}
          />
          <MenuList bg={menuBgColor}>
            <MenuItem>
              <NextLink href="/" passHref>
                {t("nav.home")}
              </NextLink>
            </MenuItem>
            <MenuItem>
              <NextLink href="/projects" passHref>
                {t("nav.projects")}
              </NextLink>
            </MenuItem>
            <MenuItem>
              <NextLink href="/work" passHref>
                {t("nav.work")}
              </NextLink>
            </MenuItem>
            <MenuItem>
              <NextLink href="/guestbook" passHref>
                {t("nav.guestbook")}
              </NextLink>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};

export default MenuHamburguer;
