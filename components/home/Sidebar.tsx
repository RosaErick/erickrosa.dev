import {
  Box,
  Flex,
  Heading,
  Text,
  Link,
  HStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import ModelViewer from "../3dmodel/3dModel";
import SectionNav from "./SectionNav";
import { useTranslation } from "../../lib/i18n";

const MotionBox = motion(Box) as any;

const socials = [
  { href: "mailto:erickpmotta@gmail.com", label: "Email", Icon: FaEnvelope },
  { href: "https://github.com/RosaErick", label: "GitHub", Icon: FaGithub },
  {
    href: "https://www.linkedin.com/in/erick-rosa-dev/",
    label: "LinkedIn",
    Icon: FaLinkedin,
  },
  {
    href: "https://www.instagram.com/erickrozza/",
    label: "Instagram",
    Icon: FaInstagram,
  },
];

export default function Sidebar() {
  const { t } = useTranslation();

  const nameColor = "var(--text)";
  const roleColor = "var(--text)";
  const taglineColor = "var(--text-muted)";
  const socialColor = "var(--text-subtle)";
  const accent = "var(--accent)";

  return (
    <Flex
      as="header"
      direction="column"
      w={{ base: "100%", lg: "45%" }}
      maxW={{ lg: "440px" }}
      position={{ lg: "sticky" }}
      top={{ lg: "88px" }}
      h={{ lg: "max-content" }}
    >
      <MotionBox
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Heading
          as="h1"
          fontSize={{ base: "4xl", lg: "5xl" }}
          letterSpacing="tight"
          lineHeight={1.05}
          color={nameColor}
        >
          Erick Rosa
        </Heading>
        <Text
          mt={3}
          fontSize={{ base: "lg", lg: "xl" }}
          fontWeight="medium"
          color={roleColor}
        >
          {t("home.bio.role")}
        </Text>
        <Text mt={4} maxW={{ lg: "20rem" }} fontSize="sm" lineHeight={1.7} color={taglineColor}>
          {t("home.tagline")}
        </Text>

        <SectionNav />

        <Link
          as={NextLink}
          href="/work"
          role="group"
          display={{ base: "none", lg: "inline-flex" }}
          alignItems="center"
          gap={2}
          mt={12}
          fontSize="sm"
          fontWeight="semibold"
          color={taglineColor}
          _hover={{ color: accent, textDecoration: "none" }}
        >
          {t("home.resumeCta")}
          <ArrowForwardIcon
            transition="transform .2s ease"
            _groupHover={{ transform: "translateX(4px)" }}
          />
        </Link>
      </MotionBox>

      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.35 }}
        mt={{ base: 8, lg: 12 }}
      >
        <Flex justify={{ base: "center", lg: "flex-start" }}>
          <ModelViewer w={[210, 240, 250]} h={[210, 240, 250]} mt={0} mb={0} />
        </Flex>

        <HStack
          spacing={5}
          mt={4}
          justify={{ base: "center", lg: "flex-start" }}
        >
          {socials.map(({ href, label, Icon }) => (
            <Link
              key={label}
              href={href}
              isExternal
              aria-label={label}
              color={socialColor}
              transition="color .2s ease, transform .2s ease"
              _hover={{ color: accent, transform: "translateY(-2px)" }}
            >
              <Icon size={20} />
            </Link>
          ))}
        </HStack>
      </MotionBox>
    </Flex>
  );
}
