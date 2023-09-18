import React from "react"; // Assuming you're using React
import DynamicIcon from "./DynamicIcon";
import Button from "../ui/Button";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

function Price({ data }) {
  const pricingPlans = data?.pricingPlans || [];

  // Function to render the price
  function renderPrice(price) {
    // Check if the price is a numeric string
    if (isNumeric(price)) {
      return (
        <div className="text-center">
          <p className="opacity-60 text-black md:text-lg">from</p> <p className=" text-3xl font-bold">${parseFloat(price)}</p>
          <p className="opacity-60 text-black md:text-lg">per month</p>{" "}
        </div>
      );
    }

    // If not a numeric string, render the text as-is
    return <p className="text-3xl font-bold text-center">{price}</p>;
  }

  // Function to check if a value is a numeric string
  function isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
  }

  return (
    <section className="px-4 flex flex-col gap-10 md:gap-20 py-10 lg:py-28">
      <div className="flex flex-col gap-5 text-center mx-auto max-w-md">
        <h2 className="">{data.headline}</h2>
        <p className="text-black">{data.subheadline}</p>
      </div>
      <div className="flex flex-row justify-center flex-wrap gap-10 md:gap-20 lg:gap-10 mx-auto">
        {pricingPlans.map((plan, index) => (
          <div
            className="flex flex-col justify-between gap-5 md:gap-8 max-w-xs border border-black border-opacity-20 p-6"
            key={index}
          >
            <h3 className="font-bold text-center">{plan.planName}</h3>
            <p className="text-black-light text-lg opacity-70 text-center">
              {plan.planDescription}
            </p>
            {/* Conditionally render the price */}
            {renderPrice(plan.price)}
            <ul className="flex flex-col gap-3">
              {plan.benefits.map((benefit, i) => (
                <li className="opacity-80" key={i}>
                  <DynamicIcon color="#7B6D8D" icon={faCircleCheck} /> {benefit.benefitItem}
                </li>
              ))}
            </ul>

            {/* Conditionally render the Button component based on linkType */}
            {plan.cta && plan.cta.linkType && (
              <Button
                label={plan.cta.button}
                link={
                  plan.cta.linkType === "URL"
                    ? { linkType: "URL", url: plan.cta.url }
                    : { linkType: "Page Link", pageLink: plan.cta.pageLink }
                }
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Price;
