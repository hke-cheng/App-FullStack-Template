  
import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';

export default class MyDocument extends Document {

  render() {
    return (
      <Html>

        <Head>
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&display=swap" rel="stylesheet" />
        </Head>

        <body style={{margin:"0px"}}>
          <Main />
          <NextScript />
        </body>

      </Html>
    )
  }
}


// static async getInitialProps(ctx) {
//   const initialProps = await Document.getInitialProps(ctx)
//   return { ...initialProps }
// }


MyDocument.getInitialProps = async (ctx) => {

  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};