// pages/_app.js
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";
import Layout from "../components/layouts/Layout"; 
import "../styles/tailwind.css";
//context
import { SeoProvider } from "../context/Seo";
import { ModuleProvider } from "../context/ModuleContext";

function MyApp({ Component, pageProps }) {
  const client = useApollo(pageProps.initialApolloState);

  return (
    <ModuleProvider>
    <SeoProvider>
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
    </SeoProvider>
    </ModuleProvider>
  );
}

export default MyApp;
