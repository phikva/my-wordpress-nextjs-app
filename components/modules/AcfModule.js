import React from "react";
import { useQuery } from "@apollo/client";

//import the modules
import Hero from "./Hero";
import Marquee from "./Marquee";
import Featured from "./Featured";
import StandardContentBlock from "./StandardContentBlock";
import FlexibleLayout from "./FlexibleLayout";

//import the queries
import { GetHeroData } from "../../graphql/GetHeroData.graphql";
import { GetMarqueeData } from "../../graphql/GetMarqueeData.graphql";
import { GetFeaturedData } from "../../graphql/GetFeaturedData.graphql";
import { GetStandardContentBlock } from "../../graphql/GetStandardContentBlock.graphql";
import { GetFlexibleLayout } from "../../graphql/GetFlexibleLayout.graphql";

//import the context
import { useModuleContext } from "../../context/ModuleContext";
import { withRouter } from "next/router"; // Import withRouter

//import helper functions
import { getUserToggle } from "../../utils/userToggleUtils";

function ACFModule({ moduleTypes, router }) {
  const { moduleStates, updateModuleState } = useModuleContext();
  const currentPageURI = router.asPath; // Use router.asPath to get the current URI

  // Fetch data
  const {
    data: heroData,
    loading: heroLoading,
    error: heroError,
  } = useQuery(GetHeroData, {
    variables: { uri: currentPageURI },
  });

  const {
    data: marqueeData,
    loading: marqueeLoading,
    error: marqueeError,
  } = useQuery(GetMarqueeData, {
    variables: { uri: currentPageURI },
  });

  const {
    data: featuredData,
    loading: featuredLoading,
    error: featuredError,
  } = useQuery(GetFeaturedData, {
    variables: { uri: currentPageURI },
  });

  const {
    data: contentBlockData,
    loading: contentBlockLoading,
    error: contentBlockError,
  } = useQuery(GetStandardContentBlock, {
    variables: { uri: currentPageURI },
  });

  const {
    data: flexibleLayoutData,
    loading: flexibleLayoutLoading,
    error: flexibleLayoutError,
  } = useQuery(GetFlexibleLayout, {
    variables: { uri: currentPageURI },
  });

  // get user toggle value for each module
  const userHeroToggle = getUserToggle(
    heroData,
    "hero", 
    "toggleHeroSection"
    );
  const userMarqueeToggle = getUserToggle(
    marqueeData,
    "marquee",
    "toggleMarquee"
  );
  const userFeaturedToggle = getUserToggle(
    featuredData,
    "featured",
    "toggleFeatured"
  );
  const userContentBlockToggle = getUserToggle(
    contentBlockData,
    "standardContentBlock",
    "toggleContentBlock"
  );
  const userFlexibleContentToggle = getUserToggle(
    flexibleLayoutData,
    "pageContent",
    "togglePage"
  );

  const renderModule = () => {
    const renderedModules = []; // Create an array to collect rendered modules

    for (const moduleType of moduleTypes) {
      switch (moduleType) {
        case "hero":
          // Check if "hero" module should be displayed
          if (
            moduleType === "hero" &&
            (userHeroToggle === "Show" || moduleStates.hero === "Show")
          ) {
            renderedModules.push(
              <Hero key="hero" data={heroData?.pageBy?.hero} />
            );
          }
          break;
        case "marquee":
          // Check if "marquee" module should be displayed
          if (
            moduleType === "marquee" &&
            (userMarqueeToggle === "Show" || moduleStates.marquee === "Show")
          ) {
            renderedModules.push(
              <Marquee key="marquee" data={marqueeData?.pageBy?.marquee} />
            );
          }
          break;
        case "featured":
          // Check if "featured" module should be displayed
          if (
            moduleType === "featured" &&
            (userFeaturedToggle === "Show" || moduleStates.featured === "Show")
          ) {
            renderedModules.push(
              <Featured key="featured" data={featuredData?.pageBy?.featured} />
            );
          }
          break;
        case "contentBlock":
          // Check if "contentBlock" module should be displayed
          if (
            moduleType === "contentBlock" &&
            (userContentBlockToggle === "Show" ||
              moduleStates.contentBlock === "Show")
          ) {
            renderedModules.push(
              <StandardContentBlock
                key="contentBlock"
                data={contentBlockData?.pageBy?.standardContentBlock}
              />
            );
          }
          break;
        case "flexibleLayout":
          // Check if "flexibleLayout" module should be displayed
          if (
            moduleType === "flexibleLayout" &&
            (userFlexibleContentToggle === "Show" ||
              moduleStates.flexibleLayout === "Show")
          ) {
            renderedModules.push(
              <FlexibleLayout
                key="flexibleLayout"
                data={flexibleLayoutData?.pageBy?.pageContent}
              />
            );
          }
          break;

        default:
          break;
      }
    }

    return renderedModules;
  };

  return <>{renderModule()}</>;
}

export default withRouter(ACFModule); // Wrap ACFModule with withRouter
