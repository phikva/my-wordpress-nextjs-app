import Hero from "../components/modules/Hero";
import { useQuery } from "@apollo/client";
import GETHomepageData from "../graphql/homepage.graphql";
import ClientsShowcase from "../components/modules/ClientsShowcase";
import Intro from "../components/modules/Intro";

function Homepage() {
  const { error, data } = useQuery(GETHomepageData);

  if (error) {
    console.error("GraphQL Error:", error);
    return <p>Error: {error.message}</p>;
  }

  if (!data || !data.page || !data.page.homepage) {
    return null; // Handle the case where data is not available
  }

  const { homepage } = data.page;
  const { clientsShowcase } = homepage; // Extract clientsShowcase data

  return (
    <>
      <Hero data={homepage.hero} />
      <ClientsShowcase data={data} />
      <Intro data={homepage} />
    </>
  );
}

export default Homepage;
