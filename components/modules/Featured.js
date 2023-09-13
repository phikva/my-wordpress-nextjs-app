import React, { useState } from "react";
import CustomImage from "../modules/CustomImage";
import Tab from "../ui/Tab";

function Featured({ data }) {
  const featuredSection = data?.featuredSection || [];
  const tabGroup = featuredSection.tabGroup || [];
  const [selectedTab, setSelectedTab] = useState(0);

  // Determine the background color class based on the user's selection
  let backgroundColorClass = "";
  let textColorClass = "";
  let tabBackgroundColorClass = "";

  switch (featuredSection.chooseBackgroundColor) {
    case "Light":
      backgroundColorClass = "bg-white";
      textColorClass = "text-black";
      tabBackgroundColorClass = "bg-gray";
      break;
    case "Dark":
      backgroundColorClass = "bg-black";
      textColorClass = "text-white";
      tabBackgroundColorClass = "bg-black-light";
      break;
    case "Color":
      backgroundColorClass = "bg-purple";
      textColorClass = "text-white";
      tabBackgroundColorClass = "bg-purple-light";
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
    <section className={`py-10 md:py-28 flex justify-center ${backgroundColorClass}`}>
      <div className="flex flex-col gap-20 px-4 w-full max-w-7xl">
        <div className="text-center">
          <h3 className={`text-4xl font-semibold mb-6 ${textColorClass}`}>
            {featuredSection.header}
          </h3>
          <p className={`text-xl mb-6 ${textColorClass}`}>
            {featuredSection.subheader}
          </p>
        </div>

        <div className="lg:flex flex-row gap-20 items-center justify-center">
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-10">
              {tabGroup.map((tab, index) => (
                <Tab
                  key={index}
                  tabData={tab.content}
                  isActive={selectedTab === index}
                  onClick={() => handleTabClick(index)}
                  backgroundColorClass={backgroundColorClass}
                  textColorClass={textColorClass}
                  tabBackgroundColorClass={tabBackgroundColorClass}
                />
              ))}
            </div>
          </div>
          <div className="hidden lg:flex lg:w-1/2 items-center mt-4">
            <div className={`${selectedTab !== null ? "block" : "hidden"}`}>
              <CustomImage
                src={tabGroup[selectedTab]?.content.tabImage.sourceUrl}
                alt={tabGroup[selectedTab]?.content.tabImage.altText}
                className="rounded-full object-cover"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Featured;
