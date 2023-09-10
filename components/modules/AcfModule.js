import React from "react";
import { useQuery } from "@apollo/client";
import Hero from "./Hero";
import Marquee from "./Marquee";
import { GetHeroData } from "../../graphql/GetHeroData.graphql";
import { GetMarqueeData } from "../../graphql/GetMarqueeData.graphql";
import { useModuleContext } from "../../context/ModuleContext";
import { withRouter } from "next/router"; // Import withRouter

function ACFModule({ moduleTypes, router }) {
  const { setToggleHeroSection, setToggleMarqueeSection } = useModuleContext();
  const currentPageURI = router.asPath; // Use router.asPath to get the current URI

  // Fetch both GetHeroData and GetMarqueeData queries
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

  // Assuming your GraphQL queries include the user's toggle settings for hero and marquee modules
  const userHeroToggle = heroData?.pageBy?.hero?.toggleHeroSection;
  const userMarqueeToggle = marqueeData?.pageBy?.marquee?.toggleMarquee;

  const { toggleHeroSection, toggleMarqueeSection } = useModuleContext();

  const renderModule = () => {
    const renderedModules = []; // Create an array to collect rendered modules

    for (const moduleType of moduleTypes) {
      switch (moduleType) {
        case "hero":
          // Check if "hero" module should be displayed
          if (
            moduleType === "hero" &&
            (userHeroToggle === "Show" || toggleHeroSection === "Show")
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
            (userMarqueeToggle === "Show" || toggleMarqueeSection === "Show")
          ) {
            renderedModules.push(
              <Marquee key="marquee" data={marqueeData?.pageBy?.marquee} />
            );
          }
          break;
        // Add more cases for other module types if needed
        default:
          break;
      }
    }

    return renderedModules;
  };

  return <>{renderModule()}</>;
}

export default withRouter(ACFModule); // Wrap ACFModule with withRouter
