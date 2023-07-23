import React from "react";
import Header from "../components/Header";
import SendMessageCard from "../components/SendMessageCard";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className=" h-full">
      <Header />
      <div className="mx-8">
        {/* my project Heading  */}
        <div className="mt-12">
          <h1 className=" my-2 text-center text-5xl font-nuntinoFont font-extrabold text-[#1a202c] ">
            Contact
          </h1>
          <p className="p-2 text-center text-[#1a202c] font-poppinFont">
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
