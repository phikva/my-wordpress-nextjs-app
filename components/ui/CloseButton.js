import React from "react";
import DynamicIcon from "../modules/DynamicIcon";

function CloseButton({ onClick }) {
  return (
    <button onClick={onClick} aria-label="Close" className="text-gray-300 hover:text-white transition duration-300">
      <DynamicIcon
        icon="times" // Use the icon name without the "fa" prefix
        size="2x"
        color="black"
      />
    </button>
  );
}

export default CloseButton;
