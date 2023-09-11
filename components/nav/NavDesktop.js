import React from "react";
import Link from "next/link"; // Import Link from Next.js

function NavDesktop({ menuItems }) {
  return (
    <nav className="text-black py-4">
      <ul className="container mx-auto flex flex-wrap space-x-4">
        {menuItems.map((menuItem, index) => (
          <li key={index}>
            {/* Use Link component for client-side routing */}
            <Link className="text-black font-medium text-base hover:text-white transition duration-300" href={menuItem.url}>
             
                {menuItem.label}
         
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavDesktop;