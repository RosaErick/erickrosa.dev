import { IconButton } from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";
import { Box, Popover, PopoverTrigger, PopoverContent } from "@chakra-ui/react";

export function Widget() {
  return (
    <>
      <Box position="fixed" bottom="10px" right="10px">
        <Popover>
          <PopoverTrigger>
            <IconButton aria-label="Open Widget" icon={<ChatIcon />} />
          </PopoverTrigger>
          <PopoverContent>
            <p>Currently working on this feedback component!</p>
          </PopoverContent>
        </Popover>
      </Box>
    </>
  );
}
