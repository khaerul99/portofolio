import React from 'react';
import { useTranslation } from "react-i18next";

export default function RuntimeItem({ data }) {
    const { t } = useTranslation();
    const isRight = data.alignment === 'right';

    return (
        <div className={`relative flex flex-col md:flex-row w-full mb-12 group md:justify-between items-center ${isRight ? 'md:flex-row-reverse' : ''}`}>
            
            {/* Content Container */}
            <div className={`w-full md:w-5/12 pl-[4rem] pr-4 md:pl-0 md:pr-0 relative z-20 ${!isRight ? 'md:text-right' : 'md:text-left'}`}>
                {/* Modern Card */}
                <div className={`bg-white dark:bg-gray-800/80 backdrop-blur-sm border border-gray-100 dark:border-gray-700 p-6 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-teal-500/10 dark:hover:shadow-teal-900/20 transition-all duration-300 transform hover:-translate-y-1 ${!isRight ? 'md:ml-auto text-left md:text-right' : 'text-left'}`}>
                    
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-[#3c6e71] dark:group-hover:text-teal-400 transition-colors duration-300 mb-1">
                        {t(`resumeItems.${data.id}.title`)}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 font-medium italic mb-4 text-sm">
                        {data.company} • {data.location}
                    </p>
                    
                    <div className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold tracking-wide mb-4 shadow-sm bg-gradient-to-r from-[#3c6e71] to-teal-500 text-white`}>
                        {data.period}
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light text-sm md:text-base whitespace-pre-wrap">
                        {t(`resumeItems.${data.id}.desc`)}
                    </p>
                </div>
            </div>

            {/* Center Node (Dot) */}
            <div className="absolute top-8 md:top-1/2 left-[1.1rem] md:left-1/2 transform -translate-y-1/2 md:-translate-y-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-white dark:bg-gray-900 border-4 border-teal-400 dark:border-teal-500 group-hover:scale-125 group-hover:border-[#3c6e71] dark:group-hover:border-teal-300 transition-all duration-300 shadow-[0_0_10px_rgba(45,212,191,0.5)] z-30"></div>
            
            {/* Empty Space for the other side (Desktop only) */}
            <div className="hidden md:block md:w-5/12"></div>
        </div>
    );
}
