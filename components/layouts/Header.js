import React from "react";
import SeoHead from "../seoHead/SeoHead";
import { useSeo } from "../../context/Seo";
import Nav from "../nav/Nav";
import Image from "next/image";

function Header({ headerData }) {
  const { seoData } = useSeo();

  //render the logo based on the selection
  const header = headerData?.pageBy?.template?.header || {}; // Access the header object
  const selectedLogoHeader =
    header.logoVariantHeader === "Default Header"
      ? header.defaultLogoImageHeader?.sourceUrl || ""
      : header.alternativeLogoImageHeader?.sourceUrl || "";

  const altTextHeader =
    header.logoVariantHeader === "Default Header"
      ? header.defaultLogoImageHeader?.altText || ""
      : header.alternativeLogoImageHeader?.altText || "";

  const seoTitle =
    headerData?.pageBy.template?.header?.pageTitle ||
    (seoData ? seoData.defaultTitle : "");
  const seoDescription =
    headerData?.pageBy.template?.header?.pageDescription ||
    (seoData ? seoData.defaultDescription : "");
  const seoTagline =
    headerData?.pageBy.template?.header?.tagline ||
    (seoData ? seoData.defaultTagline : "");

  //check if menu exists
  const menuSelection =
    headerData?.pageBy.template?.header?.menuSelection || "";

  return (
    <header>
      <SeoHead
        title={seoTagline ? `${seoTitle} - ${seoTagline}` : seoTitle}
        description={seoDescription}
      />
      {selectedLogoHeader && (
        <Image
          src={selectedLogoHeader}
          alt={altTextHeader}
          className="logo"
          width={200}
          height={100}
        />
      )}
      {menuSelection && <Nav menuSelection={menuSelection} />}
    </header>
  );
}

export default Header;
