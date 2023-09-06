// context/seo.js
import React, { createContext, useContext, useState, useEffect } from "react";

// Create a context for SEO data
const SeoContext = createContext();

// Custom hook to access SEO data and methods
export function useSeo() {
  return useContext(SeoContext);
}

// SEO Provider component
export function SeoProvider({ children }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    // Update SEO metadata when title or description changes
    document.title = title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }
  }, [title, description]);

  // Define a function to update SEO data
  const setSeoData = ({ title, description }) => {
    setTitle(title);
    setDescription(description);
  };

  const seoData = {
    title,
    description,
    setSeoData,
  };

  return <SeoContext.Provider value={seoData}>{children}</SeoContext.Provider>;
}
