import React from "react";
import CustomImage from "../modules/CustomImage";

function StandardContentBlock({ data }) {
  const contentBlockData = data || {};


  // Check if toggleContentBlock is set to "Show"
  if (contentBlockData?.toggleContentBlock !== "Show") {
    return null; // Don't render anything if not set to "Show"
  }

  // Access the array of content blocks
  const contentBlocks = contentBlockData?.contentBlock || [];

  // Define a function to render content based on the chooseContentLayout
  const renderContent = (contentBlock) => {
    // Define a function to get the background color class based on the chooseBackgroundColor
    const getBackgroundColorClass = (chooseBackgroundColor) => {
      switch (chooseBackgroundColor) {
        case "Light":
          return "bg-white";
        case "Dark":
          return "bg-black";
        case "Color":
          return "bg-purple";
        default:
          return ""; // Default to no background color
      }
    };

    const backgroundColorClass = getBackgroundColorClass(
      contentBlock.chooseBackgroundColor
    );

       // Define a function to get the text color class based on the background color
       const getTextColorClass = (backgroundColorClass) => {
        // If the background color is 'bg-black', set the text color to 'text-white'
        if (backgroundColorClass === "bg-black") {
          return "text-white";
        }
        if (backgroundColorClass === "bg-white") {
            return "text-black";
          }
          if (backgroundColorClass === "bg-purple") {
            return "text-white";
          }
        
        // For other background colors, use the default text color
        return "text-gray-700";
      };

      const textColorClass = getTextColorClass(backgroundColorClass);

    switch (contentBlock.chooseContentLayout) {
      case "Left aligned":
        return (
          <div
            className={`flex justify-center ${backgroundColorClass}`}
            key={contentBlock.id}
          >
            <div className="flex flex-col md:flex-row lg:flex-row max-w-7xl gap-x-48 gap-y-10 px-4 py-12 md:py-20 lg:py-32">
            <div className="order-2  lg:w-1/2">
              <CustomImage
                src={contentBlock.leftAligned.image.sourceUrl}
                alt={contentBlock.leftAligned.image.altText}
                height={500}
                width={500}
                layout="responsive"
                className="w-full"
              />
            </div>
            <div className="md:w-3/4 lg:w-1/2 order-1">
            <h2 className={`text-2xl font-bold mb-2 ${textColorClass}`}>
                {contentBlock.leftAligned.headline}
              </h2>
              <p className={`${textColorClass}`}>
                {contentBlock.leftAligned.subheader}
              </p>
            </div>
          </div>
          </div>
        );

      case "Right aligned":
        return (
          <div
            className={` flex justify-center ${backgroundColorClass}`}
            key={contentBlock.id}
          >
            <div className="flex flex-col md:flex-row lg:flex-row max-w-7xl gap-x-48 gap-y-10 px-4 py-12 md:py-20 lg:py-32">
            <div className="lg:w-1/2 order-2 md:order-1">
              <CustomImage
                src={contentBlock.rightAligned.image.sourceUrl}
                alt={contentBlock.rightAligned.image.altText}
                height={500}
                width={500}
                layout="responsive"
                className="w-full"
              />
            </div>
            <div className="md:w-3/4  lg:w-1/2 order-1 md:order-2">
            <h2 className={`text-2xl font-bold mb-2 ${textColorClass}`}>
                {contentBlock.rightAligned.headline}
              </h2>
              <p className={`${textColorClass}`}>
                {contentBlock.rightAligned.subheader}
              </p>
            </div>
          </div>
          </div>
        );

      case "Center aligned":
        return (
          <div
            className={`content-block flex flex-col items-center gap-x-10 gap-y-20 px-4 py-12 md:py-20 lg:py-32"  ${backgroundColorClass}`}
            key={contentBlock.id}
          >
            <div className="lg:w-1/3 order-2">
              <CustomImage
                src={contentBlock.centerAligned.image.sourceUrl}
                alt={contentBlock.centerAligned.image.altText}
                height={500}
                width={500}
                layout="responsive"
                className="mx-auto"
              />
            </div>
            <div className="lg:w-1/2 order-1 text-center">
            <h2 className={`text-2xl font-bold mb-2 ${textColorClass}`}>
                {contentBlock.centerAligned.headline}
              </h2>
              <p className={`${textColorClass}`}>
                {contentBlock.centerAligned.subheader}
              </p>
            </div>
          </div>
        );

      default:
        return null; // If chooseContentLayout is not recognized, don't render anything
    }
  };

  return (
    <section className="flex flex-col">
      {contentBlocks.map((contentBlock) => (
        <div
          className="flex flex-col gap-10"
          key={contentBlock.id}
        >
          {renderContent(contentBlock)}
        </div>
      ))}
    </section>
  );
}

export default StandardContentBlock;
