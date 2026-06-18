// GitHub Linguist language colors. The language name comes from the GitHub API
// (the `language` field on a repo); this maps it to its canonical color.
const LANGUAGE_COLORS: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  SCSS: "#c6538c",
  Ruby: "#701516",
  Vue: "#41b883",
  Shell: "#89e051",
  Go: "#00ADD8",
  Rust: "#dea584",
  Java: "#b07219",
  PHP: "#4F5D95",
  "C++": "#f34b7d",
  C: "#555555",
  "C#": "#178600",
  Dockerfile: "#384d54",
  Jupyter: "#DA5B0B",
  Svelte: "#ff3e00",
};

const FALLBACK_COLOR = "#8b949e";

export function getLanguageColor(language?: string | null): string {
  if (!language) return FALLBACK_COLOR;
  return LANGUAGE_COLORS[language] ?? FALLBACK_COLOR;
}
