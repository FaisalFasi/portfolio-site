import React, { useContext } from "react";
import Header from "../components/Header";
import { AiFillGithub } from "react-icons/ai";
import Card from "../components/Card";
import RepositoryCard from "../components/RepositoryCard";
import Footer from "../components/Footer";
import { ThemeContext } from "../context/ThemeContext.jsx";

{
  /* <Link to={"/"}>Projects</Link> */
}
const projectDetails = [
  {
    title: "Portfolio Site",
    madeWith: ["HTML5", "BootStrap v5"],
    description:
      "Welcome to my portfolio website, a showcase of my diverse skills and passion for web development where you can discover my projects and expertise in front-end and UI/UX..",
    projectImg: "/images/portfolio-img.png",
    paddingLeftRight: "lg:pl-[15%] lg:pr-24",
    titlePos: "lg:left-0",
    websiteLink: "https://faisalrehman-portfolio.netlify.app",
    gitHubLink: "https://github.com/FaisalFasi/portfolio-site",
  },
  {
    title: "Netflix Clone",
    madeWith: ["React", "TMDB Api", "FireBase"],
    description:
      "Discover your favorite movies and shows on my Netflix clone,providing a responsive and visually appealing platform for endless entertainment at your fingertips",
    projectImg: "/images/netflix-img.png",
    paddingLeftRight: "lg:pr-[15%] lg:pl-24",
    titlePos: "lg:right-0",
    websiteLink: "https://netflix-clone-version-0.netlify.app",
    gitHubLink: "https://github.com/FaisalFasi/react-netflix-clone-project",
  },
  {
    title: "TODO APP",
    madeWith: ["React", "Tailwind"],
    description:
      "A simple and intuitive todo app to help you organize tasks and stay productive, with the ability to add, delete, and mark tasks as complete",
    projectImg: "/images/todoApp-img.png",
    paddingLeftRight: "lg:pl-[15%] lg:pr-24",
    titlePos: "lg:left-0",
    websiteLink: "https://faisalrehman-todoapp.netlify.app/",
    gitHubLink: "https://github.com/FaisalFasi/react-todo-list-project",
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
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div
      className={` h-full   ${
        isDarkMode
          ? " bg-dark-bgBody text-dark-text"
          : " bg-light-background text-light-text"
      }`}
    >
      <Header />
      <div className="mx-8">
        {/* my project Heading  */}
        <div
          className={`mt-12${
            isDarkMode
              ? " bg-dark-bgBody text-dark-text"
              : " bg-light-background text-light-text"
          }`}
        >
          <h1 className="my-2 text-center text-5xl font-nuntinoFont font-extrabold  ">
            My Projects
          </h1>
          <p className="p-2 text-center   font-poppinFont">
            A quick collection of my projects.
          </p>
        </div>
        {/* projects section  */}
        {projectDetails.map((project, index) => {
          return (
            <Card
              key={index}
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
        <div
          className={`flex  flex-col items-center mt-20 ${
            isDarkMode
              ? " bg-dark-bgBody text-dark-text"
              : " bg-light-background text-[#1a202c]"
          }`}
        >
          <h1 className="my-2 text-center text-5xl font-nuntinoFont font-extrabold ">
            Repositories
          </h1>
          <p className="p-2 text-center   font-poppinFont">
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
        {repositoriesInfo.map((repo, idx) => {
          return <RepositoryCard key={idx} repo={repo} />;
        })}
      </div>
      {/* footer section */}
      <Footer />
    </div>
  );
};

export default Projects;
