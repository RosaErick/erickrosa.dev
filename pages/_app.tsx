import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import Head from "next/head";
import theme from "../theme";
import "@fontsource/ibm-plex-sans/700.css";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/300.css";
import Layout from "../layouts/Layout";
import { SessionProvider } from "next-auth/react";
import { Analytics } from "@vercel/analytics/react";
import { I18nProvider } from "../lib/i18n";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  // Pages can opt out of the default centered Layout by exposing a `getLayout`
  // (e.g. the home page renders its own wide two-column shell).
  const getLayout =
    Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return (
    <SessionProvider session={session}>
      <Analytics />
      <ChakraProvider theme={theme}>
        <Head>
          <link rel="icon" type="favicon" href="../static/favicon.ico" />
        </Head>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <I18nProvider>{getLayout(<Component {...pageProps} />)}</I18nProvider>
      </ChakraProvider>
    </SessionProvider>
  );
}

export default MyApp;
