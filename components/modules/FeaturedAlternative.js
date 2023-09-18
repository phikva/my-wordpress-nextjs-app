import React, { useState } from "react";
import CustomImage from "./CustomImage";

import TabAlternative from "../ui/TabAlternative";

function FeaturedAlternative({ data }) {
  const featuredSectionAlternative = data?.featuredSectionAlternative || [];
  const tabGroup = featuredSectionAlternative?.tabGroup || [];
  const [selectedTab, setSelectedTab] = useState(0);

  // Determine the background color class based on the user's selection
  let backgroundColorClass = "";
  let textColorClass = "";
  let tabBackgroundColorClass = "";
  let borderClass = "";

  switch (featuredSectionAlternative?.chooseBackgroundColor) {
    case "Light":
      backgroundColorClass = "bg-white-light";
      textColorClass = "text-black";
      tabBackgroundColorClass = "bg-white";
      borderClass = "border-black border border-opacity-20";
      break;
    case "Dark":
      backgroundColorClass = "bg-black-light";
      textColorClass = "text-white";
      tabBackgroundColorClass = "bg-black";
      borderClass = "border-white border border-opacity-20";
      break;
    default:
      backgroundColorClass = "";
      tabBackgroundColorClass = "";
  }

  // Handle tab selection
  const handleTabClick = (index) => {
    setSelectedTab(index);
  };

  return (
    <section className={`py-10 px-4 md:py-28 justify-center ${backgroundColorClass}`}>
      <div className="flex  flex-col gap-8 md:gap-16 max-w-7xl mx-auto">
      {/* Render tab buttons */}
      <div className={`flex flex-row justify-center `}>
        <div className={`flex  rounded-full ${borderClass}`}>
        {tabGroup.map((tab, index) => (
          <TabAlternative
            key={index}
            tabData={tab.content}
            isActive={selectedTab === index}
            onClick={() => handleTabClick(index)}
            backgroundColorClass={backgroundColorClass} // Customize background color classes
            textColorClass={textColorClass} // Customize text color classes
            tabBackgroundColorClass={tabBackgroundColorClass} // Customize tab background color classes
            tabIndex={index}
            borderClass={borderClass}
            
          />
        ))}
        </div>
      </div>

      {/* Render selected tab's content */}
      <div
        className={`flex flex-col gap-6 md:gap-16  md:grid md:grid-cols-2 ${backgroundColorClass}`}
      >
        <div className="flex order-1 justify-center md:col-span-2">
          <h2 className={` ${textColorClass}`}>
            {tabGroup[selectedTab]?.content.tabHeader}
          </h2>
        </div>
        <div className="flex order-3 md:order-2 md:col-start-1 max-w-md">
          <p className={` ${textColorClass}`}>
            {tabGroup[selectedTab]?.content.tabText}
          </p>
        </div>
        <div className="flex order-2 md:order-3 md:col-start-2">
          <CustomImage
            src={tabGroup[selectedTab]?.content.tabImage.sourceUrl}
            alt={tabGroup[selectedTab]?.content.tabImage.altText}
            height={600}
            width={600}
          />
        </div>
      </div>
      </div>
    </section>
  );
}

export default FeaturedAlternative;
