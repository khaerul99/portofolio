import React from 'react'
import { useTranslation, Trans } from 'react-i18next'

export default function Header() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center py-20 px-6 overflow-hidden bg-gray-50 dark:bg-[#1e293b] w-screen left-1/2 -translate-x-1/2"
    >
      {/* Ambient Glows */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-teal-400/20 dark:bg-teal-500/10 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: "2s" }}></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-8 place-items-center relative z-10">
        
        {/* Left Side: Text Content */}
        <div className="order-2 md:order-1 flex flex-col justify-center text-center md:text-left w-full mt-10 md:mt-0">
          <div className="inline-flex justify-center md:justify-start mb-6">
            <span className="px-4 py-1.5 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-sm font-bold tracking-wide shadow-sm flex items-center gap-2 border border-teal-200 dark:border-teal-800/50">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
              {t("header.welcome")}
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight mb-4">
            {t("header.greeting")} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3c6e71] via-teal-400 to-blue-500">
              Muhamad Khaerul
            </span>
          </h1>
          
          <h3 className="text-2xl lg:text-3xl font-semibold text-gray-600 dark:text-gray-300 mb-6">
            <Trans i18nKey="header.role" components={{ 1: <span className="text-[#3c6e71] dark:text-teal-400" /> }} />
          </h3>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto md:mx-0 mb-10 leading-relaxed font-light">
            {t("header.description")}
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="#contact" className="group relative px-8 py-4 bg-gradient-to-r from-[#3c6e71] to-teal-500 rounded-full text-white font-semibold shadow-lg shadow-teal-500/30 overflow-hidden transition-all duration-300 hover:shadow-teal-500/50 hover:-translate-y-1">
              <span className="relative z-10 flex items-center gap-2">
                {t("header.contactBtn")}
                <svg className="w-5 h-5 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <div className="absolute inset-0 h-full w-full bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </a>
            
            <a href="#about" className="group relative px-8 py-4 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-full text-gray-900 dark:text-white font-semibold shadow-sm overflow-hidden transition-all duration-300 hover:border-[#3c6e71] dark:hover:border-teal-500 hover:shadow-lg hover:-translate-y-1">
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                {t("header.learnMoreBtn")}
              </span>
              <div className="absolute inset-0 h-full w-full bg-[#3c6e71] dark:bg-teal-500 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300"></div>
            </a>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="order-1 md:order-2 relative flex justify-center items-center w-full max-w-md pt-8 md:pt-0">
          {/* Decorative glowing background blob behind image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] md:w-[420px] md:h-[420px] bg-gradient-to-tr from-[#3c6e71]/30 to-teal-400/30 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative group">
            {/* The offset border frame */}
            <div className="absolute -inset-4 border-2 border-teal-400/50 dark:border-teal-500/50 rounded-3xl transform translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2 -z-10"></div>
            
            {/* Main Image Container */}
            <div className="relative h-[380px] w-[280px] md:h-[480px] md:w-[340px] rounded-2xl overflow-hidden ring-4 ring-white dark:ring-gray-800 shadow-2xl transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-teal-500/20 z-10">
              <img
                src="/assets/foto/sahrul2.jpg"
                alt="Muhamad Khaerul Rijal"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
            
            {/* Floating Badges */}
            <div className="absolute -bottom-6 -left-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white dark:border-gray-700 transform transition-transform duration-500 group-hover:-translate-y-4 group-hover:-translate-x-2 z-20 hidden sm:flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center text-teal-600 dark:text-teal-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900 dark:text-white">{t("header.badgeRole")}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{t("header.badgeDesc")}</p>
              </div>
            </div>

            {/* Top Right Dot Element */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-teal-400 dark:bg-teal-500 rounded-full shadow-lg border-4 border-white dark:border-gray-800 transform transition-transform duration-500 group-hover:scale-110 z-20 flex items-center justify-center text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
