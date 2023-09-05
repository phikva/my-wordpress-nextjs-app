import { useQuery } from "@apollo/client";
import GET_MENU_ITEMS from "../../graphql/menu.graphql";
import Link from "next/link";

function Menu() {
  const { error, data } = useQuery(GET_MENU_ITEMS);

  if (error) return <p>Error: {error.message}</p>;

  const menuItems = data ? data.menuItems.nodes : [];

  return (
    <nav className="flex items-center justify-center">
      <ul className="flex space-x-10 font-semibold">
        {menuItems.map((menuItem) => (
          <li key={menuItem.id}>
            {menuItem.childItems.nodes.length > 0 ? (
              <>
                <span className="text-black text-lg">{menuItem.label}</span>
                <ul>
                  {menuItem.childItems.nodes.map((childItem) => (
                    <li key={childItem.id}>
                      <Link href={childItem.url}>
                        <a className="text-black text-lg">{childItem.label}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <Link href={menuItem.url}>{menuItem.label}</Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
