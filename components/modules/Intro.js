import React from "react";
import ButtonSecondary from "../ui/ButtonSecondary";

function Intro({ data }) {
  const { headline, subheadline, ctaSecondary } = data.intro;

  return (
    <section className="bg-white px-5 py-20 sm:px-16 pt-14 lg:px-40 md:pt-20 lg:py-40">
      <aside className="flex py-10 ">
        <div
          className="border rounded-full p-2"
          style={{
            backgroundColor: "#ffffff",
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E\")",
          }}
        >
          <p className=" text-xs">Reusable Intro module</p>
        </div>
      </aside>
      <div className="flex flex-col gap-10 w-full justify-center">
        <h3 className=" text-center text-5xl leading-2 md:text-7xl lg:text-8xl xl:leading-2 xl:max-w-screen-xl xl:mx-auto">
          {headline}
        </h3>
        <p className="text-xl font-light text-center xl:max-w-screen-lg xl:mx-auto">
          {subheadline}
        </p>
        <div className="flex flex-col gap-4 md:flex-row md:justify-center mt-4">
          <ButtonSecondary
            label={ctaSecondary.title}
            onClick={() => (window.location.href = ctaSecondary.url)}
          />
        </div>
      </div>
    </section>
  );
}

export default Intro;
