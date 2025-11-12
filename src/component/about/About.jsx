import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaWhatsappSquare,
} from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex justify-center items-center px-4 py-20 relative"
    >
      <div className="flex justify-center items-center border border-gray-300 dark:border-gray-700 w-full bg-white dark:bg-[#284b63] py-20 shadow-xl shadow-gray-300 dark:shadow-gray-900/50 rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
          <div className=" flex justify-start ">
            <div className="relative">
              {/* lg */}
              <div className="hidden md:block h-[400px] w-[300px]  object-cover rounded-xl shadow-lg shadow-gray-300 dark:shadow-gray-800/50">
                <img
                  src="/assets/foto/arul.jpg"
                  alt=""
                  className="h-full w-full object-cover rounded-xl shadow-lg shadow-gray-300 dark:shadow-gray-800/50"
                />
              </div>

              {/* sm */}
              <div className="block md:hidden h-[400px] w-[300px]  object-cover rounded-xl shadow-lg shadow-gray-300 dark:shadow-gray-800/50">
                <img
                  src="/assets/foto/sahrul2.jpg"
                  alt=""
                  className="h-full w-full object-cover rounded-xl shadow-lg shadow-gray-300 dark:shadow-gray-800/50"
                />
              </div>
              <div className="absolute z-10 w-60 -bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex justify-center bg-white dark:bg-[#284b63] rounded-2xl shadow-lg dark:shadow-xl dark:shadow-gray-900/70">
                <ul className="flex gap-4 p-4 justify-between w-full">
                  <li className="font-bold">
                    <a
                      href="https://wa.me/6289530185171"
                      className="text-gray-400 dark:text-[#d9d9d9] hover:text-green-400 transition-all duration-150"
                    >
                      <FaWhatsappSquare className="h-8 w-8 hover:scale-110 transition-all duration-150" />
                    </a>
                  </li>
                  <li className="font-bold">
                    <a
                      href="https://wa.me/6289530185171"
                      className="text-gray-400 dark:text-[#d9d9d9] hover:text-blue-800 transition-all duration-150"
                    >
                      <FaLinkedin className="h-8 w-8 hover:scale-110 transition-all duration-150" />
                    </a>
                  </li>
                  <li className="font-bold">
                    <a
                      href="https://wa.me/6289530185171"
                      className="text-gray-400 dark:text-[#d9d9d9] hover:text-pink-500 transition-all duration-150"
                    >
                      <FaInstagram className="h-8 w-8 hover:scale-110 transition-all duration-150" />
                    </a>
                  </li>
                  <li className="font-bold">
                    <a
                      href="https://wa.me/6289530185171"
                      className="text-gray-400 dark:text-[#d9d9d9] hover:text-blue-500 transition-all duration-150"
                    >
                      <FaFacebookSquare className="h-8 w-8 hover:scale-110 transition-all duration-150" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="max-w-lg flex justify-center mt-20 md:mt-0 px-4">
            <div className=" w-full">
              <h2 className="text-4xl font-bold mb-4 text-black dark:text-white">
                About Me
              </h2>
              <p className="mb-4 text-gray-600 dark:text-[#d9d9d9]">
                Hello! I'm Muhamad Khaerul Rijal, a passionate Frontend
                Developer with a knack for creating engaging and user-friendly
                web applications. With a strong foundation in HTML, CSS, and
                JavaScript, I specialize in building responsive and visually
                appealing websites using modern frameworks like React and
                Tailwind CSS.
              </p>
              <div className="mt-20 flex gap-4">
                <button className=" px-4 py-2 bg-[#3c6e71] rounded-lg text-white font-medium">
                  My Project
                </button>
                <button className=" border border-[#3c6e71] rounded-lg text-[#3c6e71] font-medium">
                  <a
                    href="/assets\doc/CV-Muhamad Khaerul Rijal.pdf"
                    download="CV_Muhamad_Khaerul_Rijal.pdf"
                    className="cursor-pointer px-4 py-2 "
                  >
                    Download CV
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-z-10 absolute bottom-0 h-80 bg-gray-100 dark:bg-gray-700 w-screen left-1/2 -translate-x-1/2"></div>
    </section>
  );
}
