import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet /> {/* This will render the current page content */}
      </main>
      {/* Chatbot is added here and will be visible on every page */}
      <Footer />
    </div>
  );
};

export default Layout;
