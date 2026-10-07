// components/navbar/Navbar.jsx

import React, { useState } from "react";
import { FaAlignJustify, FaGlobe } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "id" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <h2 className="font-extrabold text-2xl text-gray-900 dark:text-white">PortoFolio</h2>
        </div>

        {/* lg */}
        <div className="justify-center items-center hidden md:flex">
          <ul className="flex gap-8 font-bold text-sm">
            <li className="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-200">
              <a href="#home">{t("nav.home")}</a>
            </li>
            <li className="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-200">
              <a href="#about">{t("nav.about")}</a>
            </li>
            <li className="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-200">
              <a href="#services">{t("nav.services")}</a>
            </li>
            <li className="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-200">
              <a href="#portofolio">{t("nav.portfolio")}</a>
            </li>
            <li className="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors duration-200">
              <a href="#contact">{t("nav.contact")}</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-3 relative">
          
          {/* Language Switcher */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors"
            title="Change Language"
          >
            <FaGlobe className="w-4 h-4 text-teal-500" />
            <span className="text-xs font-bold uppercase">{i18n.language === "en" || i18n.language === "en-US" ? "EN" : "ID"}</span>
          </button>

          <a
            href="/assets/doc/CV-Muhamad Khaerul Rijal.pdf"
            download="CV_Muhamad_Khaerul_Rijal.pdf"
            className="hidden sm:block py-2 px-5 bg-gradient-to-r from-[#3c6e71] to-teal-500 rounded-full text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
          >
            {t("nav.downloadCv")}
          </a>
          <div className="md:hidden">
            <button
              className="p-2.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full active:scale-90 transition-all duration-150"
              onClick={() => setIsOpen(!isOpen)}
            >
              <FaAlignJustify />
            </button>
          </div>
          <div
            className={
              isOpen
                ? "absolute top-16 right-0 bg-white dark:bg-gray-800 w-48 p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 md:hidden flex flex-col z-40 transition-all"
                : "hidden"
            }
          >
            <div className="flex flex-col gap-4 font-bold text-center">
              <a href="#home" className="text-gray-600 dark:text-gray-300 hover:text-teal-500" onClick={() => setIsOpen(false)}>{t("nav.home")}</a>
              <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-teal-500" onClick={() => setIsOpen(false)}>{t("nav.about")}</a>
              <a href="#services" className="text-gray-600 dark:text-gray-300 hover:text-teal-500" onClick={() => setIsOpen(false)}>{t("nav.services")}</a>
              <a href="#portofolio" className="text-gray-600 dark:text-gray-300 hover:text-teal-500" onClick={() => setIsOpen(false)}>{t("nav.portfolio")}</a>
              <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-teal-500" onClick={() => setIsOpen(false)}>{t("nav.contact")}</a>
              
              <a
                href="/assets/doc/CV-Muhamad Khaerul Rijal.pdf"
                download="CV_Muhamad_Khaerul_Rijal.pdf"
                className="mt-2 py-2 w-full bg-[#3c6e71] rounded-full text-white font-semibold text-sm"
              >
                {t("nav.downloadCv")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
