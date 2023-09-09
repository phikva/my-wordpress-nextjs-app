import React from "react";
import ACFModule from "../components/modules/AcfModule";

function Homepage() {

// Define your module data here or fetch it from a data source
const moduleData = {
  type: "hero", // Example type, adjust as needed
  // Other module properties...
};
  return (
    <>
      <ACFModule module={moduleData} />
    </>
  );
}

export default Homepage;

