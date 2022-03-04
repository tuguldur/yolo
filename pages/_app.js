import { ApolloProvider } from "@apollo/client";
import { useApollo } from "@lib/apollo";

import Layout from "@components/common/layout";
import "@styles/globals.css";

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
