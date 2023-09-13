import React from "react";
import Image from "next/image";
import Link from "next/link";
import CustomImage from "../modules/CustomImage";
// import helper functions
import { getSelectedLogo } from "../../utils/selectLogoUtils";

function Footer({ footerData }) {
  // const footer = footerData?.page.footer || {}; // Access the footer object

  // helper function to select logo
  const { selectedLogoFooter, altTextFooter } = getSelectedLogo({}, footerData);

  return (
    <footer className="bg-purple py-16 px-4">
      <div className="container mx-auto flex flex-col gap-8 max-w-6xl">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
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
          <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
            {footerData?.page?.footer?.footerNavigation && (
              <nav className="text-white">
                <ul className="flex flex-col lg:flex-row lg:gap-5">
                  {footerData.page.footer.footerNavigation.map(
                    (item, index) => (
                      <li key={index} className="mb-2">
                        <a
                          href={item.navigationUrl}
                          className="text-sm hover:text-gray-400 transition-colors"
                        >
                          {item.navigationLabel}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </nav>
            )}
          </div>
          <div className="w-full lg:w-1/3">
            <div className="text-white mb-6">
              {footerData?.page?.footer?.companyInformation}
            </div>
            <div className="text-white mb-6">
              {footerData?.page?.footer?.newsletterSignupForm}
            </div>
          </div>
        </div>
        <div className="text-white flex flex-col gap-8 items-center justify-between border-t border-gray-300 pt-10">
          <div className="flex">
            {footerData?.page?.footer?.socialMediaLinks &&
              footerData.page?.footer.socialMediaLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.iconsocialMediaUrl}
                  className="mr-4 hover:text-gray-400 transition-colors"
                >
                  <CustomImage
                    src={item.socialMediaIcon.sourceUrl}
                    alt={item.socialMediaIcon.altText}
                    height={30}
                    width={30}
                  />
                </a>
              ))}
          </div>
          <div className="copyright-trademark text-sm">
            {footerData?.page?.footer?.copyrightTrademarkText}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
