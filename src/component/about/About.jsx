import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaWhatsappSquare,
} from "react-icons/fa";
import { useTranslation, Trans } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="min-h-screen flex justify-center items-center  px-4 py-20 relative"
    >
      {/* Ambient Background Glows */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-teal-400/20 dark:bg-teal-500/10 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-400/20 dark:bg-blue-500/10 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl animate-pulse" style={{animationDelay: "2s"}}></div>

      <div className="max-w-6xl w-full z-10 bg-white/70 dark:bg-[#284b63]/80 backdrop-blur-xl border border-white/30 dark:border-gray-600/50 p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-gray-900/50 rounded-3xl transition-all duration-300">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center">
          
          {/* Image Section */}
          <div className="relative group">
            <div className="relative transform transition-all duration-500 group-hover:scale-[1.02]">
              {/* Glow effect behind image */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#3c6e71] to-teal-300 dark:to-teal-500 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              
              {/* lg image */}
              <div className="hidden md:block h-[420px] w-[320px] relative rounded-2xl overflow-hidden ring-4 ring-white dark:ring-gray-800 shadow-xl">
                <img
                  src="/assets/foto/arul.jpg"
                  alt="Muhamad Khaerul Rijal"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* sm image */}
              <div className="block md:hidden h-[380px] w-[280px] relative rounded-2xl overflow-hidden ring-4 ring-white dark:ring-gray-800 shadow-xl">
                <img
                  src="/assets/foto/sahrul2.jpg"
                  alt="Muhamad Khaerul Rijal"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Social Icons Floating */}
              <div className="absolute z-10 -bottom-8 left-1/2 -translate-x-1/2 w-[85%] bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 dark:border-gray-600 transition-transform duration-500 group-hover:-translate-y-2">
                <ul className="flex gap-2 p-3 justify-around w-full">
                  <li>
                    <a href="https://wa.me/6289530185171" className="text-gray-500 dark:text-gray-300 hover:text-green-500 transition-all duration-300 block transform hover:scale-110">
                      <FaWhatsappSquare className="h-7 w-7" />
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/6289530185171" className="text-gray-500 dark:text-gray-300 hover:text-blue-600 transition-all duration-300 block transform hover:scale-110">
                      <FaLinkedin className="h-7 w-7" />
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/6289530185171" className="text-gray-500 dark:text-gray-300 hover:text-pink-600 transition-all duration-300 block transform hover:scale-110">
                      <FaInstagram className="h-7 w-7" />
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/6289530185171" className="text-gray-500 dark:text-gray-300 hover:text-blue-500 transition-all duration-300 block transform hover:scale-110">
                      <FaFacebookSquare className="h-7 w-7" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full flex flex-col justify-center mt-16 md:mt-0 md:pl-8">
            <div className="inline-block mb-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 text-sm font-semibold tracking-wide uppercase">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
                {t("about.badge")}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 dark:text-white tracking-tight">
              <Trans i18nKey="about.title" components={{ 1: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3c6e71] to-teal-400" /> }} />
            </h2>
            <p className="mb-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-light">
              <Trans i18nKey="about.desc1" components={{ 1: <strong className="font-semibold text-gray-900 dark:text-white" /> }} />
            </p>
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-light">
              <Trans i18nKey="about.desc2" components={{ 1: <span className="font-medium text-[#3c6e71] dark:text-teal-400" /> }} />
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="group relative px-7 py-3.5 bg-gradient-to-r from-[#3c6e71] to-[#2a4d4f] rounded-xl text-white font-semibold shadow-lg shadow-teal-700/30 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-teal-700/50">
                <span className="relative z-10 flex items-center gap-2">
                  {t("about.projectBtn")}
                  <svg className="w-4 h-4 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
              </button>
              
              <a
                href="/assets/doc/CV-Muhamad Khaerul Rijal.pdf"
                download="CV_Muhamad_Khaerul_Rijal.pdf"
                className="group relative px-7 py-3.5 border-2 border-[#3c6e71] dark:border-teal-500 rounded-xl text-[#3c6e71] dark:text-teal-400 font-semibold overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex items-center gap-2"
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">{t("about.downloadBtn")}</span>
                <div className="absolute inset-0 h-full w-full bg-[#3c6e71] dark:bg-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 -z-0"></div>
                <svg className="w-4 h-4 relative z-10 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              </a>
            </div>
          </div>

        </div>
      </div>
      
      {/* Background Decor Bottom */}
      <div className="-z-10 absolute bottom-0 h-64 bg-gradient-to-t from-gray-200/80 dark:from-gray-800/80 to-transparent w-full left-0"></div>
    </section>
  );
}
