
import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

import { ServerStyleSheet as StyledComponentSheets } from "styled-components";

// import logo from '../public/images/logo.png'

class MyDocument extends Document {
  render() {
   //yoursite.com/images/image.png

   https: return (
     <Html>
       <Head>
       <title>Online shop</title>
         {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
         <link rel="icon" href="/images/logo.png" />
        
         
         <script
           async
           src="https://www.googletagmanager.com/gtag/js?id=UA-157919342-1"
         />
         <script
           // eslint-disable-next-line react/no-danger
           dangerouslySetInnerHTML={{
             __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              gtag('config', 'UA-157919342-1');
              `,
           }}
         />

         {/* <!-- OneTrust Cookies Consent Notice start for www.mubazar.com --> 

          <script type="text/javascript">{function OptanonWrapper() {}}</script>
          {/* <!-- OneTrust Cookies Consent Notice end for www.mubazar.com --> */}

         <link
           href="https://fonts.googleapis.com/css?family=Raleway"
           rel="stylesheet"
         />

         <link
           rel="stylesheet"
           href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
         />
         <link
           href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;0,700;1,600&display=swap"
           rel="stylesheet"
         />
         <link
           href="https://fonts.googleapis.com/css?family=Roboto Condensed"
           rel="stylesheet"
         ></link>


         <meta charSet="utf-8" />
       </Head>
       <body>
         <Main />
         <NextScript />
       </body>
     </Html>
   );
  }
}

MyDocument.getInitialProps = async (ctx) => {


  const styledComponentSheet = new StyledComponentSheets();
  const originalRenderPage = ctx.renderPage;


  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          styledComponentSheet.collectStyles(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <React.Fragment key="styles">
          {initialProps.styles}

          {styledComponentSheet.getStyleElement()}
        </React.Fragment>
      ),
    };
  } finally {
    
    styledComponentSheet.seal();
  }
};

export default MyDocument;
