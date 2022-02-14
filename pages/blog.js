import NextLink from "next/link";
import Container from "../components/Container";
import {
  Heading,
  Box,
  Stack,
  Link,
  Text,
  UnorderedList,
  Flex,
  InputGroup,
  Input,
  InputRightElement,
  ListItem,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { getAllPosts } from "./api/notion";
import { useState } from "react";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import BlogPost from "../components/BlogPosts";
import Paragraph from "../components/Paragraph";

export async function getStaticProps() {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
}

function Blog({ posts }) {
  const [searchValue, setSearchValue] = useState("");

  const filteredBlogPosts = posts
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
    .filter(
      (post) =>
        post.title?.toLowerCase()?.includes(searchValue.toLowerCase()) ||
        post.description?.toLowerCase()?.includes(searchValue.toLowerCase())
    );

  if (!posts)
    return (
      <Container>
        <Text>Loading...</Text>
      </Container>
    );
  return (
    <>
      <NextSeo
        title="Blog - Erick Rosa"
        description="Erick Rosa's Blog page"
        canonical="https://erickrosa.dev"
        openGraph={{}}
      />
      <Container>
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="1000px"
          px={5}
          margin="auto"
          minH="100vh"
        >
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Heading letterSpacing="tight" as="h1" size="2xl" my={4}>
              Blog
            </Heading>
            <Box
              height="5px"
              w="135px"
              m="15px 0"
              bottom="-1px"
              display="block"
              backgroundImage="radial-gradient( circle farthest-corner at 10% 20%, rgba(255, 94, 247, 1) 17.8%, rgba(2, 245, 255, 1) 100.2% );
}"
            ></Box>
            <InputGroup mb={4} mr={4} w="100%">
              <Input
                aria-label="Search by post title or description"
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search by post title or description"
              />
              <InputRightElement>
                <SearchIcon color="gray.300" />
              </InputRightElement>
            </InputGroup>
            {!filteredBlogPosts.length && "No posts found."}
            {filteredBlogPosts.map((post, index) => (
              <BlogPost>
                <Flex flexDir={"column"}>
                  <Paragraph fontWeight="bold" mb={3} w="70%">
                    <Link
                      _hover={{ textDecoration: "none" }}
                      key={post.title}
                      href={post.slug}
                      {...post}
                    >
                      {post.title}
                    </Link>
                  </Paragraph>

                  <Paragraph fontSize="12px">
                    <Link
                      _hover={{ textDecoration: "none" }}
                      key={post.description}
                      href={post.slug}
                      {...post}
                    >
                      {post.description}
                    </Link>
                  </Paragraph>
                  <Link
                    _hover={{ textDecoration: "none" }}
                    alignSelf={"flex-end"}
                    fontSize={"12px"}
                    href={post.slug}
                    key={post.date}
                    {...post}
                  >
                    {post.date.replace("-", ".").replace("-", ".")}
                  </Link>
                </Flex>
              </BlogPost>
            ))}
          </motion.div>
        </Flex>

        {/*   <Heading as="h2" m="0 auto;">
          Posts
        </Heading>
        <Flex>
          <UnorderedList>
            {posts.map((post) => (
              <ListItem>
                <NextLink href="/[slug]" as={`/${post.slug}`} passHref>
                  <Link textDecoration="none">
                    <div>{post.title}</div>
                    <div>
                      {post.description} - {post.date}
                    </div>
                  </Link>
                </NextLink>
              </ListItem>
            ))}
          </UnorderedList>
        </Flex>
         */}
      </Container>
    </>
  );
}

export default Blog;
