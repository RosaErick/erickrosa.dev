import { Flex } from "@chakra-ui/react";
import TopBar from "../components/nav/TopBar";
import Footer from "./Footer";

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
      pt={["44px", "52px", "60px"]}
      m="0 auto"
    >
      <TopBar />

      {children}

      <Footer />
    </Flex>
  );
}
