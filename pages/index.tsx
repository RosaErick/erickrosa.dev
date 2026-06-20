import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import Script from "next/script";
import { useEffect, useState, ReactNode } from "react";
import useSWR from "swr";
import TopBar from "../components/nav/TopBar";
import Sidebar from "../components/home/Sidebar";
import Paragraph from "../layouts/Paragraph";
import FeaturedProjectCard from "../components/projects/FeaturedProjectCard";
import ExperienceItem from "../components/experience/ExperienceItem";
import { RoughNotation } from "react-rough-notation";
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

// Section header shown only on small screens — on desktop the sticky sidebar
// nav labels each section instead.
function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <Heading
      as="h2"
      display={{ base: "block", lg: "none" }}
      mb={5}
      fontSize="sm"
      fontWeight="bold"
      letterSpacing="0.18em"
      textTransform="uppercase"
      color="var(--text)"
    >
      {children}
    </Heading>
  );
}

export default function Home() {
  const { t, locale } = useTranslation();
  const [showNotation, setShowNotation] = useState(true);

  // The entrance animation transforms the content for ~1.1s. RoughNotation
  // measures its element once when it draws and never redraws, so drawing
  // mid-transform strands the annotations. Gate the fast path until it settles.
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
  // First load keeps its original timing (long delays already outlast the
  // entrance); the fast path waits for the layout to settle before drawing.
  const showHighlight = quickHighlights ? entranceReady : true;

  // Bio annotations follow the accent (concrete colors — RoughNotation draws
  // SVG strokes that don't resolve the --accent CSS variable).
  const underlineColor = useColorModeValue("#be123c", "#fb7185");
  const highlightColor = useColorModeValue("#f6d4dc", "#4a1f28");
  const creditColor = "var(--text-subtle)";

  const { data: githubData } = useSWR("/api/github", fetcher);
  const languageByRepo: Record<string, string> = {};
  githubData?.repos?.forEach((repo: { name?: string; language?: string }) => {
    if (repo?.name && repo?.language) {
      languageByRepo[repo.name.toLowerCase()] = repo.language;
    }
  });

  useEffect(() => {
    setShowNotation(window.innerWidth > 768);
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

      <Box
        as="main"
        maxW="1152px"
        mx="auto"
        px={[5, 8, 12]}
        pt={{ base: "72px", lg: 0 }}
      >
        <Flex direction={{ base: "column", lg: "row" }} gap={{ lg: 16 }}>
          <Sidebar />

          <Box
            flex="1"
            minW={0}
            pt={{ base: 10, lg: "88px" }}
            pb={{ base: 16, lg: 24 }}
          >
            {/* ABOUT */}
            <Box as="section" id="about" scrollMarginTop="100px" mb={{ base: 16, lg: 24 }}>
              <SectionLabel>{t("home.sections.about")}</SectionLabel>

              <motion.div
                initial={{ y: -12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                onAnimationComplete={() => setEntranceReady(true)}
              >
                <Paragraph fontSize={["sm", "md"]} lineHeight={2}>
                  {t("home.bio.lead")}{" "}
                  <RoughNotation
                    key={`role-${locale}`}
                    animate={true}
                    animationDelay={highlightDelay(2200, 0)}
                    animationDuration={1000}
                    type="underline"
                    show={showHighlight}
                    color={underlineColor}
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
                    color={underlineColor}
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
                    color={highlightColor}
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
                    color={underlineColor}
                    animationDuration={2000}
                    padding={2}
                  >
                    <Box as="span" whiteSpace="nowrap">
                      Voight-Kampff Test
                    </Box>
                  </RoughNotation>
                  {t("home.bio.afterVoight")}
                </Paragraph>
              </motion.div>
            </Box>

            {/* EXPERIENCE */}
            <Box
              as="section"
              id="experience"
              scrollMarginTop="100px"
              mb={{ base: 16, lg: 24 }}
            >
              <SectionLabel>{t("home.sections.experience")}</SectionLabel>

              <VStack spacing={2} align="stretch">
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

            {/* PROJECTS */}
            <Box as="section" id="projects" scrollMarginTop="100px">
              <SectionLabel>{t("home.sections.projects")}</SectionLabel>

              <SimpleGrid columns={1} spacing={4}>
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

            <Text mt={12} fontSize="xs" lineHeight={1.7} color={creditColor}>
              {t("home.credit")}
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactNode) {
  return (
    <>
      <TopBar />
      {page}
    </>
  );
};
