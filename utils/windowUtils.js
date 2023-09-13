// windowUtils.js

// detect if the window is mobile
export const handleResize = (setIsMobileView) => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };
  
    handleResize();
  
    window.addEventListener("resize", handleResize);
  
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  };
  