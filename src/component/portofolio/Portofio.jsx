import  { useState, useEffect } from "react";
const INITIAL_LIMIT = 6;
const LOAD_MORE_AMOUNT = 3;
import { portfolioData, categories } from "../../data/portofolioData";

export default function Portofio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredPortfolio, setFilteredPortfolio] = useState(portfolioData);

  // State baru untuk mengontrol tampilan
  const [itemsToShow, setItemsToShow] = useState(INITIAL_LIMIT);

  // Efek untuk mereset tampilan ketika kategori berubah
  useEffect(() => {
    setItemsToShow(INITIAL_LIMIT);
  }, [activeCategory]);

  // Fungsi untuk memuat lebih banyak item
  const handleLoadMore = () => {
    setItemsToShow((prevCount) => prevCount + LOAD_MORE_AMOUNT);
  };

  // Fungsi handleFilter harus diperbarui agar mereset itemsToShow
  const handleFilter = (category) => {
    setActiveCategory(category);
    // Logika filtering harus dilakukan di sini atau di useEffect terpisah
    // Jika di sini:
    setItemsToShow(INITIAL_LIMIT); // Reset saat filter berubah
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
      id="porto" // Ganti id menjadi 'portfolio' agar lebih jelas
      className="py-20  flex justify-center items-center bg-gray-100 dark:bg-gray-400 w-screen relative left-1/2 -translate-x-1/2 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* HEADER SECTION */}
        <div className="flex justify-center mb-16">
          <div className="flex flex-col justify-center items-center max-w-2xl text-center">
            {" "}
            {/* Batasi lebar teks */}
            <p className="text-lg font-medium text-[#284b63] dark:text-gray-300">
              Creative Portfolios
            </p>
            <h1 className="text-4xl font-bold mt-2 mb-4 text-black dark:text-white">
              Recent Works
            </h1>
            <p className="text-[#353535] font-medium px-4">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form.
            </p>
          </div>
        </div>

        {/* FILTER BUTTONS (Responsif dengan flex-wrap) */}
        <div className="flex flex-wrap gap-4 justify-center mt-12 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleFilter(category)}
              className={`px-5 py-2 font-medium rounded-lg transition duration-200 
                    ${
                      activeCategory === category
                        ? "bg-[#284b63] text-white shadow-md" // Active state
                        : "border border-[#284b63] text-[#284b63] hover:bg-[#3b6f92]" // Inactive state
                    }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-8">
          {filteredPortfolio.slice(0, itemsToShow).map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-[#353535] rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden group"
            >
              <figure className="overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-[250px] object-cover transform group-hover:scale-[1.05] transition-transform duration-500"
                />
              </figure>

              <div className="p-6">
                <h2 className="text-xl text-black dark:text-gray-300 font-bold mb-2 group-hover:text-[#4d7fa1] transition duration-200">
                  {item.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {item.description[0]}
                </p>

                <div className="flex justify-end">
                  <a
                    href={`/portfolio-detail/${item.id}`}
                    className="inline-block px-4 py-1.5 bg-[#3c6e71] text-white text-sm font-semibold rounded-full hover:bg-[#4d7fa1] transition duration-200"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}

          {filteredPortfolio.length > itemsToShow && (
            <div className="flex justify-start mt-16">
              <button
                onClick={handleLoadMore}
                className="px-8 py-3 bg-[#284b63] text-white font-semibold rounded-full hover:bg-[#4d7fa1] transition duration-300 shadow-lg"
              >
                Lihat Selengkapnya ({filteredPortfolio.length - itemsToShow}{" "}
                Tersisa)
              </button>
            </div>
          )}

          {/* Tampilan jika tidak ada item yang difilter */}
          {filteredPortfolio.length === 0 && (
            <p className="col-span-full text-center text-gray-500 mt-8">
              Tidak ada proyek dalam kategori ini.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
