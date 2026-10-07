import React, { useEffect, useState } from "react";
import { FaGlobe, FaCode, FaArrowLeft, FaTimes, FaSearchPlus } from "react-icons/fa"; // Untuk ikon
import { portfolioData } from "../../data/portofolioData.js";
import { useParams, Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";

export default function PortfolioDetailPage() {
  const { t } = useTranslation();
  const { projectId } = useParams();
  const numericId = parseInt(projectId);
  const project = portfolioData.find((p) => p.id === numericId);

  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  // Scroll to top when loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isImageModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isImageModalOpen]);

  if (!project) {
    return (
      <section className="py-32 text-center bg-gray-50 dark:bg-[#1e293b] min-h-screen w-screen relative left-1/2 -translate-x-1/2 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold dark:text-white mb-4">
          {t("portfolioDetail.notFound")}
        </h1>
        <p className="dark:text-gray-400 mb-8">
          {t("portfolioDetail.notFoundDesc")}
        </p>
        <Link to="/" className="px-6 py-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-colors">
          {t("portfolioDetail.backHome")}
        </Link>
      </section>
    );
  }

  return (
    <>
      <section
        id="project-detail"
        className="py-24 min-h-screen bg-gray-50 dark:bg-[#1e293b] text-gray-900 dark:text-gray-100 scroll-mt-20 w-screen relative left-1/2 -translate-x-1/2 overflow-hidden"
      >
        {/* Ambient Background Glows */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-teal-400/10 dark:bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-[40%] left-10 w-[500px] h-[500px] bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          
          {/* Navigasi Back */}
          <div className="mb-10">
            <Link to="/" className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-[#3c6e71] dark:hover:text-teal-400 transition-colors font-medium">
              <FaArrowLeft className="w-4 h-4" /> {t("portfolioDetail.backPortfolio")}
            </Link>
          </div>

          {/* Judul dan Kategori */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <div className="inline-flex justify-center mb-6">
              <span className="px-4 py-1.5 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-sm font-bold tracking-wider uppercase shadow-sm">
                {project.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-900 dark:text-white tracking-tight leading-tight">
              {t(`portfolioItems.${project.id}.title`)}
            </h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#3c6e71] to-teal-400 rounded-full mx-auto"></div>
          </div>

          {/* Gambar Utama (Hero Image) */}
          <div 
            className="mb-20 rounded-3xl overflow-hidden shadow-2xl shadow-teal-500/10 dark:shadow-black/50 border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800 p-2 md:p-4 group cursor-pointer"
            onClick={() => setIsImageModalOpen(true)}
          >
            <div className="overflow-hidden rounded-2xl w-full h-[300px] md:h-[500px] lg:h-[600px] relative">
              <img
                src={project.imageUrl}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              
              {/* Zoom Icon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-black/50 backdrop-blur-sm p-4 rounded-full text-white transform scale-50 group-hover:scale-100 transition-transform duration-300">
                  <FaSearchPlus className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>

          {/* GRID DETAIL & DESKRIPSI */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            
            {/* KOLOM KIRI: DESKRIPSI MENDALAM */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">{t("portfolioDetail.overview")}</h3>
              <div className="space-y-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed font-light">
                {(() => {
                  const desc = t(`portfolioItems.${project.id}.desc`, { returnObjects: true });
                  const descArray = Array.isArray(desc) ? desc : [desc];
                  return descArray.map((paragraph, index) => (
                    <p key={index}>
                      {paragraph}
                    </p>
                  ));
                })()}
              </div>

              {/* Area untuk galeri atau fitur tambahan */}
              <div className="mt-16 pt-10 border-t border-gray-200 dark:border-gray-800">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{t("portfolioDetail.features")}</h3>
                <p className="text-gray-500 dark:text-gray-400 italic">
                  {t("portfolioDetail.featuresDesc")}
                </p>
              </div>
            </div>

            {/* KOLOM KANAN: DETAIL PROYEK (Sticky Sidebar) */}
            <div className="lg:col-span-1 order-1 lg:order-2">
              <div className="sticky top-28 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl shadow-teal-500/5 dark:shadow-none border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-6 bg-teal-400 rounded-full inline-block"></span>
                  {t("portfolioDetail.details")}
                </h3>

                <div className="space-y-5 text-sm md:text-base">
                  <div className="flex flex-col">
                    <span className="text-gray-500 dark:text-gray-400 font-medium mb-1">{t("portfolioDetail.role")}</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{project.role}</span>
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="text-gray-500 dark:text-gray-400 font-medium mb-1">{t("portfolioDetail.duration")}</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{project.duration}</span>
                  </div>

                  <div className="flex flex-col pt-2">
                    <span className="text-gray-500 dark:text-gray-400 font-medium mb-3">{t("portfolioDetail.tech")}</span>
                    <div className="flex flex-wrap gap-2">
                      {project.tools &&
                        project.tools.map((tool, index) => (
                          <span
                            key={index}
                            className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 rounded-md text-xs font-bold tracking-wide"
                          >
                            {tool}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>

                {/* Tautan Aksi */}
                <div className="mt-10 space-y-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex items-center justify-center w-full px-6 py-3.5 bg-gradient-to-r from-[#3c6e71] to-teal-500 text-white rounded-xl font-bold shadow-lg shadow-teal-500/30 overflow-hidden transition-all duration-300 hover:shadow-teal-500/50 hover:-translate-y-1"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <FaGlobe className="w-5 h-5" /> {t("portfolioDetail.visit")}
                      </span>
                      <div className="absolute inset-0 h-full w-full bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                    </a>
                  )}
                  
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex items-center justify-center w-full px-6 py-3.5 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl font-bold shadow-sm overflow-hidden transition-all duration-300 hover:border-[#3c6e71] dark:hover:border-teal-500 hover:-translate-y-1"
                    >
                      <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                        <FaCode className="w-5 h-5" /> {t("portfolioDetail.repo")}
                      </span>
                      <div className="absolute inset-0 h-full w-full bg-[#3c6e71] dark:bg-teal-500 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300"></div>
                    </a>
                  )}
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Fullscreen Image Modal */}
      {isImageModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setIsImageModalOpen(false)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative z-10 w-full h-full max-w-7xl max-h-screen flex items-center justify-center">
            {/* Close Button */}
            <button 
              onClick={() => setIsImageModalOpen(false)}
              className="absolute -top-4 -right-4 md:top-0 md:-right-12 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-2 backdrop-blur-md transition-all duration-200 z-50"
            >
              <FaTimes className="w-6 h-6" />
            </button>
            
            {/* Image */}
            <img 
              src={project.imageUrl} 
              alt={project.title}
              loading="lazy"
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl ring-1 ring-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}
