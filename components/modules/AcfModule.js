import React from "react";
import { useQuery } from "@apollo/client";
import { withRouter } from "next/router";
import Hero from "./Hero";
import { GetHeroData } from "../../graphql/GetHeroData.graphql";

function ACFModule({ module, router }) {
  const { query } = router;
  const currentPageURI = query.slug ? `/${query.slug.join("/")}` : "/";

  const { data, loading, error } = useQuery(GetHeroData, {
    variables: { uri: currentPageURI },
  });

  if (loading) {
    return null;
  }

  if (error) {
    console.error("GraphQL Error:", error);
    return null;
  }

  const heroData = data?.pageBy?.hero;
console.log("module:", module.type)
  switch (module.type) {
    case "hero":
      return <Hero data={heroData} />;
    case "feature":
      // Add logic for rendering the 'feature' module here
    case "testimonial":
      // Add logic for rendering the 'testimonial' module here
    default:
      return null;
  }
}

export default withRouter(ACFModule);
