import React, { useContext } from "react";
import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { ThemeContext } from "../context/ThemeContext.jsx";

const bgColors = ["#bde3f8", "#37BCF8", "#f69f4e", "#07ff66", "#94ff8d"];
const Card = (props) => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div id="project-1" className="relative w-full mt-16">
      {/* project 1 starts here 1st part */}

      <div
        className={`
          min-h-[100%] min-w-[100%] max-h-full max-w-full ${props.paddingLeftRight} `}
      >
        <div className="">
          <img
            src={props.projectImg}
            alt=""
            className="rounded-t-[20px] rounded-lg-[20px] lg:rounded-b-[20px] lg:mb-2 lg:shadow-lg"
          />
        </div>
        {/* 2nd part  */}
        <div
          className={`lg:w-[40%] lg:absolute lg:top-1/2 ${
            props.titlePos
          } lg:transform lg:-translate-y-1/2 mb-4 px-4 py-6 shadow-lg drop-shadow-lg rounded-b-[20px] lg:rounded-[20px] lg:border lg:border-solid lg:border-size  ${
            isDarkMode
              ? "bg-dark-background  text-dark-text"
              : "bg-light-background   text-[#1a202c]"
          }`}
        >
          <div className="flex justify-between items-center  ">
            <h1 className="text-3xl  font-nuntinoFont font-bold ">
              {props.title}
            </h1>
            <span className="flex gap-4">
              <a href={props.websiteLink} target="_blank">
                <FiExternalLink className="h-7 w-7 text-green-500" />
              </a>
              <a href={props.gitHubLink} target="_blank">
                <AiFillGithub className="h-7 w-7 text-green-500" />
              </a>
            </span>
          </div>
          <div className="flex flex-wrap gap-2 mt-2 font-bold  text-blue-800  ">
            <span className="px-2  bg-[#5bc6ff] rounded text-sm ">
              {props?.madeWith[0]}
            </span>
            <span className="px-2 bg-[#3efffc] rounded text-sm ">
              {props.madeWith[1]}
            </span>
            <span className="px-2 bg-[#16d760] rounded text-sm ">
              {props.madeWith[2] ? props.madeWith[2] : ""}
            </span>
            {props.madeWith[3] ? (
              <span className="m-w-0 px-2 bg-[#f69f4e] rounded text-sm ">
                {props.madeWith[3]}
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="pt-4 font-poppinFont ">
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

{
  /* {<span className="px-2  bg-[#bde3f8] rounded text-sm ">
   {props.madeWith[0]}
 </span>
 <span className="px-2 bg-[#37BCF8] rounded text-sm ">
   {props.madeWith[1]}
 </span>
 {props.madeWith[2] ? (
   <span className="m-w-0 px-2 bg-[#f69f4e] rounded text-sm ">
     {props.madeWith[2]}
   </span>
 ) : (
   ""
 )}} */
}
