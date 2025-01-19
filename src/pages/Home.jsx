import React, { useContext } from "react";
import { motion } from "framer-motion";
import AboutMe from "../components/AboutMe";
import { ThemeContext } from "../context/ThemeContext";
import Typewriter from "typewriter-effect";

const technologies = [
  {
    name: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  { name: "React.js", url: "https://react.dev/" },
  { name: "Next.js", url: "https://nextjs.org/" },
  { name: "Node.js", url: "https://nodejs.org/" },
  { name: "MySQL", url: "https://www.mysql.com/" },
  { name: "MongoDB", url: "https://www.mongodb.com/" },
  { name: "Tailwind CSS", url: "https://tailwindcss.com/" },
];

const Home = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div
      className={`${
        isDarkMode
          ? "bg-dark-background text-dark-text"
          : "bg-light-background text-light-text"
      }`}
    >
      <div id="home" className="py-10 px-4 md:px-8 lg:px-[5%] xl:px-[15%]">
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <motion.img
            src="/images/my-pic-6.png"
            alt="Faisal Rehman"
            className="w-60 h-60 rounded-[20px] border border-blue-100"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="w-full py-12 px-2 lg:px-12 text-center lg:text-left">
            <motion.h1
              className="py-2 font-poppinFont font-bold text-4xl text-[#5fc094]"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Hi, I'm Faisal Rehman!")
                    .pauseFor(2000) // Pause for 2 seconds
                    .deleteAll() // Delete the current string
                    .typeString("I'm a Fullstack Developer!") // Type a new string
                    .pauseFor(2000) // Pause for 2 seconds
                    .deleteAll()
                    .typeString("I love creating interactive web applications.")
                    .pauseFor(2000) // Pause for 2 seconds
                    .start();
                }}
                options={{
                  delay: 75, // Typing speed
                }}
              />
            </motion.h1>
            <motion.p
              className="text-lg font-poppinFont flex flex-wrap justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I am a Fullstack Developer with 3+ years of experience in
              developing state-of-the-art applications, building great user
              experiences by bringing simplicity to life, and constantly
              learning. Skilled in technologies like
              <span className="flex flex-wrap justify-center lg:justify-start items-center">
                {technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    className={`px-2 rounded text-sm`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <a
                      href={tech.url}
                      className="font-bold text-base text-[#2aae66] transition duration-300 ease-in-out transform hover:text-[#78857f] hover:scale-110"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      &nbsp;{tech.name}
                    </a>
                    {index !== technologies.length - 1 ? "," : "."}
                  </motion.span>
                ))}
              </span>
              I am a team player and always looking for new challenges and ways
              to improve myself.
            </motion.p>
          </div>
        </div>
        {/* About Me Section */}
        <AboutMe />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
