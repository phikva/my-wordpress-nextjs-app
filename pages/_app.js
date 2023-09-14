// pages/_app.js
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";
// import components
import Layout from "../components/layouts/Layout"; 
import "../styles/tailwind.css";
//context
import { SeoProvider } from "../context/Seo";
import { ModuleProvider } from "../context/ModuleContext";
import { HeaderProvider } from "../context/HeaderContext";

function MyApp({ Component, pageProps }) {
  const client = useApollo(pageProps.initialApolloState);

  return (
    <ModuleProvider>
    <SeoProvider>
    <ApolloProvider client={client}>
      <HeaderProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </HeaderProvider>
    </ApolloProvider>
    </SeoProvider>
    </ModuleProvider>
  );
}

export default MyApp;
