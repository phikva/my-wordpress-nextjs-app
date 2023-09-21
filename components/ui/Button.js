import React from "react";
import Link from "next/link";

function Button({
  label,
  link,
  className = "",
  isHeaderButton = false,
  isDynamicBackground = false,
  backgroundColorClass = "",
}) {
  const baseButtonClassName = isHeaderButton
    ? "border-black font-semibold border text-black hover:opacity-50 px-3 py-2 md:py-3 md:px-6 transition-all duration-300"
    : `text-black font-semibold border-black border text-center hover:opacity-50 py-3 px-8 transition-all duration-300 ${className}`;

  const dynamicBackgroundButtonClassName = `text-black font-semibold bg-purple border-purple border text-center hover:opacity-50 py-3 px-8 transition-all duration-300 ${className} ${backgroundColorClass}`;

  let buttonContent;

  

  if (link.linkType === "URL" && link.url) {
    buttonContent = <Link href={link.url}></Link>;
  } else if (
    link.linkType === "Page Link" &&
    link.pageLink &&
    link.pageLink.uri
  ) {
    buttonContent = (
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
  } else {
    // If neither condition is met, render a disabled button
    buttonContent = (
      <button
        className={`bg-gray-300 border text-gray-500 font-regular py-3 px-8 rounded-md cursor-not-allowed ${className}`}
        disabled
      >
        Something went wrong
      </button>
    );
  }

  return buttonContent;
}

export default Button;
