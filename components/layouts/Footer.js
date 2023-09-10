import React from "react";
import Image from "next/image";
import Link from "next/link";
import CustomImage from "../modules/CustomImage";

function Footer({ footerData }) {
  const footer = footerData?.page.footer || {}; // Access the footer object

  // Select the logo based on the logo variant
  const selectedLogoFooter =
    footer.logoVariantFooter === "Default Footer"
      ? footer.defaultLogoImageFooter?.sourceUrl || ""
      : footer.alternativeLogoImageFooter?.sourceUrl || "";

  const altTextFooter =
    footer.logoVariantFooter === "Default Footer"
      ? footer.defaultLogoImageFooter?.altText || ""
      : footer.alternativeLogoImageFooter?.altText || "";

  return (
    <footer className="bg-purple">
      <div className="footer-logo">
        {selectedLogoFooter && (
          <Link href="/">
          <Image
            src={selectedLogoFooter}
            alt={altTextFooter}
            width={200}
            height={100}
          />
          </Link>
        )}
      </div>
      {footerData?.page?.footer?.footerNavigation && (
        <nav className="footer-nav">
          <ul>
            {footerData.page.footer.footerNavigation.map((item, index) => (
              <li key={index}>
                <a href={item.navigationUrl}>{item.navigationLabel}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}
      <div className="company-info">
        {footerData?.page?.footer?.companyInformation}
      </div>
      <div className="signup-form">
        {footerData?.page?.footer?.newsletterSignupForm}
      </div>
      <div className="social-media-links">
        {footerData?.page?.footer?.socialMediaLinks &&
          footerData.page?.footer.socialMediaLinks.map((item, index) => (
            <a key={index} href={item.iconsocialMediaUrl}>
              <CustomImage
                src={item.socialMediaIcon.sourceUrl}
                alt={item.socialMediaIcon.altText}
                height={40}
                width={40}
              />
            </a>
          ))}
      </div>
      <div className="copyright-trademark">
        {footerData?.page?.footer?.copyrightTrademarkText}
      </div>
    </footer>
  );
}

export default Footer;
