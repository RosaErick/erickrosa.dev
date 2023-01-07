import { useState } from "react";
import Head from "next/head";
import {
  Box,
  Flex,
  Spacer,
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
import { motion } from "framer-motion";

const About = () => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <>
      <Container>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Box>
            <Flex justifyContent="space-between" alignItems="flex-end">
              <Image
                borderRadius="full"
                boxSize="150px"
                src={`https://github.com/rosaerick.png`}
              />
            </Flex>
            <Heading p="20px 0">Hi, There!</Heading>

            <Collapse in={show} startingHeight={100}>
              <Paragraph fontSize="xl" lineHeight={1.6}>
                I'm Self-taught web developer, focused on frontend, passionate
                about building things with code and with a great knowledge of
                techniques aimed at a great user experience. Before migrating to
                Tech i worked as a translator and as a History teacher. I have a
                bachelor's in History and I'm also a specialist in
                English/Portuguese translation. Since being introduced to coding
                I have started reading articles, listening to podcasts, taking
                online courses and creating a portfolio of projects to document
                my journey.
              </Paragraph>
            </Collapse>
            <LightMode>
              <Button
                size="sm"
                onClick={handleToggle}
                mt="1rem"
                variant="ghost"
              >
                Show {show ? "Less" : "More"}
              </Button>
            </LightMode>
          </Box>
          <Divider my={10} />
        </motion.div>
      </Container>
    </>
  );
};

export default About;
