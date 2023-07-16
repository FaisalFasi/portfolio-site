import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { FiExternalLink } from "react-icons/fi";

{
  /* <Link to={"/"}>Projects</Link> */
}
const Projects = () => {
  return (
    <div className=" h-full">
      <Header />
      <div className="mx-8">
        {/* my project Heading  */}
        <div className="mt-12">
          <h1 className="my-2 text-center text-6xl font-nuntinoFont font-extrabold text-[#1a202c]">
            My Projects
          </h1>
          <p className="p-2 text-center text-[#1a202c] font-poppinFont">
            A quick collection of my projects.
          </p>
        </div>
        {/* project 1 starts here 1st part */}
        <div id="project-1" className="relative w-full">
          <div className="min-h-[100%] min-w-[100%] max-h-full max-w-full lg:pl-[15%] lg:pr-24 ">
            <div className="mt-12">
              <img
                src="/images/img-1.png"
                alt=""
                className="rounded-t-[20px] rounded-lg-[20px] lg:rounded-b-[20px] lg:mb-2 lg:shadow-lg"
              />
            </div>
            {/* 2nd part  */}
            <div className="lg:w-[40%]  lg:absolute lg:top-1/2 lg:left-0 lg:transform lg:-translate-y-1/2 mb-4 px-4 py-6 shadow-lg drop-shadow-lg rounded-b-[20px] lg:rounded-[20px] lg:border lg:border-solid lg:border-size   bg-white  ">
              <div className="flex justify-between items-center  ">
                <h1 className="text-3xl  font-nuntinoFont font-bold  text-[#1a202c]">
                  Portfolio Site
                </h1>
                <FiExternalLink className="h-7 w-7 text-green-500" />
              </div>
              <div className="flex gap-2 mt-2 font-bold ">
                <span className="px-2  bg-[#bde3f8] rounded text-sm   ">
                  React
                </span>
                <span className="px-2 bg-[#37BCF8] rounded text-sm ">
                  Tailwind
                </span>
              </div>
              <div className="pt-4 font-poppinFont  text-[#1a202c] ">
                <p>
                  A Progressive Web App (PWA) to showcase my resume, skills and
                  to share my experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
