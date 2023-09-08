import React from "react";
import { useQuery } from "@apollo/client";
import GetMenuData from "../../graphql/GetMenuData.graphql";

function Nav({ menuSelection }) {
  // Fetch the menu data based on the GraphQL query
  const { data, loading, error } = useQuery(GetMenuData);

  if (loading) {
    // Handle loading state
    return <p>Loading menu...</p>;
  }

  if (error) {
    // Handle error state
    console.error("GraphQL Error:", error);
    return <p>Error loading data.</p>;
  }

  const menus = data?.menus?.nodes || [];

  // Find the menu based on menuSelection
  const selectedMenu = menus.find((menu) => menu.name === menuSelection);

  if (!selectedMenu) {
    // Handle the case where the menuSelection doesn't match any menu
    return <p>No menu found for the selected menuSelection.</p>;
  }

  const menuItems = selectedMenu.menuItems?.nodes || [];

  return (
    <nav>
      <ul>
        {menuItems.map((menuItem, index) => (
          <li key={index}>
            <a href={menuItem.url}>{menuItem.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
