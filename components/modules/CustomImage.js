import React from "react";
import NextImage from "next/image";

function CustomImage({ src, alt, layout, width, height }) {
  return (
    <NextImage src={src} alt={alt} layout={layout} width={width} height={height} />
  );
}

export default CustomImage;
