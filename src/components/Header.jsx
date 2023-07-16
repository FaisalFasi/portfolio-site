// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  let navbarLinks = [
    {
      _name: "Home",
      _link: "/",
      _scrollTo: "top", // Add this property to indicate the link should scroll to the top
    },
    {
      _name: "Projects",
      _link: "/projects",
      _scrollTo: "top",
    },
    {
      _name: "Resume",
      _link: "/resume",
      _scrollTo: "top",
    },
    {
      _name: "Contact",
      _link: "/contact",
      _scrollTo: "top",
    },
  ];

  const handleNavLinkClick = (scrollTo) => {
    if (scrollTo === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    // Add additional handling for other links, if needed
    setIsNavbarOpen(false); // Close the navbar after clicking a link
  };

  return (
    <div className="sticky top-0  z-50 flex items-center py-4 px-6 justify-between w-full   bg-[rgba(255,255,255,0.98)] ">
      {/* Heading  */}
      <div className=" ">
        <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold font-nuntinoFont ">
          Faisal Rehman
        </h1>
      </div>
      {/* hamburger button  */}
      <div
        className="w-7 h-7 z-20 absolute  top-4 right-6 cursor-pointer md:hidden"
        onClick={() => setIsNavbarOpen(!isNavbarOpen)}
      >
        {!isNavbarOpen ? <Bars3BottomRightIcon /> : <XMarkIcon />}
      </div>
      {/* ul list  */}
      <ul
        className={` z-10 md:flex gap-2 md:gap-4 text-center md:items-center p-8 md:p-0 absolute md:static bg-[rgba(255,255,255,0.7)]  md:bg-none  md:z-auto left-0 w-full   md:w-auto   transition-all duration-500 ease-out font-nuntinoFont font-extrabold text-lg   ${
          isNavbarOpen ? "h-screen top-0 mt-8 md:mt-0" : "top-[-490px]"
        }`}
      >
        {navbarLinks.map((link, index) => {
          return (
            <li key={index} className=" pt-4 md:pt-0">
              <Link
                to={link._link}
                onClick={() => handleNavLinkClick(link._scrollTo)}
              >
                {link._name}{" "}
              </Link>
            </li>
          );
        })}
        {/* <li className="py-4 md:py-0 ">
          <button className=" px-4 py-1 rounded bg-blue-500 text-white font-poppinFont">
            Get Started
          </button>
        </li> */}
      </ul>
    </div>
    // </nav>
  );
};

export default Header;
