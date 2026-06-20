import {
  Box,
  Text,
  VStack,
  Heading,
  ListItem,
  Divider,
  UnorderedList,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useTranslation } from "../lib/i18n";

const Bullets = ({ items }: { items: string[] }) => (
  <UnorderedList spacing={3} px={6}>
    {items.map((item, i) => (
      <ListItem key={i}>{item}</ListItem>
    ))}
  </UnorderedList>
);

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <Heading
    as="h2"
    fontSize="xl"
    mb={1}
    fontWeight="medium"
    letterSpacing="tighter"
  >
    {children}
  </Heading>
);

export default function WorkPage() {
  const subtleText = "var(--text-muted)";
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.4 }}
    >
      <Box as="section">
        <Heading as="h1" fontSize="2xl" fontWeight="medium">
          {t("work.title")}
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
            {t("work.summary.p1")}
          </Text>
          <Text fontSize="lg">{t("work.summary.p2")}</Text>

          <Divider borderColor="var(--border)" />

          <SectionHeading>Proffer</SectionHeading>
          <Text fontSize="sm" color={subtleText}>
            {t("work.proffer.role")}, {t("work.proffer.period")}
          </Text>
          <Text>{t("work.proffer.summary")}</Text>
          <Bullets items={t<string[]>("work.proffer.bullets")} />
          <Text fontSize="sm" color={subtleText}>
            <Text as="span" fontWeight="bold">
              {t("work.keyTechnologies")}
            </Text>{" "}
            React, TypeScript, JavaScript, Python, Flask, Node.js, Express,
            PostgreSQL, BigQuery, MongoDB, DocumentDB, Google Cloud Run, Google
            Cloud Storage, AWS Cognito, AWS Amplify, Stripe, HubSpot, Docker,
            pytest.
          </Text>

          <Divider borderColor="var(--border)" />

          <SectionHeading>Mundiware</SectionHeading>
          <Text fontSize="sm" color={subtleText}>
            {t("work.mundiware.role")}, {t("work.mundiware.period")}
          </Text>
          <Text>{t("work.mundiware.summary")}</Text>
          <Bullets items={t<string[]>("work.mundiware.bullets")} />

          <Divider borderColor="var(--border)" />

          <SectionHeading>{t("work.selectedProjects.title")}</SectionHeading>

          <Heading as="h3" fontSize="lg" fontWeight="medium">
            {t("work.selectedProjects.dashboards.title")}
          </Heading>
          <Bullets items={t<string[]>("work.selectedProjects.dashboards.bullets")} />

          <Heading as="h3" fontSize="lg" fontWeight="medium">
            {t("work.selectedProjects.apis.title")}
          </Heading>
          <Bullets items={t<string[]>("work.selectedProjects.apis.bullets")} />

          <Heading as="h3" fontSize="lg" fontWeight="medium">
            {t("work.selectedProjects.ai.title")}
          </Heading>
          <Bullets items={t<string[]>("work.selectedProjects.ai.bullets")} />
        </VStack>
      </Box>
    </motion.div>
  );
}
