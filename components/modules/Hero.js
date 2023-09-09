import React from "react";
import Video from "../modules/Video";
import Image from "../modules/Image";

function Hero({ data }) {

  // Check if the hero section should be displayed
  if (data.toggleHeroSection === "Hide") {
    return null;
  }

  const hero = data.hero; // Access the hero object within data
  const displayType = hero.displayType;
  const numberOfCtas = hero.numberOfCtas;

  return (
    <div className="hero">
      {/* Conditional rendering based on displayType */}
      {displayType === "Image" && (
        <Image src={hero.image.sourceUrl} alt={hero.image.altText} />
      )}
      {displayType === "Video" && (
        <Video src={hero.video.sourceUrl} alt={hero.video.altText} />
      )}

      <h1>{hero.mainHeadline}</h1>
      <p>{hero.subheadline}</p>

      {/* Conditional rendering based on numberOfCtas */}
      {numberOfCtas === "One CTA (Primary Button)" && (
        <a href={hero.primaryButton.pageLink.uri}>
          {hero.primaryButton.buttonText}
        </a>
      )}
      {numberOfCtas === "One CTA (Secondary Button)" && (
        <a href={hero.secondaryButton.pageLink.uri}>
          {hero.secondaryButton.buttonText}
        </a>
      )}
      {numberOfCtas === "Two CTAs (Primary and Secondary buttons)" && (
        <div>
          <a href={hero.ctaButtons.primaryButton.pageLink.uri}>
            {hero.ctaButtons.primaryButton.buttonText}
          </a>
          <a href={hero.ctaButtons.secondaryButton.pageLink.uri}>
            {hero.ctaButtons.secondaryButton.buttonText}
          </a>
        </div>
      )}
    </div>
  );
}

export default Hero;
