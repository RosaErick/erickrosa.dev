import { ChakraProvider } from "@chakra-ui/react"
import SEO from '../next-seo.config'
import { DefaultSeo } from 'next-seo'
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import Head from 'next/head';


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head><link rel="icon" type="favicon" href="../static/favicon.ico" /></Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
