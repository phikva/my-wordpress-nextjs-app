// components/Header.js
import Nav from "./Nav";
import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import GET_LOGO from "../../graphql/logo.graphql";
import GET_SITE_TITLE from "../../graphql/siteTitle.graphql";
import GET_PAGE_DESCRIPTION from "../../graphql/pageDescription.graphql"; // Import the new query
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useSeo } from "../../context/seo";

function Header() {
  const router = useRouter();
  const { setSeoData } = useSeo();

  const { query } = router;
  const pageId = query.pageId || "cG9zdDo3";

  // Combine queries into a single query to reduce requests
  const { data } = useQuery(GET_LOGO, {
    fetchPolicy: "cache-first", // Cache data for better performance
  });

  const { data: siteTitleData } = useQuery(GET_SITE_TITLE, {
    fetchPolicy: "cache-first",
  });

  const { data: pageDescriptionData } = useQuery(GET_PAGE_DESCRIPTION, {
    variables: { pageId },
    fetchPolicy: "cache-first",
  });

  // Get the logo data from the query result
  const logo = data?.page?.header?.logo;
  const sourceUrl = logo?.sourceUrl;
  const altText = logo?.altText;

  // Extract the site title from the query result
  const siteTitle = siteTitleData?.generalSettings?.title;

  // Extract the page description from the query result
  const pageDescription =
    pageDescriptionData?.page?.template?.pageDescription?.description;

  useEffect(() => {
    // Set SEO data dynamically including the page description
    setSeoData({
      title: `${siteTitle} - ${pageDescription || ""}`,
      description: pageDescription || "Default description if none is available",
    });
  }, [siteTitle, setSeoData, pageDescription]);

  return (
    <header className="flex relative inset-x-0 top-0 z-50 py-8 px-5 gap-20 sm:px-16 lg:px-40 items-center">
      <Head>
        {/* The title and description will be set dynamically */}
        <title>{siteTitle} - {pageDescription || ""}</title>
        <meta
          name="description"
          content={pageDescription || "Default description if none is available"}
        />
      </Head>
      <Link href="/">
        <Image
          src={sourceUrl}
          alt={altText}
          width={200}
          height={100}
          loading="lazy"
        />
      </Link>

      <Nav />
    </header>
  );
}

export default Header;
