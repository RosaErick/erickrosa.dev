import Container from "../components/Container";
import { Heading, Text, Image, Button, Box, Flex, Link } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import Stack from "../components/MyStack"
import Paragraph from "../components/Paragraph";


const url = "https://erickrosa.dev/";
const title = "Erick Rosa - Portfolio";
const description =
  "Erick Rosa - Junior Web Developer from Rio de Janeiro. Javascript enthusiast";

export default function Home() {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
        }}
      />
      <Container>
        
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Flex justifyContent="space-around">
            <Flex
              flexDir="column"  
              p=" 0 20px 0 0"
              marginBottom="50px"
            >
              <Heading p="0 0 30px 0">
                Hi there, I&#39;m Erick.
              </Heading>
              <Paragraph fontSize="xl" lineHeight={1.6}>
                {" "}
                I&#39;m web developer, focused on front-end
                development, from Rio de Janeiro, Brazil. I&#39;m curruntely working at <Link href="https://www.mundiware.com/br">@Mundiware</Link> as an Intern and
                learning React and Next.js in my free time.
              </Paragraph>
            </Flex>
            {/*<Image
              width="180px"
              height="120px"
              borderRadius="50%"
              
              src={`https://github.com/rosaerick.png`}
            />*/}
          </Flex>
          <Box as="div" m="30px 0">
          </Box>

      
            <Stack />
        </motion.div>
     </Container>
    </>
  );
}
