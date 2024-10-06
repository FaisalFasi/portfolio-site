import React, { useState, useRef } from "react";
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

const SendMessageCard = () => {
  const form = useRef();
  const [sentMessage, setSentMessage] = useState(false);

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
      <div className="flex justify-between flex-col md:flex-row bg-black p-4 md:p-14 rounded-[10px]">
        <div>
          <div className="text-white font-nuntinoFont">
            <h1 className="text-3xl font-extrabold">Form Details</h1>
            <p className="my-2">Fill up the form below to contact</p>
          </div>
          <div className="flex flex-col py-8 font-bold font-nuntinoFont text-white">
            <a
              href="tel:+491781633786"
              className="w-[200px] flex gap-4 px-0 md:px-4 py-2 hover:text-[#2AAE66] active:bg-white focus:outline focus:outline-blue-400 rounded"
            >
              <BsTelephoneFill className="w-5 h-5" />
              <span>+491781633786</span>
            </a>
            <a
              href="mailto:faisalfasi18@gmail.com"
              target="_blank"
              className="w-[250px] flex items-center gap-4 px-0 md:px-4 py-2 mt-6 active:bg-white focus:outline focus:outline-blue-400 hover:text-[#2AAE66] rounded"
            >
              <MdEmail className="w-5 h-5" />
              <span>faisalfasi18@gmail.com</span>
            </a>
            <a
              href="https://goo.gl/maps/b7bSKRs1MXrFnzpQA"
              target="_blank"
              className="w-[200px] flex items-center gap-4 px-0 md:px-4 py-2 mt-6 active:bg-white focus:outline focus:outline-blue-400 hover:text-[#2AAE66] rounded"
            >
              <MdLocationPin className="w-7 h-7" />
              <span>Berlin, Germany</span>
            </a>
          </div>
          <div>
            <div className="flex gap-4 px-0 md:px-4 my-2">
              <a
                href="https://github.com/FaisalFasi"
                target="_blank"
                title="GitHub"
                className="text-white p-2 rounded-full hover:bg-[#2AAE66]"
              >
                <AiFillGithub className="w-7 h-7" />
              </a>
              <a
                href="https://www.linkedin.com/in/faisalrehman18/"
                target="_blank"
                title="LinkedIn"
                className="text-white p-2 rounded-full hover:bg-[#2AAE66]"
              >
                <AiFillLinkedin className="w-7 h-7" />
              </a>
              <a
                href="https://www.instagram.com/faisalfasi18/"
                target="_blank"
                title="Instagram"
                className="text-white p-2 rounded-full hover:bg-[#2AAE66]"
              >
                <AiOutlineInstagram className="w-7 h-7" />
              </a>
              <a
                href="https://www.facebook.com/faisalfasi18"
                target="_blank"
                title="Facebook"
                className="text-white p-2 rounded-full hover:bg-[#2AAE66]"
              >
                <AiFillFacebook className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>

        {/* Send message section */}
        {!sentMessage ? (
          <form
            ref={form}
            onSubmit={sendEmail}
            className="mt-12 md:mt-0 bg-white w-full md:w-[300px] p-4 md:p-8 rounded-[10px]"
          >
            <h1 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your Name
            </h1>
            <div className="relative mb-2">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <BiSolidUser className="text-black" />
              </div>
              <input
                type="text"
                name="user_name"
                className="w-full pl-10 p-2.5 text-sm rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Faisal Rehman"
                required
              />
            </div>
            <h1 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Email
            </h1>
            <div className="relative mb-2">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <AiTwotoneMail className="text-black" />
              </div>
              <input
                type="email"
                name="user_email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="faisalfasi18@gmail.com"
                required
              />
            </div>
            <h1 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Message
            </h1>
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              className="w-full min-h-[100px] rounded p-2 border border-gray-300"
              required
            ></textarea>
            <div className="flex justify-center mt-4">
              <button
                className="font-bold text-white px-4 py-2 rounded-[10px] bg-[#2bae66] hover:opacity-80"
                type="submit"
                value="Send"
              >
                Send Message
              </button>
            </div>
          </form>
        ) : (
          <div className="my-20 mx-0 lg:mx-10 font-bold text-xl text-green-400 hurray-animation">
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
