import React from "react";
import { motion } from "framer-motion";

const RepositoryCard = (props) => {
  return (
    <motion.a
      href={props.repo.projectLink}
      target="_blank"
      className="flex flex-col items-start w-full mt-8 px-6 py-4 shadow-xl border border-solid rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, boxShadow: "0 15px 35px rgba(0,0,0,0.12)" }}
      whileTap={{ scale: 0.98 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.25 }}
    >
      <div className="w-full flex items-center justify-between gap-4">
        <h1 className="font-bold text-lg">{props.repo.title} </h1>
        <span className="text-xs font-bold px-2 py-1 rounded-[8px] text-[#3e41ff] bg-[#49ff9b]">
          {props.repo.language}
        </span>
      </div>
      <p className="mt-2 text-[#677287] dark:text-gray-300">{props.repo.description}</p>
    </motion.a>
  );
};

export default RepositoryCard;
