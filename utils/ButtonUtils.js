import React from "react";
import Button from "../components/ui/Button";
import ButtonSecondary from "../components/ui/ButtonSecondary";

export function renderButtons(
  buttons,
  numberOfCtas,
  backgroundColorClass,
  isDynamicBackground,
  layout,
  isCentered,
  isHero
) {
  if (!buttons) {
    return null;
  }

  const { primaryButton, secondaryButton } = buttons;

  const getButtonLabel = (button) => {
    return button?.buttonText || "";
  };

  let buttonStyleClass;
  let buttonBorderStyleClass;

  // Check if it's in the hero section and needs to be centered
  if (isHero && isCentered) {
    // Apply different styles for centered buttons in the hero section
    buttonStyleClass = "justify-center"; // Use "justify-center" class
  }

  if (isDynamicBackground) {
    // Apply different styles for buttons on dynamic backgrounds
    switch (backgroundColorClass) {
      case "bg-white":
        buttonStyleClass = "text-black";
        buttonBorderStyleClass = "border-purple";
        break;
      case "bg-black":
        buttonStyleClass = "text-white";
        break;
      case "bg-purple":
        buttonStyleClass = "bg-black text-white";
        buttonBorderStyleClass = "border-black";
        break;
      default:
        // Handle other background colors or defaults if needed
        break;
    }
  } else {
    // Apply default styles for buttons on non-dynamic backgrounds
    buttonStyleClass = "text-black";
    buttonBorderStyleClass = "border-purple";
  }

  if (numberOfCtas === "One CTA (Primary Button)") {
    if (primaryButton) {
      // Always render a container div, even for one button
      return (
        <div
          className={`flex flex-col gap-5 md:flex-row ${
            layout === "Center aligned" ? "justify-center" : ""
          }`}
        >
          <Button
            key="primaryButton"
            label={getButtonLabel(primaryButton)}
            link={primaryButton}
            className={`${buttonStyleClass} ${buttonBorderStyleClass}`}
          />
        </div>
      );
    }
  } else if (numberOfCtas === "One CTA (Secondary Button)") {
    if (secondaryButton) {
      // Always render a container div, even for one button
      return (
        <div
          className={`flex flex-col gap-5 md:flex-row ${
            layout === "Center aligned" ? "justify-center" : ""
          }`}
        >
          <ButtonSecondary
            key="secondaryButton"
            label={getButtonLabel(secondaryButton)}
            link={secondaryButton}
            className={`${buttonStyleClass} ${buttonBorderStyleClass}`}
          />
        </div>
      );
    }
  } else if (numberOfCtas === "Two CTAs (Primary and Secondary buttons)") {
    const renderedButtons = [];

    if (primaryButton) {
      renderedButtons.push(
        <Button
          key="primaryButton"
          label={getButtonLabel(primaryButton)}
          link={primaryButton}
          className={`${buttonStyleClass} ${buttonBorderStyleClass}`}
        />
      );
    }
    if (secondaryButton) {
      renderedButtons.push(
        <ButtonSecondary
          key="secondaryButton"
          label={getButtonLabel(secondaryButton)}
          link={secondaryButton}
          className={`${buttonStyleClass} ${buttonBorderStyleClass}`}
        />
      );
    }

    if (renderedButtons.length > 0) {
      // Conditionally add a class for center-aligned layout
      const containerClassName =
        layout === "Center aligned" ? "justify-center" : "";

      return (
        <div
          className={`flex flex-col gap-5 md:flex-row ${containerClassName}`}
        >
          {renderedButtons}
        </div>
      );
    }
  }

  return null;
}
