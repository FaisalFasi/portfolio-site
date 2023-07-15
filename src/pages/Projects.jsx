import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Projects = () => {
  return (
    <div>
      <Header />
      <div>
        <Link to={"/"}>Projects</Link>
      </div>
    </div>
  );
};

export default Projects;
