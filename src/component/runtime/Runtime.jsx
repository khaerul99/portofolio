import { ResumeData } from '../../data/data'
import RuntimeItem from './RuntimeItem'
import { useTranslation, Trans } from 'react-i18next'

export default function Runtime() {
    const { t } = useTranslation();

    return (
        <section 
            id="resume"
            className="py-24 min-h-screen bg-gray-50 dark:bg-[#1e293b] w-screen relative left-1/2 -translate-x-1/2 scroll-mt-20 overflow-hidden"
        >
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-40 right-20 w-80 h-80 bg-teal-400/10 dark:bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-40 left-20 w-96 h-96 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: "2s"}}></div>
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                
                {/* HEADER */}
                <div className="flex justify-center mb-20">
                    <div className="flex flex-col items-center text-center max-w-2xl">
                        <span className="px-4 py-1.5 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-sm font-bold tracking-wider uppercase mb-4 shadow-sm">
                            {t("resume.badge")}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 dark:text-white tracking-tight">
                            <Trans i18nKey="resume.title" components={{ 1: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3c6e71] to-teal-400" /> }} />
                        </h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-[#3c6e71] to-teal-400 rounded-full mb-6"></div>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light text-lg">
                            {t("resume.desc")}
                        </p>
                    </div>
                </div>
                
                {/* TIMELINE */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[1.1rem] md:left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-teal-400 via-[#3c6e71] to-blue-500 h-full rounded-full opacity-30 dark:opacity-50"></div>
                    
                    <div className="py-8">
                        {ResumeData.map((item, index) => (
                            <RuntimeItem 
                                key={item.id}
                                data={item} 
                                isFirst={index === 0} 
                                isLast={index === ResumeData.length - 1}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}