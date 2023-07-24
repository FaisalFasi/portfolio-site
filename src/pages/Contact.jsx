import React, { useContext } from "react";
import Header from "../components/Header";
import SendMessageCard from "../components/SendMessageCard";
import Footer from "../components/Footer";
import { ThemeContext } from "../context/ThemeContext";

const Contact = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div
      className={`h-full ${
        isDarkMode
          ? "bg-dark-background  text-dark-text"
          : "bg-light-background  text-[#1a202c]"
      }`}
    >
      <Header />
      <div className="mx-8">
        {/* my project Heading  */}
        <div className="mt-12">
          <h1 className=" my-2 text-center text-5xl font-nuntinoFont font-extrabold   ">
            Contact
          </h1>
          <p className="p-2 text-center   font-poppinFont">
            Feel free to contact me for any queries.
          </p>
        </div>
      </div>
      {/* form section  */}
      <SendMessageCard />
      <Footer />
    </div>
  );
};

export default Contact;
