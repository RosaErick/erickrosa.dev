const withImages = require("next-images");

module.exports = withImages({
  reactStrictMode: true,
  // Lets verification builds use a separate output dir (NEXT_DIST_DIR) so they
  // never clobber the `.next` that `next dev` is actively using. Dev, `next start`
  // and Vercel all fall back to the default `.next`.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  i18n: {
    locales: ["en", "pt-BR"],
    defaultLocale: "en",
  },
});
