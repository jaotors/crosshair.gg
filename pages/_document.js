import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='icon' href='%PUBLIC_URL%/favicon.ico' />
          <link rel='apple-touch-icon' href='%PUBLIC_URL%/logo192.png' />
          <link rel='manifest' href='%PUBLIC_URL%/manifest.json' />
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
