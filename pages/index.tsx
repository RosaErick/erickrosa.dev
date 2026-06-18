import Layout from "../layouts/Layout";
import {
  Heading,
  Box,
  Flex,
  VStack,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import Paragraph from "../layouts/Paragraph";
import Script from "next/script";
import FeaturedProjectCard from "../components/projects/FeaturedProjectCard";
import ExperienceItem from "../components/experience/ExperienceItem";
import { RoughNotation } from "react-rough-notation";
import { useEffect, useState } from "react";
import useSWR from "swr";
import fetcher from "../scripts/fetcher";

const url = "https://erickrosa.dev/";
const title = "Erick Rosa";
const description =
  "Self-taught web developer, Javascript enthusiast, passionate about building things with code and with a great knowledge of techniques aimed at a great user experience.";

const projects: {
  title: string;
  description: string;
  repoHref: string;
  liveHref?: string;
}[] = [
  {
    title: "conflictzone-app",
    description:
      "Frontend of an application to fetch, process and visualize data from the Fogo Cruzado database, a platform tracking occurrences of violence. Presents tables, heatmaps and charts representing the geographic distribution of these occurrences.",
    repoHref: "https://github.com/RosaErick/conflictzone-app",
  },
  {
    title: "conflictzone-api",
    description:
      "Django backend that fetches, processes and serves data from the Fogo Cruzado database, a platform tracking occurrences of violence. Powers the tables, heatmaps and charts representing the geographic distribution of these occurrences.",
    repoHref: "https://github.com/RosaErick/conflictzone-api",
  },
  {
    title: "spotifysplit",
    description:
      "A fullstack app connected to Spotify via OAuth 2.0 to explore all kinds of listening stats. Built in public — frontend with Vite, React and TailwindCSS, backend with Node.js and Express.",
    repoHref: "https://github.com/RosaErick/spotifysplit",
  },
  {
    title: "piMageKit",
    description:
      "A web tool built with Flask for quick image adjustments — remove backgrounds, strip metadata, resize and crop images. A Python proof of concept for image processing.",
    repoHref: "https://github.com/RosaErick/piMageKit",
  },
];

export default function Home() {
  const [showNotation, setShowNotation] = useState(true);

  const { data: githubData } = useSWR("/api/github", fetcher);
  const languageByRepo: Record<string, string> = {};
  githubData?.repos?.forEach((repo: { name?: string; language?: string }) => {
    if (repo?.name && repo?.language) {
      languageByRepo[repo.name.toLowerCase()] = repo.language;
    }
  });

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
      

      
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}

      >
        <Flex justifyContent="space-around">
          <Flex flexDir="column">
            <Heading as="h1" p="10px 0" fontSize={["1xl", "2xl"]}>
              Hi there, I&#39;m Erick 🍃
            </Heading>

            <Paragraph fontSize={["sm", "md"]} lineHeight={2}>
              I&#39;m a{" "}
              <RoughNotation
                animate={true}
                animationDelay={2200}
                animationDuration={1000}
                type="underline"
                show={true}
                color={useColorModeValue("black", "pink")}
                padding={0}
              >
                Software Engineer
              </RoughNotation>{" "}
              based in Rio de Janeiro, Brazil, with 4+ years of experience
              building and maintaining B2B SaaS platforms for pricing, analytics,
              automation and AI-enabled products. My strongest background is in
              frontend engineering — especially{" "}
              <RoughNotation
                animate={true}
                animationDelay={4000}
                type="box"
                multiline={true}
                show={showNotation}
                color={useColorModeValue("black", "pink")}
                padding={0}
              >
                React, JavaScript and TypeScript
              </RoughNotation>{" "}
              — with a focus on accessible, polished and user-centered
              interfaces. I work best at the intersection of design and
              engineering, where thoughtful UX meets clean, scalable code, and
              I&#39;m comfortable working across frontend, backend and cloud,
              shipping complete production features such as analytical
              dashboards, multi-tenant REST APIs, external integrations and
              performance improvements.
            </Paragraph>

            <Paragraph fontSize={["sm", "md"]} lineHeight={2} mt={5}>
              As an avid learner passionate about{" "}
              <RoughNotation
                animate={true}
                animationDelay={6000}
                animationDuration={1200}
                type="highlight"
                show={true}
                color={useColorModeValue("#FED7E2", "pink")}
                padding={2}
              >
                open source
              </RoughNotation>
              , I enjoy building things with code and exploring languages like
              Python and Ruby and their ecosystems. I&#39;m a multipotentialite
              who loves solving problems and learning new things. Aside from
              programming I&#39;m a dad that likes to skate, chill at the beach,
              wander through nature, homelabs, linux, and chat about topics like
              arts, music, history, and philosophy. I passed the{" "}
              <RoughNotation
                animate={true}
                animationDelay={8000}
                type="circle"
                show={true}
                color={useColorModeValue("black", "pink")}
                animationDuration={2000}
                padding={2}
              >
                Voight-Kampff Test
              </RoughNotation>
              .
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

        <Box as="section" mb={20}>
          <Heading
            letterSpacing="tight"
            mt={8}
            mb={2}
            fontSize="2xl"
            as="h2"
            w="100%"
          >
            Experience
          </Heading>

          <VStack spacing={2} align="stretch" mt={4}>
            <ExperienceItem
              period="2022 — 2026"
              role="Software Engineer"
              company="Proffer"
              companyHref="https://proffer.com.br/"
              description="Led frontend development and evolved full modules of a B2B SaaS platform for pricing, market intelligence and optimization. Built analytical React dashboards and multi-tenant Python REST APIs, integrated 8+ external services, and developed AI and automation tooling, including MCP servers."
              tags={[
                "React",
                "JavaScript",
                "TypeScript",
                "Node.js",
                "Python",
                "Flask",
              ]}
            />
            <ExperienceItem
              period="2022"
              role="Frontend Developer"
              company="Mundiware"
              companyHref="https://www.mundiware.com/br"
              description="Started as a trainee and was promoted after 4 months, building web interfaces for newspapers and news portals. Worked on maintenance and upgrades of legacy projects with jQuery, vanilla JS and responsive layouts, alongside API consumption."
              tags={["JavaScript", "jQuery", "HTML", "CSS"]}
            />
          </VStack>
        </Box>

        <Box as="section" mb={20}>
          <Heading
            letterSpacing="tight"
            mt={8}
            mb={5}
            fontSize="2xl"
            as="h2"
            w="100%"
          >
            Featured Projects
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
            {projects.map((project, i) => (
              <FeaturedProjectCard
                key={project.title}
                index={i + 1}
                title={project.title}
                description={project.description}
                language={languageByRepo[project.title.toLowerCase()]}
                repoHref={project.repoHref}
                liveHref={project.liveHref}
              />
            ))}
          </SimpleGrid>
        </Box>
      </motion.div>
    </>
  );
}
