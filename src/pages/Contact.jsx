import React from "react";
import Header from "../components/Header";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";

import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";

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
      <div className="mx-10 md:mx-[10%] lg:mx-[20%] my-10">
        <div className="bg-black p-14 rounded-[10px]">
          <div>
            <div className=" text-white  font-nuntinoFont">
              <h1 className="text-3xl font-extrabold">Form Details</h1>
              <p className="my-2">Fill up the form below to contact</p>
            </div>
            <div className="flex flex-col py-8 font-bold font-nuntinoFont  text-white">
              <a
                href="tel:+491781633786"
                className="w-[200px] flex gap-4  px-4 py-2 hover:text-[#2AAE66] active:bg-white focus:outline  focus:outline-blue-400 rounded"
              >
                <BsTelephoneFill className=" w-5 h-5 " />

                <span>+491781633786</span>
              </a>
              <a
                href="mailto:faisalfasi18@gmail.com"
                target="_blank"
                className="w-[250px]  flex items-center gap-4 px-4 py-2 mt-6 active:bg-white focus:outline focus:outline-blue-400  hover:text-[#2AAE66] rounded"
              >
                <MdEmail className="w-5 h-5 " />
                <span>faisalfasi18@gmail.com</span>
              </a>
              <a
                href="https://goo.gl/maps/b7bSKRs1MXrFnzpQA"
                target="_blank"
                className="w-[200px] flex items-center  gap-4 px-4 py-2 mt-6 active:bg-white focus:outline focus:outline-blue-400  hover:text-[#2AAE66] rounded"
              >
                <MdLocationPin className="w-7 h-7 " />
                <span>Berlin,Germany</span>
              </a>
            </div>
            <div>
              <div className="flex gap-6 mx-6 my-2">
                <a
                  href="https://github.com/FaisalFasi"
                  target="_blank"
                  title="GitHub"
                  className="bg-white p-2 rounded-full hover:bg-[#2AAE66]"
                >
                  <AiFillGithub className="w-5 h-5 " />
                </a>
                <a
                  href="https://www.linkedin.com/in/faisalrehman18/"
                  target="_blank"
                  title="LinkedIn"
                  className="bg-white p-2 rounded-full    hover:bg-[#2AAE66]"
                >
                  <AiFillLinkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/faisalfasi18/"
                  target="_blank"
                  title="Instagram"
                  className="bg-white p-2 rounded-full   hover:bg-[#2AAE66]"
                >
                  <AiOutlineInstagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/faisalfasi18"
                  target="_blank"
                  title="Facebook"
                  className="bg-white p-2 rounded-full   hover:bg-[#2AAE66]"
                >
                  <AiFillFacebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
