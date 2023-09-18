import React, { useState } from "react";
import CustomImage from "../modules/CustomImage";

function TabAlternative({
  tabData,
  isActive,
  onClick,
  backgroundColorClass,
  textColorClass,
  tabBackgroundColorClass,
  
}) {
 



  return (
    <div
      className={`cursor-pointer flex flex-col overflow-hidden transition-colors duration-150 gap-5 :p-10  ${
        tabBackgroundColorClass // Apply the provided tab background color class
      } ${
        isActive ? tabBackgroundColorClass : backgroundColorClass // Apply the provided text color class
      } rounded-full text-center px-2 py-2 md:px-5 md:py-3 `}
      onClick={onClick}
    >
      <div >
        <div className={``}>
          <p className={`${textColorClass} text-xs md:text-base`}>{tabData.tabName}</p>
        </div>
      </div>
    </div>
  );
}

export default TabAlternative;
