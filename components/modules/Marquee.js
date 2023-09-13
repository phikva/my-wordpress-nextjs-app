import React from "react";
import CustomImage from "./CustomImage";
import { useModuleContext } from "../../context/ModuleContext";

function Marquee({ data }) {
  // Check if data exists before accessing its properties
  const images = data?.images || [];
  const toggleText = data?.toggleText || "Hide"; // Default to "hide" if toggleText is not defined

  // Calculate the number of columns based on the number of images
  const numImages = images.length;
  let numCols, itemSize;

  if (numImages > 1 && numImages <= 3) {
    numCols = 1;
    itemSize = "calc(100% - 10px)"; // Adjust as needed
  } else if (numImages <= 4) {
    numCols = 4;
    itemSize = "calc(100% - 10px)"; // Adjust as needed
  } else if (numImages > 6) {
    numCols = 5;
    itemSize = "calc(100% - 5px)"; // Adjust as needed
  }

  // Centering styles
  const centeringStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <section className=" bg-black px-4 py-10 md:py-20 lg:py-20 ">
      {toggleText === "Show" && (
        <div className="pb-16">
          <h3 className="text-xl text-center text-white opacity-50">
            {data.header}
          </h3>
        </div>
      )}

      <div className="container mx-auto md:max-w-4xl">
        <div
          className={`grid grid-cols-2 gap-5 md:grid-cols-${numCols} lg:grid-cols-5 lg:gap-10 opacity-50`}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className=""
              style={{
                width: itemSize,
                height: itemSize,
                ...centeringStyles, // Apply centering styles
              }}
            >
              <CustomImage
                key={index}
                src={image?.image?.sourceUrl}
                alt={image?.image?.altText}
                height={250}
                width={250}
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Marquee;
