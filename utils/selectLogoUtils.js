// selectLogoUtils.js

// retrieve the selected logo
export const getSelectedLogo = (headerData, footerData) => {
    const header = headerData?.pageBy?.header || {};
    const footer = footerData?.page?.footer || {};

    const selectedLogoHeader =
      header.logoVariantHeader === "Default Header"
        ? header.defaultLogoImageHeader?.sourceUrl || ""
        : header.alternativeLogoImageHeader?.sourceUrl || "";
  
    const altTextHeader =
      header.logoVariantHeader === "Default Header"
        ? header.defaultLogoImageHeader?.altText || ""
        : header.alternativeLogoImageHeader?.altText || "";

        const selectedLogoFooter =
    footer.logoVariantFooter === "Default Footer"
      ? footer.defaultLogoImageFooter?.sourceUrl || ""
      : footer.alternativeLogoImageFooter?.sourceUrl || "";

  const altTextFooter =
    footer.logoVariantFooter === "Default Footer"
      ? footer.defaultLogoImageFooter?.altText || ""
      : footer.alternativeLogoImageFooter?.altText || "";
  
    return { selectedLogoHeader, altTextHeader, selectedLogoFooter, altTextFooter };
  };
  