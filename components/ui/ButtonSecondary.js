import React from "react";

function ButtonSecondary({ label, onClick, className }) {
  return (
    <button
      className={`bg-white border border-black text-black font-regular py-3 px-8 rounded-md hover:border-orange hover:text-orange transition-all duration-300 ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default ButtonSecondary;
