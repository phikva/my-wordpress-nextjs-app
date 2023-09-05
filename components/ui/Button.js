import React from "react";

function Button({ label, onClick, className }) {
  return (
    <button
      className={`bg-black border border-black text-white font-regular py-3 px-8 rounded-md hover:bg-orange hover:border-orange transition-all duration-300 ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
