import { useQuery } from "@apollo/client";
import GET_MENU_AND_LOGO from "../../graphql/menuAndLogo.graphql"; // Updated query import
import Link from "next/link";
import Image from "next/image";

function Menu() {
  const { error, data } = useQuery(GET_MENU_AND_LOGO); // Use the combined query

  if (error) return <p>Error: {error.message}</p>;

  const menuItems = data ? data.menuItems.nodes : [];
  const logo = data?.page?.header?.logo;

  return (
    <nav className="flex items-center justify-between w-full">
      {logo && (
        <Link href="/">
          <Image src={logo.sourceUrl} alt={logo.altText} width={200} height={100} />
        </Link>
      )}
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
