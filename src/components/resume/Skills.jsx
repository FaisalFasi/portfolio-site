import React from "react";
import { FiDownload } from "react-icons/fi";
import { logos } from "../../utils/LogoImgLinks";
import { tools } from "../../utils/LogoImgLinks";

const Skills = () => {
  return (
    <div className="px-4 py-8">
      {/* Title */}
      <div className="mb-6 text-center">
        <h1 className="text-4xl font-bold">My Skills</h1>
        <p className="mt-2 text-lg text-gray-600">
          Here are some of the technologies and tools I work with to create
          high-quality web applications.
        </p>
      </div>

      {/* Core Skills */}
      <section>
        <h2 className="text-2xl font-semibold text-center my-4">Core Skills</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center"
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
                  className="w-16 h-16 mx-auto"
                  title={logo.title}
                />
              </a>
              <p className="mt-2 text-sm font-medium">{logo.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-center my-4">Tools</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center"
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
                  className="w-16 h-16 mx-auto"
                  title={tool.title}
                />
              </a>
              <p className="mt-2 text-sm font-medium">{tool.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Download Resume */}
      <div className="pt-10 pb-20 flex justify-center">
        <a
          href="/cv/Faisal Rehman CV.pdf"
          className="flex items-center gap-2 font-bold text-white px-6 py-3 rounded-[10px] bg-[#2bae66] hover:opacity-80 cursor-pointer"
          download="Faisal Rehman CV"
        >
          Download Resume <FiDownload />
        </a>
      </div>
    </div>
  );
};

export default Skills;
