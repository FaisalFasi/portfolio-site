import React from "react";
import { FiExternalLink } from "react-icons/fi";

const Card = (props) => {
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
          className={`lg:w-[40%] lg:absolute lg:top-1/2 ${props.titlePos} lg:transform lg:-translate-y-1/2 mb-4 px-4 py-6 shadow-lg drop-shadow-lg rounded-b-[20px] lg:rounded-[20px] lg:border lg:border-solid lg:border-size   bg-white `}
        >
          <div className="flex justify-between items-center  ">
            <h1 className="text-3xl  font-nuntinoFont font-bold  text-[#1a202c]">
              {props.title}
            </h1>
            <FiExternalLink className="h-7 w-7 text-green-500" />
          </div>
          <div className="flex gap-2 mt-2 font-bold ">
            <span className="px-2  bg-[#bde3f8] rounded text-sm   ">
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
            )}
          </div>
          <div className="pt-4 font-poppinFont  text-[#1a202c] ">
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
