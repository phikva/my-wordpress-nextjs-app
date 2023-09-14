import React, { Suspense } from "react";
// import components
import Header from "./Header";
import Footer from "./Footer";
//import context
import { useHeader } from "../../context/HeaderContext";

function Layout({ children }) {
  const { headerData, currentPath } = useHeader();

  return (
    <div className="">
      <Suspense fallback={<p>Loading header data...</p>}>
        {headerData && <Header headerData={headerData} />}
      </Suspense>
      <main className="flex-grow">{children}</main>
      <Suspense fallback={<p>Loading footer...</p>}>
        {headerData && <Footer footerData={headerData} />}
      </Suspense>
    </div>
  );
}

export default Layout;
