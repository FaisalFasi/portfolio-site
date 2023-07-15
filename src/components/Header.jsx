// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Outlet, Link } from "react-router-dom";

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  let navbarLinks = [
    {
      _name: "Home",
      _link: "/",
    },
    {
      _name: "Projects",
      _link: "/projects",
    },
    {
      _name: "Resume",
      _link: "/resume",
    },
    {
      _name: "Contact",
      _link: "/contact",
    },
  ];

  return (
    // <nav className="w-full fixed bg-[rgba(255,255,255,0.7)]  ">
    <div className=" md:flex items-center p-8 justify-between w-full fixed bg-[rgba(255,255,255,0.7)] ">
      {/* Heading  */}
      <div className=" z-0">
        <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold font-nuntinoFont ">
          Faisal Rehman
        </h1>
      </div>
      {/* hamburger button  */}
      <div
        className="w-7 h-7 z-20 absolute  top-8 right-8 cursor-pointer md:hidden"
        onClick={() => setIsNavbarOpen(!isNavbarOpen)}
      >
        {!isNavbarOpen ? <Bars3BottomRightIcon /> : <XMarkIcon />}
      </div>
      {/* ul list  */}

      <ul
        className={` z-10 md:flex gap-2 md:gap-4 text-center md:items-center p-8 md:p-0 absolute md:static bg-[rgba(255,255,255,0.7)]  md:bg-none  md:z-auto left-0 w-full md:w-auto   transition-all duration-500 ease-out font-nuntinoFont font-extrabold text-lg   ${
          isNavbarOpen ? "top-0 mt-8 md:mt-0" : "top-[-490px]"
        }`}
      >
        {navbarLinks.map((link, index) => {
          return (
            <li key={index} className=" pt-4 md:pt-0">
              <Link to={link._link}> {link._name} </Link>
            </li>
          );
        })}
        <li className="py-4 md:py-0 ">
          <button className=" px-4 py-1 rounded bg-blue-500 text-white font-poppinFont">
            Get Started
          </button>
        </li>
      </ul>
    </div>
    // </nav>
  );
};

export default Header;

{
  /* <ul
className={`w-full md:w-auto md:flex justify-center items-center  text-center  md:gap-4 md:z-auto z-[-1]  font-poppinFont font-bold absolute md:right-8 md:my-6 transition-all duration-500 ease-out 
${isNavbarOpen ? "top-[6]" : "top-[-400px] md:top-[0]"}

`}
> */
}

{
  /* <ul
          className={`md:flex md:items-center gap-4 mx-8 md:my-6 font-poppinFont absolute md:z-auto z-[-1] md:right-0 transition-all duration-500 ease-in-out ${
            isNavbarOpen ? "top-[12]" : "top-[-400px]"
          }`}
        > */
}
{
  /* <ul
          className={`md:flex gap-4 md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-out ${
            isNavbarOpen ? "top-18" : "top-[-490px]"
          }`}
        > */
}
