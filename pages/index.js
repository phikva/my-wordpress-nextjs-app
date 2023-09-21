import React from "react";
import ACFModule from "../components/modules/AcfModule";
import FlexibleLayout from "../components/modules/FlexibleLayout";

function Homepage() {
  // Define an array of module types available on the homepage
  const moduleTypes = ["hero", "marquee", "featured","featuredAlternative", "contentBlock", "flexibleLayout","pricing",]; // Add more types as needed

  return (
    <>
      {/* <ACFModule moduleTypes={moduleTypes} /> */}
      <FlexibleLayout moduleTypes={moduleTypes}  />
    </>
  );
}

export default Homepage;
