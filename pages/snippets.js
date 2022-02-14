import Head from 'next/head'
import Image from 'next/image'
import { Flex, Box, Link, Text, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import styles from '../styles/Home.module.css'
import Container from '../components/Container'
import { getAllSnippets } from './api/notionSnippets'
import { useState } from 'react';
import Paragraph from '../components/Paragraph'

export async function getStaticProps() {
  const snippet = await getAllSnippets();

  return {
    props: {
      snippet,
    },
  };
}

export default function Snippets({ snippet }) {
  
  const [searchValue, setSearchValue] = useState("");

  const filteredSnippet = snippet
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
    .filter(
      (snippetItem) =>
       snippetItem.title?.toLowerCase()?.includes(searchValue.toLowerCase()) ||
        snippetItem.description?.toLowerCase()?.includes(searchValue.toLowerCase())
    );


 if (!snippet)
    return (
      <Container>
        <Text>Loading...</Text>
      </Container>
    );

  return (
    <Container>
      <Flex alignItems={"center"} justifyContent="center" flexWrap={"wrap"} maxW="800px" mt={"3rem"}>
        
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
            {filteredSnippet.map((snippets, index) => (

                <Flex flexDir={"column"}>
                  <Paragraph fontWeight="bold" mb={3} w="70%">
                    <Link
                      _hover={{ textDecoration: "none" }}
                      key={snippets.title}
                      href={snippets.slug}
                      {...snippets}
                    >
                      {snippets.title}
                    </Link>
                  </Paragraph>

                  <Paragraph fontSize="12px">
                    <Link
                      _hover={{ textDecoration: "none" }}
                      key={snippets.description}
                      href={snippets.slug}
                      {...snippets}
                    >
                      {snippets.description}
                    </Link>
                  </Paragraph>
                  <Link
                    _hover={{ textDecoration: "none" }}
                    alignSelf={"flex-end"}
                    fontSize={"12px"}
                    href={snippets.slug}
                    key={snippets.date}
                    {...snippets}
                  >
                    {snippets.date.replace("-", ".").replace("-", ".")}
                  </Link>
                </Flex>
            
            ))}




        </Box>



        </Flex>



          <div className={styles.container}>


        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>


     
    </div>
          
    </Container>
  )
}
