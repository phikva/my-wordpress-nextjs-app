import React from "react";
import DynamicIcon from "../modules/DynamicIcon";

function HamburgerButton({ onClick }) {
  return (
    <DynamicIcon
      onClick={onClick}
      aria-label="Toggle Mobile Menu"
      icon="bars" // Use the icon name without the "fa" prefix
      size="2x"
      color="black"
    />
  );
}

export default HamburgerButton;
