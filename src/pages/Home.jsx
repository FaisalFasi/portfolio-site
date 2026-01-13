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
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode
          ? "bg-dark-background text-dark-text"
          : "bg-light-background text-light-text"
      }`}
    >
      <div id="home" className="py-10 px-4 md:px-8 lg:px-[5%] xl:px-[15%]">
        <motion.div
          className="flex flex-col lg:flex-row justify-center items-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated container with decorative elements */}
          <div className="relative">
            {/* Animated gradient ring */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: `linear-gradient(135deg, 
                  ${isDarkMode ? 'rgba(42, 174, 102, 0.3)' : 'rgba(42, 174, 102, 0.2)'}, 
                  ${isDarkMode ? 'rgba(42, 174, 102, 0.1)' : 'rgba(42, 174, 102, 0.05)'})`,
                filter: 'blur(20px)',
                zIndex: 0,
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Pulsing glow effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: `radial-gradient(circle, 
                  ${isDarkMode ? 'rgba(42, 174, 102, 0.4)' : 'rgba(42, 174, 102, 0.3)'} 0%, 
                  transparent 70%)`,
                zIndex: 1,
              }}
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />

            {/* Floating decorative dots */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: '8px',
                  height: '8px',
                  background: isDarkMode ? 'rgba(42, 174, 102, 0.6)' : 'rgba(42, 174, 102, 0.4)',
                  zIndex: 2,
                  left: `${20 + i * 15}%`,
                  top: `${15 + (i % 2) * 70}%`,
                }}
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.4, 0.8, 0.4],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2 + i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              />
            ))}

            {/* Main image */}
            <motion.img
              src="/images/my-pic-6.png"
              alt="Faisal Rehman"
              className="relative w-60 h-60 md:w-72 md:h-72 rounded-2xl border-2 shadow-2xl transition-all duration-300 hover:scale-105 z-10"
              style={{
                borderColor: isDarkMode ? "#374151" : "#e5e7eb",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -8, 0],
              }}
              transition={{
                duration: 0.6,
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: isDarkMode 
                  ? "0 20px 40px rgba(42, 174, 102, 0.3)" 
                  : "0 20px 40px rgba(42, 174, 102, 0.2)",
              }}
            />

            {/* Rotating gradient border effect */}
            <motion.div
              className="absolute -inset-1 rounded-2xl pointer-events-none z-[-1]"
              style={{
                background: `conic-gradient(from 0deg, 
                  ${isDarkMode ? 'rgba(42, 174, 102, 0.4)' : 'rgba(42, 174, 102, 0.3)'}, 
                  transparent 40%, 
                  ${isDarkMode ? 'rgba(42, 174, 102, 0.4)' : 'rgba(42, 174, 102, 0.3)'}, 
                  transparent 80%, 
                  ${isDarkMode ? 'rgba(42, 174, 102, 0.4)' : 'rgba(42, 174, 102, 0.3)'})`,
                filter: 'blur(8px)',
              }}
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>
          <motion.div
            className="w-full py-12 px-2 lg:px-12 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.h1
              className="py-2 font-poppinFont font-bold text-4xl md:text-5xl bg-gradient-to-r from-[#2AAE66] to-[#2bae66] bg-clip-text text-transparent"
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
              className={`text-lg md:text-xl font-poppinFont flex flex-wrap justify-center lg:justify-start mt-4 ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
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
                      className="font-bold text-base text-[#2aae66] transition duration-300 ease-in-out transform hover:text-[#239a55] hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2aae66] focus-visible:rounded"
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
          </motion.div>
        </motion.div>
        {/* About Me Section */}
        <AboutMe />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
