import React from "react";
import Header from "../components/Header";
import SendMessageCard from "../components/SendMessageCard";

const Contact = () => {
  return (
    <div className=" h-full">
      <Header />
      <div className="mx-8">
        {/* my project Heading  */}
        <div className="mt-12">
          <h1 className=" my-2 text-center text-6xl font-nuntinoFont font-extrabold text-[#1a202c] ">
            Contact
          </h1>
          <p className="p-2 text-center text-[#1a202c] font-poppinFont">
            A quick collection of my projects.
          </p>
        </div>
      </div>
      {/* form section  */}
      <SendMessageCard />
    </div>
  );
};

export default Contact;
