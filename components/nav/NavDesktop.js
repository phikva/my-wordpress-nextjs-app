import React from "react";
import Link from "next/link"; // Import Link from Next.js

function NavDesktop({ menuItems }) {
  return (
    <nav className="text-black py-4 flex">
      <ul className="flex md:space-x-4 lg:space-x-12">
        {menuItems.map((menuItem, index) => (
          <li key={index}>
            {/* Use Link component for client-side routing */}
            <Link className="text-black font-normal md:text-xl lg:text-2xl 2xl:text-3xl hover:text-white transition duration-300" href={menuItem.url}>
             
                {menuItem.label}
         
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavDesktop;