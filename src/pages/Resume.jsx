import React, { useContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FiDownload } from "react-icons/fi";
import { ThemeContext } from "../context/ThemeContext";
import { logos } from "../utils/LogoImgLinks.js";
import { education, experiences } from "../utils/ResumeInfo.js";

const Resume = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div
      className={` h-full ${
        isDarkMode
          ? "bg-dark-background  text-dark-text"
          : "bg-light-background  text-[#1a202c]"
      }`}
    >
      <Header />
      <div className="mx-8">
        {/* my project Heading  */}
        <div className="mt-12">
          <h1 className=" my-2 text-center text-5xl font-nuntinoFont font-extrabold ">
            Resume
          </h1>
          <p className="p-2 text-center  font-poppinFont">
            My Education, Experience and Skills.
          </p>
        </div>
        {/* Education and Experience section  */}
        <div className="flex flex-col gap-4 md:gap-20 md:flex-row md:justify-center my-12">
          {/* Education  */}
          <div className=" ">
            <div>
              <h1 className=" my-2 text-center md:text-left text-3xl font-nuntinoFont font-extrabold text-[#1a202c] ">
                Education
              </h1>
            </div>
            <div>
              <ul className="border-l-4 border-l-indigo-100 ">
                {" "}
                {education.map((item, index) => (
                  <li
                    key={index}
                    className="relative left-0 top-[50%] pl-4 pb-4"
                    style={{ borderLeftWidth: "50%" }}
                  >
                    <h1 className="font-bold my-2">
                      {item.title} ({item.duration})
                    </h1>
                    <i>{item.location}</i>
                    <p className="">{item.description}</p>
                    <span className="absolute top-1 left-[-10px] w-4 h-4 bg-green-700 rounded-full"></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Experience  */}
          <div className="  ">
            <div>
              <h1 className=" my-2 text-center md:text-left text-3xl font-nuntinoFont font-extrabold  ">
                Experience
              </h1>
            </div>
            <div>
              <ul className="border-l-4 top-[50%] border-l-indigo-100">
                {experiences.map((experience, index) => (
                  <li
                    key={index}
                    className="relative left-0 top-[50%] pl-4 pb-4"
                    style={{ borderLeftWidth: "50%" }}
                  >
                    <h1 className="font-bold my-2">{experience.title}</h1>
                    <i>{experience.location}</i>
                    <p className="">{experience.description}</p>
                    <span className="absolute top-1 left-[-10px] w-4 h-4 bg-green-700 rounded-full"></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* skills section */}
        <div>
          <div className="mb-10">
            <h1 className=" my-2 text-center  text-3xl font-nuntinoFont font-extrabold  ">
              Skills
            </h1>
          </div>
          <div className=" ">
            <div className="flex flex-wrap justify-center gap-20 mx-[5%] md:mx-[15%] lg:mx-[20%]">
              {logos.map((logo, index) => (
                <img
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  className="w-16 h-16"
                  title={logo.title}
                />
              ))}
            </div>
          </div>
          <div className="pt-10 mb-20 flex justify-center">
            <a
              href="/cv/Faisal Rehman CV.pdf"
              className="flex items-center gap-2 font-bold text-white px-6 py-3 rounded-[10px] bg-[#2bae66] hover:opacity-80  cursor-pointer"
              download="Faisal Rehman CV"
            >
              Download Resume <FiDownload />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resume;
