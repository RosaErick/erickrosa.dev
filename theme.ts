import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => {
    return {
      html: {
        scrollBehavior: "smooth",
      },
      body: {
        // Cohesive design tokens — one warm-neutral family with a single coral
        // accent. Everything (page bg, surfaces, borders, text, tags, accents)
        // is derived from these, so the whole app stays in harmony.
        "--bg": mode("#f2eeeb", "#1a1614")(props),
        "--surface": mode("#e8e1dd", "#241d1b")(props),
        "--surface-2": mode("#ded3ce", "#2c2421")(props),
        "--border": mode("#d3c6c0", "#362c28")(props),
        "--text": mode("#2a211e", "#ece4e0")(props),
        "--text-muted": mode("#6c5f5a", "#aa9d97")(props),
        "--text-subtle": mode("#978a84", "#776a64")(props),
        "--accent": mode("#be123c", "#fb7185")(props),
        "--accent-strong": mode("#9f1239", "#fda4af")(props),
        "--accent-soft": mode("rgba(190,18,60,0.12)", "rgba(251,113,133,0.15)")(
          props
        ),
        // Cursor flashlight glow — warm light on the dark theme, coral tint on
        // the light theme.
        "--spotlight": mode(
          "rgba(190,18,60,0.08)",
          "rgba(248,180,160,0.10)"
        )(props),
        bg: "var(--bg)",
        color: "var(--text)",
      },
      "::selection": {
        background: mode("rgba(190,18,60,0.16)", "rgba(251,113,133,0.22)")(
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
