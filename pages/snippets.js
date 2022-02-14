
import { Flex, Box, Link, Text, Input, InputGroup, InputRightElement, Heading } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import Container from '../components/Container'
import { getAllSnippets } from './api/notionSnippets'
import { useState } from 'react';
import Paragraph from '../components/Paragraph'
import { motion } from 'framer-motion'
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
        snippetItem.description?.toLowerCase()?.includes(searchValue.toLowerCase())
    );


 if (!snippets)
    return (
      <Container>
        <Text>Loading...</Text>
      </Container>
    );

  return (
    <Container>
           <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: .7, delay: .4 }}
                    >
       <Heading as="h1" lineHeight='20px'>Snippets </Heading>
                <Box height="5px" w="135px" m="15px 0" bottom="-1px" display="block" backgroundImage="radial-gradient( circle farthest-corner at 10% 20%, rgba(255, 94, 247, 1) 17.8%, rgba(2, 245, 255, 1) 100.2% );
}"  ></Box>
        
             <InputGroup mb={4} mr={4} w="100%">
              <Input
                aria-label="Search by snippets title or description"
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search by snippets title or description"
              />
              <InputRightElement>
                <SearchIcon color="gray.300" />
              </InputRightElement>
            </InputGroup>
       
       
        <Box border={"1px solid #eaeaea"} _hover={{ color: "blue.300" }} transition="color 0.15s ease, border-color 0.15s ease" w="45%" borderRadius={"10px"} textAlign="left" >

           {!filteredSnippet.length && "No snippetss found."}
            {filteredSnippet.map((snippet, index) => (

                <Flex  flexDir={"column"}>
                  <Paragraph fontWeight="bold" mb={3} w="70%">
                    <Link
                      _hover={{ textDecoration: "none" }}
                      key={snippet.title}
                      href={ `/snippets/${snippet.slug}`}
                      {...snippet}
                    >
                      {snippet.title}
                    </Link>
                  </Paragraph>

                  <Paragraph fontSize="12px">
                    <Link 
                      _hover={{ textDecoration: "none" }}
                      key={snippet.description}
                      href={ `/snippets/${snippet.slug}`}
                      {...snippets}
                    >
                      {snippets.description}
                    </Link>
                  </Paragraph>
                  <Link
                    _hover={{ textDecoration: "none" }}
                    alignSelf={"flex-end"}
                    fontSize={"12px"}
                    href={ `/snippets/${snippet.slug}`}
                    key={snippet.date}
                    {...snippet}
                  >
                    {snippet.date.replace("-", ".").replace("-", ".")}
                  </Link>
                </Flex>
            
            ))}




        </Box>
</motion.div>


  

          
    </Container>
  )
}
