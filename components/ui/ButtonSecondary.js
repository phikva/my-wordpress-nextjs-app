import React from "react";
import Link from "next/link";

function ButtonSecondary({
  label,
  link,
  className = "",
  isDynamicBackground = true,
  isHeaderButton = false,
  backgroundColorClass = "", // Add backgroundColorClass prop
}) {
  // Define the class name for the base button style
  const baseButtonClassName = isHeaderButton
    ? "border-black border text-black hover:opacity-50 text-xl py-2 px-6 transition-all duration-300"
    : ``;

  // Define the class name for the dynamic background button style
  const dynamicBackgroundButtonClassName = `text-xl border-purple bg-white border text-center hover:opacity-50 py-3 px-8 transition-all duration-300 ${className} ${backgroundColorClass}`; // Include backgroundColorClass here

  // Check if linkType is "URL" and URL is provided
  if (link.linkType === "URL" && link.url) {
    return (
      <Link
        href={link.url}
        className={
          isDynamicBackground
            ? dynamicBackgroundButtonClassName
            : baseButtonClassName
        }
      >
        {label}
      </Link>
    );
  }

  // Check if linkType is "Page Link" and pageLink is provided
  if (link.linkType === "Page Link" && link.pageLink && link.pageLink.uri) {
    return (
      <Link
        href={link.pageLink.uri}
        className={
          isDynamicBackground
            ? dynamicBackgroundButtonClassName
            : baseButtonClassName
        }
      >
        {label}
      </Link>
    );
  }

  // If neither condition is met, render a disabled button
  return (
    <Link
      className={`bg-gray-300 border text-gray-500 font-regular py-3 px-8 rounded-md cursor-not-allowed ${className}`}
      disabled
    >
      {label}
    </Link>
  );
}

export default ButtonSecondary;
