import { NotionRenderer } from "react-notion";
import Container from "../components/Container";

import { getAllPosts } from './blog'

export async function getStaticProps({ params: { slug } }) {
  // Get all posts again
  const posts = await getAllPosts();

  // Find the current blogpost by slug
  const post = posts.find((t) => t.slug === slug);

  const blocks = await fetch(`https://notion-api.splitbee.io/v1/page/${post.id}`).then((res) => res.json());
  
  return {
    props: {
     blocks,
     post,
    },
  };
}

export default ({ post, blocks }) => (
    <>
     <Container>
  <div style={{ maxWidth: 768 }}>
    <h1>{post.title}</h1>
    <NotionRenderer blockMap={blocks} />
            </div>
            </Container>
        </>
);

export async function getStaticPaths() {
  const posts = await getAllPosts();
  return {
    paths: posts.map((row) => `/${row.slug}`),
    fallback: true,
  };
}