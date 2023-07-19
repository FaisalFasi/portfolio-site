import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { DiReact } from "react-icons/di";
import { BiLogoTailwindCss } from "react-icons/bi";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";

import Card from "../components/Card";
import RepositoryCard from "../components/RepositoryCard";
{
  /* <Link to={"/"}>Projects</Link> */
}
const projectDetails = [
  {
    title: "Portfolio Site",
    madeWith: ["HTML5", "BootStrap v5"],
    description:
      "A Progressive Web App (PWA) to showcase my resume, skills and to share my experiences.",
    projectImg: "/images/img-1.png",
    paddingLeftRight: "lg:pl-[15%] lg:pr-24",
    titlePos: "lg:left-0",
    websiteLink: "https://faisalrehman.netlify.app",
    gitHubLink: "https://github.com/FaisalFasi/Faisal-Rehman-Portfolio",
  },
  {
    title: "Netflix Clone",
    madeWith: ["React", "TMDB Api", "FireBase"],
    description:
      "A Progressive Web App (PWA) to showcase my resume, skills and to share my experiences.",
    projectImg: "/images/img-2.png",
    paddingLeftRight: "lg:pr-[15%] lg:pl-24",
    titlePos: "lg:right-0",
    websiteLink: "https://netflix-clone-version-0.netlify.app",
    gitHubLink: "https://github.com/FaisalFasi/react-netflix-clone-project",
  },
  {
    title: "Qwerty Friend",
    madeWith: ["React", "Tailwind"],
    description:
      "A Progressive Web App (PWA) to showcase my resume, skills and to share my experiences.",
    projectImg: "/images/img-3.png",
    paddingLeftRight: "lg:pr-[15%] lg:pl-24",
    titlePos: "lg:left-0",
    websiteLink: "https://qwerty-friend.netlify.app",
    gitHubLink: "https://github.com/FaisalFasi/qwerty-friend",
  },
];

const repositoriesInfo = [
  {
    title: "Portfolio",
    language: "ReactJS",
    description: "Personal website build with ReactJS and Tailwind CSS.",
    projectLink: "https://github.com/FaisalFasi/Faisal-Rehman-Portfolio",
  },
  {
    title: "Piano App",
    language: "ReactJS",
    description: "Piano app build with ReactJS and Tailwind CSS.",
    projectLink: "https://github.com/FaisalFasi/react-piano-project",
  },
];

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
        {/* projects section  */}
        {projectDetails.map((project) => {
          return (
            <Card
              title={project.title}
              madeWith={project.madeWith}
              description={project.description}
              projectImg={project.projectImg}
              paddingLeftRight={project.paddingLeftRight}
              titlePos={project.titlePos}
              websiteLink={project.websiteLink}
              gitHubLink={project.gitHubLink}
            />
          );
        })}
      </div>
      {/* repository section  */}
      <div>
        <div className="flex  flex-col items-center mt-20">
          <h1 className="my-2 text-center text-5xl font-nuntinoFont font-extrabold text-[#1a202c]">
            Repositories
          </h1>
          <p className="p-2 text-center text-[#1a202c] font-poppinFont">
            A list of all of the public repositories on my GitHub.
          </p>

          <a
            href="https://github.com/FaisalFasi"
            target="_blank"
            className="flex items-center mt-6 px-6 py-2 text-[#2aae66] font-extrabold text-xl font-nuntinoFont rounded hover:bg-[#E1F6EB]"
          >
            <AiFillGithub className="w-5 h-5" />
            <span className="px-2 ">View My Profile</span>
          </a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-0 md:gap-12 mx-6 md:mx-8 lg:mx-20 mt-8 mb-20">
        {repositoriesInfo.map((repo) => {
          return <RepositoryCard repo={repo} />;
        })}
      </div>
      <div className="">
        <div className="flex flex-col md:flex-row items-center md:justify-between  px-8   py-6 bg-[#f7fafc] ">
          <p className="mt-6">© 2023 Faisal Rehman</p>
          <div className="flex items-center mt-6">
            <span> {"Built with: "}</span>
            <pre> </pre>
            <a href="https://react.dev/" className="mx-1 bg-black rounded-full">
              <DiReact className="text-white " />
            </a>
            /
            <a
              href="https://tailwindcss.com/"
              className="mx-1 bg-black rounded-full"
            >
              <BiLogoTailwindCss className="text-white" />
            </a>
          </div>
          <div className="flex mt-6">
            <a
              href="https://github.com/FaisalFasi"
              target="_blank"
              title="GitHub"
              className="bg-gray-200 p-2 rounded-full mr-4 hover:bg-gray-400 "
            >
              <AiFillGithub className="w-5 h-5 " />
            </a>
            <a
              href="https://www.linkedin.com/in/faisalrehman18/"
              target="_blank"
              title="LinkedIn"
              className="bg-gray-200 p-2 rounded-full mr-4 hover:bg-gray-400"
            >
              <AiFillLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/faisalfasi18/"
              target="_blank"
              title="Instagram"
              className="bg-gray-200 p-2 rounded-full mr-4 hover:bg-gray-400"
            >
              <AiOutlineInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/faisalfasi18"
              target="_blank"
              title="Facebook"
              className="bg-gray-200 p-2 rounded-full mr-4 hover:bg-gray-400"
            >
              <AiFillFacebook className="w-5 h-5" />
            </a>
          </div>
          {/* // add icons here */}
        </div>
      </div>
    </div>
  );
};

export default Projects;

{
  /* <div className="mx-8"> */
}
{
  /* my project Heading  */
}
{
  /* <div className="mt-12">
  <h1 className="my-2 text-center text-6xl font-nuntinoFont font-extrabold text-[#1a202c]">
    My Projects
  </h1>
  <p className="p-2 text-center text-[#1a202c] font-poppinFont">
    A quick collection of my projects.
  </p>
</div> */
}
{
  /* project 1 starts here 1st part */
}
{
  /* <div id="project-1" className="relative w-full">
  <div className="min-h-[100%] min-w-[100%] max-h-full max-w-full lg:pl-[15%] lg:pr-24 ">
    <div className="mt-12">
      <img
        src="/images/img-1.png"
        alt=""
        className="rounded-t-[20px] rounded-lg-[20px] lg:rounded-b-[20px] lg:mb-2 lg:shadow-lg"
      />
    </div>
    {/* 2nd part  */
}
//     <div className="lg:w-[40%]  lg:absolute lg:top-1/2 lg:left-0 lg:transform lg:-translate-y-1/2 mb-4 px-4 py-6 shadow-lg drop-shadow-lg rounded-b-[20px] lg:rounded-[20px] lg:border lg:border-solid lg:border-size   bg-white  ">
//       <div className="flex justify-between items-center  ">
//         <h1 className="text-3xl  font-nuntinoFont font-bold  text-[#1a202c]">
//           Portfolio Site
//         </h1>
//         <FiExternalLink className="h-7 w-7 text-green-500" />
//       </div>
//       <div className="flex gap-2 mt-2 font-bold ">
//         <span className="px-2  bg-[#bde3f8] rounded text-sm   ">
//           React
//         </span>
//         <span className="px-2 bg-[#37BCF8] rounded text-sm ">
//           Tailwind
//         </span>
//       </div>
//       <div className="pt-4 font-poppinFont  text-[#1a202c] ">
//         <p>
//           A Progressive Web App (PWA) to showcase my resume, skills and
//           to share my experiences.
//         </p>
//       </div>
//     </div>
//   </div>
// </div>
// </div> */}
