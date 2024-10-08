import React, { useContext } from "react";
import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { ThemeContext } from "../context/ThemeContext.jsx";
// import "./card.css";

const bgColors = [
  "#bde3f8",
  "#f69f4e",
  "#07ff66",
  "#b7a1ff",
  "#ffe375",
  "#37BCF8",
  "#ffa5f2",
  "#9cfffc",
];
const colorMap = {};

const Card = ({ project, index }) => {
  const { isDarkMode } = useContext(ThemeContext);

  const getColorForTech = (tech) => {
    if (!colorMap[tech]) {
      colorMap[tech] = bgColors[Object.keys(colorMap).length % bgColors.length];
    }
    return colorMap[tech];
  };

  const isEven = index % 2 === 0;

  const paddingLeftRight = isEven
    ? "lg:pr-[15%] lg:pl-24"
    : "lg:pl-[15%] lg:pr-24";
  const titlePos = isEven ? "lg:left-0" : "lg:right-0";

  return (
    <div id="project-1" className="relative w-full mt-16">
      {/* project 1 starts here 1st part */}

      <div
        className={`
          min-h-[100%] min-w-[100%] max-h-full max-w-full ${paddingLeftRight} `}
      >
        <div className="h-auto w-full max-w-full shadow-lg rounded-lg overflow-hidden aspect-w-16 aspect-h-9">
          <img
            src={project.projectImg}
            alt=""
            className="h-full w-full object-cover rounded-t-[20px] transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
          />
        </div>

        {/* <div className="shadow-lg rounded-lg bg-white">
          <img
            src={project.projectImg}
            alt=""
            className="h-full w-full object-contain rounded-t-[20px] rounded-lg-[20px] lg:shadow-lg shadow-md shadow-blue-400 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
          />
        </div> */}

        {/* <div className="h-[450px] lg:h-[550px] w-full shadow-lg rounded-lg bg-white">
          <img
            src={project.projectImg}
            alt=""
            className="h-[450px] lg:h-[550px] w-full rounded-t-[20px] rounded-lg-[20px] lg:shadow-lg shadow-md shadow-blue-400 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"

            // className=" rounded-t-[20px] rounded-lg-[20px]  lg:shadow-lg"
          />
        </div> */}
        {/* 2nd part  */}
        <div
          className={`lg:w-[45%] lg:absolute lg:top-1/2 opacity-90 ${titlePos} lg:transform lg:-translate-y-1/2 mb-4 px-4 py-6 shadow-lg drop-shadow-lg rounded-b-[20px] lg:rounded-[20px] lg:border lg:border-solid lg:border-size  ${
            isDarkMode
              ? "bg-dark-background  text-dark-text"
              : "bg-light-background   text-[#1a202c]"
          }`}
        >
          <div className="flex justify-between items-center  ">
            <h1 className="text-3xl  font-nuntinoFont font-bold ">
              {project.title}
            </h1>
            <span className="flex gap-4">
              <a href={project.websiteLink} target="_blank">
                <FiExternalLink className="h-7 w-7 text-green-500" />
              </a>
              <a href={project.gitHubLink} target="_blank">
                <AiFillGithub className="h-7 w-7 text-green-500" />
              </a>
            </span>
          </div>
          <div className="flex flex-wrap gap-2 mt-2 font-bold text-blue-800">
            {project.madeWith.map((tech, index) => (
              <span
                key={index}
                className={`px-2 rounded text-sm`}
                style={{ backgroundColor: getColorForTech(tech) }}
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="pt-4 font-poppinFont ">
            <p>{project.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
