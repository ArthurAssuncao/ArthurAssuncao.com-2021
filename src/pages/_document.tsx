import Document, { Head, Html, Main } from 'next/document';
import React from 'react';

export default class MyDocument extends Document {
  linkRef: React.RefObject<HTMLLinkElement>;

  constructor(props: unknown) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    super(props as any);
    this.linkRef = React.createRef<HTMLLinkElement>();
  }

  componentDidMount(): void {
    if (this.linkRef.current) {
      this.linkRef.current.removeAttribute('media');
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="preconnect" href="https://images.weserv.nl" />

          <link
            rel="stylesheet"
            media="print"
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap"
            ref={this.linkRef}
          />
          <noscript>
            <link
              href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap"
              rel="stylesheet"
            />
          </noscript>
        </Head>
        <body>
          <Main />
        </body>
      </Html>
    );
  }
}
