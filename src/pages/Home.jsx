import React, { useContext } from "react";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";
import { ThemeContext } from "../context/ThemeContext";

const technologies = [
  {
    name: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  { name: "React.js", url: "https://react.dev/" },
  { name: "Next.js", url: "https://nextjs.org/" },
  { name: "Node.js", url: "https://nodejs.org/" },
  // { name: "ExpressJS", url: "https://expressjs.com/" },
  { name: "MySQL", url: "https://www.mysql.com/" },
  { name: "MongoDB", url: "https://www.mongodb.com/" },
  // {
  //   name: "HTML5",
  //   url: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
  // },
  // {
  //   name: "CSS3",
  //   url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3",
  // },
  { name: "Tailwind CSS", url: "https://tailwindcss.com/" },
];
const Home = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div
      className={`${
        isDarkMode
          ? "bg-dark-background  text-dark-text"
          : "bg-light-background  text-light-text"
      }`}
    >
      <Header />
      <div id="home" className=" py-10 px-4 md:px-8 lg:px-[5%] xl:px-[15%]">
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <img
            src="/images/my-pic-6.png"
            alt=""
            className="w-60 h-60 rounded-[20px] border border-blue-100"
          />
          <div className="w-full py-12 px-2 lg:px-12 text-center  lg:text-left">
            <h1 className=" py-2  font-poppinFont font-bold text-4xl text-[#5fc094]">
              Hi, I'm Faisal Rehman!
            </h1>
            <p className="text-lg font-poppinFont flex flex-wrap justify-center lg:justify-start">
              I am a Fullstack Developer having 3+ years of experience in
              developing state-of-the-art applications, building great user
              experiences by bringing simplicity to life and constantly
              learning. Skilled in technologies like
              <span className="flex flex-wrap justify-center lg:justify-start items-center">
                {technologies.map((tech, index) => (
                  <React.Fragment key={index}>
                    <a
                      href={tech.url}
                      className="font-bold text-[#2aae66] transition duration-300 ease-in-out transform hover:text-[#5fc094] hover:scale-110"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      &nbsp; {tech.name}
                    </a>
                    {index !== technologies.length - 1 ? "," : "."}
                  </React.Fragment>
                ))}
              </span>
              I am a team player and always looking for new challenges and ways
              to improve myself.
            </p>
          </div>
        </div>
        {/* about me section  */}
        <AboutMe />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
