import React, { useState, useEffect } from "react";
const INITIAL_LIMIT = 6;
const LOAD_MORE_AMOUNT = 3;
import { portfolioData, categories } from "../../data/portofolioData";
import { useTranslation, Trans } from "react-i18next";

export default function Portofio() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredPortfolio, setFilteredPortfolio] = useState(portfolioData);

  const [itemsToShow, setItemsToShow] = useState(INITIAL_LIMIT);

  useEffect(() => {
    setItemsToShow(INITIAL_LIMIT);
  }, [activeCategory]);

  const handleLoadMore = () => {
    setItemsToShow((prevCount) => prevCount + LOAD_MORE_AMOUNT);
  };

  const handleFilter = (category) => {
    setActiveCategory(category);
    setItemsToShow(INITIAL_LIMIT);
    if (category === "All") {
      setFilteredPortfolio(portfolioData);
    } else {
      const filtered = portfolioData.filter(
        (item) => item.category === category
      );
      setFilteredPortfolio(filtered);
    }
  };

  return (
    <section
      id="portofolio"
      className="py-24 min-h-screen bg-gray-50 dark:bg-[#1e293b] w-screen relative left-1/2 -translate-x-1/2 scroll-mt-20 overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-40 -left-40 w-96 h-96 bg-teal-400/10 dark:bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl" style={{animationDelay: "1s"}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADER SECTION */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-col items-center text-center max-w-2xl">
            <span className="px-4 py-1.5 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-sm font-bold tracking-wider uppercase mb-4 shadow-sm">
              {t("portfolio.badge")}
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 dark:text-white tracking-tight">
              <Trans i18nKey="portfolio.title" components={{ 1: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3c6e71] to-teal-400" /> }} />
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#3c6e71] to-teal-400 rounded-full mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light text-lg">
              {t("portfolio.desc")}
            </p>
          </div>
        </div>

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap gap-3 justify-center mb-16">
          {categories.map((category) => {
            let label = category;
            if (category === "All") label = t("portfolio.filterAll");
            if (category === "web" || category === "Web") label = t("portfolio.filterWeb");
            if (category === "Design") label = t("portfolio.filterDesign");

            return (
              <button
                key={category}
                onClick={() => handleFilter(category)}
                className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-0.5
                      ${
                        activeCategory === category
                          ? "bg-gradient-to-r from-[#3c6e71] to-teal-500 text-white shadow-lg shadow-teal-500/30 border-transparent"
                          : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-[#3c6e71] hover:text-[#3c6e71] dark:hover:text-teal-400 shadow-sm"
                      }`}
              >
                {label}
              </button>
            )
          })}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPortfolio.slice(0, itemsToShow).map((item) => (
            <div
              key={item.id}
              className="group bg-white dark:bg-gray-800/80 backdrop-blur-sm border border-gray-100 dark:border-gray-700 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-teal-500/10 dark:hover:shadow-teal-900/20 transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              {/* Image Box */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* View Details overlay button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={`/portfolio-detail/${item.id}`}
                    className="px-6 py-2 bg-white/20 backdrop-blur-md border border-white/50 text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0"
                  >
                    {t("portfolio.viewDetails")}
                  </a>
                </div>
              </div>

              {/* Content Box */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#3c6e71] dark:group-hover:text-teal-400 transition-colors duration-300">
                  {t(`portfolioItems.${item.id}.title`)}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                  {(() => {
                    const desc = t(`portfolioItems.${item.id}.desc`, { returnObjects: true });
                    return Array.isArray(desc) ? desc[0] : desc;
                  })()}
                </p>
                
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#3c6e71] dark:text-teal-400 bg-teal-50 dark:bg-teal-900/30 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  
                  <a
                    href={`/portfolio-detail/${item.id}`}
                    className="text-gray-900 dark:text-white hover:text-[#3c6e71] dark:hover:text-teal-400 transition-colors duration-200"
                  >
                    <svg className="w-6 h-6 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* Empty State */}
          {filteredPortfolio.length === 0 && (
            <div className="col-span-full py-12 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 mb-4 text-gray-400">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
              </div>
              <p className="text-xl text-gray-500 dark:text-gray-400 font-medium">No projects found in this category.</p>
            </div>
          )}
        </div>

        {/* Load More Button */}
        {filteredPortfolio.length > itemsToShow && (
          <div className="flex justify-center mt-16">
            <button
              onClick={handleLoadMore}
              className="group relative px-8 py-3.5 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-full text-gray-900 dark:text-white font-semibold shadow-sm overflow-hidden transition-all duration-300 hover:border-[#3c6e71] dark:hover:border-teal-500 hover:shadow-lg"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                View More ({filteredPortfolio.length - itemsToShow})
              </span>
              <div className="absolute inset-0 w-full h-full bg-[#3c6e71] dark:bg-teal-500 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300 -z-0"></div>
            </button>
          </div>
        )}
        
      </div>
    </section>
  );
}
