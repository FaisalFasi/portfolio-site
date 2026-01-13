import React, { useContext } from "react";
import { FiDownload } from "react-icons/fi";
import { logos } from "../../utils/LogoImgLinks";
import { tools } from "../../utils/LogoImgLinks";
import { ThemeContext } from "../../context/ThemeContext";
import { motion } from "framer-motion";

const Skills = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className="px-4 py-8">
      {/* Title */}
      <motion.div
        className="mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#2AAE66] to-[#2bae66] bg-clip-text text-transparent">
          My Skills
        </h1>
        <p
          className={`mt-3 text-lg md:text-xl ${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          } opacity-80`}
        >
          Here are some of the technologies and tools I work with to create
          high-quality web applications.
        </p>
        <div className="mx-auto mt-4 h-[2px] w-24 rounded-full bg-gradient-to-r from-[#2AAE66] via-transparent to-[#2bae66] opacity-60" />
      </motion.div>

      {/* Core Skills */}
      <motion.section
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2
          className={`text-2xl md:text-3xl font-semibold text-center my-6 ${
            isDarkMode ? "text-gray-200" : "text-gray-800"
          }`}
        >
          Core Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-10">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className={`group flex flex-col items-center text-center p-4 rounded-xl transition-all duration-200 ${
                isDarkMode ? "hover:bg-gray-800/50" : "hover:bg-gray-100"
              }`}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <a
                href={logo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform transform hover:scale-110"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-full mx-auto shadow-lg"
                  title={logo.title}
                />
              </a>
              <p
                className={`mt-3 text-sm md:text-base font-medium ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {logo.title}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Tools */}
      <motion.section
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2
          className={`text-2xl md:text-3xl font-semibold text-center my-6 ${
            isDarkMode ? "text-gray-200" : "text-gray-800"
          }`}
        >
          Tools
        </h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-10">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              className={`group flex flex-col items-center text-center p-4 rounded-xl transition-all duration-200 ${
                isDarkMode ? "hover:bg-gray-800/50" : "hover:bg-gray-100"
              }`}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <a
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform transform hover:scale-110"
              >
                <img
                  src={tool.src}
                  alt={tool.alt}
                  className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-full mx-auto shadow-lg"
                  title={tool.title}
                />
              </a>
              <p
                className={`mt-3 text-sm md:text-base font-medium ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {tool.title}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Download Resume */}
      <motion.div
        className="pt-12 pb-20 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <a
          href="/cv/Faisal Rehman CV.pdf"
          className="flex items-center gap-2 font-bold text-white px-8 py-3 rounded-xl bg-gradient-to-r from-[#2AAE66] to-[#2bae66] hover:from-[#239a55] hover:to-[#239a55] transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2AAE66]"
          download="Faisal Rehman CV"
        >
          Download Resume <FiDownload />
        </a>
      </motion.div>
    </div>
  );
};

export default Skills;
