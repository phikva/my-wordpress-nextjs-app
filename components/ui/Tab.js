import React from "react";
import CustomImage from "../modules/CustomImage";
import DynamicIcon from "../modules/DynamicIcon"; // Import the DynamicIcon component

function Tab({
  tabData,
  isActive,
  onClick,
  backgroundColorClass,
  textColorClass,
  tabBackgroundColorClass,
  borderClass,

}) {
  const iconColor = isActive ? textColorClass : backgroundColorClass; // Define the icon color based on isActive

  return (
    <div
      className={`cursor-pointer ${borderClass} rounded-xl flex flex-col overflow-hidden transition-colors duration-150 gap-5 p-10  ${
        tabBackgroundColorClass // Apply the provided tab background color class
      } ${
        isActive ? tabBackgroundColorClass : backgroundColorClass // Apply the provided text color class
      }`}
      onClick={onClick}
    >
      <div className={`flex justify-between items-center`}>
        <div className={`text-3xl font-normal mb-2 ${textColorClass}`}>
          {tabData.tabHeader}
        </div>
        <div className={`text-lg ${textColorClass}`}>
          {/* Use DynamicIcon to display open and close icons */}
          <DynamicIcon
            icon={isActive ? "chevron-up" : "chevron-down"}
            size="sm"
            color={iconColor} // Pass the icon color as a prop
          />
        </div>
      </div>
      {/* Hide tabText when not active */}
      <p
        className={` ${
          isActive ? "block" : "hidden"
        } ${textColorClass} text-xl font-normal opacity-70`}
      >
        {tabData.tabText}
      </p>
      <div
        className={`transition-max-h overflow-hidden ${
          isActive ? "max-h-96" : "max-h-0"
        } lg:hidden lg:overflow-visible`}
      >
        <CustomImage
          src={tabData.tabImage.sourceUrl}
          alt={tabData.tabImage.altText}
          className="w-12 h-12  object-cover"
          width={600}
          height={600}
        />
      </div>
    </div>
  );
}

export default Tab;
