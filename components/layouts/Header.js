import React from "react";
import SeoHead from "../seoHead/SeoHead";
import { useSeo } from "../../context/Seo";
import Nav from "../nav/Nav";
import Link from "next/link";
import CustomImage from "../modules/CustomImage";
import Button from "../ui/Button";

function Header({ headerData }) {
  const { seoData } = useSeo();

  const header = headerData?.pageBy.header || {}; 

  // Check which logo should be displayed
  const selectedLogoHeader =
    header.logoVariantHeader === "Default Header"
      ? header.defaultLogoImageHeader?.sourceUrl || ""
      : header.alternativeLogoImageHeader?.sourceUrl || "";

  const altTextHeader =
    header.logoVariantHeader === "Default Header"
      ? header.defaultLogoImageHeader?.altText || ""
      : header.alternativeLogoImageHeader?.altText || "";

  const seoTitle = header.pageTitle || (seoData ? seoData.defaultTitle : "");
  const seoDescription =
    header.pageDescription || (seoData ? seoData.defaultDescription : "");
  const seoTagline = header.tagline || (seoData ? seoData.defaultTagline : "");

  const menuSelection = header.menuSelection || "";

  // Check if header button should be displayed
  const shouldDisplayButton =
    headerData?.pageBy.header.toggleButton !== "Hide";

  // Define primaryButton data or null if not available
  const primaryButton = shouldDisplayButton ? header.headerCta : null;

  return (
    <header>
      <SeoHead
        title={seoTagline ? `${seoTitle} - ${seoTagline}` : seoTitle}
        description={seoDescription}
      />
      {selectedLogoHeader && (
        <Link href="/">
          <CustomImage
            src={selectedLogoHeader}
            alt={altTextHeader}
            className="logo"
            width={200}
            height={100}
          />
        </Link>
      )}
      {menuSelection && <Nav menuSelection={menuSelection} />}

      {primaryButton && (
        <Button label={header.headerCta.buttonText} link={header.headerCta} />
      )}
    </header>
  );
}

export default Header;
