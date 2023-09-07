import React from "react";
import { useQuery } from "@apollo/client";
import GetAboutPageData from "../../graphql/aboutpage.graphql";
import Hero from "../../components/modules/Hero";
import GET_SITE_TITLE from "../../graphql/siteTitle.graphql"; 

function AboutPage() {
  const { data } = useQuery(GetAboutPageData, {
    fetchPolicy: "cache-first", // Cache data for faster subsequent visits
  });

  const { data: siteTitleData } = useQuery(GET_SITE_TITLE); 

  if (!data || !data.page || !data.page.about || !siteTitleData) {
    return null;
  }

  const { page } = data;
  const { about } = page;
  const { hero } = about;
  const pageTitle = page.title;
  const siteTitle = siteTitleData.generalSettings.title;

  return (
    <>
      <Hero data={hero} />
    </>
  );
}

export default AboutPage;
