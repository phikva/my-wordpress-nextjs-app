import React, { createContext, useContext, useState } from "react";

const ModuleContext = createContext();

export function useModuleContext() {
  return useContext(ModuleContext);
}

export function ModuleProvider({ children }) {
  // Create a state object to manage module states dynamically
  const [moduleStates, setModuleStates] = useState({});

  // Create a function to update the state of a specific module
  const updateModuleState = (moduleName, newState) => {
    setModuleStates((prevModuleStates) => ({
      ...prevModuleStates,
      [moduleName]: newState,
    }));
  };

  return (
    <ModuleContext.Provider
      value={{
        moduleStates,
        updateModuleState,
      }}
    >
      {children}
    </ModuleContext.Provider>
  );
}
