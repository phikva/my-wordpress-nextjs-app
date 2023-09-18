import React from "react";
import CustomImage from "../modules/CustomImage";
// import helper functions
import {
  renderButtons,
  getBackgroundColorClass,
  getTextColorClass,
} from "../../utils/ButtonUtils";

function StandardContentBlock({ data }) {
  const contentBlockData = data || {};

  // Access the array of content blocks
  const contentBlocks = contentBlockData?.contentBlock || [];

  // Define a function to render content based on the chooseContentLayout
  const renderContent = (contentBlock) => {
    // Check if the sourceUrl exists before rendering the image
    const shouldRenderImage =
      contentBlock.leftAligned?.image?.sourceUrl ||
      contentBlock.rightAligned?.image?.sourceUrl ||
      contentBlock.centerAligned?.image?.sourceUrl;

      // Get the background color class based on chooseBackgroundColor
    const backgroundColorClass = getBackgroundColorClass(
      contentBlock.chooseBackgroundColor
    );
      // Get the text color class based on background color
    const textColorClass = getTextColorClass(backgroundColorClass);

    // Initialize variables to store the ctaButtons and numberOfCtas
    let ctaButtons;
    let numberOfCtas;

    // Check each case for content layout and extract buttons accordingly
    switch (contentBlock.chooseContentLayout) {
      case "Left aligned":
        numberOfCtas = contentBlock.leftAligned?.numberOfCtas;
        ctaButtons = contentBlock.leftAligned?.ctaButtons;
        break;
      case "Right aligned":
        numberOfCtas = contentBlock.rightAligned?.numberOfCtas;
        ctaButtons = contentBlock.rightAligned?.ctaButtons;
        break;
      case "Center aligned":
        numberOfCtas = contentBlock.centerAligned?.numberOfCtas;
        ctaButtons = contentBlock.centerAligned?.ctaButtons;
        break;
      default:
        break;
    }

    // Render buttons using the utility function
    const buttons = renderButtons(
      ctaButtons,
      numberOfCtas,
      true, // isDynamicBackground
      backgroundColorClass,
      contentBlock.chooseContentLayout
    );

    switch (contentBlock.chooseContentLayout) {
      case "Left aligned":
        return (
          <div
            className={`flex justify-center ${backgroundColorClass}`}
            key={contentBlock.id}
          >
            <div className="flex flex-col md:flex-row lg:flex-row max-w-8xl gap-x-48 gap-y-10 px-4 py-12 md:py-20 lg:py-48">
              <div className="order-2  lg:w-1/2">
                {shouldRenderImage && (
                  <CustomImage
                    src={contentBlock.leftAligned.image.sourceUrl}
                    alt={contentBlock.leftAligned.image.altText}
                    height={800}
                    width={800}
                    className="w-full"
                  />
                )}
              </div>
              <div className="md:w-3/4 flex flex-col gap-5 lg:w-1/2 order-1">
                <h2
                  className={`font-normal mb-2 ${textColorClass}`}
                >
                  {contentBlock.leftAligned.headline}
                </h2>
                <p
                  className={`${textColorClass} opacity-70 pb-4 lg-pb-0`}
                >
                  {contentBlock.leftAligned.subheader}
                </p>
                {buttons}
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
            <div className="flex flex-col md:flex-row lg:flex-row max-w-8xl gap-x-48 gap-y-10 px-4 py-12 md:py-20 lg:py-48">
              <div className="lg:w-1/2 order-2 md:order-1">
                {shouldRenderImage && (
                  <CustomImage
                    src={contentBlock.rightAligned.image.sourceUrl}
                    alt={contentBlock.rightAligned.image.altText}
                    height={800}
                    width={800}
                    className="w-full"
                  />
                )}
              </div>
              <div className="md:w-3/4 flex flex-col gap-5   lg:w-1/2 order-1 md:order-2">
                <h2
                  className={`mb-2  ${textColorClass}`}
                >
                  {contentBlock.rightAligned.headline}
                </h2>
                <p
                  className={`${textColorClass} opacity-70  pb-4 lg-pb-0`}
                >
                  {contentBlock.rightAligned.subheader}
                </p>
                {buttons}
              </div>
            </div>
          </div>
        );

      case "Center aligned":
        return (
          <div
            className={`content-block flex flex-col items-center gap-x-10 gap-y-10 px-4 py-12 md:py-20 lg:py-48"  ${backgroundColorClass}`}
            key={contentBlock.id}
          >
            <div className=" order-2">
              {shouldRenderImage && (
                <CustomImage
                  src={contentBlock.centerAligned.image.sourceUrl}
                  alt={contentBlock.centerAligned.image.altText}
                  height={800}
                  width={800}
                  className="mx-auto"
                />
              )}
            </div>
            <div className="lg:w-1/2 flex flex-col gap-5   order-1 text-center">
              <h2
                className={`mb-2 ${textColorClass}`}
              >
                {contentBlock.centerAligned.headline}
              </h2>
              <p
                className={`${textColorClass} opacity-70  pb-4lg-pb-0 max-w-2xl mx-auto`}
              >
                {contentBlock.centerAligned.subheader}
              </p>
              {buttons}
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
        <div className="flex flex-col" key={contentBlock.id}>
          {renderContent(contentBlock)}
        </div>
      ))}
    </section>
  );
}

export default StandardContentBlock;
