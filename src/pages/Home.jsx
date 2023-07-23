import React from "react";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";
{
  /* <Link to={"/"}>Home</Link> */
}
const Home = () => {
  return (
    <div>
      <Header />
      <div id="projects" className=" py-10 px-20 md:px-[15%] lg:px[20%]">
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <img
            src="/images/my-pic-6.png"
            alt=""
            className="w-60 h-60 rounded-[20px] border border-blue-100"
          />
          <div className=" py-12 lg:px-12 text-center  lg:text-left">
            <h1 className=" py-2  font-poppinFont font-bold text-4xl text-[#2C787D]">
              Hi, I'm Faisal Rehman!
            </h1>
            <p className="text-lg font-poppinFont ">
              I am a Frontend Developer having 2+ years of experience in
              developing state-of-the-art applications, building great user
              experiences by bringing simplicity to life and constantly
              learning. Skilled in technologies{" "}
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                className="font-bold text-[#2aae66] whitespace-pre"
              >
                Javascript &nbsp;
              </a>
              ,
              <a
                href="https://react.dev/"
                className="font-bold text-[#2aae66] whitespace-pre"
              >
                React js &nbsp;
              </a>
              ,
              <a
                href="https://expressjs.com/"
                className="font-bold text-[#2aae66] whitespace-pre"
              >
                Express &nbsp;
              </a>
              ,
              <a
                href="https://pugjs.org/api/getting-started.html"
                className="font-bold text-[#2aae66] whitespace-pre"
              >
                PUG js&nbsp;
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
