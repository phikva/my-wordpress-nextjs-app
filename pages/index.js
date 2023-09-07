import React from "react";
import { useQuery } from "@apollo/client";
import GETHomepageData from "../graphql/homepage.graphql";
import Hero from "../components/modules/Hero";
import ClientsShowcase from "../components/modules/ClientsShowcase";
import Intro from "../components/modules/Intro";

function Homepage() {
  const { data } = useQuery(GETHomepageData, {
    fetchPolicy: "cache-first", // Cache data for faster subsequent visits
  });

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
