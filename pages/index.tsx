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
import { useTranslation } from "../lib/i18n";

const url = "https://erickrosa.dev/";
const title = "Erick Rosa";
const description =
  "Self-taught web developer, Javascript enthusiast, passionate about building things with code and with a great knowledge of techniques aimed at a great user experience.";

// Descriptions are translated via i18n keyed by title (home.projects.<title>).
const projects: {
  title: string;
  repoHref: string;
  liveHref?: string;
}[] = [
  {
    title: "conflictzone-app",
    repoHref: "https://github.com/RosaErick/conflictzone-app",
  },
  {
    title: "conflictzone-api",
    repoHref: "https://github.com/RosaErick/conflictzone-api",
  },
  {
    title: "spotifysplit",
    repoHref: "https://github.com/RosaErick/spotifysplit",
  },
  {
    title: "piMageKit",
    repoHref: "https://github.com/RosaErick/piMageKit",
  },
];

// Play the long staggered intro only on the first page load. After that (e.g.
// language switches that remount the annotations), redraw them quickly so the
// highlights never appear to vanish and slowly reload.
let introHasPlayed = false;

export default function Home() {
  const [showNotation, setShowNotation] = useState(true);
  const { t, locale } = useTranslation();

  // The entrance animation transforms (translateY) the container for ~1.1s.
  // RoughNotation measures the element position once when it draws and never
  // redraws, so drawing mid-transform leaves the annotations stranded in the
  // wrong spot. This flips true once the entrance settles.
  const [entranceReady, setEntranceReady] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setEntranceReady(true), 1200);
    return () => clearTimeout(id);
  }, []);

  // True after the first mount, so re-renders/remounts use the fast reveal.
  const quickHighlights = introHasPlayed;
  useEffect(() => {
    introHasPlayed = true;
  }, []);

  // Stagger: long, dramatic on first load; short and snappy on language switch.
  const highlightDelay = (intro: number, fast: number) =>
    quickHighlights ? fast : intro;

  // First load keeps its original timing — the long delays already outlast the
  // entrance, so the layout is settled by the time they draw. The fast path
  // (language switch / navigating back home) must wait for the entrance to
  // settle, otherwise it measures the element while it's still being translated.
  const showHighlight = quickHighlights ? entranceReady : true;

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
        onAnimationComplete={() => setEntranceReady(true)}
      >
        <Flex justifyContent="space-around">
          <Flex flexDir="column">
            <Heading as="h1" p="10px 0" fontSize={["1xl", "2xl"]}>
              {t("home.greeting")}
            </Heading>

            <Paragraph fontSize={["sm", "md"]} lineHeight={2}>
              {t("home.bio.lead")}{" "}
              <RoughNotation
                key={`role-${locale}`}
                animate={true}
                animationDelay={highlightDelay(2200, 0)}
                animationDuration={1000}
                type="underline"
                show={showHighlight}
                color={useColorModeValue("black", "pink")}
                padding={0}
              >
                {t("home.bio.role")}
              </RoughNotation>{" "}
              {t("home.bio.afterRole")}{" "}
              <RoughNotation
                key={`stack-${locale}`}
                animate={true}
                animationDelay={highlightDelay(4000, 150)}
                type="box"
                multiline={true}
                show={showHighlight && showNotation}
                color={useColorModeValue("black", "pink")}
                padding={0}
              >
                React, JavaScript and TypeScript
              </RoughNotation>{" "}
              {t("home.bio.afterStack")}
            </Paragraph>

            <Paragraph fontSize={["sm", "md"]} lineHeight={2} mt={5}>
              {t("home.bio.p2Lead")}{" "}
              <RoughNotation
                key={`os-${locale}`}
                animate={true}
                animationDelay={highlightDelay(6000, 300)}
                animationDuration={1200}
                type="highlight"
                show={showHighlight}
                color={useColorModeValue("#FED7E2", "pink")}
                padding={2}
              >
                open source
              </RoughNotation>
              {t("home.bio.afterOpenSource")}{" "}
              <RoughNotation
                key={`vk-${locale}`}
                animate={true}
                animationDelay={highlightDelay(8000, 450)}
                type="circle"
                show={showHighlight}
                color={useColorModeValue("black", "pink")}
                animationDuration={2000}
                padding={2}
              >
                Voight-Kampff Test
              </RoughNotation>
              {t("home.bio.afterVoight")}
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
            {t("home.experience.title")}
          </Heading>

          <VStack spacing={2} align="stretch" mt={4}>
            <ExperienceItem
              period="2022 — 2026"
              role={t("home.experience.proffer.role")}
              company="Proffer"
              companyHref="https://proffer.com.br/"
              description={t("home.experience.proffer.description")}
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
              role={t("home.experience.mundiware.role")}
              company="Mundiware"
              companyHref="https://www.mundiware.com/br"
              description={t("home.experience.mundiware.description")}
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
            {t("home.projects.title")}
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
            {projects.map((project, i) => (
              <FeaturedProjectCard
                key={project.title}
                index={i + 1}
                title={project.title}
                description={t(`home.projects.${project.title}`)}
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
