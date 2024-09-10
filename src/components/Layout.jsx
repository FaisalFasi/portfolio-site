import { Outlet } from "react-router-dom";
// import Chatbot from "./components/Chatbot"; // Add your chatbot component
import Header from "../components/Header";
import Footer from "../components/Footer";
// import ChatBotPress from "../components/ChatBotPress";
const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet /> {/* This will render the current page content */}
      </main>
      {/* <ChatBotPress /> */}
      {/* Chatbot is added here and will be visible on every page */}
      <Footer />
    </div>
  );
};

export default Layout;
