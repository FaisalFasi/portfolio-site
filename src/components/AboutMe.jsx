import React, { useEffect, useState, useContext } from "react";
import Typewriter from "typewriter-effect";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutMe = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [typescriptCompleted, setTypescriptCompleted] = useState(false);
  const [visibleLineIndex, setVisibleLineIndex] = useState(0); // State to track which line is visible

  // Combine headings and paragraphs into an array of objects for easier mapping
  const aboutContent = [
    { title: "learnAboutMe()", content: "Loading data..." },
    { title: "currentLocation", content: '"Berlin, Germany"' },
    {
      title: "interests",
      content: '["Web Development", "Travelling", "Gaming", "Photography"]',
    },
    {
      title: "education",
      content:
        '"Bachelor of Science in Computer Science - Hajvery University Lahore"',
    },
    {
      title: "skills",
      content:
        '["JavaScript","ReactJs", "NextJs", "NodeJs", "Express", "Tailwind"]',
    },
    {
      title: "contactMe",
      content: ["Github", "Facebook", "LinkedIn", "Instagram"],
      links: [
        "https://github.com/FaisalFasi",
        "https://www.facebook.com/faisalfasi18",
        "https://www.linkedin.com/in/faisalrehman18/",
        "https://www.instagram.com/faisalfasi18/",
      ],
    },
  ];

  useEffect(() => {
    if (typescriptCompleted && visibleLineIndex < aboutContent.length) {
      const timer = setTimeout(() => {
        setVisibleLineIndex((prevIndex) => prevIndex + 1);
      }, 100); // Delay before showing the next line

      return () => clearTimeout(timer);
    }
  }, [typescriptCompleted, visibleLineIndex]);

  return (
    <motion.div>
      <motion.div
        className={`relative flex justify-center items-center h-10 mt-4 bg-[#D9D9D9] rounded-t-[20px] ${
          isDarkMode
            ? "bg-dark-bgHeaderAboutMe text-dark-text"
            : "text-light-text"
        }`}
      >
        <div className="w-full absolute flex justify-start items-center z-1 px-6 gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-600 rounded-full"></div>
        </div>

        <motion.div className="pl-4 sm:pl-0 z-10 font-bold ">
          <motion.h1
            className={`py-2 font-poppinFont font-bold text-sm md:text-lg ${
              isDarkMode ? "bg-dark-bgBodyAboutMe" : "text-light-text"
            }`}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Executed: introduceSelf.js")
                  .callFunction(() => {
                    setTypescriptCompleted(true);
                  })
                  .start();
              }}
              options={{
                delay: 20, // Typing speed (in milliseconds)
              }}
            />
          </motion.h1>
        </motion.div>
      </motion.div>

      <div
        className={`bg-[#EBEBEB] rounded-b-[20px] p-6 font-nuntinoFont ${
          typescriptCompleted ? "" : "h-[450px]"
        } ${isDarkMode ? "bg-dark-bgBodyAboutMe" : "text-light-text"}`}
      >
        {typescriptCompleted && (
          <div>
            {aboutContent.map((info, index) => (
              <div key={index}>
                <motion.h1
                  initial={{ opacity: 0 }} // Start hidden
                  animate={
                    index <= visibleLineIndex ? { opacity: 1 } : { opacity: 0 }
                  } // Fade in
                  transition={{ duration: 0.02 }} // Duration of the animation
                >
                  <b className="text-[#B693F4]"> {">"}</b> &nbsp; {info.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }} // Start hidden
                  animate={
                    index <= visibleLineIndex ? { opacity: 1 } : { opacity: 0 }
                  } // Fade in
                  transition={{ duration: 0.2 }} // Duration of the animation
                  className="py-2 font-poppinFont text-[#718096]"
                >
                  <div>
                    {info.title === "contactMe" ? (
                      <div className="flex gap-4">
                        {info?.content?.map((c, idx) => {
                          return (
                            <Link
                              className="hover:underline"
                              to={info.links[idx]}
                              target="blank"
                            >
                              {c},
                            </Link>
                          );
                        })}
                      </div>
                    ) : (
                      info?.content
                    )}
                  </div>
                </motion.p>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default AboutMe;
