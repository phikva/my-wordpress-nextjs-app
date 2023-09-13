import React, { useState, useEffect } from "react";
// seo related
import SeoHead from "../seoHead/SeoHead";
import { useSeo } from "../../context/Seo";
import Link from "next/link";
// import ui components
import Button from "../ui/Button";
import HamburgerButton from "../ui/HamburgerButton";
// import nav components
import NavDesktop from "../nav/NavDesktop";
import NavMobile from "../nav/NavMobile";
// import helper functions
import { toggleMobileMenu } from "../../utils/menuUtils";
import { handleResize } from "../../utils/windowUtils";
import { getSelectedLogo } from "../../utils/selectLogoUtils";
// import apollo client
import { useQuery } from "@apollo/client";
//get menu data from query
import GetMenuData from "../../graphql/GetMenuData.graphql";
import CustomImage from "../modules/CustomImage";

function Header({ headerData }) {
  const { seoData } = useSeo();
  const header = headerData?.pageBy.header || {};
  const menuSelection = header.menuSelection || "";
  // get menu data from query
  const { data, loading, error } = useQuery(GetMenuData);

  // State to track mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  // seo related
  const seoTitle = header.pageTitle || (seoData ? seoData.defaultTitle : "");
  const seoDescription =
    header.pageDescription || (seoData ? seoData.defaultDescription : "");
  const seoTagline = header.tagline || (seoData ? seoData.defaultTagline : "");

  // Check if header button should be displayed
  const shouldDisplayButton = headerData?.pageBy.header.toggleButton !== "Hide";

  // Define primaryButton data or null if not available
  const primaryButton = shouldDisplayButton ? header.headerCta : null;

  // helper function to select logo
  const { selectedLogoHeader, altTextHeader } = getSelectedLogo(headerData,{});

  // helper function to determine if the window is mobile
  useEffect(() => {
    handleResize(setIsMobileView);
  }, []);

  // helper function to toggle mobile menu
  const toggleMobileMenuHandler = () => {
    toggleMobileMenu(isMobileMenuOpen, setIsMobileMenuOpen);
  };

  let content = null;

  if (loading) {
    // Handle loading state
    content = <p>Loading menu...</p>;
  } else if (error) {
    // Handle error state
    console.error("GraphQL Error:", error);
    content = <p>Error loading data.</p>;
  } else {
    const menus = data?.menus?.nodes || [];

    // Find the menu based on menuSelection
    const selectedMenu = menus.find((menu) => menu.name === menuSelection);

    if (!selectedMenu) {
      // Handle the case where the menuSelection doesn't match any menu
      content = <p>No menu found for the selected menuSelection.</p>;
    } else {
      const menuItems = selectedMenu.menuItems?.nodes || [];

      content = (
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
                  <NavDesktop menuItems={menuItems} />
                )}
                {isMobileMenuOpen && isMobileView && (
                  <NavMobile
                    menuItems={menuItems}
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
  }

  return content;
}

export default Header;
