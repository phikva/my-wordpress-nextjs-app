import React from "react";
import VideoPlayer from "./VideoPlayer";
import CustomImage from "./CustomImage";
// Import the button rendering utility
import { renderButtons } from "../../utils/ButtonUtils";

function Hero({ data }) {
  const hero = data?.hero;
  const displayType = hero?.displayType;
  const numberOfCtas = hero?.numberOfCtas;

  return (
    <section className="py-10 px-5 md:py-28 flex flex-col justify-center gap-10">
      <div className="flex flex-col xl:px-6 w-full max-w-8xl mx-auto gap-6">
        <h1 className="mb-4 font-medium max-w-2xl lg:max-w-5xl">
          {hero?.mainHeadline}
        </h1>
        <p className="md:max-w-2xl">
          {hero?.subheadline}
        </p>
        <div className="">
        {/* Render buttons using the renderButtons utility */}
        {renderButtons(
          hero?.ctaButtons,
          numberOfCtas,
          false, // isDynamicBackground
          true // isHero prop
        )}
        </div>
         {/* Conditional rendering based on displayType */}
      
      {displayType === "Image" && (
        <div className="flex lg:order-2">
          <CustomImage
            src={hero.image.sourceUrl}
            alt={hero.image.altText}
            width={1920}
            height={500}
            className="w-full"
          />
        </div>
      )}
      {displayType === "Video" && (
        <div className="hero-media lg:order-2 mt-4 lg:mb-0 relative">
          <div className="">
            <VideoPlayer
              url={hero.video.mediaItemUrl}
              alt={hero.video.caption}
              
              
            />
          </div>
        </div>
      )}
      </div>

     
    </section>
  );
}

export default Hero;
