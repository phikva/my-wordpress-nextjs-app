import React, { Suspense } from "react";
// import components
import Header from "./Header";
import Footer from "./Footer";
import { useQuery } from "@apollo/client";
//import the queries
import GetHeaderData from "../../graphql/GetHeaderData.graphql";
import { withRouter } from "next/router"; // Import withRouter

function Layout({ children, router }) {
  // Query for the header data
  const { data: headerData, error: headerError } = useQuery(GetHeaderData, {
    variables: { uri: router.asPath },
    fetchPolicy: "cache-first",
  });

  if (headerError) {
    console.error("GraphQL Error:", headerError);
    return <p>Error loading data.</p>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Suspense fallback={<p>Loading header data...</p>}>
        {headerData && <Header headerData={headerData} />}
      </Suspense>
      <main className="flex-grow">{children}</main>
      <Suspense fallback={<p>Loading footer...</p>}>
        {headerData && <Footer footerData={headerData} />}
      </Suspense>
    </div>
  );
}

export default withRouter(Layout);
