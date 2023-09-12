import React from "react";

function ButtonSecondary({
  label,
  link,
  className = "",
  isDynamicBackground = false,
}) {
  // Define the class name for the base button style
  const baseButtonClassName = `font-bold text-purple text-base border-purple text-center hover:opacity-50 border py-3 px-8 rounded-md transition-all duration-300 ${className}`;

  // Define the class name for the dynamic background button style
  const dynamicBackgroundButtonClassName = `font-bold text-base ${
    isDynamicBackground ? "text-white" : "text-purple"
  } ${className}`;

  // Check if linkType is "URL" and URL is provided
  if (link.linkType === "URL" && link.url) {
    return (
      <a
        href={link.url}
        className={
          isDynamicBackground
            ? dynamicBackgroundButtonClassName
            : baseButtonClassName
        }
      >
        {label}
      </a>
    );
  }

  // Check if linkType is "Page Link" and pageLink is provided
  if (link.linkType === "Page Link" && link.pageLink && link.pageLink.uri) {
    return (
      <a
        href={link.pageLink.uri}
        className={
          isDynamicBackground
            ? dynamicBackgroundButtonClassName
            : baseButtonClassName
        }
      >
        {label}
      </a>
    );
  }

  // If neither condition is met, render a disabled button
  return (
    <a
      className={`bg-gray-300 border text-gray-500 font-regular py-3 px-8 rounded-md cursor-not-allowed ${className}`}
      disabled
    >
      {label}
    </a>
  );
}

export default ButtonSecondary;
