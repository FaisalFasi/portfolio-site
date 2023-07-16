import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
const Home = () => {
  return (
    <div>
      <Header />
      <Link to={"/"}>Home</Link>
      <div id="projects" className=" mx-[50%]">
        {/* <Link to={"/"}>Projects</Link> */}
        <h1>Hello World</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
          excepturi necessitatibus obcaecati id nisi fugiat fuga suscipit fugit
          recusandae doloremque! Ut sunt ipsa, cumque libero aperiam quod quis
          vitae enim.
        </p>
      </div>
    </div>
  );
};

export default Home;
