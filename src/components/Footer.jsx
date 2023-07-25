import React, { useContext } from "react";
import { DiReact } from "react-icons/di";
import { BiLogoTailwindCss } from "react-icons/bi";

import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div>
      <div
        className={`flex flex-col md:flex-row items-center md:justify-between px-10 md:px-20 py-6 md:py-4 bg-[#f7fafc] ${
          isDarkMode
            ? " bg-dark-bgFooter text-dark-text"
            : " bg-[#f7fafc] text-light-text"
        }`}
      >
        <p className="">© 2023 Faisal Rehman</p>
        <div className="flex items-center mt-6 md:mt-0">
          <span> {"Built with: "}</span>
          <pre> </pre>
          <a
            href="https://react.dev/"
            target="_blank"
            className="mx-1 bg-black rounded-full"
          >
            <DiReact className="text-white " />
          </a>
          /
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            className="mx-1 bg-black rounded-full"
          >
            <BiLogoTailwindCss className="text-white" />
          </a>
        </div>
        <div className={`flex mt-6 md:mt-0 `}>
          <a
            href="https://github.com/FaisalFasi"
            target="_blank"
            title="GitHub"
            className={`ml-6 md:ml-0  p-2 rounded-full mr-4 hover:bg-gray-400 ${
              isDarkMode ? " bg-dark-bgFooter " : " bg-gray-200 text-light-text"
            }`}
          >
            <AiFillGithub className="w-5 h-5 " />
          </a>
          <a
            href="https://www.linkedin.com/in/faisalrehman18/"
            target="_blank"
            title="LinkedIn"
            className={`  p-2 rounded-full mr-4 hover:bg-gray-400 ${
              isDarkMode ? " bg-dark-bgFooter " : " bg-gray-200 text-light-text"
            }`}
          >
            <AiFillLinkedin className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/faisalfasi18/"
            target="_blank"
            title="Instagram"
            className={`  p-2 rounded-full mr-4 hover:bg-gray-400 ${
              isDarkMode ? " bg-dark-bgFooter " : " bg-gray-200 text-light-text"
            }`}
          >
            <AiOutlineInstagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.facebook.com/faisalfasi18"
            target="_blank"
            title="Facebook"
            className={`  p-2 rounded-full mr-4 hover:bg-gray-400 ${
              isDarkMode ? " bg-dark-bgFooter " : " bg-gray-200 text-light-text"
            }`}
          >
            <AiFillFacebook className="w-5 h-5" />
          </a>
        </div>
        {/* // add icons here */}
      </div>
    </div>
  );
};

export default Footer;
