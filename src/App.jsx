import Layout from "./component/layouts/Layout";
import {
  FaLinkedin,
  FaWhatsappSquare,
  FaInstagram,
  FaFacebookSquare,
} from "react-icons/fa";
import { services, skills } from "./data/data";
import { portfolioData, categories } from "./data/portofolioData";
import { useEffect, useState } from "react";
import Runtime from "./component/runtime/Runtime";
import Contact from "./component/contact/Contact";

const INITIAL_LIMIT = 3;
const LOAD_MORE_AMOUNT = 3;

function App() {
  const dataServices = services;
  const dataSkills = skills;

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
    <>
      <div className="bg-white -z-99 dark:bg-[#353535] text-gray-900 dark:text-gray-100 min-h-screen">
        <Layout>
          <main className="">
            {/* header */}
            <section
              id="home"
              className="p-4 min-h-screen relative pt-20 scroll-mt-20"
            >
              <div className="absolute  h-[1000px] w-[1000px] bg-[#284b63] -right-[600px] -top-80 rounded-full blur-2xl opacity-20" />
              <div className="absolute  h-[800px] w-[800px] bg-[#3c6e71] -left-[300px] top-40 rounded-full blur-2xl opacity-10" />
              <div className="grid grid-cols-1 md:grid-cols-2 place-items-center h-full">
                {/* left */}
                <div className="order-2 md:order-1 z-10 flex justify-center items-center">
                  <div className="flex flex-col text-center md:text-left">
                    <div className="flex flex-col text-left">
                      <p className="font-medium text-[#284b63] dark:text-[#3c6e71] text-lg">
                        Hey There, I am
                      </p>
                      <h1 className="text-4xl lg:text-5xl font-bold mt-1 text-black dark:text-white ">
                        Muhamad Khaerul Rijal
                      </h1>
                      <h3 className="text-gray-500 font-bold text-lg">
                        Profesional{" "}
                        <span className="text-[#284b63] dark:text-white">
                          Frontend Developer
                        </span>
                      </h3>
                      <p className="mt-5 text-base text-[#353535] dark:text-gray-400 max-w-lg mx-auto md:mx-0">
                        I am a frontend developer with experience in building
                        web applications using React, Tailwind CSS, and other
                        modern web technologies. I am passionate about creating
                        beautiful and functional user interfaces that provide an
                        excellent user experience.
                      </p>
                    </div>
                    <div className="flex mt-8 gap-4 justify-center md:justify-start">
                      <button className="px-4 py-2 bg-[#284b63] rounded-full text-white hover:bg-[#1f394b] transition duration-200">
                        Contact Me
                      </button>
                      <button className="px-4 py-2 bg-[#3c6e71] rounded-full text-white hover:bg-[#2c5052] transition duration-200">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>

                {/* right */}
                <div className="order-1 md:order-2 relative hidden md:flex justify-center items-center py-16">
                  {/* image */}
                  <div className=" z-10 h-[400px] w-[280px] rounded-xl overflow-hidden shadow-lg cover">
                    <img
                      src="/assets/foto/sahrul2.jpg"
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute  rotate-45 h-[400px] w-[280px] rounded-xl bg-[#284b63] top-12 opacity-40" />
                  <div className="absolute  rotate-12 h-[400px] w-[280px] rounded-xl bg-[#284b63] top-12" />
                </div>
              </div>
            </section>

            {/* about */}
            <section
              id="about"
              className="min-h-screen flex justify-center items-center px-4 md:py-20 relative"
            >
              <div className="flex justify-center items-center border border-gray-300 dark:border-gray-700 w-full bg-white dark:bg-[#284b63] py-20 shadow-xl shadow-gray-300 dark:shadow-gray-900/50 rounded-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
                  <div className=" flex justify-start ">
                    <div className="relative">
                      <img
                        src="/assets/foto/arul.jpg"
                        alt=""
                        className="h-[400px] w-[300px] object-cover rounded-xl shadow-lg shadow-gray-300 dark:shadow-gray-800/50"
                      />
                      <div className="absolute z-10 w-60 -bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex justify-center bg-white dark:bg-[#284b63] rounded-2xl shadow-lg dark:shadow-xl dark:shadow-gray-900/70">
                        <ul className="flex gap-4 p-4 justify-between w-full">
                          <li className="font-bold">
                            <a
                              href="https://wa.me/6289530185171"
                              className="text-[#d9d9d9] hover:text-green-400 transition-all duration-150"
                            >
                              <FaWhatsappSquare className="h-8 w-8 hover:scale-110 transition-all duration-150" />
                            </a>
                          </li>
                          <li className="font-bold">
                            <a
                              href="https://wa.me/6289530185171"
                              className="text-[#d9d9d9] hover:text-blue-800 transition-all duration-150"
                            >
                              <FaLinkedin className="h-8 w-8 hover:scale-110 transition-all duration-150" />
                            </a>
                          </li>
                          <li className="font-bold">
                            <a
                              href="https://wa.me/6289530185171"
                              className="text-[#d9d9d9] hover:text-pink-500 transition-all duration-150"
                            >
                              <FaInstagram className="h-8 w-8 hover:scale-110 transition-all duration-150" />
                            </a>
                          </li>
                          <li className="font-bold">
                            <a
                              href="https://wa.me/6289530185171"
                              className="text-[#d9d9d9] hover:text-blue-500 transition-all duration-150"
                            >
                              <FaFacebookSquare className="h-8 w-8 hover:scale-110 transition-all duration-150" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="max-w-lg flex justify-center mt-20 md:mt-0 px-4">
                    <div className=" w-full">
                      <h2 className="text-4xl font-bold mb-4 text-black dark:text-white">
                        About Me
                      </h2>
                      <p className="mb-4 text-gray-600 dark:text-[#d9d9d9]">
                        Hello! I'm Muhamad Khaerul Rijal, a passionate Frontend
                        Developer with a knack for creating engaging and
                        user-friendly web applications. With a strong foundation
                        in HTML, CSS, and JavaScript, I specialize in building
                        responsive and visually appealing websites using modern
                        frameworks like React and Tailwind CSS.
                      </p>
                      <div className="mt-20 flex gap-4">
                        <button className=" px-4 py-2 bg-[#3c6e71] rounded-lg text-white font-medium">
                          My Project
                        </button>
                        <button className=" border border-[#3c6e71] rounded-lg text-[#3c6e71] font-medium">
                          <a
                            href="/assets\doc/CV-Muhamad Khaerul Rijal.pdf"
                            download="CV_Muhamad_Khaerul_Rijal.pdf"
                            className="cursor-pointer px-4 py-2 "
                          >
                            Download CV
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="-z-10 absolute bottom-0 h-80 bg-gray-100 dark:bg-gray-700 w-screen left-1/2 -translate-x-1/2"></div>
            </section>

            {/* services */}
            <section
              id="services"
              className="pt-20 items-center min-h-screen bg-gray-100 dark:bg-gray-400 w-screen relative left-1/2 -translate-x-1/2 scroll-mt-20"
            >
              <div className="max-w-7xl mx-auto p-4">
                <div className="text-center flex flex-col justify-center items-center mb-20">
                  <p className="text-lg font-medium text-blue-400">services</p>
                  <h2 className="text-4xl font-bold mb-4 text-black ">
                    Service I Provide
                  </h2>
                  <div className="flex gap-1">
                    <div className="w-20 bg-blue-400 h-1 rounded-2xl" />
                    <div className="w-10 bg-blue-400 h-1 rounded-2xl" />
                    <div className="w-5 bg-blue-400 h-1 rounded-2xl" />
                  </div>
                </div>

                <div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* card */}

                    {dataServices.map((service) => (
                      <div key={service.id}>
                        <div className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-lg shadow-gray-300 hover:scale-105 transition-all duration-150">
                          <h3 className="text-xl font-bold mb-4">
                            {service.title}
                          </h3>
                          <p className="text-gray-500 dark:text-gray-300">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Skills */}
            <section id="skill" className="py-20 min-h-screen scroll-mt-20">
              <div className="max-w-7xl mx-auto p-4">
                <div className="flex justify-center">
                  <div className="flex flex-col items-center text-center w-2xl gap-5">
                    <h2 className="text-4xl font-bold text-center text-black dark:text-white ">
                      User Tools
                    </h2>
                    <div className="flex gap-1">
                      <div className="w-20 bg-blue-400 h-1 rounded-2xl" />
                      <div className="w-10 bg-blue-400 h-1 rounded-2xl" />
                      <div className="w-5 bg-blue-400 h-1 rounded-2xl" />
                    </div>
                    <p className="text-gray-500 dark:text-gray-300">
                      I would like to share the tools I frequently use in
                      creating websites. These tools help me build efficient,
                      scalable, and responsive web applications.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-4 mt-10">
                  {dataSkills.map((skill) => (
                    <div
                      key={skill.id}
                      className="group relative overflow-hidden bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.03] cursor-default" // Tambahkan hover:scale
                    >
                      <div className="absolute inset-0 bg-blue-500/40 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0"></div>

                      <div className="relative z-20 p-6 flex flex-col items-center text-center">
                        <div className="mb-4 group transition-transform duration-300">
                          {skill.icon}
                        </div>

                        <p className="font-bold text-lg group-hover:text-white transition-colors duration-300">
                          {skill.name}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-300 group-hover:text-white transition-colors duration-300 mt-1">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Portofolio */}

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
                    <p className="text-lg font-medium text-blue-500">
                      Creative Portfolios
                    </p>
                    <h1 className="text-4xl font-bold mt-2 mb-4 text-black">
                      Recent Works
                    </h1>
                    <p className="text-gray-500 font-medium px-4">
                      There are many variations of passages of Lorem Ipsum
                      available but the majority have suffered alteration in
                      some form.
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
                    ? "bg-blue-600 text-white shadow-md" // Active state
                    : "border border-blue-500 text-blue-500 hover:bg-blue-50" // Inactive state
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
                      className="bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden group"
                    >
                      <figure className="overflow-hidden">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-full h-[250px] object-cover transform group-hover:scale-[1.05] transition-transform duration-500"
                        />
                      </figure>

                      <div className="p-6">
                        <h2 className="text-xl text-black dark:text-gray-300 font-bold mb-2 group-hover:text-blue-600 transition duration-200">
                          {item.title}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                          {item.description}
                        </p>

                        <div className="flex justify-end">
                          <a
                            href={item.liveUrl}
                            className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full hover:bg-blue-200 transition duration-200"
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
                        className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300 shadow-lg"
                      >
                        Lihat Selengkapnya (
                        {filteredPortfolio.length - itemsToShow} Tersisa)
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

            <section className="relative min-h-screen scroll-mt-20 ">
              <div className="animate-orb-slow absolute  h-[800px] w-[800px] bg-blue-400 -right-[600px] top-80 rounded-full blur-2xl opacity-20" />
              <div className="absolute  h-[800px] w-[800px] bg-pink-400 -left-[300px] top-40 rounded-full blur-2xl opacity-10" />
              <Runtime />
            </section>

            <section>
              <Contact />
            </section>
          </main>
        </Layout>
      </div>
    </>
  );
}

export default App;
