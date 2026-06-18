import { useRouter } from "next/router";
import { Button } from "@chakra-ui/react";
import { useTranslation } from "../../lib/i18n";

const LanguageSwitch = () => {
  const router = useRouter();
  const { locale, t } = useTranslation();

  const nextLocale = locale === "pt-BR" ? "en" : "pt-BR";
  const label = nextLocale === "pt-BR" ? "PT" : "EN";

  const switchLanguage = () => {
    router.push({ pathname: router.pathname, query: router.query }, router.asPath, {
      locale: nextLocale,
    });
  };

  return (
    <Button
      onClick={switchLanguage}
      aria-label={t("nav.switchLanguage")}
      title={t("nav.switchLanguage")}
      variant="ghost"
      size="sm"
      fontWeight="semibold"
      letterSpacing="wider"
      _hover={{ background: "none" }}
      _focus={{ background: "none", border: "none" }}
    >
      {label}
    </Button>
  );
};

export default LanguageSwitch;
