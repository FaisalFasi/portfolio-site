import React, { useContext } from "react";
import SendMessageCard from "../components/SendMessageCard";
import { ThemeContext } from "../context/ThemeContext";

const Contact = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen pb-20 transition-colors duration-300
        ${
          isDarkMode
            ? "bg-dark-background text-dark-text"
            : "bg-light-background text-[#1a202c]"
        }
      `}
    >
      <div className="mx-8">
        {/* Contact Heading  */}
        <div className="pt-16 pb-8">
          <h1 className="my-4 text-center text-5xl md:text-6xl font-nuntinoFont font-extrabold bg-gradient-to-r from-[#2AAE66] to-[#2bae66] bg-clip-text text-transparent">
            Contact
          </h1>
          <p className="p-2 text-center text-lg md:text-xl font-poppinFont opacity-80">
            Feel free to contact me for any queries.
          </p>
        </div>
      </div>
      {/* form section  */}
      <SendMessageCard />
    </div>
  );
};

export default Contact;
