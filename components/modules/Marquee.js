import React from "react";
import CustomImage from "./CustomImage";
import { useModuleContext } from "../../context/ModuleContext";

function Marquee({ data }) {
  // Check if data exists before accessing its properties
  const images = data?.images || [];

  // Calculate the number of columns based on the number of images
  const numImages = images.length;
  let numCols, itemSize;

  if (numImages === 1) {
    numCols = 1;
    itemSize = "250px";
  } else if (numImages <= 4) {
    numCols = 4;
    itemSize = "calc(100% - 10px)"; // Adjust as needed
  } else if (numImages > 6) {
    numCols = 5;
    itemSize = "calc(100% - 20px)"; // Adjust as needed
  }

  // Centering styles
  const centeringStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <section className="px-4 bg-gray-dark py-10 md:py-20 lg:py-20">
      <div className="container mx-auto">
        <div
          className={`grid grid-cols-2 gap-5 md:grid-cols-${numCols} lg:grid-cols-${numCols} lg:gap-10`}
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
                className=""
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
