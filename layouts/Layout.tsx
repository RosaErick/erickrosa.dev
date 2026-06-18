import { Flex } from "@chakra-ui/react";
import Navbar from "../components/nav/Navbar";
import Footer from "./Footer";
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
      px={[4, 6, 10]}
      pt={["52px", "60px", "68px"]}
      m="0 auto"
    >
      <Navbar />

      <ModelViewer />
      {children}

      <Footer />
    </Flex>
  );
}
