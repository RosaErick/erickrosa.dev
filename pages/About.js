import { useState } from "react";
import Head from "next/head";
import {
  Box, Flex, Spacer,
  Image,
  Heading,
  SlideFade,
  Divider,
  Button,
  Collapse,
  LightMode,
  Tag,
} from "@chakra-ui/react";
import Paragraph from "../components/Paragraph";
import Container from "../components/Container";

const About = () => {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);
  return (
    <>
      <Container>
        <Box>
          <Flex justifyContent="space-between" alignItems="flex-end">
        
        
  <Image
               borderRadius='full'
              boxSize='150px'
              src={`https://github.com/rosaerick.png`}
              />
              
          </Flex>
          <Heading p="20px 0">Hi, There!</Heading>
         

          <Collapse in={show} startingHeight={100}>
            <Paragraph fontSize="xl" lineHeight={1.6}>
              I'm 26, I graduated from Universidade Federal Rural do Rio de
              Janeiro with a Bachelor of History, but have gained a massive
              interest in web development and technologies. I'm passionate about
              building things with code. I've always been curious about coding
              but after starting the Responsive Web Design curriculum from
              freeCodeCamp I was hooked. Since being introduced to coding I have
              started reading articles, listening to podcasts, taking online
              courses and creating a portfolio of projects. I sincerely think
              that I have discovered my passion in life.
                 
            </Paragraph>
       
          </Collapse>
          <LightMode>
            <Button
              size="sm"
              onClick={handleToggle}
              mt="1rem"
              variant="ghost"
              _hover="color = grey.400"
            >
              Show {show ? "Less" : "More"}
            </Button>
          </LightMode>
        </Box>
        <Divider my={10} />
      </Container>
    </>
  );
};

export default About;
