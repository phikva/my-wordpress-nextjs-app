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
    <section className="flex flex-col items-center text-center lg:items-start justify-between py-32 px-4 mx-auto w-full md:px-0 md:max-w-4xl">
      <div className="flex flex-col gap-3 lg:gap-8 lg:order-1 xl:pb-20 mx-auto">
        <h1 className="text-5xl md:text-6xl xl:text-6xl font-regular mb-4">
          {hero?.mainHeadline.split(" ").map((word, index) => (
            <span key={index}>
              {index < 3 ? <strong className="font-black">{word}</strong> : word}{" "}
              {index < 2 ? " " : ""}
            </span>
          ))}
        </h1>
        <p className="text-lg lg:text-xl md:max-w-xl m-auto">{hero?.subheadline}</p>

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
          <div className="flex flex-col gap-5 md:flex-row md:mx-auto">
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
      </div>

      {/* Conditional rendering based on displayType */}
      {displayType === "Image" && (
        <div className="flex lg:order-2 mt-10 xl:mt-0 overflow-hidden mx-auto">
          <CustomImage
            src={hero.image.sourceUrl}
            alt={hero.image.altText}
            layout="responsive"
            width={1920}
            height={500}
            className="w-full"
          />
        </div>
      )}
      {displayType === "Video" && (
        <div className="hero-media lg:w-1/2 lg:order-2 mb-4 lg:mb-0 relative">
          <div className="video-overlay absolute inset-0 flex items-center justify-center">
            <VideoPlayer
              url={hero.video.mediaItemUrl}
              alt={hero.video.caption}
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero;
