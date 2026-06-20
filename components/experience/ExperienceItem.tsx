import {
  Box,
  Text,
  Link,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

interface ExperienceItemProps {
  period: string;
  role: string;
  company: string;
  companyHref?: string;
  description: string;
  tags: string[];
}

export default function ExperienceItem({
  period,
  role,
  company,
  companyHref,
  description,
  tags,
}: ExperienceItemProps) {
  const periodColor = "var(--text-subtle)";
  const titleColor = "var(--text)";
  const descColor = "var(--text-muted)";
  const accent = "var(--accent)";
  const tagBg = "var(--surface-2)";
  const tagColor = "var(--text-muted)";
  const hoverBg = "var(--surface-2)";

  const title = `${role} · ${company}`;

  return (
    <Box
      role="group"
      display="flex"
      flexDirection={{ base: "column", sm: "row" }}
      gap={{ base: 2, sm: 6 }}
      p={4}
      mx={{ base: 0, sm: -4 }}
      borderRadius="lg"
      transition="background-color .25s ease"
      _hover={{ bg: hoverBg }}
    >
      <Text
        flexShrink={0}
        w={{ base: "auto", sm: "120px" }}
        pt={1}
        fontSize="xs"
        fontWeight="semibold"
        letterSpacing="wider"
        textTransform="uppercase"
        color={periodColor}
        whiteSpace="nowrap"
      >
        {period}
      </Text>

      <Box>
        {companyHref ? (
          <Link href={companyHref} isExternal _hover={{ textDecoration: "none" }}>
            <Text
              as="span"
              fontSize="md"
              fontWeight="semibold"
              color={titleColor}
              transition="color .25s ease"
              _groupHover={{ color: accent }}
            >
              {title}{" "}
              <ExternalLinkIcon
                boxSize={3.5}
                mb={1}
                transition="transform .25s ease"
                _groupHover={{ transform: "translate(2px, -2px)" }}
              />
            </Text>
          </Link>
        ) : (
          <Text fontSize="md" fontWeight="semibold" color={titleColor}>
            {title}
          </Text>
        )}

        <Text mt={2} fontSize="sm" lineHeight={1.7} color={descColor}>
          {description}
        </Text>

        <Wrap mt={3} spacing={2}>
          {tags.map((tag) => (
            <WrapItem key={tag}>
              <Text
                px={3}
                py={1}
                fontSize="xs"
                fontWeight="medium"
                borderRadius="full"
                bg={tagBg}
                color={tagColor}
              >
                {tag}
              </Text>
            </WrapItem>
          ))}
        </Wrap>
      </Box>
    </Box>
  );
}
