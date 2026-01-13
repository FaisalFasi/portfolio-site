import React, { useContext } from "react";
import { education, experiences } from "../../utils/ResumeInfo";
import { ThemeContext } from "../../context/ThemeContext";
import { motion } from "framer-motion";

const EducationExperience = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className="flex flex-col gap-8 md:gap-20 md:flex-row md:justify-center my-12">
      {/* Education  */}
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-6">
          <h1 className="my-2 text-center md:text-left text-3xl md:text-4xl font-nuntinoFont font-extrabold bg-gradient-to-r from-[#2AAE66] to-[#2bae66] bg-clip-text text-transparent">
            Education
          </h1>
        </div>
        <div>
          <ul className={`border-l-4 ${
            isDarkMode ? "border-[#2AAE66]/50" : "border-[#2AAE66]/30"
          }`}>
            {education.map((item, index) => (
              <li
                key={index}
                className="relative left-0 pl-6 pb-6 mb-4"
              >
                <div className={`p-4 rounded-xl transition-all duration-200 ${
                  isDarkMode
                    ? "bg-gray-800/50 hover:bg-gray-800/70"
                    : "bg-gray-50 hover:bg-gray-100"
                }`}>
                  <h1 className={`font-bold my-2 text-lg ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}>
                    {item.title} <span className="text-[#2AAE66]">({item.duration})</span>
                  </h1>
                  <p className={`font-semibold font-nuntinoFont my-1 ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}>
                    {item.description}
                  </p>
                  <i className={`text-sm ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}>
                    {item.location}
                  </i>
                </div>
                <span className={`absolute top-6 left-[-12px] w-5 h-5 rounded-full border-2 ${
                  isDarkMode ? "bg-[#2AAE66] border-gray-800" : "bg-[#2AAE66] border-white"
                }`}></span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
      {/* Experience  */}
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="mb-6">
          <h1 className="my-2 text-center md:text-left text-3xl md:text-4xl font-nuntinoFont font-extrabold bg-gradient-to-r from-[#2AAE66] to-[#2bae66] bg-clip-text text-transparent">
            Experience
          </h1>
        </div>
        <div>
          <ul className={`border-l-4 ${
            isDarkMode ? "border-[#2AAE66]/50" : "border-[#2AAE66]/30"
          }`}>
            {experiences.map((experience, index) => {
              // Extract duration from title (format: "Title (Duration)")
              const titleMatch = experience.title.match(/^(.+?)\s*\((.+?)\)$/);
              const titleText = titleMatch ? titleMatch[1] : experience.title;
              const duration = titleMatch ? titleMatch[2] : null;

              return (
                <li
                  key={index}
                  className="relative left-0 pl-6 pb-6 mb-4"
                >
                  <div className={`p-4 rounded-xl transition-all duration-200 ${
                    isDarkMode
                      ? "bg-gray-800/50 hover:bg-gray-800/70"
                      : "bg-gray-50 hover:bg-gray-100"
                  }`}>
                    <h1 className={`font-bold my-2 text-lg ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}>
                      {titleText}
                      {duration && <span className="text-[#2AAE66]"> ({duration})</span>}
                    </h1>
                    <p className={`font-semibold font-nuntinoFont my-1 ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}>
                      {experience.description}
                    </p>
                    <i className={`text-sm ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}>
                      {experience.location}
                    </i>
                  </div>
                  <span className={`absolute top-6 left-[-12px] w-5 h-5 rounded-full border-2 ${
                    isDarkMode ? "bg-[#2AAE66] border-gray-800" : "bg-[#2AAE66] border-white"
                  }`}></span>
                </li>
              );
            })}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default EducationExperience;
