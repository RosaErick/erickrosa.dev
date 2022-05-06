import {
  Box,
  Flex,
  Heading,
  IconButton,
  useColorMode,
  LinkOverlay,
  LinkBox,
  useColorModeValue,
} from "@chakra-ui/react";
import Paragraph from "./Paragraph";

const ToolCard = ({ tool }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = {
    light: "black",
    dark: "black",
  };
  const backgroundColor = {
    light: "white",
    dark: "light",
  };
  return (
    <LinkBox as="article">
      <Box
        w="100%"
        p={4}
        borderColor={useColorModeValue("gray.300", "gray.700")}
        borderRadius={5}
        borderWidth="1px"
        transition=".5s"
        cursor="pointer"
        d="flex"
        role="group"
        _hover={{
          color: "grey",
        }}
      >
        <IconButton
          as="a"
          href={tool?.url}
          rel="noopener"
          target="_blank"
          aria-label={tool?.name}
          mr={3}
          color={iconColor[colorMode]}
          background="none"
          _groupHover={{ color: "yellow.500" }}
          icon={tool?.icon}
        />
        <Box p="10px 0">
          <LinkOverlay href={tool?.url} rel="noopener" isExternal>
            <Heading as="h2" size="sm">
              {tool?.name}
            </Heading>
            <Paragraph mt={1} fontSize="sm"></Paragraph>
          </LinkOverlay>
        </Box>
      </Box>
    </LinkBox>
  );
};

export default ToolCard;
