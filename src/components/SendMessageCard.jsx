import React, { useState, useRef, useContext } from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail, MdLocationPin } from "react-icons/md";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiFillFacebook,
  AiTwotoneMail,
} from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../context/ThemeContext";

const SendMessageCard = () => {
  const form = useRef();
  const [sentMessage, setSentMessage] = useState(false);
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setSentMessage(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="mx-4 md:mx-[10%] lg:mx-[20%] my-10">
      <div
        className={`${
          isDarkMode
            ? "bg-dark-bgHeaderAboutMe text-dark-text shadow-2xl shadow-gray-900/50"
            : "bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 shadow-2xl shadow-gray-300/50"
        } transition-all duration-300 flex justify-between flex-col md:flex-row p-6 md:p-12 rounded-2xl border ${
          isDarkMode ? "border-gray-700" : "border-gray-200"
        }`}
      >
        <div className="md:w-1/2 md:pr-8">
          <div className={`font-nuntinoFont ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-3 bg-gradient-to-r from-[#2AAE66] to-[#2bae66] bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className={`my-2 text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              Fill up the form to contact me
            </p>
          </div>
          <div className={`flex flex-col py-8 font-semibold font-nuntinoFont ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>
            <a
              href="tel:+491781633786"
              className={`group w-fit flex items-center gap-4 px-4 py-3 mb-4 rounded-xl transition-all duration-200 ${
                isDarkMode
                  ? "hover:bg-gray-700/50 hover:text-[#2AAE66]"
                  : "hover:bg-white hover:text-[#2AAE66] hover:shadow-md"
              }`}
            >
              <BsTelephoneFill className="w-5 h-5 transition-transform group-hover:scale-110" />
              <span>+491781633786</span>
            </a>
            <a
              href="mailto:faisalfasi18@gmail.com"
              target="_blank"
              className={`group w-fit flex items-center gap-4 px-4 py-3 mb-4 rounded-xl transition-all duration-200 ${
                isDarkMode
                  ? "hover:bg-gray-700/50 hover:text-[#2AAE66]"
                  : "hover:bg-white hover:text-[#2AAE66] hover:shadow-md"
              }`}
            >
              <MdEmail className="w-5 h-5 transition-transform group-hover:scale-110" />
              <span className="break-all">faisalfasi18@gmail.com</span>
            </a>
            <a
              href="https://goo.gl/maps/b7bSKRs1MXrFnzpQA"
              target="_blank"
              className={`group w-fit flex items-center gap-4 px-4 py-3 mb-4 rounded-xl transition-all duration-200 ${
                isDarkMode
                  ? "hover:bg-gray-700/50 hover:text-[#2AAE66]"
                  : "hover:bg-white hover:text-[#2AAE66] hover:shadow-md"
              }`}
            >
              <MdLocationPin className="w-6 h-6 transition-transform group-hover:scale-110" />
              <span>Berlin, Germany</span>
            </a>
          </div>
          <div>
            <p className={`mb-4 font-semibold ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              Follow me on
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/FaisalFasi"
                target="_blank"
                title="GitHub"
                className={`p-3 rounded-full transition-all duration-200 ${
                  isDarkMode
                    ? "text-gray-300 hover:bg-[#2AAE66] hover:text-white hover:scale-110"
                    : "text-gray-600 hover:bg-[#2AAE66] hover:text-white hover:scale-110 hover:shadow-md"
                }`}
              >
                <AiFillGithub className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/faisalrehman18/"
                target="_blank"
                title="LinkedIn"
                className={`p-3 rounded-full transition-all duration-200 ${
                  isDarkMode
                    ? "text-gray-300 hover:bg-[#2AAE66] hover:text-white hover:scale-110"
                    : "text-gray-600 hover:bg-[#2AAE66] hover:text-white hover:scale-110 hover:shadow-md"
                }`}
              >
                <AiFillLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/faisalfasi18/"
                target="_blank"
                title="Instagram"
                className={`p-3 rounded-full transition-all duration-200 ${
                  isDarkMode
                    ? "text-gray-300 hover:bg-[#2AAE66] hover:text-white hover:scale-110"
                    : "text-gray-600 hover:bg-[#2AAE66] hover:text-white hover:scale-110 hover:shadow-md"
                }`}
              >
                <AiOutlineInstagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/faisalfasi18"
                target="_blank"
                title="Facebook"
                className={`p-3 rounded-full transition-all duration-200 ${
                  isDarkMode
                    ? "text-gray-300 hover:bg-[#2AAE66] hover:text-white hover:scale-110"
                    : "text-gray-600 hover:bg-[#2AAE66] hover:text-white hover:scale-110 hover:shadow-md"
                }`}
              >
                <AiFillFacebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Send message section */}
        {!sentMessage ? (
          <form
            ref={form}
            onSubmit={sendEmail}
            className={`${
              isDarkMode
                ? "bg-gray-800/80 backdrop-blur-sm text-dark-text border-gray-700"
                : "bg-white text-gray-900 border-gray-200 shadow-lg"
            } mt-12 md:mt-0 w-full md:w-[400px] p-6 md:p-8 rounded-2xl border transition-all duration-300`}
          >
            <h2 className={`text-xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              Send Message
            </h2>
            
            <div className="mb-4">
              <label className={`block mb-2 text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                Your Name
              </label>
              <div className="relative">
                <div className={`absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                }`}>
                  <BiSolidUser className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  name="user_name"
                  className={`w-full pl-11 pr-4 py-3 text-sm rounded-xl border transition-all duration-200 ${
                    isDarkMode
                      ? "bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:ring-[#2AAE66] focus:border-[#2AAE66]"
                      : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-[#2AAE66] focus:border-[#2AAE66] focus:bg-white"
                  } focus:outline-none focus:ring-2`}
                  placeholder="Faisal Rehman"
                  required
                />
              </div>
            </div>
            
            <div className="mb-4">
              <label className={`block mb-2 text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                Email
              </label>
              <div className="relative">
                <div className={`absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                }`}>
                  <AiTwotoneMail className="w-5 h-5" />
                </div>
                <input
                  type="email"
                  name="user_email"
                  className={`w-full pl-11 pr-4 py-3 text-sm rounded-xl border transition-all duration-200 ${
                    isDarkMode
                      ? "bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:ring-[#2AAE66] focus:border-[#2AAE66]"
                      : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-[#2AAE66] focus:border-[#2AAE66] focus:bg-white"
                  } focus:outline-none focus:ring-2`}
                  placeholder="faisalfasi18@gmail.com"
                  required
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className={`block mb-2 text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Your message here..."
                className={`w-full min-h-[120px] rounded-xl p-4 border text-sm transition-all duration-200 resize-none ${
                  isDarkMode
                    ? "bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:ring-[#2AAE66] focus:border-[#2AAE66]"
                    : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-[#2AAE66] focus:border-[#2AAE66] focus:bg-white"
                } focus:outline-none focus:ring-2`}
                required
              ></textarea>
            </div>
            
            <div className="flex justify-center">
              <button
                className="font-bold text-white px-8 py-3 rounded-xl bg-gradient-to-r from-[#2AAE66] to-[#2bae66] hover:from-[#239a55] hover:to-[#239a55] transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                type="submit"
                value="Send"
              >
                Send Message
              </button>
            </div>
          </form>
        ) : (
          <div className={`my-20 mx-0 lg:mx-10 font-bold text-xl text-[#2AAE66] hurray-animation ${
            isDarkMode ? "text-[#2AAE66]" : "text-[#239a55]"
          }`}>
            <h1>
              🎉 Hurray! Your message has been sent! I'm excited to connect with
              you soon. 🎉
            </h1>
          </div>
        )}
      </div>

      {/* Hurray Animation Styles */}
      <style>{`
        .hurray-animation {
          animation: fadeIn 1s ease-in-out, fadeOut 1s ease-in-out 2s;
          text-align: center;
          margin-top: 20px;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
};

export default SendMessageCard;
