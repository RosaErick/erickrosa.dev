import {
  Menu,
  Box,
  Flex,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

const MenuHamburguer = () => {
  // Define color variables with useColorModeValue for dynamic theme colors
  const iconColor = useColorModeValue("black", "white");
  const menuBgColor = useColorModeValue("#f0e7db", "#202023");
  const menuTextColor = useColorModeValue("black", "white");
  const menuHoverBgColor = useColorModeValue("brand.light", "brand.dark");

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
                home
              </NextLink>
            </MenuItem>
            <MenuItem>
              <NextLink href="/projects" passHref>
                projects
              </NextLink>
            </MenuItem>
            <MenuItem>
              <NextLink href="/work" passHref>
                work
              </NextLink>
            </MenuItem>
            <MenuItem>
              <NextLink href="/guestbook" passHref>
                guestbook
              </NextLink>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};

export default MenuHamburguer;
