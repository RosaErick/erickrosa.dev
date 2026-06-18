const withImages = require("next-images");

module.exports = withImages({
  reactStrictMode: true,
  i18n: {
    locales: ["en", "pt-BR"],
    defaultLocale: "en",
  },
});
