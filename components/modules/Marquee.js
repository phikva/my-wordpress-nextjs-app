import React from "react";
import CustomImage from "./CustomImage";
import { useModuleContext } from "../../context/ModuleContext";

function Marquee({ data }) {
  const images = data?.images || [];
  const toggleText = data?.toggleText || "Hide";

  // Determine the number of duplicates needed based on the number of images
  const minDuplicatedImages = 20; // Minimum number of duplicated images to create a loop
  const numDuplicates = Math.max(
    minDuplicatedImages,
    Math.ceil(4 / images.length) * images.length // Adjust the factor (4) based on your desired number of visible images
  );

  // Duplicate the images array to create an infinite loop
  const duplicatedImages = Array.from({ length: numDuplicates }).flatMap(
    () => images
  );

  return (
    <section className="px-4 py-10 md:py-20 lg:py-20">
      {toggleText === "Show" && (
        <div className="pb-10 max-w-5xl mx-auto">
          <h4 className="text-center text-black opacity-80">
            {data.header}
          </h4>
        </div>
      )}

      <div className="relative whitespace-nowrap py-4 overflow-hidden">
        <div
          className="animate-marquee-1"
          style={{
            animationDuration: `${duplicatedImages.length * .5}s`, // Adjust the duration based on the number of duplicated images
          }}
        >
          {duplicatedImages.map((image, index) => (
            <span key={index} className="mx-10 inline-block">
              <CustomImage
                key={index}
                src={image?.image?.sourceUrl}
                alt={image?.image?.altText}
                height={200}
                width={200}
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Marquee;
