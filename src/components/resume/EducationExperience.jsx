import React from "react";
import { education, experiences } from "../../utils/ResumeInfo";

const EducationExperience = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-20 md:flex-row md:justify-center my-12">
      {" "}
      {/* Education  */}
      <div className=" ">
        <div>
          <h1 className=" my-2 text-center md:text-left text-3xl font-nuntinoFont font-extrabold  ">
            Education
          </h1>
        </div>
        <div>
          <ul className="border-l-4 border-l-indigo-100 ">
            {" "}
            {education.map((item, index) => (
              <li
                key={index}
                className="relative left-0 top-[50%] pl-4 pb-4"
                style={{ borderLeftWidth: "50%" }}
              >
                <h1 className="font-bold my-2">
                  {item.title} ({item.duration})
                </h1>
                <i>{item.location}</i>
                <p className="">{item.description}</p>
                <span className="absolute top-1 left-[-10px] w-4 h-4 bg-green-700 rounded-full"></span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Experience  */}
      <div className="  ">
        <div>
          <h1 className=" my-2 text-center md:text-left text-3xl font-nuntinoFont font-extrabold  ">
            Experience
          </h1>
        </div>
        <div>
          <ul className="border-l-4 top-[50%] border-l-indigo-100">
            {experiences.map((experience, index) => (
              <li
                key={index}
                className="relative left-0 top-[50%] pl-4 pb-4"
                style={{ borderLeftWidth: "50%" }}
              >
                <h1 className="font-bold my-2">{experience.title}</h1>
                <i>{experience.location}</i>
                <p className="">{experience.description}</p>
                <span className="absolute top-1 left-[-10px] w-4 h-4 bg-green-700 rounded-full"></span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EducationExperience;
