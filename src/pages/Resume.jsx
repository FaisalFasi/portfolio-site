import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Skills from "../components/resume/Skills.jsx";
import EducationExperience from "../components/resume/EducationExperience.jsx";

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
      <div className="mx-4 md:px-8 lg:px-[5%] xl:px-[10%]">
        {/* my project Heading  */}
        <div className="pt-12">
          <h1 className=" my-2 text-center text-5xl font-nuntinoFont font-extrabold ">
            Resume
          </h1>
          <p className="p-2 text-center  font-poppinFont">
            My Education, Experience and Skills.
          </p>
        </div>
        {/* Education and Experience section  */}
        <EducationExperience />
        {/* skills section */}
        <Skills />
      </div>
    </div>
  );
};

export default Resume;
