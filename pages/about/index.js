import React from "react";
import ACFModule from "../../components/modules/AcfModule";
import FlexibleLayout from "../../components/modules/FlexibleLayout";
function AboutPage() {
  // Define an array of module types available on the About page
  const moduleTypes = ["hero", "marquee", "featured","featuredAlternative", "contentBlock", "flexibleLayout","pricing",]; // Add more types as needed


  return (
    <>
      {/* <ACFModule moduleTypes={moduleTypes} /> */}
      <FlexibleLayout moduleTypes={moduleTypes} />
    </>
  );
}

export default AboutPage;
