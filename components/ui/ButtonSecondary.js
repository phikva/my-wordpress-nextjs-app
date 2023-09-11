// ButtonSecondary.js
import React from "react";

function ButtonSecondary({ label, link, className }) {
  // Check if linkType is "URL" and URL is provided
  if (link.linkType === "URL" && link.url) {
    return (
      <button
        href={link.url}
        className={` border border-gray-300 text-gray-500 font-regular py-3 px-8 rounded-md hover:border-purple transition-all duration-300 ${className}`}
      >
        {label}
      </button>
    );
  }

  // Check if linkType is "Page" and pageLink is provided
  if (link.linkType === "Page Link" && link.pageLink && link.pageLink.uri) {
    return (
      <button
        href={link.pageLink.uri}
        className={` border border-gray-300 text-gray-500 font-regular py-3 px-8 rounded-md hover:border-purple transition-all duration-300 ${className}`}
      >
        {label}
      </button>
    );
  }

  // If neither condition is met, render a disabled button
  return (
    <button
      className={`bg-gray-300 border border-gray-300 text-gray-500 font-regular py-3 px-8 rounded-md cursor-not-allowed ${className}`}
      disabled
    >
      {label}
    </button>
  );
}

export default ButtonSecondary;
