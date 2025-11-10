// components/navbar/Navbar.jsx

import React from "react";
import { FaAlignJustify } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    // Tambahkan fixed, top-0, left-0, right-0, dan z-50
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 border-b border-gray-300 shadow-md backdrop-blur-lg bg-white/30">
      {/* Bungkus konten dengan max-w-7xl mx-auto agar sejajar dengan layout */}
      <div className="max-w-7xl mx-auto flex justify-between">
        <div>
          <h2 className="font-extrabold text-2xl">PortoFolio</h2>
        </div>

        {/* lg */}
        <div className="justify-center items-center hidden md:flex">
          <ul className="flex gap-6 font-bold">
            <li className="text-[#353535] hover:text-[#284b63] active:scale-95 hover:scale-105 transition-all duration-100">
              <a href="#home" className="px-4 py-2">
                Home
              </a>
            </li>
            <li className="text-[#353535] hover:text-[#284b63] active:scale-95 hover:scale-105 transition-all duration-100">
              <a href="#about" className="px-4 py-2">
                About
              </a>
            </li>
            <li className="text-[#353535] hover:text-[#284b63] active:scale-95 hover:scale-105 transition-all duration-100">
              <a href="#services" className="px-4 py-2">
                Services
              </a>
            </li>
            <li className="text-[#353535] hover:text-[#284b63] active:scale-95 hover:scale-105 transition-all duration-100">
              <a href="#porto" className="px-4 py-2">
                Portofolio
              </a>
            </li>
            <li className="text-[#353535] hover:text-[#284b63] active:scale-95 hover:scale-105 transition-all duration-100">
              <a href="#contact" className="px-4 py-2">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4 relative">
          <button className=" py-2 px-4 bg-[#284B63] dark:bg-[#d9d9d9] rounded-lg text-white font-medium">
            <a
              href="/assets/doc/CV-Muhamad Khaerul Rijal.pdf"
              download="CV_Muhamad_Khaerul_Rijal.pdf"
              className="cursor-pointer px-4 py-2 "
            >
              Download CV
            </a>
          </button>
          <div className="md:hidden">
            <button
              className="shadow-md py-2 px-4 rounded-full active:scale-90 transition-all duration-150"
              onClick={() => setIsOpen(!isOpen)}
            >
              <FaAlignJustify />
            </button>
          </div>
          <div
            className={
              isOpen
                ? "absolute top-16 right-0 bg-white w-48 p-4 rounded-lg shadow-lg md:hidden flex flex-col z-40"
                : "hidden"
            }
          >
            <div className="justify-center items-center flex">
              <ul className="flex flex-col gap-6 font-bold w-full text-center">
                <li className="text-[#353535] hover:text-[#284b63] active:scale-95 hover:scale-105 transition-all duration-100">
                  <a href="#home" className="px-4 py-2">
                    Home
                  </a>
                </li>
                <li className="text-[#353535] hover:text-[#284b63] active:scale-95 hover:scale-105 transition-all duration-100">
                  <a href="#about" className="px-4 py-2">
                    About
                  </a>
                </li>
                <li className="text-[#353535] hover:text-[#284b63] active:scale-95 hover:scale-105 transition-all duration-100">
                  <a href="#services" className="px-4 py-2">
                    Services
                  </a>
                </li>
                <li className="text-[#353535] hover:text-[#284b63] active:scale-95 hover:scale-105 transition-all duration-100">
                  <a href="#porto" className="px-4 py-2">
                    Portofolio
                  </a>
                </li>
                <li className="text-[#353535] hover:text-[#284b63] active:scale-95 hover:scale-105 transition-all duration-100">
                  <a href="#contact" className="px-4 py-2">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
