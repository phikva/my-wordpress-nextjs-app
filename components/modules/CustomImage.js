import React from "react";
import NextImage from "next/image";

function CustomImage({ src, alt, width, height }) {
  return (
    <NextImage src={src} alt={alt}  width={width} height={height} />
  );
}

export default CustomImage;
