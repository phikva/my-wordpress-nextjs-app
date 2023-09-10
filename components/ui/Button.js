// Button.js
import React from "react";

function Button({ label, link, className }) {
  // Check if linkType is "URL" and URL is provided
  if (link.linkType === "URL" && link.url) {
    return (
      <a
        href={link.url}
        className={`bg-black border border-black text-white font-regular py-3 px-8 rounded-md hover:bg-orange hover:border-orange transition-all duration-300 ${className}`}
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
        className={`bg-black border border-black text-white font-regular py-3 px-8 rounded-md hover:bg-orange hover:border-orange transition-all duration-300 ${className}`}
      >
        {label}
      </a>
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

export default Button;
