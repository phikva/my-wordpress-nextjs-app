// pages/_app.js
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";
import Layout from "../components/layouts/Layout"; // Import the Layout component
import "../styles/tailwind.css";
import { SeoProvider } from "../context/Seo";

function MyApp({ Component, pageProps }) {
  const client = useApollo(pageProps.initialApolloState);

  return (
    <SeoProvider>
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
    </SeoProvider>
  );
}

export default MyApp;
