import React, { useState, useEffect } from "react";
import SeoHead from "../seoHead/SeoHead";
import { useSeo } from "../../context/Seo";
import Link from "next/link";
//import ui components
import Button from "../ui/Button";
import HamburgerButton from "../ui/HamburgerButton";
//import components
import NavDesktop from "../nav/NavDesktop";
import NavMobile from "../nav/NavMobile";
import CustomImage from "../modules/CustomImage";
// import helper functions
import { toggleMobileMenu } from "../../utils/menuUtils";
import { handleResize } from "../../utils/windowUtils";
import { getSelectedLogo } from "../../utils/selectLogoUtils";


function Header({ headerData }) {
  const { seoData } = useSeo();
  const header = headerData?.pageBy.header || {};
  const menuSelection = header.menuSelection || [];
  const menus = headerData?.menus?.nodes || [];

  // State to track mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    handleResize(setIsMobileView);
  }, []);

  // helper function to toggle mobile menu
  const toggleMobileMenuHandler = () => {
    toggleMobileMenu(isMobileMenuOpen, setIsMobileMenuOpen);
  };
    // helper function to select logo
    const { selectedLogoHeader, altTextHeader } = getSelectedLogo(headerData, {});

  const selectedMenu = menus.find((menu) => menu.name === menuSelection);

  if (!selectedMenu) {
    console.log("No menu found for the selected menuSelection.");
  }

  // seo related
  const seoTitle = header.pageTitle || (seoData ? seoData.defaultTitle : "");
  const seoDescription =
    header.pageDescription || (seoData ? seoData.defaultDescription : "");
  const seoTagline = header.tagline || (seoData ? seoData.defaultTagline : "");

  // Check if header button should be displayed
  const shouldDisplayButton = headerData?.pageBy.header.toggleButton !== "Hide";

  // Define primaryButton data or null if not available
  const primaryButton = shouldDisplayButton ? header.headerCta : null;



  return (
    <header className="bg-white-light sticky top-0 border-b border-gray-light text-white flex justify-center">
      <SeoHead
        title={seoTagline ? `${seoTitle} - ${seoTagline}` : seoTitle}
        description={seoDescription}
      />
      <div className="flex md:flex-row justify-between items-center w-full p-5 max-w-7xl">
        {selectedLogoHeader && (
          <Link href="/">
            <CustomImage
              src={selectedLogoHeader}
              alt={altTextHeader}
              className={`cursor-pointer ${
                isMobileView ? "w-16 h-8" : "w-20 h-10"
              }`}
              width={isMobileView ? 130 : 150}
              height={isMobileView ? 100 : 100}
            />
          </Link>
        )}

        {menuSelection && (
          <div
            className={`md:text-center order-last  ${
              isMobileView ? "md:w-full" : "md:w-2/5"
            }`}
          >
            {/* Menu */}
            {isMobileView ? (
              <HamburgerButton onClick={toggleMobileMenuHandler} />
            ) : (
              <NavDesktop menuItems={selectedMenu.menuItems.nodes} />
            )}
            {isMobileMenuOpen && isMobileView && (
              <NavMobile
                menuItems={selectedMenu.menuItems.nodes}
                onClose={toggleMobileMenuHandler}
              />
            )}
          </div>
        )}

        {primaryButton && (
          <div className="order-2 md:order-last">
            {/* Header Button */}
            <Button
              label={primaryButton.buttonText}
              link={primaryButton}
              isHeaderButton={true}
            />
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
