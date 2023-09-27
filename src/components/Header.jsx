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
  };

  useEffect(() => {
    // Add event listener for "resize" event on the window object
    window.addEventListener("resize", checkWindowSize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);
  const handleClickSound = () => {
    const audio = new Audio("/sounds/clickSound.mp3");
    audio.play();
  };

  return (
    <div
      className={`sticky top-0 z-50 flex items-center py-4 px-4 justify-between w-full bg-[rgba(255,255,255,0.98)]  ${
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
      <div className="absolute top-2.5 right-16 ">
        <button
          onClick={() => {
            handleClickSound();
            toggleDarkMode();
          }}
          className={` cursor-pointer md:hidden ${
            isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
          } p-2 active:outline outline-2 outline-blue-400 rounded text-red-300 font-poppinFont `}
        >
          {isDarkMode ? (
            <img
              src="/logos/light-mode.svg"
              alt="change to light mode"
              title="switch to light mode"
              className="w-6 h-6"
            />
          ) : (
            <img
              src="/logos/dark-mode.svg"
              alt="change to dark mode"
              title="switch to dark mode"
              className="w-6 h-6"
            />
          )}
        </button>
      </div>
      {/* hamburger button  */}
      <div
        className={`w-10 h-10 z-20 absolute  top-2.5 right-4 p-2 cursor-pointer md:hidden  rounded active:outline outline-2 outline-blue-400  ${
          isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
        }`}
        onClick={() => setIsNavbarOpen(!isNavbarOpen)}
      >
        {!isNavbarOpen ? <Bars3BottomRightIcon /> : <XMarkIcon />}
      </div>
      {/* ul list  */}
      <ul
        className={` z-10 md:flex gap-2 md:gap-6 text-center md:items-center p-8 md:p-0 absolute md:static  bg-[rgba(255,255,255,0.92)] md:bg-none md:z-auto left-0 w-full md:w-auto transition-all duration-500 ease-out font-nuntinoFont font-extrabold text-lg   ${
          isNavbarOpen ? "h-screen top-0 pt-12 md:mt-8" : "top-[-490px]"
        }   ${
          isDarkMode
            ? " bg-dark-bgFooter text-dark-text"
            : " bg-[#f7fafc] text-light-text"
        }`}
      >
        {navbarLinks.map((link, index) => {
          return (
            <li key={index} className="pt-8 md:pt-0 ">
              <Link
                to={link._link}
                onClick={() => handleNavLinkClick(link._scrollTo)}
                className={`relative before:w-0 before:absolute before:bottom-0 before:border-b-2 ${
                  isDarkMode ? "before:border-white" : "before:border-black"
                } hover:before:w-full before:transition-all before:duration-300`}
              >
                {link._name}
              </Link>
            </li>
          );
        })}
        <li className="pt-8 md:py-0 hidden md:block">
          <button
            onClick={() => {
              handleClickSound();
              toggleDarkMode();
            }}
            className=" p-2  rounded  font-poppinFont hover:outline outline-2 text-red-300 outline-blue-400"
          >
            {isDarkMode ? (
              <img
                src="/logos/light-mode.svg"
                alt="change to light mode"
                title="switch to light mode"
                className="w-6 h-6"
              />
            ) : (
              <img
                src="/logos/dark-mode.svg"
                alt="change to dark mode"
                title="switch to dark mode"
                className="w-6 h-6"
              />
            )}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
