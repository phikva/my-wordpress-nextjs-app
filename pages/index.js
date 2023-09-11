import React from "react";
import ACFModule from "../components/modules/AcfModule";

function Homepage() {
  // Define an array of module types available on the homepage
  const moduleTypes = ["hero", "marquee", "featured", "contentBlock"]; // Add more types as needed

  return (
    <>
      <ACFModule moduleTypes={moduleTypes} />
    </>
  );
}

export default Homepage;
