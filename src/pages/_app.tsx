import { NextComponentType } from 'next';
import { DefaultSeo } from 'next-seo';
import { AppContext, AppInitialProps, AppProps } from 'next/app';
import Head from 'next/head';
// import your default seo configuration
import SEO from '../../next-seo.config';
import '../assets/styles/globals.scss';
import { PWATags } from '../containers/PWATags';

// interface ReactGAProps {
//   debug: string
// }

const App: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}) => {
  // const reactGAOptions: ReactGAProps = {
  //   debug: process.env.NODE_ENV === "production" ? "false" : "true",
  // };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1"
        />
        <meta name="description" content="TrainRail Hackathon Brasil" />
        <meta name="keywords" content="train, hackathon" />
        <title>TrainRail Hackathon Brasil</title>

        <PWATags />

        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="favicon.png" type="image/png" />
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
      <script
        src="/path/to/bower_components/react-ga/dist/react-ga.min.js"
        async
      />

      <script async>
        {/* ReactGA.initialize('', reactGAOptions ); */}
        {/* ReactGA.pageview(window.location.pathname + window.location.search); */}
      </script>
    </>
  );
};

export default App;
