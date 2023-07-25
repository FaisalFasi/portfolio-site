import React, { useContext } from "react";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";
import { ThemeContext } from "../context/ThemeContext";

{
  /* <Link to={"/"}>Home</Link> */
}
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
      <div id="projects" className=" py-10 px-6 md:px-[15%] lg:px[20%]">
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
            {/* <p className="  text-lg font-poppinFont "> */}
            <p className="text-lg font-poppinFont flex flex-wrap justify-center lg:justify-start">
              I am a Frontend Developer having 2+ years of experience in
              developing state-of-the-art applications, building great user
              experiences by bringing simplicity to life and constantly
              learning. Skilled in technologies like
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                className="font-bold text-[#2aae66] whitespace-pre"
              >
                &nbsp; Javascript
              </a>
              ,
              <a
                href="https://react.dev/"
                className="font-bold text-[#2aae66] whitespace-pre  "
              >
                &nbsp; React js
              </a>
              ,
              <a
                href="https://expressjs.com/"
                className="font-bold text-[#2aae66] whitespace-pre "
              >
                &nbsp; Express
              </a>
              ,
              <a
                href="https://pugjs.org/api/getting-started.html"
                className="font-bold text-[#2aae66] whitespace-pre "
              >
                &nbsp; PUG js&nbsp;
              </a>
              .&nbsp; I am a team player and always looking for new challenges
              and ways to improve myself.
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
