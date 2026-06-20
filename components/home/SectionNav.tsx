import { useEffect, useState } from "react";
import { Box, Link, Text } from "@chakra-ui/react";
import { useTranslation } from "../../lib/i18n";

const SECTION_IDS = ["about", "experience", "projects"] as const;

// Brittany-Chiang-style in-page navigation: a short horizontal line that grows
// and brightens for the active/hovered section. Active section is tracked with
// an IntersectionObserver (scrollspy).
export default function SectionNav() {
  const { t } = useTranslation();
  const [active, setActive] = useState<string>("about");

  const muted = "var(--text-subtle)";
  const strong = "var(--text)";
  const lineMuted = "var(--border)";
  const accent = "var(--accent)";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Box as="nav" display={{ base: "none", lg: "block" }} mt={14}>
      {SECTION_IDS.map((id) => {
        const isActive = active === id;
        return (
          <Link
            key={id}
            href={`#${id}`}
            role="group"
            display="flex"
            alignItems="center"
            py={2.5}
            _hover={{ textDecoration: "none" }}
          >
            <Box
              as="span"
              h="1px"
              w={isActive ? "64px" : "32px"}
              mr={4}
              bg={isActive ? accent : lineMuted}
              transition="width .25s ease, background-color .25s ease"
              _groupHover={{ w: "64px", bg: accent }}
            />
            <Text
              as="span"
              fontSize="xs"
              fontWeight="bold"
              letterSpacing="0.18em"
              textTransform="uppercase"
              color={isActive ? strong : muted}
              transition="color .25s ease"
              _groupHover={{ color: strong }}
            >
              {t(`home.sections.${id}`)}
            </Text>
          </Link>
        );
      })}
    </Box>
  );
}
