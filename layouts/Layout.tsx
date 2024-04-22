import { Flex, Stack } from "@chakra-ui/react";
import Navbar from "../components/nav/Navbar";
import Footer from "./Footer";
import { Widget } from "../components/widgetForm/Widget";
import { motion } from "framer-motion";
import ModelViewer from "../components/3dmodel/3dModel";

export default function Layout({ children }) {
  return (
    <Stack
      as="main"
      spacing={8}
      justifyContent="center"
      alignItems="flex-start"
      m="0 auto 4rem auto"
      maxW="20vw"
      px={0}
      position="relative"
    >
      <Navbar />
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        p={8}
        w="100%"
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <ModelViewer />
          {children}
        </motion.div>
      </Flex>

      <Widget />
      <Footer />
    </Stack>
  );
}
