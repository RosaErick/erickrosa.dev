import { ChakraProvider } from "@chakra-ui/react"
import SEO from '../next-seo.config'
import { DefaultSeo } from 'next-seo'
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
