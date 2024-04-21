import {
  Flex,
  Box,
  Link,
  Text,
  Input,
  InputGroup,
  SimpleGrid,
  InputRightElement,
  Heading,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Container from "../layouts/Layout";
import { getAllSnippets } from "./api/notionSnippets";
import { useState } from "react";
import Paragraph from "../layouts/Paragraph";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";



export async function getStaticProps() {
  const snippets = await getAllSnippets();

  return {
    props: {
      snippets,
    },
  };
}

export default function Snippets({ snippets }) {
  const [searchValue, setSearchValue] = useState("");

  const filteredSnippet = snippets
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
    .filter(
      (snippetItem) =>
        snippetItem.title?.toLowerCase()?.includes(searchValue.toLowerCase()) ||
        snippetItem.description
          ?.toLowerCase()
          ?.includes(searchValue.toLowerCase())
    );

  if (!snippets)
    return (
      <Container>
        <Text>Loading...</Text>
      </Container>
    );

  return (<><NextSeo
        title="Snippets | Erick Rosa"
        description="Erick Rosa's Snippets page."
        canonical="https://erickrosa.dev"
        openGraph={{}}
      />
    <Container>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <Heading as="h1" lineHeight="20px">
          Snippets{" "}
        </Heading>
        <Box
          height="5px"
          w="150px"
          m="15px 0"
          bottom="-1px"
          display="block"
          backgroundImage="radial-gradient( circle farthest-corner at 10% 20%, rgba(255, 94, 247, 1) 17.8%, rgba(2, 245, 255, 1) 100.2% );
}"
        ></Box>

             
            

            
        
        <Flex p={[5, 15, 0]}  flexDir="column" justify="space-between" h="100%">
        <InputGroup mb={4} mt={3} mr={4} w="100%">
          <Input
            aria-label="Search by snippets title or description"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search by snippets title or description"
          />
          <InputRightElement>
            <SearchIcon color="gray.300" />
          </InputRightElement>
          </InputGroup>
          

          

          <SimpleGrid minChildWidth="300px" width="100%"  spacing="40px">
  <Flex flexDir={['column', 'row', 'row', 'row']} flexWrap="wrap" width='100%'>
          {!filteredSnippet.length && "No snippetss found."}
          {filteredSnippet.map((snippet) => (
                 <Box
          border={"1px solid grey"}
          m="20px"
              p="20px"
              
          _hover={{ borderColor: "blue.300", marginTop:"1px" }}
          //_transition="color 0.15 ease, border-color 0.15s ease, margin-top  0.1s ease"
          borderRadius={"10px"}
          textAlign="left"
              textDecoration={"none"}
              _focus={{ borderColor: "blue.300" }}
              _active={{ borderColor: "blue.300" }}
        >
              <Paragraph fontWeight="bold" mb={3}  fontSize="22px">
                <Link
                  _hover={{ textDecoration: "none" }}
                  key={snippet.title}
                  href={`/snippets/${snippet.slug}`}
                  {...snippet}
                >
                  {snippet.title}
                </Link>
              </Paragraph>

              <Paragraph fontSize="12px">
                <Link
                  
                  _hover={{ textDecoration: "none" }}
                  key={snippet.description}
                  href={`/snippets/${snippet.slug}`}
                  {...snippets}
                >
                  {snippets.description}
                </Link>
              </Paragraph>
              <Paragraph>
              <Link
                _hover={{ textDecoration: "none" }}
                alignSelf={"flex-end"}
                fontSize={"12px"}
                href={`/snippets/${snippet.slug}`}
                key={snippet.date}
                {...snippet}
              >
                {snippet.date.replace("-", ".").replace("-", ".")}
                </Link>
              </Paragraph>
         
              
         </Box>
          ))}
        </Flex>

            </SimpleGrid>
            
              </Flex>
      </motion.div>
    </Container>
    </>
  );
}
