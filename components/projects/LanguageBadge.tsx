import { Flex, Box, Text } from "@chakra-ui/react";
import { getLanguageColor } from "../../lib/languageColor";

interface LanguageBadgeProps {
  language?: string | null;
  color?: string;
}

export default function LanguageBadge({ language, color }: LanguageBadgeProps) {
  const textColor = "var(--text-muted)";

  if (!language) return null;

  return (
    <Flex align="center" gap={2}>
      <Box
        w={3}
        h={3}
        flexShrink={0}
        borderRadius="full"
        bg={color ?? getLanguageColor(language)}
      />
      <Text fontSize="sm" fontWeight="medium" color={textColor}>
        {language}
      </Text>
    </Flex>
  );
}
