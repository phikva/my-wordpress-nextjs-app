import React from "react";
import VideoPlayer from "./VideoPlayer";
import CustomImage from "./CustomImage";
import Button from "../ui/Button";
import ButtonSecondary from "../ui/ButtonSecondary";
import { useModuleContext } from "../../context/ModuleContext";

function Hero({ data }) {

  const hero = data?.hero;
  const displayType = hero?.displayType;
  const numberOfCtas = hero?.numberOfCtas;

  return (
    <section className="hero">
      {/* Conditional rendering based on displayType */}
      {displayType === "Image" && (
        <CustomImage
          src={hero.image.sourceUrl}
          alt={hero.image.altText}
          layout="responsive"
          width={1920}
          height={600}
        />
      )}
      {displayType === "Video" && (
        <div className="video-overlay">
          <VideoPlayer
            url={hero.video.mediaItemUrl}
            alt={hero.video.caption}
            height="100%"
            width="100%"
          />
        </div>
      )}

      <h1>{hero?.mainHeadline}</h1>
      <p>{hero?.subheadline}</p>

      {/* Conditional rendering based on numberOfCtas */}
      {numberOfCtas === "One CTA (Primary Button)" && (
        <Button
          label={hero.primaryButton.buttonText}
          link={hero.primaryButton}
        />
      )}
      {numberOfCtas === "One CTA (Secondary Button)" && (
        <ButtonSecondary
          label={hero.secondaryButton.buttonText}
          link={hero.secondaryButton}
        />
      )}
      {numberOfCtas === "Two CTAs (Primary and Secondary buttons)" && (
        <div>
          <Button
            label={hero.ctaButtons.primaryButton.buttonText}
            link={hero.ctaButtons.primaryButton}
          />
          <ButtonSecondary
            label={hero.ctaButtons.secondaryButton.buttonText}
            link={hero.ctaButtons.secondaryButton}
          />
        </div>
      )}
    </section>
  );
}

export default Hero;
