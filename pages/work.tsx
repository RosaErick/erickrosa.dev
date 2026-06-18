import {
  Box,
  Text,
  VStack,
  Heading,
  ListItem,
  Divider,
  UnorderedList,
  useColorModeValue,
} from "@chakra-ui/react";
import { Metadata } from "next";
import { motion } from "framer-motion";

export const metadata: Metadata = {
  title: "Work",
  description: "A summary of my work, experience and selected projects.",
};

export default function WorkPage() {
  const subtleText = useColorModeValue("gray.600", "gray.400");

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.4 }}
    >
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
            Software Engineer with 4+ years of experience building and
            maintaining B2B SaaS platforms for pricing, analytics, automation
            and AI-enabled products. Strongest background in frontend
            engineering, especially React, JavaScript and TypeScript, with a
            focus on accessible, polished and user-centered interfaces.
          </Text>
          <Text fontSize="lg">
            I work best at the intersection of design and engineering, where
            thoughtful UX meets clean, scalable code, and I&#39;m comfortable
            working across frontend, backend and cloud, shipping complete
            production features such as analytical dashboards, multi-tenant REST
            APIs, external integrations and performance improvements.
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
          <Text fontSize="sm" color={subtleText}>
            software engineer, May 2022 — June 2026
          </Text>
          <Text>
            AI/ML-powered pricing SaaS platform for pharmaceutical distribution
            and retail. Remote.
          </Text>
          <UnorderedList spacing={3} px={6}>
            <ListItem>
              Led frontend development workstreams and evolved full modules of a
              B2B SaaS platform for pricing, market intelligence and
              optimization.
            </ListItem>
            <ListItem>
              Built analytical React dashboards with KPIs, time-series charts,
              paginated tables, dynamic filters and synchronous/asynchronous
              data exports, using 3+ charting libraries for high-volume business
              data.
            </ListItem>
            <ListItem>
              Developed multi-tenant REST APIs in Python that supported B2B
              applications, handling customer data isolation, JWT/Cognito
              authentication, role-based authorization, pagination, search,
              dynamic filters, downloads and queries against databases such as
              BigQuery and PostgreSQL.
            </ListItem>
            <ListItem>
              Implemented and maintained integrations with Stripe, HubSpot,
              Conta Azul OAuth, Twilio, RD Station, Mixpanel, ClickUp and AWS
              Cognito, connecting 8+ external services across billing, CRM,
              analytics, onboarding, contracts, automations and user
              permissions.
            </ListItem>
            <ListItem>
              Built AI and automation tools, including MCP servers in
              TypeScript/Node.js and Python/Flask to expose proprietary APIs as
              LLM-consumable tools with authentication, sessions, resources and
              prompts.
            </ListItem>
          </UnorderedList>
          <Text fontSize="sm" color={subtleText}>
            <Text as="span" fontWeight="bold">
              Key technologies:
            </Text>{" "}
            React, TypeScript, JavaScript, Python, Flask, Node.js, Express,
            PostgreSQL, BigQuery, MongoDB, DocumentDB, Google Cloud Run, Google
            Cloud Storage, AWS Cognito, AWS Amplify, Stripe, HubSpot, Docker,
            pytest.
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
          <Text fontSize="sm" color={subtleText}>
            frontend developer, February 2022 — May 2022
          </Text>
          <Text>
            Editorial technology company specialized in systems for news
            portals, mobile apps, TV, print and newspapers.
          </Text>
          <UnorderedList spacing={3} px={6}>
            <ListItem>
              Started as a trainee and was promoted after 4 months, developing
              web interfaces and frontend applications for newspapers and news
              portals.
            </ListItem>
            <ListItem>
              Worked on maintenance, evolution and upgrades of legacy projects
              with jQuery, vanilla JS and responsive layouts, as well as API
              consumption.
            </ListItem>
            <ListItem>
              Worked on custom solutions for digital publishing, collaborating
              with the technical team on fast-paced deliveries for editorial
              environments.
            </ListItem>
          </UnorderedList>

          <Divider borderColor="gray.200" />

          <Heading
            as="h2"
            fontSize="xl"
            mb={1}
            fontWeight="medium"
            letterSpacing="tighter"
          >
            Selected Technical Projects
          </Heading>

          <Heading as="h3" fontSize="lg" fontWeight="medium">
            B2B Pricing Dashboards
          </Heading>
          <UnorderedList spacing={3} px={6}>
            <ListItem>
              Built React interfaces that turned complex pricing, market and
              commercial performance data into decision-ready screens with KPIs,
              charts, tables, filters, drill-down views and exports.
            </ListItem>
            <ListItem>
              Worked with Recharts, Chart.js and Ant Design Charts in
              high-volume charts, focusing on performance, readability,
              percentages, ordering and time-series rendering.
            </ListItem>
          </UnorderedList>

          <Heading as="h3" fontSize="lg" fontWeight="medium">
            Multi-tenant APIs and Analytical Data
          </Heading>
          <UnorderedList spacing={3} px={6}>
            <ListItem>
              Developed Python APIs to serve multiple customers within the same
              platform, ensuring tenant isolation, JWT/Cognito authentication,
              access rules, parameterized queries, server-side pagination and
              stable contracts for the frontend.
            </ListItem>
            <ListItem>
              Integrated BigQuery, PostgreSQL and 2 cloud providers to feed
              dashboards, filters, tables and downloads, using caching, signed
              URLs and asynchronous jobs to avoid bottlenecks at large data
              volumes.
            </ListItem>
          </UnorderedList>

          <Heading as="h3" fontSize="lg" fontWeight="medium">
            AI, Bots and Agent Tooling
          </Heading>
          <UnorderedList spacing={3} px={6}>
            <ListItem>
              Developed a WhatsApp bot for automated support and diagnostics,
              capable of chatting with users, collecting information, calling
              internal APIs and generating AI-assisted responses with
              validation, retries and fallbacks.
            </ListItem>
            <ListItem>
              Developed MCP servers in TypeScript/Node.js and Python/Flask to
              provide query, authentication and automation tools for clients
              compatible with Model Context Protocol.
            </ListItem>
          </UnorderedList>
        </VStack>
      </Box>
    </motion.div>
  );
}
