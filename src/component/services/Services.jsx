import React from 'react'
import { services } from '../../data/data'
import { useTranslation, Trans } from 'react-i18next'

export default function Services() {
  const { t } = useTranslation();

  return (
    <section
      id="services"
      className="py-24 min-h-screen bg-gray-50 dark:bg-[#1e293b] w-screen relative left-1/2 -translate-x-1/2 scroll-mt-20"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-teal-400/10 dark:bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-20 w-72 h-72 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center flex flex-col justify-center items-center mb-20">
          <span className="px-4 py-1.5 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-sm font-bold tracking-wider uppercase mb-4 shadow-sm">
            {t("services.badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 dark:text-white tracking-tight">
            <Trans i18nKey="services.title" components={{ 1: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3c6e71] to-teal-400" /> }} />
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#3c6e71] to-teal-400 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const serviceKeys = ["webDev", "design", "video", "social"];
            const tKey = serviceKeys[index] || "webDev";

            return (
              <div 
                key={service.id}
                className="group bg-white dark:bg-gray-800/80 backdrop-blur-sm border border-gray-100 dark:border-gray-700 p-8 rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-teal-500/10 dark:hover:shadow-teal-900/20 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Hover Glow effect */}
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-gradient-to-br from-[#3c6e71]/20 to-teal-400/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="flex flex-col sm:flex-row items-start gap-6 relative z-10">
                  <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-2xl bg-teal-50 dark:bg-teal-900/30 text-3xl group-hover:scale-110 group-hover:bg-teal-100 dark:group-hover:bg-teal-800/50 transition-all duration-300 shadow-sm border border-teal-100 dark:border-teal-800/50">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-[#3c6e71] dark:group-hover:text-teal-400 transition-colors duration-300">
                      {t(`services.items.${tKey}.title`)}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                      {t(`services.items.${tKey}.desc`)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
