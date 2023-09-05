import React from "react";
import Button from "../ui/Button";
import ButtonSecondary from "../ui/ButtonSecondary";

function Hero({ data }) {
  const { headline, subheadline, mainImg, cta, ctaSecondary } = data;
  const words = headline.split(" ");
  const firstWord = words[0]; // Extract the first word (0-based index)
  const lastTwoWords = words.slice(-2).join(" "); // Extract the last two words

  // Combine the remaining words
  const remainingWords = words.slice(1, -2).join(" ");

  return (
    <section className="bg-white border pb-10 px-5 sm:px-16 lg:px-40 xl:pb-24">
      <aside className="flex py-16 ">
        <div
          className="border rounded-full p-2"
          style={{
            backgroundColor: "#ffffff",
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E\")",
          }}
        >
          <p className=" text-xs">Reusable Hero module</p>
        </div>
      </aside>

      <div className="flex flex-col xl:flex-row">
        <div className="flex flex-col gap-10 w-full justify-center">
          <h2 className="font-light text-center text-6xl leading-2 md:text-7xl  lg:text-8xl xl:leading-2 xl:text-left xl:max-w-screen-xl xl:mx-auto">
            <span className="font-normal inline-block bg-orange h-22 text-white">
              {firstWord}
            </span>{" "}
            {remainingWords}{" "}
            <strong className="font-black">{lastTwoWords}</strong>{" "}
          </h2>
          <p className="text-xl text-center  md:text-2xl xl:text-2xl italic font-normal xl:text-left text-gray-dark xl:max-w-screen-md">
            {subheadline}
          </p>

          <div className="flex justify-center flex-col gap-4 md:flex-row xl:justify-start">
            <Button
              label={cta.title}
              onClick={() => (window.location.href = cta.url)}
            />
            <ButtonSecondary
              label={ctaSecondary.title}
              onClick={() => (window.location.href = ctaSecondary.url)}
            />
          </div>
        </div>

        <div className="flex justify-center items-center py-10 md:py-22">
          <img
            className="h-auto rounded-lg"
            src={mainImg.sourceUrl}
            alt={mainImg.altText}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
