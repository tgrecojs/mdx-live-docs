import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

const isProd = process.env.NODE_ENV === 'production'

const BaseCSS = ({ css }) =>
  <style
    dangerouslySetInnerHTML={{
      __html: css
    }}
  />

BaseCSS.defaultProps = {
  css: '*{box-sizing:border-box}body{margin:0}'
}

export default class MyDocument extends Document {
  render () {
    return (
      <html>
        <Head>
          <meta name='description' content='Document and develop React components with MDX and Next.js' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='generator' content='mdx-docs' />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:site' content='@jxnblk' />
          <meta name='twitter:title' content='MDX Docs' />
          <meta name='twitter:description' content='Document and develop React components with MDX and Next.js' />
          <meta name='twitter:image' content='https://jxnblk.com/mdx-docs/static/card.png' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
