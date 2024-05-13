import { Flex, Stack } from "@chakra-ui/react";
import Navbar from "../components/nav/Navbar";
import Footer from "./Footer";
import { Widget } from "../components/widgetForm/Widget";
import { motion } from "framer-motion";
import ModelViewer from "../components/3dmodel/3dModel";

export default function Layout({ children }) {
  return (
    <Flex
      direction="column"
      flex="1"
      maxW={{
        xl: "750px",
        "2xl": "750px",
        md: "750px",
        lg: "750px",
    
      }}
      px={10}
      m="0 auto"
    >
      <Navbar />

      <ModelViewer />
      {children}

      <Footer />
    </Flex>
  );
}
