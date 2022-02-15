import { NotionRenderer } from "react-notion"
import Container from "../../components/Container"
import { Text, Button, Link, Box } from '@chakra-ui/react'
import { NextSeo } from "next-seo"
import { ArrowLeftIcon } from "@chakra-ui/icons"
import { getAllSnippets } from '../api/notionSnippets'

export async function getStaticProps({ params: { slug } }) {
  // Get all snippets again
  const snippets = await getAllSnippets();

  // Find the current blogsnippet by slug
  const snippet = snippets.find((t) => t.slug === slug);

  const blocks = await fetch(`https://notion-api.splitbee.io/v1/page/${snippet.id}`).then((res) => res.json());
  
  return {
    props: {
     blocks,
     snippet,
    },
  };
}

export default ({ snippet, blocks }) => {
  if (!snippet) return <Container><Text>Loading...</Text></Container>
  return (
    <>
        <NextSeo
      title={snippet.title}
      description={snippet.description}
      canonical="https://www.canonical.ie/"
      openGraph={{
        url: 'https://www.url.ie/a',
        title: 'Open Graph Title',
        description: 'Open Graph Description',
        images: [
          {
            url: 'https://www.example.ie/og-image-01.jpg',
            width: 800,
            height: 600,
            alt: 'Og Image Alt',
            type: 'image/jpeg',
          },
          {
            url: 'https://www.example.ie/og-image-02.jpg',
            width: 900,
            height: 800,
            alt: 'Og Image Alt Second',
            type: 'image/jpeg',
          },
          { url: 'https://www.example.ie/og-image-03.jpg' },
          { url: 'https://www.example.ie/og-image-04.jpg' },
        ],
        site_name: 'SiteName',
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
      }}
    />
      <Container>
      
         <Box maxWidth='768'>
     
          <Text>
          <NotionRenderer blockMap={blocks} />
          </Text>

            <Button background={"none"} _hover={{ background: "none" }}><Link href="/snippets"><ArrowLeftIcon /></Link></Button>
          </Box>
      
      </Container>
    </>
  )
}

export async function getStaticPaths() {
  const snippets = await getAllSnippets();
  return {
    paths: snippets.map((row) => `/snippets/${row.slug}`),
    fallback: true,
  };
}

