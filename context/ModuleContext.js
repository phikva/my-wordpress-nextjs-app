import React, { createContext, useContext, useState } from "react";

const ModuleContext = createContext();

export function useModuleContext() {
  return useContext(ModuleContext);
}

export function ModuleProvider({ children }) {
  const [toggleHeroSection, setToggleHeroSection] = useState("Hide");
  const [toggleMarqueeSection, setToggleMarqueeSection] = useState("Hide");
 

  return (
    <ModuleContext.Provider
      value={{
        toggleHeroSection,
        setToggleHeroSection,
        toggleMarqueeSection,
        setToggleMarqueeSection,

      }}
    >
      {children}
    </ModuleContext.Provider>
  );
}
