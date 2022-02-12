import NextLink from "next/link";
import Container from "../components/Container";
import {
    Heading, Link, Text,
    UnorderedList, Flex,
    ListItem
} from '@chakra-ui/react'
import { getAllPosts } from "./api/notion";



export async function getStaticProps() {
    const posts = await getAllPosts();

  return {
    props: {
      posts
    },
  };
}

function Blog({ posts }) {
  if (!posts) return <Container><Text>Loading...</Text></Container>
  return (
      <>
      <Container>
        <Heading as="h2" m="0 auto;">Posts</Heading>
        <Flex>
        <UnorderedList>
          {posts.map((post) => (
        <ListItem>
              <NextLink href="/[slug]" as={`/${post.slug}`} passHref>
                <Link textDecoration="none">
                  <div>{post.title}</div>
             <div>{post.description} - {post.date}</div>
                </Link>
                    
              </NextLink>
         
         </ListItem>
      ))}
          </UnorderedList>
          </Flex>
              </Container>
    </>
  );
}

export default Blog