import React, { Suspense } from "react";

import Header from "./Header";
import Footer from "./Footer";
import { useQuery } from "@apollo/client";
import GetFooterData from "../../graphql/GetFooterData.graphql";
import GetHeaderData from "../../graphql/GetHeaderData.graphql";
import { withRouter } from "next/router"; // Import withRouter

function Layout({ children, router }) {
    //query for the header data
    const { data: headerData, error: headerError } = useQuery(GetHeaderData, {
      variables: { uri: router.asPath },
      fetchPolicy: "cache-first",
    });
  //query for the footer data
  const { data: footerData, error: footerError } = useQuery(GetFooterData, {
    fetchPolicy: "cache-first",
  });


  if (footerError || headerError) {
    console.error("GraphQL Error:", footerError || headerError);
    return <p>Error loading data.</p>;
  }

  return (
    <div className="flex flex-col min-h-screen ">
      <Suspense fallback={<p>Loading header data...</p>}>
      {headerData && <Header headerData={headerData} />}
      </Suspense>
      <main className="flex-grow">{children}</main>
      <Suspense fallback={<p>Loading footer...</p>}>
      {footerData && <Footer footerData={footerData} />}
      </Suspense>
    </div>
  );
}

export default withRouter(Layout); // Wrap Layout with withRouter
