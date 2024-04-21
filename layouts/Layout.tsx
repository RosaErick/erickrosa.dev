import { Flex, Stack } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Widget } from "../components/Widget";
import { motion } from "framer-motion";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />

      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="800px"
        px={8}
        position="relative"
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
          w="100%"
        >
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {children}
          </motion.div>
        </Flex>

        <Widget />
        <Footer />
      </Stack>
    </>
  );
}
