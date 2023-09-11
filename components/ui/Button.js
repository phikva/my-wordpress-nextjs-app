import React from "react";

function Button({ label, link, className = "", isHeaderButton = false }) {
  // Define the class name for the button based on isHeaderButton
  const buttonClassName = isHeaderButton
    ? "bg-black text-white py-2 px-4 lg:py-3 lg:px-8 rounded-md hover:bg-blue-dark transition-all duration-300"
    : `bg-purple text-center border border-purple text-white font-regular py-3 px-8 rounded-md hover:bg-black hover:border-purple transition-all duration-300 ${className}`;

  // Check if linkType is "URL" and URL is provided
  if (link.linkType === "URL" && link.url) {
    return (
      <a href={link.url} className={buttonClassName}>
        {label}
      </a>
    );
  }

  // Check if linkType is "Page" and pageLink is provided
  if (link.linkType === "Page Link" && link.pageLink && link.pageLink.uri) {
    return (
      <a href={link.pageLink.uri} className={buttonClassName}>
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
