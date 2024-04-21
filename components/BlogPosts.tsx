import { Flex, useColorMode } from "@chakra-ui/react";
import Paragraph from "../layouts/Paragraph";
import { useState } from "react";

const BlogPost = ({ children, ...props }) => {
  const [opacity, setOpacity] = useState(0);
  const [lineColor, setLineColor] = useState("blue.500");
  const { colorMode } = useColorMode();

  const colorSecondary = {
    light: "gray.600",
    dark: "gray.400",
  };

  const boxShadowColor = {
    light: "0px 8px 26px rgba(0, 0, 0, 0.2)",
    dark: "0px 8px 26px rgba(0, 0, 0, 0.7)",
  };

  return (
    <Flex
      flexDir="column"
      justifyContent={"flex-start"}
      _hover={{ transform: "scale(1.05)" }}
      transition="transform .5s ease-in-out, border .5s ease-in-out"
      boxShadow={boxShadowColor[colorMode]}
      borderRadius={5}
      p="20px"
      m="20px 0"
      border="2px solid transparent"
      onMouseOver={() => {
        setOpacity(1);
      }}
      onMouseLeave={() => {
        setOpacity(0), setLineColor("blue.500");
      }}
    >
      <Paragraph> {children}</Paragraph>
    </Flex>
  );
};

export default BlogPost;
