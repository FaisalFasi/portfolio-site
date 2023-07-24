// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useContext } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext.jsx";

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
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

  // check when window size is greater then medium
  const checkWindowSize = () => {
    if (window.innerWidth > 768) {
      setIsNavbarOpen(false);
    }
    // setIsNavbarOpen(window.innerWidth < 768); // 768px is the breakpoint for medium size, adjust as needed
  };

  useEffect(() => {
    // Add event listener for "resize" event on the window object
    window.addEventListener("resize", checkWindowSize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  return (
    <div
      className={`sticky top-0  z-50 flex items-center py-4 px-4 justify-between w-full bg-[rgba(255,255,255,0.98)]  ${
        isDarkMode
          ? " bg-dark-bgFooter text-dark-text"
          : " bg-[#f7fafc] text-light-text"
      }`}
    >
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
        className={` z-10 md:flex gap-2 md:gap-4 text-center md:items-center p-8 md:p-0 absolute md:static  bg-[rgba(255,255,255,0.92)]  md:bg-none  md:z-auto left-0 w-full   md:w-auto   transition-all duration-500 ease-out font-nuntinoFont font-extrabold text-lg   ${
          isNavbarOpen ? "h-screen top-0 pt-12 md:mt-8" : "top-[-490px]"
        }   ${
          isDarkMode
            ? " bg-dark-bgFooter text-dark-text"
            : " bg-[#f7fafc] text-light-text"
        }`}
      >
        {navbarLinks.map((link, index) => {
          return (
            <li key={index} className=" pt-8 md:pt-0">
              <Link
                to={link._link}
                onClick={() => handleNavLinkClick(link._scrollTo)}
              >
                {link._name}
              </Link>
            </li>
          );
        })}
        <li className="pt-8 md:py-0 ">
          <button
            onClick={toggleDarkMode}
            className=" px-4 py-1 rounded bg-blue-500 text-white font-poppinFont"
          >
            {isDarkMode ? "Dark" : "Light"}
          </button>
        </li>
      </ul>
    </div>
    // </nav>
  );
};

export default Header;
