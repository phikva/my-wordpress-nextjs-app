import React from "react";
import { useQuery } from "@apollo/client";
import GETHomepageData from "../graphql/homepage.graphql";
import Hero from "../components/modules/Hero";
import ClientsShowcase from "../components/modules/ClientsShowcase";
import Intro from "../components/modules/Intro";

function Homepage() {
  const { data } = useQuery(GETHomepageData, {
    fetchPolicy: "cache-first",
  });

  if (!data || !data.page || !data.page.homepage) {
    return null;
  }

  const { homepage } = data.page;
  const { clientsShowcase } = homepage;

  return (
    <>
      <Hero data={homepage.hero} />
      <ClientsShowcase data={data} />
      <Intro data={homepage} />
    </>
  );
}

export default Homepage;
