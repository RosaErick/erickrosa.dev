import { IconButton,useColorMode } from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";
import { Box, Popover, PopoverTrigger, PopoverContent } from "@chakra-ui/react";
import Paragraph from "./Paragraph";

export function Widget() {
  const { colorMode, toggleColorMode } = useColorMode();
    const iconColor = {
    light: "black",
    dark: "white",
    };
  
    const backgroundColor = {
    light: 'gray.100',
    dark: "gray.800",
  };
  
  return (
    <>
    <Box position="fixed"  bottom="20px" right="20px">
        <Popover>
          <PopoverTrigger>
            <IconButton backgroundColor={backgroundColor[colorMode]} _hover={{ background: "none" }} color={iconColor[colorMode]} aria-label="Open Widget" icon={<ChatIcon />} />
          </PopoverTrigger>
          <PopoverContent>
            <Paragraph >
              Currently working on this feedback component!
            </Paragraph>
          </PopoverContent>
        </Popover>
      </Box>
    </>
  );
}
