import Layout from "../layouts/Layout";
import {
  Heading,
  Box,
  Flex,
  Link,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
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
      <Layout>
        <Flex justifyContent="space-around">
          <Flex flexDir="column" p=" 0 20px 0 0">
            <Heading as="h1" p="0 0 30px 0" fontSize="2xl">
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
                color={useColorModeValue("black", "pink")}
                padding={0}
              >
                software developer
              </RoughNotation>{" "}
              currently based in Rio de Janeiro, Brazil and working at{" "}
              <RoughNotation
                animate={true}
                animationDelay={4300}
                type="circle"
                show={true}
                color={useColorModeValue("black", "pink")}
                animationDuration={3000}
                padding={1}
              >
                <Link href="https://proffer.com.br/" target="_blank">
                  @Proffer.
                </Link>
              </RoughNotation>{" "}
              As an avid learner passionate about open source, I enjoy building
              things with code and am particularly interested in languages like{" "}
              <RoughNotation
                animate={true}
                animationDelay={8500}
                type="box"
                show={showNotation}
                color={useColorModeValue("black", "pink")}
                padding={0}
              >
                JavaScript, Ruby, Python, and TypeScript
              </RoughNotation>
              , along with their ecosystems. I'm a multipotentialite who loves
              solving problems and learning new things. Aside from programming
              and taking care of my child, I like to chill at the beach, wander
              through nature, and chat about topics like arts, music, history, and
              philosophy. I also like practicing and watching football and
              boxing. I passed the Voight-Kampff Test.
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
          <Heading letterSpacing="tight" mt={8} fontSize="2xl" as="h2" mb={10}>
            Featured Projects  🛠️
          </Heading>
          <SimpleGrid minChildWidth="300px" spacing="40px">
            <ProjectCard
              title="Ruby-docker-ecomm"
              description="an e-commerce platform template built with Ruby on Rails, Tailwind CSS, Hotwire and Postgres. Admin panel, shopping experience, filter categories, add items to cart, process secure checkouts with Stripe integration."
              repoHref="https://github.com/RosaErick/ruby-docker-commerce"
              demoHref="rubydockercomm.onrender.com"
              languageColor="#701516"
              language="Ruby"
              starCount={0}
              stargazersUrl={""}
            />

            <ProjectCard
              title="setup-kit-node-js"
              description="A setup kit/starter for node js using deploy first approach and Github Actions."
              repoHref="https://github.com/RosaErick/setup-kit-node-js"
              demoHref="https://github.com/RosaErick/setup-kit-node-js"
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
            <ProjectCard
              title="spotifysplit"
              description="Spotifysplit is a simple fullstack app connected to Spotify via OAUTH 2.0 to see all kinds of music stats. Built for practice. Currently in progress, building it in public. Feel free to fork and use as you like. frotend: Vite + TypeScript + React + TailWindCSS, backend: Node.js + Express."
              repoHref="https://github.com/RosaErick/spotifysplit"
              demoHref="https://github.com/RosaErick/spotifysplit"
              languageColor="#2b7489"
              language="TypeScript"
              starCount={0}
              stargazersUrl={""}
            />
            <ProjectCard
              title="AI-vegetarian-recipes"
              description="AI generated vegetarian recipes! you can share it! Built with Node.js, MongoDB, Vite, React, TailwindCSS and OpenAI API(ChatGPT)"
              repoHref="https://github.com/RosaErick/AI-vegetarian-recipes"
              demoHref="aivegetarianrecipes.netlify.app/"
              languageColor="#f1e05a"
              language="JavaScript"
              starCount={0}
              stargazersUrl={""}
            />
            <ProjectCard
              title="erickrosa.dev"
              description="this site, my currently portfolio, built with Next.js, React and ChakraUI. The projects were fetched using GitHub API."
              repoHref="https://github.com/RosaErick/erickrosa.dev"
              demoHref="https://erickrosa.dev"
              languageColor="#2b7489"
              language="TypeScript"
              starCount={0}
              stargazersUrl={""}
            />
          </SimpleGrid>
        </Box>
      </Layout>
    </>
  );
}
