import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => {
    return {
      html: {
        scrollBehavior: "smooth",
      },
      body: {
        // Cohesive design tokens — one cool-neutral family with a single teal
        // accent. Everything (page bg, surfaces, borders, text, tags, accents)
        // is derived from these, so the whole app stays in harmony.
        "--bg": mode("#f2f5f4", "#0f1517")(props),
        "--surface": mode("#e3e9e6", "#161e20")(props),
        "--surface-2": mode("#d5ddd8", "#1d2628")(props),
        "--border": mode("#c9d2cd", "#2a3234")(props),
        "--text": mode("#1b2321", "#e3e9e7")(props),
        "--text-muted": mode("#55615d", "#95a2a0")(props),
        "--text-subtle": mode("#87918d", "#6a7674")(props),
        "--accent": mode("#0d9488", "#2dd4bf")(props),
        "--accent-strong": mode("#0f766e", "#5eead4")(props),
        "--accent-soft": mode("rgba(13,148,136,0.12)", "rgba(45,212,191,0.14)")(
          props
        ),
        bg: "var(--bg)",
        color: "var(--text)",
      },
      "::selection": {
        background: mode("rgba(13,148,136,0.20)", "rgba(45,212,191,0.24)")(
          props
        ),
      },
    };
  },
};

const theme = extendTheme({
  fonts: {
    heading: `'IBM Plex Sans', sans-serif`,
    body: `'IBM Plex Sans', sans-serif`,
  },
  styles,
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false, // This disables the system color mode detection
  },
});

export default theme;
