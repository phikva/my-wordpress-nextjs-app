// ACFModule.js
import React from "react";
import { useQuery } from "@apollo/client";
//import the modules
import Hero from "./Hero";
import Marquee from "./Marquee";
import Featured from "./Featured";
import StandardContentBlock from "./StandardContentBlock";
//import the queries
import { GetHeroData } from "../../graphql/GetHeroData.graphql";
import { GetMarqueeData } from "../../graphql/GetMarqueeData.graphql";
import  { GetFeaturedData } from "../../graphql/GetFeaturedData.graphql";
import { GetStandardContentBlock } from "../../graphql/GetStandardContentBlock.graphql";
//import the context
import { useModuleContext } from "../../context/ModuleContext";
import { withRouter } from "next/router"; // Import withRouter


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

  // Assuming your GraphQL queries include the user's toggle settings for hero and marquee modules
  const userHeroToggle = heroData?.pageBy?.hero?.toggleHeroSection;
  const userMarqueeToggle = marqueeData?.pageBy?.marquee?.toggleMarquee;
  const userFeaturedToggle = featuredData?.pageBy?.featured?.toggleFeatured;
  const userContentBlockToggle = contentBlockData?.pageBy?.standardContentBlock?.toggleContentBlock;
 

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
            (userContentBlockToggle === "Show" || moduleStates.contentBlock === "Show")
          ) {
            renderedModules.push(
              <StandardContentBlock
                key="contentBlock"
                data={contentBlockData?.pageBy?.standardContentBlock}
              />
              
            );
        
          }

        default:
          break;
      }
    }

    return renderedModules;
  };

  return <>{renderModule()}</>;
}

export default withRouter(ACFModule); // Wrap ACFModule with withRouter
