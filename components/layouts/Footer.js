import React from "react";
import Image from "next/image";
import Link from "next/link";
import CustomImage from "../modules/CustomImage";
import { getSelectedLogo } from "../../utils/selectLogoUtils";

function Footer({ footerData }) {
  const footer = footerData?.page.footer || {}; // Access the footer object

  // Helper function to select logo
  const { selectedLogoFooter, altTextFooter } = getSelectedLogo({}, footerData);

  return (
    <footer className="bg-black flex flex-row py-16 px-4">
      <div className="gap-8 mx-auto max-w-8xl">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full mb-6 lg:mb-0">
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
          <div className="w-full mb-6 lg:mb-0">
            {footer.footerNavigation && (
              <nav className="text-white">
                <ul className="flex flex-col flex-wrap lg:flex-row lg:gap-5">
                  {footer.footerNavigation.map((item, index) => (
                    <li key={index} className="mb-2">
                      <Link
                        href={item.navigationUrl}
                        className="text-3xl md:text-5xl hover:text-gray-400 transition-colors"
                      >
                        {item.navigationLabel}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>
          <div className="w-full">
            <div className="text-white text-xl md:text-3xl ">
              {footer.companyInformation}
            </div>
            <div className="text-white mb-6">{footer.newsletterSignupForm}</div>
          </div>
        </div>
        <div className="text-white flex flex-col lg:grid grid-cols-3 pt-10 gap-10">
          <div className="flex flex-col">
            {footer.socialMediaLinks &&
              footer.socialMediaLinks.map((item, index) => (
                <React.Fragment key={index}>
                  {item.toggle === "Text" &&
                  item.textLink.iconsocialMediaUrl ? (
                    <span className="mr-4 hover:text-gray-400 transition-colors">
                      <Link href={item.textLink.iconsocialMediaUrl}>
                        <span className="text-3xl md:text-5xl">
                          {item.textLink.textSocial}
                        </span>
                      </Link>
                    </span>
                  ) : item.iconsocialMediaUrl ? (
                    <span className="mr-4 hover:text-gray-400 transition-colors">
                      <Link href={item.iconsocialMediaUrl}>
                        <CustomImage
                          src={item.socialMediaIcon?.sourceUrl}
                          alt={item.socialMediaIcon?.altText}
                          height={30}
                          width={30}
                        />
                      </Link>
                    </span>
                  ) : null}
                </React.Fragment>
                
              ))}
          </div>
          <div className="flex items-end text-xl md:text-3xl">
            {footer.copyrightTrademarkText}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
