import React from "react";
import ACFModule from "../../components/modules/AcfModule";

function AboutPage() {
  // Define an array of module types available on the About page
  const moduleTypes = ["hero", "marquee"]; // Add more types as needed

  return (
    <>
      <ACFModule moduleTypes={moduleTypes} />
    </>
  );
}

export default AboutPage;
