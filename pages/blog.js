import NextLink from "next/link";
import Container from "../components/Container";
import {
    Heading, Link,
    UnorderedList, Flex,
    ListItem
} from '@chakra-ui/react'

const NOTION_BLOG_ID = 'e9c9b6fdc4184d03840f783363a89650'

export const getAllPosts = async () => {
	return await fetch(
    `https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`
  ).then((res) => res.json());
}

export async function getStaticProps() {
    const posts = await getAllPosts();

  return {
    props: {
      posts
    },
  };
}

function Blog({ posts }) {
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