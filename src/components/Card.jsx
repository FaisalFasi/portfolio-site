import React, { useContext } from "react";
import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { ThemeContext } from "../context/ThemeContext.jsx";
// import "./card.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";

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
    <motion.div
      id="project-1"
      className="relative w-full mt-16"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: 0.05 * (index % 3) }}
    >
      {/* project 1 starts here 1st part */}

      <div
        className={`
          min-h-[100%] min-w-[100%] max-h-full max-w-full ${paddingLeftRight} `}
      >
        <motion.div
          className={` flex h-auto w-full max-w-full shadow-2xl rounded-t-xl lg:rounded-xl  overflow-hidden aspect-w-16 aspect-h-9 border ${
            isDarkMode
              ? "bg-dark-background  text-dark-text border-gray-700"
              : "bg-light-background  text-[#1a202c] border-gray-200"
          }`}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.25 }}
        >
          <Carousel
            showArrows={true}
            showThumbs={false}
            swipeable={true}
            emulateTouch={true} // Enable touch emulation for mouse events
            infiniteLoop
            useKeyboardArrows
            autoPlay
            className="custom-carousel"
          >
            {project?.projectImg.map((image, idx) => (
              <img
                key={idx}
                src={image}
                alt="image"
                className="h-full w-full object-cover rounded-t-xl transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
              />
            ))}
          </Carousel>
        </motion.div>

        {/* 2nd part  */}
        <motion.div
          className={`lg:w-[45%] lg:absolute lg:top-1/2 opacity-95 ${titlePos} lg:transform lg:-translate-y-1/2 mb-4 px-4 py-6 shadow-xl rounded-b-xl lg:rounded-xl lg:border lg:border-solid lg:border-size border ${
            isDarkMode
              ? "bg-gray-800/80 backdrop-blur-md text-dark-text border-gray-700"
              : "bg-white/80 backdrop-blur-md text-[#1a202c] border-gray-200"
          }`}
          whileHover={{
            y: -6,
            boxShadow: isDarkMode
              ? "0 15px 35px rgba(0,0,0,0.55)"
              : "0 15px 35px rgba(148,163,184,0.35)",
          }}
          transition={{ duration: 0.25 }}
        >
          <div className="flex justify-between items-center  ">
            <h1 className="text-3xl  font-nuntinoFont font-bold ">
              {project.title}
            </h1>
            <span className="flex gap-4">
              <motion.a
                href={project.websiteLink}
                target="_blank"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.96 }}
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2AAE66] rounded-full"
              >
                <FiExternalLink className="h-7 w-7 text-green-500" />
              </motion.a>
              <motion.a
                href={project.gitHubLink}
                target="_blank"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.96 }}
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2AAE66] rounded-full"
              >
                <AiFillGithub className="h-7 w-7 text-green-500" />
              </motion.a>
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
            <p>{project?.description}</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Card;
