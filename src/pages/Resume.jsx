import React, { useContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FiDownload } from "react-icons/fi";
import { ThemeContext } from "../context/ThemeContext";

const Resume = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div
      className={` h-full ${
        isDarkMode
          ? "bg-dark-background  text-dark-text"
          : "bg-light-background  text-[#1a202c]"
      }`}
    >
      <Header />
      <div className="mx-8">
        {/* my project Heading  */}
        <div className="mt-12">
          <h1 className=" my-2 text-center text-5xl font-nuntinoFont font-extrabold ">
            Resume
          </h1>
          <p className="p-2 text-center  font-poppinFont">
            My Education, Experience and Skills.
          </p>
        </div>
        {/* experience section  */}
        <div className="flex flex-col gap-4 md:gap-20 md:flex-row md:justify-center my-12">
          <div className="  ">
            <div>
              <h1 className=" my-2 text-center md:text-left text-3xl font-nuntinoFont font-extrabold  ">
                Experience
              </h1>
            </div>
            <div>
              <ul className="border-l-4 top-[50%] border-l-indigo-100">
                <li
                  className="relative left-0  top-[50%] pl-4 pb-4"
                  style={{ borderLeftWidth: "50%" }}
                >
                  <h1 className="  font-bold my-2">
                    Epapa (Oct 2021 - Feb 2022)
                  </h1>
                  <i>Berlin, Berlin, Germany</i>
                  <p className="">Frontend Developer - React (Internship)</p>
                  <span className=" absolute top-1 left-[-10px] w-4 h-4  bg-green-700 rounded-full"></span>
                </li>
                <li
                  className="relative left-0  top-[50%] pl-4 pb-4"
                  style={{ borderLeftWidth: "50%" }}
                >
                  <h1 className="font-bold my-2">
                    Upwork (Feb 2020 - Sep 2021)
                  </h1>
                  <i>Berlin, Berlin, Germany</i>
                  <p className="">Freelance Game Developer</p>
                  <span className=" absolute top-1 left-[-10px] w-4 h-4  bg-green-700 rounded-full"></span>
                </li>
                <li
                  className="relative left-0  top-[50%] pl-4 pb-4"
                  style={{ borderLeftWidth: "50%" }}
                >
                  <h1 className="font-bold my-2">
                    BlueHorn Technology (Sep 2017 - Aug 2019)
                  </h1>
                  <i>Lahore, Punjab, Pakistan</i>
                  <p className="">Unity Game Developer</p>
                  <span className=" absolute top-1 left-[-10px] w-4 h-4  bg-green-700 rounded-full"></span>
                </li>
              </ul>
            </div>
          </div>
          <div className=" ">
            <div>
              <h1 className=" my-2 text-center md:text-left text-3xl font-nuntinoFont font-extrabold text-[#1a202c] ">
                Education
              </h1>
            </div>
            <div>
              <ul className="border-l-4 border-l-indigo-100 ">
                <li
                  className="relative left-0  top-[50%] pl-4 pb-4 "
                  style={{ borderLeftWidth: "50%" }}
                >
                  <h1 className="  font-bold my-2">
                    BIT (Beam Institute of Technology) (Nov 2022 - Current)
                  </h1>
                  <i>Berlin, Berlin, Germany</i>
                  <p className="">Web Development</p>
                  <span className=" absolute top-1 left-[-10px] w-4 h-4  bg-green-700 rounded-full"></span>
                </li>
                <li
                  className="relative left-0  top-[50%] pl-4 pb-4 "
                  style={{ borderLeftWidth: "50%" }}
                >
                  <h1 className="  font-bold my-2">
                    Hajvery University Lahore,(Nov 2013 - May 2017)
                  </h1>
                  <i>Lahore, Punjab, Pakistan</i>
                  <p className="">Bachelors in Computer Science (BSCS)</p>
                  <span className=" absolute top-1 left-[-10px] w-4 h-4  bg-green-700 rounded-full"></span>
                </li>
                <li
                  className="relative left-0  top-[50%] pl-4 pb-4"
                  style={{ borderLeftWidth: "50%" }}
                >
                  <h1 className="font-bold my-2">
                    Govt. College Shalimar(Jun 2011 - Apr 2013)
                  </h1>
                  <i>Lahore, Punjab, Pakistan</i>
                  <p className="">Intermediate (ICS )</p>
                  <span className=" absolute top-1 left-[-10px] w-4 h-4  bg-green-700 rounded-full"></span>
                </li>
                <li
                  className="relative left-0  top-[50%] pl-4 pb-4"
                  style={{ borderLeftWidth: "50%" }}
                >
                  <h1 className="font-bold my-2">
                    Govt. Comprehensive School (Sep 2009 - May 2011)
                  </h1>
                  <i>Lahore, Punjab, Pakistan</i>
                  <p className="">Matriculation (Science)</p>
                  <span className=" absolute top-1 left-[-10px] w-4 h-4  bg-green-700 rounded-full"></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* skills section */}
        <div>
          <div className="mb-10">
            <h1 className=" my-2 text-center  text-3xl font-nuntinoFont font-extrabold text-[#1a202c] ">
              Skills
            </h1>
          </div>
          <div className=" ">
            <div className="flex flex-wrap justify-center gap-20 mx-[15%] md:mx-[20%]">
              <img
                src="/logos/html-5.svg"
                alt="HTML"
                className="w-16 h-16"
                title="HTML"
              />
              <img
                src="/logos/css-3.svg"
                alt="CSS3"
                className="w-16 h-16"
                title="CSS3"
              />
              <img
                src="/logos/js.svg"
                alt="JS"
                className="w-16 h-16"
                title="JS"
              />
              <img
                src="/logos/react.svg"
                alt="REACT"
                className="w-16 h-16"
                title="REACT"
              />
              <img
                src="/logos/node.svg"
                alt="NODE"
                className="w-16 h-16"
                title="NODE"
              />
              <img
                src="/logos/pug.svg"
                alt="PUG"
                className="w-16 h-16"
                title="PUG"
              />
            </div>
          </div>
          <div className="pt-10 mb-20 flex justify-center">
            <a
              href="/cv/CV - Faisal Rehman.pdf"
              className="flex items-center gap-2 font-bold text-white px-6 py-3 rounded-[10px] bg-[#2bae66] hover:opacity-80  cursor-pointer"
              download="Faisal Rehman CV"
            >
              Download Resume <FiDownload />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resume;

{
  /* <div className="relative pl-4 border-l-2 border-l-indigo-100">
              <span className=" absolute top-0 left-[-7px] w-3 h-3 bg-green-700 rounded-full"></span>
              <h1 className="font-bold">Studydrive (Dec 2022 - Current)</h1>
              <i>Berlin, Berlin, Germany</i>
              <p>Software Engineer (Full Time)</p>
              <span className=" absolute bottom-0 left-[-7px] w-3 h-3 bg-green-700 rounded-full"></span>
            </div> */
}

{
  /* <li
                className="absolute left-0 border-l-4 border-l-indigo-100 top-[50%] pl-4 "
                style={{ borderLeftWidth: "50%" }}
              >
                <h1 className="  font-bold">Studydrive (Dec 2022 - Current)</h1>
                <i>Berlin, Berlin, Germany</i>
                <p>Software Engineer (Full Time)</p>
              </li> */
}
