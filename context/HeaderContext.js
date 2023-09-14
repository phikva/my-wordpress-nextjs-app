// HeaderContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import GetHeaderData from "../graphql/GetHeaderData.graphql";
import { useRouter } from "next/router";

const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState(router.asPath);

  useEffect(() => {
    const handleRouteChange = (url) => {
      setCurrentPath(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  const { data: headerData, error: headerError } = useQuery(GetHeaderData, {
    variables: { uri: currentPath },
    fetchPolicy: "cache-first",
  });

  const value = {
    headerData,
    headerError,
    currentPath,
  };

  return (
    <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
  );
};

export const useHeader = () => {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error("useHeader must be used within a HeaderProvider");
  }
  return context;
};
