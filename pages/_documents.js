import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from "next/script"

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
            <Head>
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                <Script async src="https://cdn.splitbee.io/sb.js" />
            </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument