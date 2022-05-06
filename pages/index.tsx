import Container from "../components/Container";
import { Heading, Box, Flex, Link, SimpleGrid } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import Stack from "../components/MyStack";
import Paragraph from "../components/Paragraph";
import Script from "next/script";
import ProjectCard from "../components/ProjectCard";

const url = "https://erickrosa.dev/";
const title = " Home | Erick Rosa";
const description =
  "Self-taught web developer, Javascript enthusiast, passionate about building things with code and with a great knowledge of techniques aimed at a great user experience.";

export default function Home() {
  return (
    <>
      <Script async src="https://cdn.splitbee.io/sb.js" />

      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
          images: [
            {
              url: "/images/vintagepc.png",
              width: 800,
              height: 420,
              alt: title,
            },
          ],
        }}
      />
      <Container>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Flex justifyContent="space-around">
            <Flex flexDir="column" p=" 0 20px 0 0" marginBottom="50px">
              <Heading as="h1" p="0 0 30px 0">
                Hi there, I&#39;m Erick.
              </Heading>
              <Paragraph fontSize="xl" lineHeight={1.6}>
                I&#39;m a Web Developer from Rio de Janeiro, Brazil. I&#39;m
                curruntely working at{" "}
                <Link href="https://www.mundiware.com/br" target="_blank">
                  @Mundiware
                </Link>{" "}
                as a FrontEnd Developer and learning React and Next.js in my
                free time.
              </Paragraph>
            </Flex>
            {/*<Image
              width="180px"
              height="120px"
              borderRadius="50%"
              
              src={`https://github.com/rosaerick.png`}
            />*/}
          </Flex>
          <Box as="div" m="30px 0"></Box>

          <Stack />
          <Box as="section" mt={10} mb={20}>
            <Heading
              letterSpacing="tight"
              mt={8}
              size="lg"
              fontWeight={700}
              as="h2"
              mb={4}
            >
              Featured Projects 👨‍💻
            </Heading>
            <SimpleGrid minChildWidth="300px" spacing="40px">
              <ProjectCard
                title="erickrosa.dev"
                description="this site, my currently portfolio, built with Next.js, React and ChakraUI. The blog was built using Notion as a headless CMS with Notion API. The projects were fetched using GitHub API."
                repoHref="https://github.com/RosaErick/erickrosa.dev"
                demoHref="https://erickrosa.dev"
                languageColor="#f1e05a"
                language="JavaScript" starCount={0} stargazersUrl={""}              />
              <ProjectCard
                title="Random Stoic Quote Generator"
                description="Random Stoic Quote Generator built with React and Styled-components."
                repoHref="https://github.com/RosaErick/StoicQuoteGenerator"
                demoHref="https://randomstoicquote.netlify.app/"
                languageColor="#f1e05a"
                language="JavaScript" starCount={0} stargazersUrl={""}             />

              <ProjectCard
                title="HashtagFinder"
                description="A colaborative project built for the newtab Academy curriculum. The app connects with the Twitter API to return and render searched tweets and images."
                repoHref="https://hashtagfindernewtab.netlify.app/"
                demoHref="https://github.com/RosaErick/hashtagFinderNewtab"
                languageColor="#f1e05a"
                language="JavaScript" starCount={0} stargazersUrl={""}             />

              <ProjectCard
                title="Financial Control App"
                description="Solo Project developed for the curriculum of Newtab Academy. Via Varejo FrontEnd Test. The app works as a financial control tool and it's a SPA built only with vanilla Javascript, without any framework."
                repoHref="https://github.com/RosaErick/AppControleFinanceiro"
                demoHref="https://rosaerick.github.io/AppControleFinanceiro/"
                languageColor="#f1e05a"
                language="JavaScript" starCount={0} stargazersUrl={""}            />
            </SimpleGrid>
          </Box>
        </motion.div>
      </Container>
    </>
  );
}
