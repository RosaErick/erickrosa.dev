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

        const { colorMode, toggleColorMode } = useColorMode()
    const iconColor = {
        light: 'black',
        dark: 'black'
    }
    const backgroundColor = {
        light: 'white',
        dark: 'light'
    }
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
          color:'pink.400',
        }}
      >
              <IconButton
            color={colorMode}
          as="a"
          href={tool?.url}
          rel="noopener"
          target="_blank"
          aria-label={tool?.name}
                  mr={3}
                  color={iconColor[colorMode]}
            backgroundColor={backgroundColor[colorMode]}
          _groupHover={{ color: "pink.500" }}
          icon={tool?.icon}
        />
        <Box>
          <LinkOverlay href={tool?.url} rel="noopener" isExternal>
            <Heading as="h2" size="sm">
              {tool?.name}
            </Heading>
            <Paragraph mt={1} fontSize="sm">
              {tool?.description}
            </Paragraph>
          </LinkOverlay>
        </Box>
      </Box>
    </LinkBox>
  );
};

export default ToolCard;