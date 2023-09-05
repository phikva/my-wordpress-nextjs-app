// components/Layout.js
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div class="flex flex-col min-h-screen">
      <Header />
      <main class="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
