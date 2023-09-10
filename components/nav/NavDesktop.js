import React from "react";

function NavDesktop({ menuItems }) {
  return (
    <nav className="text-black py-4">
      <ul className="container mx-auto flex flex-wrap justify-center space-x-4">
        {menuItems.map((menuItem, index) => (
          <li key={index}>
            <a
              href={menuItem.url}
              className="text-gray-300 hover:text-white transition duration-300"
            >
              {menuItem.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavDesktop;
