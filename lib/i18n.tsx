import { createContext, useContext, useMemo, ReactNode } from "react";
import { useRouter } from "next/router";
import en from "../locales/en.json";
import ptBR from "../locales/pt-BR.json";

export const LOCALES = ["en", "pt-BR"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

const dictionaries: Record<Locale, unknown> = {
  en,
  "pt-BR": ptBR,
};

/** Resolve a dot-path key (e.g. "home.bio.lead") inside a dictionary. */
function resolve(dict: unknown, key: string): unknown {
  return key
    .split(".")
    .reduce<unknown>(
      (acc, part) =>
        acc && typeof acc === "object"
          ? (acc as Record<string, unknown>)[part]
          : undefined,
      dict
    );
}

type Translate = <T = string>(key: string) => T;

interface I18nContextValue {
  t: Translate;
  locale: Locale;
}

const I18nContext = createContext<I18nContextValue>({
  t: ((key: string) => key) as Translate,
  locale: DEFAULT_LOCALE,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const locale = (router.locale as Locale) || DEFAULT_LOCALE;

  const value = useMemo<I18nContextValue>(() => {
    const dict = dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];

    const t = (<T,>(key: string): T => {
      const value = resolve(dict, key);
      if (value !== undefined) return value as T;
      // Fall back to English, then to the key itself, so nothing ever renders blank.
      const fallback = resolve(dictionaries[DEFAULT_LOCALE], key);
      return (fallback !== undefined ? fallback : key) as T;
    }) as Translate;

    return { t, locale };
  }, [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useTranslation() {
  return useContext(I18nContext);
}
