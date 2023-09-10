import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

// Import the FontAwesome icons you want to use
import { faHome, faUser, faCog, faBars,faTimes } from "@fortawesome/free-solid-svg-icons";

// Add the imported icons to the library
library.add(faHome, faUser, faCog, faBars,faTimes);

function DynamicIcon({ icon, size = "1x", color = "black", onClick }) {
    return (
      <FontAwesomeIcon
        icon={icon}
        size={size}
        color={color}
        onClick={onClick}
      />
    );
  }

export default DynamicIcon;
