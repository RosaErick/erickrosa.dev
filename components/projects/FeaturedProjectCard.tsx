import {
  Box,
  Flex,
  Text,
  Link,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FaGithub } from "react-icons/fa";
import LanguageBadge from "./LanguageBadge";

interface FeaturedProjectCardProps {
  index?: number;
  title: string;
  description: string;
  language?: string | null;
  repoHref: string;
  liveHref?: string;
}

export default function FeaturedProjectCard({
  index,
  title,
  description,
  language,
  repoHref,
  liveHref,
}: FeaturedProjectCardProps) {
  const cardBg = "var(--surface)";
  const cardBorder = "var(--border)";
  const titleColor = "var(--text)";
  const descColor = "var(--text-muted)";
  const mutedColor = "var(--text-subtle)";
  const shadow = useColorModeValue(
    "0 14px 30px rgba(0,0,0,0.10)",
    "0 16px 34px rgba(0,0,0,0.5)"
  );

  // Hover follows the unified accent so cards stay in harmony; the language's
  // real color is preserved on the small badge dot below (informative).
  const accent = "var(--accent)";
  const primaryHref = liveHref || repoHref;

  return (
    <Box
      role="group"
      position="relative"
      overflow="hidden"
      h="100%"
      display="flex"
      flexDirection="column"
      bg={cardBg}
      border="1px solid"
      borderColor={cardBorder}
      borderRadius="xl"
      p={6}
      transition="transform .3s ease, border-color .3s ease, box-shadow .3s ease"
      _hover={{
        transform: "translateY(-4px)",
        borderColor: accent,
        boxShadow: shadow,
        _before: { transform: "scaleX(1)" },
      }}
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "3px",
        bg: accent,
        transform: "scaleX(0)",
        transformOrigin: "left",
        transition: "transform .4s ease",
      }}
    >
      <Flex justify="space-between" align="center" mb={3}>
        <Text
          fontFamily="mono"
          fontSize="sm"
          fontWeight="bold"
          letterSpacing="wider"
          color={mutedColor}
        >
          {index != null ? String(index).padStart(2, "0") : ""}
        </Text>
        <Link
          href={repoHref}
          isExternal
          aria-label={`${title} source code`}
          color={mutedColor}
          transition="color .2s ease"
          _hover={{ color: accent }}
        >
          <Icon as={FaGithub} boxSize={5} />
        </Link>
      </Flex>

      <Link href={primaryHref} isExternal _hover={{ textDecoration: "none" }}>
        <Text
          as="h3"
          fontSize="lg"
          fontWeight="semibold"
          color={titleColor}
          transition="color .2s ease"
          _groupHover={{ color: accent }}
        >
          {title}{" "}
          <ExternalLinkIcon
            boxSize={4}
            mb={1}
            transition="transform .2s ease"
            _groupHover={{ transform: "translate(2px, -2px)" }}
          />
        </Text>
      </Link>

      <Text mt={2} fontSize="sm" lineHeight={1.7} color={descColor}>
        {description}
      </Text>

      <Box mt="auto" pt={4}>
        <LanguageBadge language={language} />
      </Box>
    </Box>
  );
}
