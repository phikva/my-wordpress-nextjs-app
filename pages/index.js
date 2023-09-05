import Hero from "../components/modules/Hero";
import { useQuery } from "@apollo/client";
import GETHomepageData from "../graphql/homepage.graphql";
import ClientsShowcase from "../components/modules/ClientsShowcase";
import Intro from "../components/modules/Intro";

function Homepage() {
  const { loading, error, data } = useQuery(GETHomepageData);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error("GraphQL Error:", error);
    return <p>Error: {error.message}</p>;
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
