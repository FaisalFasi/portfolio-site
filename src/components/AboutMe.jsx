import React from "react";
import { Typewriter } from "react-simple-typewriter";

const AboutMe = () => {
  return (
    <div>
      <div className=" relative flex justify-center items-center h-10 mt-4 bg-[#D9D9D9] rounded-t-[20px]">
        <div className="w-full absolute flex justify-start items-center z-1 px-6  gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full "></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-600 rounded-full"></div>
        </div>

        <p className="pl-4 sm:pl-0">
          <Typewriter
            words={[" Executed: introduceSelf.js"]}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={30}
            deleteSpeed={10}
            delaySpeed={1000}
          />
        </p>
      </div>
      <div className="bg-[#EBEBEB]  rounded-b-[20px] p-6 font-nuntinoFont">
        <div>
          <h1>
            <b className="text-[#718096]"> {">"}</b> &nbsp; learnAboutMe()
          </h1>
          <p className="py-2  font-poppinFont text-[#718096]">
            Loading data...
          </p>
          <h1>
            <b className="text-[#718096]"> {">"}</b> &nbsp; currentLocation
          </h1>
          <p className=" py-2  font-nuntinoFont text-[#718096]">
            "Berlin, Germany"
          </p>

          <h1>
            <b className="text-[#718096]"> {">"}</b> &nbsp; interests
          </h1>
          <p className="  py-2 font-nuntinoFont text-[#718096]">
            ["Web Development", "Travelling", "Gaming", "Photography"]
          </p>

          <h1>
            <b className="text-[#718096]"> {">"}</b> &nbsp; education
          </h1>
          <p className="  py-2 font-nuntinoFont text-[#718096]">
            "Bachelor of Science in Computer Science - Hajvery University
            Lahore"
          </p>

          <h1>
            <b className="text-[#718096]"> {">"}</b> &nbsp; skills
          </h1>
          <p className="  py-2 font-nuntinoFont text-[#718096]">
            ["Laravel", "Node", "Express", "React", "Vue", "Wordpress"]
          </p>

          <h1>
            <b className="text-[#718096]"> {">"}</b> &nbsp; contactMe
          </h1>
          <p className="  py-2 font-nuntinoFont text-[#718096]">
            [
            <span className="text-[#2aae66]">
              &nbsp; "Github", &nbsp; "FaceBook", &nbsp; "LinkedIn", &nbsp;
              "Instagram" &nbsp;
            </span>
            ]
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
