import React, { useState } from "react";
import CustomImage from "../modules/CustomImage";
import Tab from "../ui/Tab";

function Featured({ data }) {
  const featuredSection = data?.featuredSection || [];
  const tabGroup = featuredSection.tabGroup || [];
  const [selectedTab, setSelectedTab] = useState(0);

  // Handle tab selection
  const handleTabClick = (index) => {
    setSelectedTab(index);
  };

  return (
    <section className="px-4 py-10 md:py-20">
      <div className="container mx-auto flex flex-col gap-10">
        <div className="text-center">
        <h3 className="text-4xl font-semibold mb-6"> 
          {featuredSection.header}
        </h3>
        <p className="text-xl mb-6">{featuredSection.subheader}</p>
        </div>
      

        <div className="lg:flex flex-row gap-20 items-center justify-center">
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
              {tabGroup.map((tab, index) => (
                <Tab
                  key={index}
                  tabData={tab.content}
                  isActive={selectedTab === index}
                  onClick={() => handleTabClick(index)}
                />
              ))}
            </div>
          </div>
          <div className="hidden lg:flex lg:w-1/2 items-center mt-4">
            <div className="flex-1">{/* Tab Image */}</div>
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
