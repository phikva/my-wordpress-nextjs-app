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

    switch (contentBlock.chooseContentLayout) {
      case "Left aligned":
        return (
          <div
            className={`content-block flex flex-col lg:flex-row items-center lg:items-start gap-x-10 gap-y-10 ${backgroundColorClass}`}
            key={contentBlock.id}
          >
            <div className="lg:w-1/2 order-2">
              <CustomImage
                src={contentBlock.leftAligned.image.sourceUrl}
                alt={contentBlock.leftAligned.image.altText}
                height={500}
                width={500}
                layout="responsive"
                className="w-full"
              />
            </div>
            <div className="lg:w-1/2 order-1">
              <h2 className="text-2xl font-bold mb-2">
                {contentBlock.leftAligned.headline}
              </h2>
              <p className="text-gray-700">
                {contentBlock.leftAligned.subheader}
              </p>
            </div>
          </div>
        );

      case "Right aligned":
        return (
          <div
            className={`content-block flex flex-col lg:flex-row items-center lg:items-start gap-x-10 gap-y-10 ${backgroundColorClass}`}
            key={contentBlock.id}
          >
            <div className="lg:w-1/2 sm:order-1 lg:order-2">
              <h2 className="text-2xl font-bold mb-2">
                {contentBlock.rightAligned.headline}
              </h2>
              <p className="text-gray-700">
                {contentBlock.rightAligned.subheader}
              </p>
            </div>
            <div className="lg:w-1/2 sm:order-2 lg:order-1">
              <CustomImage
                src={contentBlock.rightAligned.image.sourceUrl}
                alt={contentBlock.rightAligned.image.altText}
                height={500}
                width={500}
                layout="responsive"
                className="w-full"
              />
            </div>
          </div>
        );

      case "Center aligned":
        return (
          <div
            className={`content-block flex flex-col lg:flex-row items-center lg:items-start gap-x-10 gap-y-10 px-4 ${backgroundColorClass}`}
            key={contentBlock.id}
          >
            <div className="order-2 m-auto">
              <CustomImage
                src={contentBlock.centerAligned.image.sourceUrl}
                alt={contentBlock.centerAligned.image.altText}
                height={500}
                width={500}
                layout="responsive"
                className="mx-auto"
              />
            </div>
            <div className="lg:w-1/2 order-1 m-auto">
              <h2 className="text-2xl font-bold mt-4">
                {contentBlock.centerAligned.headline}
              </h2>
              <p className="text-gray-700">
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
