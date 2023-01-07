import Container from "../components/Container";
import { Heading, Box, Flex, Link, SimpleGrid } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import Stack from "../components/MyStack";
import Paragraph from "../components/Paragraph";
import Script from "next/script";
import ProjectCard from "../components/ProjectCard";
import { RoughNotation } from "react-rough-notation";
import { useEffect, useState } from "react";

const url = "https://erickrosa.dev/";
const title = "Erick Rosa";
const description =
  "Self-taught web developer, Javascript enthusiast, passionate about building things with code and with a great knowledge of techniques aimed at a great user experience.";

export default function Home() {
  const [showNotation, setShowNotation] = useState(true);

  useEffect(() => {
    const handleNotationDisplay = () => {
      if (window.innerWidth > 768) setShowNotation(true);
      else setShowNotation(false);
    };

    handleNotationDisplay();
  }, []);

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
                Hi there, I&#39;m Erick 🍃
              </Heading>

              <Paragraph fontSize="xl" lineHeight={1.8}>
                I&#39;m a{" "}
                <RoughNotation
                  animate={true}
                  animationDelay={1200}
                  animationDuration={1000}
                  type="underline"
                  show={true}
                  color="pink"
                  padding={0}
                >
                  software developer
                </RoughNotation>{" "}
                currently based in Rio de Janeiro, Brazil. Avid learner with a
                passion for open source and building things with code. I may not
                take myself very seriously but{" "}
                <RoughNotation
                  animate={true}
                  animationDelay={3300}
                  type="box"
                  show={showNotation}
                  color="pink"
                  padding={0}
                >
                  take my job very seriously{" "}
                </RoughNotation>
                and loves solving problems instead of complaining about them.
                Interested in JavaScript, TypeScript, Node.js, Rust, Python and
                all the ecosystems around theses languages. I&#39;m curruntely
                working at{" "}
                <RoughNotation
                  animate={true}
                  animationDelay={11000}
                  type="circle"
                  show={true}
                  color="pink"
                  animationDuration={3000}
                  padding={1}
                >
                  <Link href="https://proffer.com.br/" target="_blank">
                    @Proffer{" "}
                  </Link>
                </RoughNotation>{" "}
                as a frontend developer. Outside of programming and taking care
                of my kid, I enjoy biking, talking about music, history,
                philosophy and watching football and boxing.
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
                title="CalendarBot"
                description="A simple twitter node bot for test and studies. This app fetches data from a calendar on Airtable and transforms it in a tweet or a thread with an image. It also comes with a cron job to repeat the task everyday."
                repoHref="https://github.com/RosaErick/node-twitter-bot"
                demoHref="https://github.com/RosaErick/node-twitter-bot"
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
