import useSWR from "swr";
import { Flex, Heading, Text, Spinner, Box } from "@chakra-ui/react";
import Layout from "../layouts/Layout";
import { motion } from "framer-motion";
import ProjectList from "../components/ProjectList";
import React from "react";
import { NextSeo } from "next-seo";

export default function Projects() {
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR("/api/github", fetcher);

  if (error)
    return (
      <Layout>
        <Text>Failed to load projects!</Text>
      </Layout>
    );

  return (
    <Layout>
      <NextSeo
        title="Projects | Erick Rosa"
        description="All my projects stored in GitHub, created using GitHub API"
      />

      <Heading as="h1" lineHeight="20px">
        Projects{" "}
      </Heading>
      <Box
        height="5px"
        w="135px"
        m="15px 0"
        bottom="-1px"
        display="block"
        backgroundImage="radial-gradient( circle farthest-corner at 10% 20%, rgba(255, 94, 247, 1) 17.8%, rgba(2, 245, 255, 1) 100.2% );
}"
      ></Box>

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
    </Layout>
  );
}
