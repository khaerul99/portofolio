import React from "react";
import { ToolsItem } from "../../data/data";
import { useTranslation, Trans } from "react-i18next";

export default function Tools() {
    const { t } = useTranslation();

    return (
        <section 
            id="tools"
            className="min-h-screen flex justify-center items-center py-24 relative scroll-mt-20 px-4 md:px-0 overflow-hidden" 
        >
            {/* Background elements to match Services & About */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-20 left-20 w-72 h-72 bg-teal-400/10 dark:bg-teal-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl" style={{animationDelay: "1s"}}></div>
            </div>

            <div className="max-w-6xl mx-auto w-full relative z-10"> 
                
                {/* HEADER */}
                <div className="flex justify-center mb-16">
                    <div className="flex flex-col items-center text-center w-full gap-4 px-4 max-w-2xl"> 
                        <span className="px-4 py-1.5 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-sm font-bold tracking-wider uppercase mb-2 shadow-sm">
                            {t("tools.badge")}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                            <Trans i18nKey="tools.title" components={{ 1: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3c6e71] to-teal-400" /> }} />
                        </h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-[#3c6e71] to-teal-400 rounded-full mb-4"></div>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light text-lg">
                            {t("tools.desc")}
                        </p>
                    </div>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4">
                    {ToolsItem.map((skill) => (
                        <div
                            key={skill.id}
                            className="group relative bg-white dark:bg-gray-800/80 backdrop-blur-sm border border-gray-100 dark:border-gray-700 p-6 rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-teal-500/10 dark:hover:shadow-teal-900/20 transition-all duration-300 transform hover:-translate-y-2 cursor-default flex flex-col items-center justify-center text-center overflow-hidden"
                        >
                            {/* Subtle background glow on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-transparent dark:from-teal-900/10 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="relative z-10 mb-5 p-4 rounded-2xl bg-gray-50 dark:bg-gray-700/50 group-hover:bg-white dark:group-hover:bg-gray-600 shadow-inner group-hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-600">
                                {skill.icon}
                            </div>
                            
                            <p className="relative z-10 font-bold text-xl text-gray-900 dark:text-white group-hover:text-[#3c6e71] dark:group-hover:text-teal-400 transition-colors duration-300">
                                {skill.name}
                            </p>
                            <p className="relative z-10 text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300 mt-2">
                                {skill.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}