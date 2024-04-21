import {
  Box,
  Text,
  Link,
  VStack,
  Heading,
  ListItem,
  Divider,
  UnorderedList,
  useColorModeValue,
} from "@chakra-ui/react";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Work",
  description: "A summary of my work and contributions.",
};

export default function WorkPage() {
  return (
    <Box as="section">
      <Heading as="h1" fontSize="2xl" fontWeight="medium">
        work
      </Heading>
      <Box
        height="4px"
        w="60px"
        m="10px 0"
        bottom="-1px"
        display="block"
        backgroundImage="radial-gradient( circle farthest-corner at 10% 20%, rgba(255, 94, 247, 1) 17.8%, rgba(2, 245, 255, 1) 100.2% );
}"
      ></Box>
      <VStack spacing={6} align="stretch">
        <Text fontSize="lg" mt={4}>
          I have been working as a software engineer for the past 3 years. I
          have worked with a variety of technologies and programming languages
          and have experience in developing software applications for different
          industries and sectors.
        </Text>
        <Divider borderColor="gray.200" />
        <Heading
          as="h2"
          fontSize="xl"
          mb={1}
          fontWeight="medium"
          letterSpacing="tighter"
        >
          Proffer
        </Heading>
        <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.400")}>
          software developer, 2022 — present
        </Text>
        <Text>
          Proffer develops a pricing software as a SaaS model, leveraging
          artificial intelligence and machine learning. I work with a diverse
          array of technologies and programming languages, including TypeScript,
          Python, React, Next.js, Node.js, Postgres, MongoDB, Docker and some
          AWS services like Lambda, Ec2, S3, Amplify, and others.
        </Text>
        <UnorderedList spacing={3} px={6}>
          <ListItem>
            My daily responsibilities involve collaborative efforts as part of
            geographically distributed teams, working in sync with the entire
            group to achieve our collective goals.
          </ListItem>
          <ListItem>
            In my role, I lead the frontend development team, focusing on the
            enhancement and introduction of new features within the software and
            development environments, as well as in the consultancy services
            provided by the company. I also contribute to the development of
            APIs using Node.js and Python within the backend team.
          </ListItem>
        </UnorderedList>
        <Text>
          Since joining Proffer, I have been able to contribute to the
          development of new features and improvements to the software , which
          has allowed the company to expand its customer base and improve its
          services and has led to a more efficient and effective software
          application.
        </Text>
        <Divider borderColor="gray.200" />
        <Heading
          as="h2"
          fontSize="xl"
          mb={1}
          fontWeight="medium"
          letterSpacing="tighter"
        >
          Mundiware
        </Heading>
        <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.400")}>
          frontend developer, 2021 — 2022
        </Text>
        <Text>
          I worked as a Frontend Developer focused on creating websites and
          applications for various newspapers and news portals. Mundiware is a
          technology company specializing in systems for newspapers and in the
          development of customized solutions aimed at optimizing production
          stages.
        </Text>
        <UnorderedList spacing={3} px={6}>
          <ListItem>
            I started as a trainee and was promoted to a full-time position
            after 4 months. I worked on the development of websites and
            applications for various newspapers and news portals.
          </ListItem>
          <ListItem>
            I worked with a variety of projects, including legacy projects with
            technologies such as jQuery and vanilla-js and was responsible for
            the upgrade and maintenance of these projects.
          </ListItem>
        </UnorderedList>
        <Text>
          This was my first job as a developer, and I learned a lot about web
          development and software engineering in a brief period. I was able to
          develop my skills in frontend development and learn about the
          importance of teamwork and collaboration in software development.
        </Text>
      </VStack>
    </Box>
  );
}
