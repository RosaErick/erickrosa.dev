import Container from "../components/Container";
import { Heading, Box, Flex, Link, SimpleGrid } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import Stack from "../components/MyStack";
import Paragraph from "../components/Paragraph";
import Script from "next/script";
import ProjectCard from "../components/ProjectCard";

const url = "https://erickrosa.dev/";
const title = "Erick Rosa";
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
            <Flex flexDir="column" p=" 0 20px 0 0">
              <Heading as="h1" p="0 0 30px 0">
                Hi there, I&#39;m Erick  🍃 
              </Heading>

              <Paragraph fontSize="xl" lineHeight={1.8}>
                I&#39;m a software developer currently based in Rio de Janeiro,
                Brazil. Avid learner with a passion for open source and building things with code. I may not take myself very seriously but take my job very seriously and loves solving problems instead of complaining about them. Interested
                in JavaScript, TypeScript, React, Node.js, Ruby, Python and
                MongoDB. I&#39;m curruntely working at{" "}
                <Link href="https://proffer.com.br/" target="_blank">
                  @Proffer
                </Link>{" "}
                as a frontend developer. Outside of programming and taking care of my kid, I enjoy talking about music, history, philosophy and watching football and boxing.
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

          <Box as="section" mt={10} mb={20}>
            <Heading
              letterSpacing="tight"
              mt={8}
              size="lg"
              fontWeight={700}
              as="h2"
              mb={10}
            >
              Featured Projects 👨‍💻
            </Heading>
            <SimpleGrid minChildWidth="300px" spacing="40px">
              <ProjectCard
                title="erickrosa.dev"
                description="this site, my currently portfolio, built with Next.js, React and ChakraUI. The blog was built using Notion as a headless CMS with Notion API. The projects were fetched using GitHub API."
                repoHref="https://github.com/RosaErick/erickrosa.dev"
                demoHref="https://erickrosa.dev"
                languageColor="#2b7489"
                language="TypeScript"
                starCount={0}
                stargazersUrl={""}
              />
              <ProjectCard
                title="Random Stoic Quote Generator"
                description="Random Stoic Quote Generator built with React and Styled-components."
                repoHref="https://github.com/RosaErick/StoicQuoteGenerator"
                demoHref="https://randomstoicquote.netlify.app/"
                languageColor="#f1e05a"
                language="JavaScript"
                starCount={0}
                stargazersUrl={""}
              />

              <ProjectCard
                title="node-aws-cognito-Admin-API"
                description="exemple of a Node.js Auth API using Cognito Identity Provider Client - AWS SDK v3 (admin-level Cognito APIs)."
                repoHref="https://github.com/RosaErick/node-aws-cognito-Admin-API"
                demoHref="https://github.com/RosaErick/node-aws-cognito-Admin-API"
                languageColor="#f1e05a"
                language="JavaScript"
                starCount={0}
                stargazersUrl={""}
              />

              <ProjectCard
                title="Financial Control App"
                description="Via Varejo FrontEnd Test. The app works as a financial control tool and it's a SPA built only with vanilla Javascript, without any framework."
                repoHref="https://github.com/RosaErick/AppControleFinanceiro"
                demoHref="https://rosaerick.github.io/AppControleFinanceiro/"
                languageColor="#f1e05a"
                language="JavaScript"
                starCount={0}
                stargazersUrl={""}
              />
            </SimpleGrid>
          </Box>
        </motion.div>
      </Container>
    </>
  );
}
