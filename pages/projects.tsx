import useSWR from "swr";
import { Flex, Heading, Text, Spinner, Box } from "@chakra-ui/react";
import Layout from "../layouts/Layout";
import ProjectList from "../components/projects/ProjectList";
import React from "react";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import { useTranslation } from "../lib/i18n";

export default function Projects() {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { t } = useTranslation();

  const { data, error } = useSWR("/api/github", fetcher);

  if (error)
    return (
      <Layout>
        <Text>{t("projects.failedToLoad")}</Text>
      </Layout>
    );

  return (
    <>
      <NextSeo
        title="Projects | Erick Rosa"
        description="All my projects stored in GitHub, created using GitHub API"
      />
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <Heading as="h1" fontSize="2xl" fontWeight="medium">
          {t("projects.title")}{" "}
        </Heading>
        <Box
          height="5px"
          w="100px"
          m="10px 0"
          bottom="-1px"
          display="block"
          backgroundImage="radial-gradient( circle farthest-corner at 10% 20%, rgba(255, 94, 247, 1) 17.8%, rgba(2, 245, 255, 1) 100.2% );
}"
        ></Box>
        <Text fontSize="medium" mt={4}>
          {t("projects.intro")}
        </Text>

        <Flex flexDir="column" m="30px 0">
          {!data && (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="100vh"
            >
              <Spinner />
            </Box>
          )}
          <ProjectList />
        </Flex>
      </motion.div>
    </>
  );
}
