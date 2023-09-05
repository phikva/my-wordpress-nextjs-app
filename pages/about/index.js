import Hero from "../../components/modules/Hero";
import { useQuery } from "@apollo/client";
import GetAboutPageData from "../../graphql/aboutpage.graphql";
import Head from "next/head";
import GET_SITE_TITLE from "../../graphql/siteTitle.graphql"; // Import your GraphQL query for the site title

function AboutPage() {
  const { error, data } = useQuery(GetAboutPageData);
  const { data: siteTitleData } = useQuery(GET_SITE_TITLE); // Fetch site title

  if (error) {
    console.error("GraphQL Error:", error);
    return <p>Error: {error.message}</p>;
  }

  if (!data || !data.page || !data.page.about || !siteTitleData) {
    return null; // Handle the case where data is not available
  }

  const { page } = data;
  const { about } = page;
  const { hero } = about;
  const pageTitle = page.title; // Access the 'title' field from your query result
  const siteTitle = siteTitleData.generalSettings.title; // Access the site title

  return (
    <>
      <Head>
        <title>
          {pageTitle} - {siteTitle}
        </title>
      </Head>
      <Hero data={hero} />
    </>
  );
}

export default AboutPage;
