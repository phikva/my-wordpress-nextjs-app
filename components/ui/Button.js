import React from "react";

function Button({
  label,
  link,
  className = "",
  isHeaderButton = false,
  isDynamicBackground = false,
}) {
  // Define the class name for the base button style
  const baseButtonClassName = isHeaderButton
    ? "bg-white-light border-purple border text-black font-medium hover:opacity-50 text-base py-2 px-4 rounded-md transition-all duration-300"
    : `font-bold text-base text-white bg-purple border-purple border text-center hover:opacity-50 py-3 px-8 rounded-md transition-all duration-300 ${className}`;

  // Define the class name for the dynamic background button style
  const dynamicBackgroundButtonClassName = `font-bold text-base ${className}`;

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

  // Check if linkType is "Page" and pageLink is provided
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

export default Button;
