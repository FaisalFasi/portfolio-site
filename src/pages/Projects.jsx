import React, { useContext, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import Card from "../components/Card";
import RepositoryCard from "../components/RepositoryCard";
import { ThemeContext } from "../context/ThemeContext.jsx";
import projectDetails from "../utils/projectDetails.js";
import repositoriesInfo from "./repositoriesInfo.json";
import PaginationRounded from "../components/pagination/Pagination.jsx";
import { motion } from "framer-motion";

const Projects = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const projectsPerPage = 3; // Number of projects per page
  const [currentPage, setCurrentPage] = useState(1); // State for the current page
  // ceil is used to round up to the nearest whole number like 1.1 to 2 and 1.9 to 2
  const totalPages = Math.ceil(projectDetails.length / projectsPerPage); // Total number of pages

  // Get current projects for the current page
  const currentProjects = projectDetails.slice(
    //     (currentPage - 1) * projectsPerPage, will give the starting index of the projects for the current page
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  const handlePageChange = (event, value) => {
    setCurrentPage(value); // Update the page number when pagination is changed
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode
          ? "bg-dark-bgBody text-dark-text"
          : "bg-light-background text-light-text"
      }`}
    >
      <div className="mx-4 md:px-8 xl:px-[10%]">
        {/* My Projects Heading  */}
        <motion.div
          className="pt-16 pb-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="my-4 text-center text-5xl md:text-6xl font-nuntinoFont font-extrabold bg-gradient-to-r from-[#2AAE66] to-[#2bae66] bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="p-2 text-center text-lg md:text-xl font-poppinFont opacity-80">
            A quick collection of my projects.
          </p>
          <div className="mx-auto mt-4 h-[2px] w-24 rounded-full bg-gradient-to-r from-[#2AAE66] via-transparent to-[#2bae66] opacity-60" />
        </motion.div>
        {/* projects section  */}
        <section className="xl:px-[5%]">
          {currentProjects.map((project, index) => {
            return (
              <Card
                key={index}
                index={index}
                project={project}
              />
            );
          })}
        </section>
        {/* Pagination */}
        <div className={`flex justify-center items-center gap-2 py-10`}>
          <span className={isDarkMode ? "text-gray-300" : "text-gray-700"}>Pages:</span>
          <PaginationRounded
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
          />
        </div>
      </div>
      {/* repository section  */}
      <div>
        <motion.div
          className="flex flex-col items-center mt-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="my-4 text-center text-5xl md:text-6xl font-nuntinoFont font-extrabold bg-gradient-to-r from-[#2AAE66] to-[#2bae66] bg-clip-text text-transparent">
            Repositories
          </h1>
          <p className="p-2 text-center text-lg md:text-xl font-poppinFont opacity-80">
            A list of all of the public repositories on my GitHub.
          </p>
          <div className="mx-auto mt-4 h-[2px] w-24 rounded-full bg-gradient-to-r from-[#2AAE66] via-transparent to-[#2bae66] opacity-60" />

          <a
            href="https://github.com/FaisalFasi"
            target="_blank"
            className={`flex items-center mt-6 px-6 py-3 font-extrabold text-xl font-nuntinoFont rounded-xl transition-all duration-200 ${
              isDarkMode
                ? "text-[#2AAE66] hover:bg-gray-800 hover:scale-105"
                : "text-[#2aae66] hover:bg-[#E1F6EB] hover:scale-105"
            }`}
          >
            <AiFillGithub className="w-6 h-6" />
            <span className="px-2">View My Profile</span>
          </a>
        </motion.div>
      </div>
      {/* repository cards */}
      <motion.section
        className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4 mx-6 md:mx-8 mt-8 pb-20 xl:px-[5%]"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        {repositoriesInfo.map((repo, idx) => {
          return <RepositoryCard key={idx} repo={repo} />;
        })}
      </motion.section>
    </div>
  );
};

export default Projects;
