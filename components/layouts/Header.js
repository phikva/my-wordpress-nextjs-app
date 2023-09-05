// components/Header.js
import Nav from "../nav/Nav";
import { useQuery } from "@apollo/client";
import GET_LOGO from "../../graphql/logo.graphql";
import GET_TITLE from "../../graphql/pageTitle.graphql";
import GET_SITE_TITLE from "../../graphql/siteTitle.graphql";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

function Header() {
  const { data: logoData } = useQuery(GET_LOGO);
  const router = useRouter();

  // Get the current page ID based on the route
  const { query } = router;
  const pageId = query.pageId || "cG9zdDo3"; // Default to your homepage ID

  // Fetch the title based on the current page ID
  const { data: titleData } = useQuery(GET_TITLE, {
    variables: { pageId },
  });

  const {
    data: siteTitleData, // Add data for site title
  } = useQuery(GET_SITE_TITLE);

  const logo = logoData?.page?.header?.logo;
  const sourceUrl = logo?.sourceUrl;
  const altText = logo?.altText;

  const title = titleData?.page?.title; // Access the title from the response
  const siteTitle = siteTitleData?.generalSettings?.title; // Access the site title

  return (
    <header className="flex relative inset-x-0 top-0 z-50 py-8 px-5 gap-20 sm:px-16 lg:px-40 items-center">
      <Head>
        <title>
          {title} - {siteTitle}
        </title>
      </Head>
      <Link href="/">
        <img src={sourceUrl} alt={altText}  />
      </Link>

      <Nav />
    </header>
  );
}

export default Header;
