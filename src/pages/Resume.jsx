import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Skills from "../components/resume/Skills.jsx";
import EducationExperience from "../components/resume/EducationExperience.jsx";

const Resume = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode
          ? "bg-dark-background text-dark-text"
          : "bg-light-background text-[#1a202c]"
      }`}
    >
      <div className="mx-4 md:px-8 lg:px-[5%] xl:px-[10%]">
        {/* Resume Heading  */}
        <div className="pt-16 pb-8">
          <h1 className="my-4 text-center text-5xl md:text-6xl font-nuntinoFont font-extrabold bg-gradient-to-r from-[#2AAE66] to-[#2bae66] bg-clip-text text-transparent">
            Resume
          </h1>
          <p className="p-2 text-center text-lg md:text-xl font-poppinFont opacity-80">
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
