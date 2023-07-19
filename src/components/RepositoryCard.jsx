import React from "react";

const RepositoryCard = (props) => {
  return (
    <a
      href={props.repo.projectLink}
      target="_blank"
      className="flex flex-col items-start w-full lg:w-[50%] mt-8 px-6 py-4 shadow-lg drop-shadow-lg border border-solid rounded-[8px] hover:-translate-y-1  transition-all duration-200"
    >
      <div className="flex items-center justify-center gap-4">
        <h1 className="font-bold text-lg">{props.repo.title} </h1>
        <span className="text-xs font-bold px-2 py-1 rounded-[8px] text-[#2aae66] bg-[#c4f0d8]">
          {props.repo.language}
        </span>
      </div>
      <p className="mt-2 text-[#4a5567]">{props.repo.description}</p>
    </a>
  );
};

export default RepositoryCard;
{
  /* <a href={props.repo.projectLink} target="_blank"> */
}
