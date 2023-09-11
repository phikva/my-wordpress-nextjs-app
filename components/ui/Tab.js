import React from "react";
import CustomImage from "../modules/CustomImage";
import DynamicIcon from "../modules/DynamicIcon"; // Import the DynamicIcon component

function Tab({ tabData, isActive, onClick }) {
  const iconColor = isActive ? "lg:white" : "gray"; // Define the icon color based on isActive

  return (
    <div
      className={`cursor-pointer  ${
        isActive
          ? "lg:bg-purple text-black lg:text-white "
          : "bg-gray-light text-black "
      } p-4 rounded-lg shadow-md flex flex-col gap-5`}
      onClick={onClick}
    >
      <div className="flex justify-between items-center">
        <div className="text-2xl font-semibold mb-2 ">{tabData.tabHeader}</div>
        <div className="text-lg ">
          {/* Use DynamicIcon to display open and close icons */}
          <DynamicIcon
            icon={isActive ? "chevron-up" : "chevron-down"}
            size="sm"
            color={iconColor} // Pass the icon color as a prop
          />
        </div>
      </div>
      <p className={`${isActive ? "block" : "hidden"}`}>{tabData.tabText}</p>
      <div
        className={`transition-max-h overflow-hidden ${
          isActive ? "max-h-96" : "max-h-0"
        } lg:hidden lg:overflow-visible`}
      >
        <CustomImage
          src={tabData.tabImage.sourceUrl}
          alt={tabData.tabImage.altText}
          className="w-12 h-12 rounded-full object-cover"
          width={600}
          height={600}
        />
      </div>
    </div>
  );
}

export default Tab;
