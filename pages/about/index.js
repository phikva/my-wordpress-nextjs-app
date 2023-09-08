import React from "react";
import { useQuery } from "@apollo/client";
import GetAboutPageData from "../../graphql/aboutpage.graphql";
import Hero from "../../components/modules/Hero";


function AboutPage() {
  const { data } = useQuery(GetAboutPageData, {
    fetchPolicy: "cache-first",
  });

  if (!data || !data.page || !data.page.about) {
    return null;
  }

  const { page } = data;
  const { about } = page;
  const { hero } = about;

  return (
    <>
      <Hero data={hero} />
      {/* Any other content specific to your AboutPage */}
    </>
  );
}

export default AboutPage;
