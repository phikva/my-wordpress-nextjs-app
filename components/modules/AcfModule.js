// Reusable ACF module components
import HeroModule from "./modules/HeroModule";
import FeatureModule from "./modules/FeatureModule";
import TestimonialModule from "./modules/TestimonialModule";

// Component that renders the ACF module based on its type
function ACFModule({ module }) {
  switch (module.type) {
    case "hero":
      return <HeroModule data={module.data} />;
    case "feature":
      return <FeatureModule data={module.data} />;
    case "testimonial":
      return <TestimonialModule data={module.data} />;
    default:
      return null; // Handle unknown module types or provide a default module.
  }
}

export default ACFModule;