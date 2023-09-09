import React from "react";
import SeoHead from "../seoHead/SeoHead";
import { useSeo } from "../../context/Seo";
import Nav from "../nav/Nav";
import Image from "next/image";
import Link from "next/link";

function Header({ headerData }) {
  const { seoData } = useSeo();

  // Render the logo based on the selection
  const header = headerData?.pageBy.header || {}; // Access the header object directly
  const selectedLogoHeader =
    header.logoVariantHeader === "Default Header"
      ? header.defaultLogoImageHeader?.sourceUrl || ""
      : header.alternativeLogoImageHeader?.sourceUrl || "";

  const altTextHeader =
    header.logoVariantHeader === "Default Header"
      ? header.defaultLogoImageHeader?.altText || ""
      : header.alternativeLogoImageHeader?.altText || "";

  const seoTitle =
    header.pageTitle || (seoData ? seoData.defaultTitle : "");
  const seoDescription =
    header.pageDescription || (seoData ? seoData.defaultDescription : "");
  const seoTagline =
    header.tagline || (seoData ? seoData.defaultTagline : "");

  // Check if menu exists
  const menuSelection = header.menuSelection || "";

  return (
    <header>
      <SeoHead
        title={seoTagline ? `${seoTitle} - ${seoTagline}` : seoTitle}
        description={seoDescription}
      />
      {selectedLogoHeader && (
        <Link href="/">
          <Image
            src={selectedLogoHeader}
            alt={altTextHeader}
            className="logo"
            width={200}
            height={100}
          />
        </Link>
      )}
      {menuSelection && <Nav menuSelection={menuSelection} />}
    </header>
  );
}

export default Header;
