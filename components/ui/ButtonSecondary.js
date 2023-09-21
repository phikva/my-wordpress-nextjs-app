import React from "react";
import Link from "next/link";

function ButtonSecondary({
  label,
  link,
  className = "",
  isDynamicBackground = true,
  isHeaderButton = false,
  backgroundColorClass = "",
}) {
  const baseButtonClassName = isHeaderButton
    ? "border-black border text-black font-semibold hover:opacity-50 text-xl py-3 px-6 transition-all duration-300"
    : ``;

  const dynamicBackgroundButtonClassName = `font-semibold border-purple bg-white border text-center hover:opacity-50 py-3 px-8 transition-all duration-300 ${className} ${backgroundColorClass}`;

  let buttonContent;
  

  if (link.linkType === "URL" && link.url) {
    buttonContent = (
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

export default ButtonSecondary;
