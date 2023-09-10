import React from "react";
import DynamicIcon from "../modules/DynamicIcon";
import Link from "next/link"; // Import Link from Next.js

function NavMobile({ menuItems, onClose }) {
  return (
    <nav className="fixed inset-0 z-50 bg-white text-black">
      <DynamicIcon icon="times" size="2x" onClick={onClose} />
      <ul className="container mx-auto mt-10 flex flex-col space-y-4">
        {menuItems.map((menuItem, index) => (
          <li key={index}>
            {/* Use Link component for client-side routing */}
            <Link className="text-gray-300 hover:text-white transition duration-300" href={menuItem.url}>
             
                {menuItem.label}
             
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavMobile;