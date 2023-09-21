import React from "react";
import { useQuery } from "@apollo/client";

// Import GraphQL queries
import { GetFlexibleLayout } from "../../graphql/GetFlexibleLayout.graphql";
import { withRouter } from "next/router";

// Import context
import { useModuleContext } from "../../context/ModuleContext";

// Import individual module components
import Hero from "./Hero";
import Marquee from "./Marquee";
import Featured from "./Featured";
import FeaturedAlternative from "./FeaturedAlternative";
import StandardContentBlock from "./StandardContentBlock";
import Price from "./Price";

function FlexibleLayout({ router }) {
  const { moduleStates } = useModuleContext();
  const currentPageURI = router.asPath;

  // Fetch data for the flexible layout
  const {
    data: flexibleLayoutData,
    loading: flexibleLayoutLoading,
    error: flexibleLayoutError,
  } = useQuery(GetFlexibleLayout, {
    variables: { uri: currentPageURI },
  });

  // Ensure that flexibleLayoutData?.pageBy?.pageContent?.flexibleContent is an array
  const flexibleContent =
    flexibleLayoutData?.pageBy?.pageContent?.flexibleContent || [];

  // Render modules based on their types
  const renderModule = (module) => {
    switch (module.__typename) {
      case "Page_Pagecontent_FlexibleContent_HeroBlock":
        return <Hero key={module.id} data={module} />;
      case "Page_Pagecontent_FlexibleContent_MarqueeBlock":
        return <Marquee key={module.id} data={module} />;
      case "Page_Pagecontent_FlexibleContent_FeaturedBlock":
        return <Featured key={module.id} data={module} />;
      case "Page_Pagecontent_FlexibleContent_FeaturedAlternativeBlock":
        return <FeaturedAlternative key={module.id} data={module} />;
      case "Page_Pagecontent_FlexibleContent_ContentBlock":
        return <StandardContentBlock key={module.id} data={module} />;
      case "Page_Pagecontent_FlexibleContent_Price":
        return <Price key={module.id} data={module} />;
      default:
        return null; // Handle unknown block types or add a default case
    }
  };

  return (
    <>
      {flexibleContent.map((block) => {
        const moduleType = block.__typename;
        if (
          moduleStates[moduleType] === "Show" ||
          moduleStates[moduleType] === undefined
        ) {
          return renderModule(block);
        } else {
          return null;
        }
      })}
    </>
  );
}

export default withRouter(FlexibleLayout);
