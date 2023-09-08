import Header from "./Header";
import Footer from "./Footer";
import { useQuery } from "@apollo/client";
import GetFooterData from "../../graphql/GetFooterData.graphql";
import GetHeaderData from "../../graphql/GetHeaderData.graphql";
import { withRouter } from "next/router"; // Import withRouter

function Layout({ children, router }) {
  //query for the footer data
  const { data: footerData, error: footerError } = useQuery(GetFooterData);
  //query for the header data
  const { data: headerData, error: headerError } = useQuery(GetHeaderData, {
    variables: { uri: router.asPath },
    fetchPolicy: "cache-first",
  });

  if (footerError || headerError) {
    console.error("GraphQL Error:", footerError || headerError);
    return <p>Error loading data.</p>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      {headerData && <Header headerData={headerData} />}
      <main className="flex-grow">{children}</main>
      {footerData && <Footer footerData={footerData} />}
    </div>
  );
}

export default withRouter(Layout); // Wrap Layout with withRouter
