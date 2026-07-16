import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png?v=2" sizes="96x96" />
          <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg?v=2" />
          <link rel="shortcut icon" href="/favicon/favicon.ico?v=2" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png?v=2" />
          <link rel="manifest" href="/favicon/site.webmanifest?v=2" />
        <meta name="theme-color" content="#0b1a2e" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
