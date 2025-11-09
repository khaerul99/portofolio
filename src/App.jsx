import Layout from "./component/layouts/Layout";
import {
  FaLinkedin,
  FaWhatsappSquare,
  FaInstagram,
  FaFacebookSquare,
} from "react-icons/fa";
import { services, skills } from "./data/data";

function App() {
  const dataServices = services;
  const dataSkills = skills;

  return (
    <>
      <Layout>
        <main className="">
          {/* header */}
          <section
            id="home"
            className="p-4 min-h-screen relative pt-20 scroll-mt-20"
          >
            <div className="absolute -z-50 h-[1000px] w-[1000px] bg-blue-400 -right-[600px] -top-80 rounded-full blur-2xl opacity-20" />
            <div className="absolute -z-50 h-[800px] w-[800px] bg-pink-400 -left-[300px] top-40 rounded-full blur-2xl opacity-10" />
            <div className="grid grid-cols-1 md:grid-cols-2 place-items-center h-full">
              {/* left */}
              <div className="order-2 md:order-1 flex justify-center items-center">
                <div className="flex flex-col text-center md:text-left">
                  <div className="flex flex-col text-left">
                    <p className="font-medium text-blue-400 text-lg">
                      Hey There, I am
                    </p>
                    <h1 className="text-4xl lg:text-5xl font-bold mt-1 ">
                      Muhamad Khaerul Rijal
                    </h1>
                    <h3 className="text-gray-400 font-bold text-lg">
                      Profesional{" "}
                      <span className="text-black">Frontend Developer</span>
                    </h3>
                    <p className="mt-5 text-base text-gray-500 max-w-lg mx-auto md:mx-0">
                      I am a frontend developer with experience in building web
                      applications using React, Tailwind CSS, and other modern
                      web technologies. I am passionate about creating beautiful
                      and functional user interfaces that provide an excellent
                      user experience.
                    </p>
                  </div>
                  <div className="flex mt-8 gap-4 justify-center md:justify-start">
                    <button className="px-4 py-2 bg-blue-400 rounded-full text-white hover:bg-blue-500 transition duration-200">
                      Contact Me
                    </button>
                    <button className="px-4 py-2 bg-blue-950 rounded-full text-white hover:bg-blue-800 transition duration-200">
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
                    src="public\assets\foto\sahrul2.jpg"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -z-10 rotate-45 h-[400px] w-[280px] rounded-xl bg-blue-200 top-12" />
                <div className="absolute -z-10 rotate-12 h-[400px] w-[280px] rounded-xl bg-blue-400 top-12" />
              </div>
            </div>
          </section>

          {/* about */}
          <section
            id="about"
            className="min-h-screen flex justify-center items-center px-4 md:py-20 relative"
          >
            <div className=" flex justify-center items-center border border-gray-300 w-full bg-white  py-20 shadow-xl shadow-gray-300 rounded-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
                <div className=" flex justify-start ">
                  <div className="relative">
                    <img
                      src="public\assets\foto\arul.jpg"
                      alt=""
                      className="h-[400px] w-[300px] object-cover rounded-xl shadow-lg shadow-gray-300"
                    />
                    <div className="absolute z-10 w-60 -bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex justify-center bg-white rounded-2xl shadow-lg">
                      <ul className="flex gap-4 p-4 justify-between w-full">
                        <li className="font-bold">
                          <a
                            href="https://wa.me/6289530185171"
                            className="text-gray-500 hover:text-green-400 transition-all duration-150"
                          >
                            <FaWhatsappSquare className="h-8 w-8 hover:scale-110 transition-all duration-150" />
                          </a>
                        </li>
                        <li className="font-bold">
                          <a
                            href="https://wa.me/6289530185171"
                            className="text-gray-500 hover:text-blue-800 transition-all duration-150"
                          >
                            <FaLinkedin className="h-8 w-8 hover:scale-110 transition-all duration-150" />
                          </a>
                        </li>
                        <li className="font-bold">
                          <a
                            href="https://wa.me/6289530185171"
                            className="text-gray-500 hover:text-pink-500 transition-all duration-150"
                          >
                            <FaInstagram className="h-8 w-8 hover:scale-110 transition-all duration-150" />
                          </a>
                        </li>
                        <li className="font-bold">
                          <a
                            href="https://wa.me/6289530185171"
                            className="text-gray-500 hover:text-blue-500 transition-all duration-150"
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
                    <h2 className="text-4xl font-bold mb-4">About Me</h2>
                    <p className="mb-4">
                      Hello! I'm Muhamad Khaerul Rijal, a passionate Frontend
                      Developer with a knack for creating engaging and
                      user-friendly web applications. With a strong foundation
                      in HTML, CSS, and JavaScript, I specialize in building
                      responsive and visually appealing websites using modern
                      frameworks like React and Tailwind CSS.
                    </p>
                    <div className="mt-20 flex gap-4">
                      <button className=" px-4 py-2 bg-blue-400 rounded-lg text-white font-medium">
                        My Project
                      </button>
                      <button className=" border border-blue-950 rounded-lg text-blue-950 font-medium">
                        <a
                          href="public\assets\doc\CV-Muhamad Khaerul Rijal.pdf"
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
            <div className="-z-10 absolute bottom-0 h-80 bg-gray-100 w-screen left-1/2 -translate-x-1/2"></div>
          </section>

          {/* services */}
          <section
            id="services"
            className="pt-20 items-center min-h-screen bg-gray-100 w-screen relative left-1/2 -translate-x-1/2 scroll-mt-20"
          >
            <div className="max-w-7xl mx-auto p-4">
              <div className="text-center flex flex-col justify-center items-center mb-20">
                <p className="text-lg font-medium text-blue-400">services</p>
                <h2 className="text-4xl font-bold mb-4 ">Service I Provide</h2>
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
                      <div className="bg-white p-6 rounded-2xl shadow-lg shadow-gray-300 hover:scale-105 transition-all duration-150">
                        <h3 className="text-xl font-bold mb-4">
                          {service.title}
                        </h3>
                        <p className="text-gray-500">{service.description}</p>
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
              <h2 className="text-4xl font-bold text-center">
                User Tools
              </h2>
              <div className="flex gap-1">
                  <div className="w-20 bg-blue-400 h-1 rounded-2xl" />
                  <div className="w-10 bg-blue-400 h-1 rounded-2xl" />
                  <div className="w-5 bg-blue-400 h-1 rounded-2xl" />
                </div>
              <p>I would like to share the tools I frequently use in creating websites. These tools help me build efficient, scalable, and responsive web applications.</p>
              
              </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-4 mt-10">
                {dataSkills.map((skill) => (
                  <div
                    key={skill.id}
                    className="group relative overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.03] cursor-default" // Tambahkan hover:scale
                  >
                    <div className="absolute inset-0 bg-blue-500/40 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0"></div>

                    <div className="relative z-20 p-6 flex flex-col items-center text-center">
                      <div className="mb-4 group transition-transform duration-300">
                        {skill.icon}
                      </div>

                      <p className="font-bold text-lg group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </p>
                      <p className="text-sm text-gray-500 group-hover:text-white transition-colors duration-300 mt-1">
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
  id="portfolio" // Ganti id menjadi 'portfolio' agar lebih jelas
  className="py-20 flex justify-center items-center bg-gray-100 w-screen relative left-1/2 -translate-x-1/2 scroll-mt-20"
>
  <div className="max-w-7xl mx-auto px-4">
    
    {/* HEADER SECTION */}
    <div className="flex justify-center mb-16"> 
      <div className="flex flex-col justify-center items-center max-w-2xl text-center"> {/* Batasi lebar teks */}
        <p className="text-lg font-medium text-blue-500">
          Creative Portfolios
        </p>
        <h1 className="text-4xl font-bold mt-2 mb-4">Recent Works</h1>
        <p className="text-gray-500 font-medium px-4">
          There are many variations of passages of Lorem Ipsum
          available but the majority have suffered alteration in some
          form.
        </p>
      </div>
    </div>

    {/* FILTER BUTTONS (Responsif dengan flex-wrap) */}
    <div className="flex flex-wrap gap-4 justify-center mt-12 mb-16">
      <button className="px-5 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition duration-200 shadow-md">
        All
      </button>
      <button className="px-5 py-2 border border-blue-500 text-blue-500 font-medium rounded-lg hover:bg-blue-50 transition duration-200">
        Web
      </button>
      <button className="px-5 py-2 border border-blue-500 text-blue-500 font-medium rounded-lg hover:bg-blue-50 transition duration-200">
        Design
      </button>
      <button className="px-5 py-2 border border-blue-500 text-blue-500 font-medium rounded-lg hover:bg-blue-50 transition duration-200">
        Edit Foto
      </button>
    </div>

    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-8"> 
      
      
      <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden group">
        
        {/* Gambar (Figure) */}
        <figure className="overflow-hidden">
          <img
            src="public\assets\porto\image.png"
            alt="alkaf"
            className="w-full h-auto object-cover transform group-hover:scale-[1.05] transition-transform duration-500" // Efek zoom hover
          />
        </figure>
        
        {/* Body Card */}
        <div className="p-6">
          <h2 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition duration-200">
            Company profile website alkaf Store
          </h2>
          <p className="text-gray-600 mb-4 text-sm">
            A company profile website for Alkaf Store, built using
            React and Tailwind CSS.
          </p>
          
          {/* Action Button */}
          <div className="flex justify-end">
            <a href="#" className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full hover:bg-blue-200 transition duration-200">
              View Project
            </a>
          </div>
        </div>
      </div>
      
      
      <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden group">
        <figure className="overflow-hidden">
          <img
            src="https://placehold.co/600x400/ECEFF1/333333?text=Design+Project"
            alt="Design Project"
            className="w-full h-auto object-cover transform group-hover:scale-[1.05] transition-transform duration-500" 
          />
        </figure>
        <div className="p-6">
          <h2 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition duration-200">
            UI/UX Dashboard Concept
          </h2>
          <p className="text-gray-600 mb-4 text-sm">
            A concept dashboard design built for analytics and management tools.
          </p>
          <div className="flex justify-end">
            <a href="#" className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full hover:bg-blue-200 transition duration-200">
              View Design
            </a>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden group">
        <figure className="overflow-hidden">
          <img
            src="https://placehold.co/600x400/E0F2F1/333333?text=Web+App+Prototype"
            alt="Web App Prototype"
            className="w-full h-auto object-cover transform group-hover:scale-[1.05] transition-transform duration-500" 
          />
        </figure>
        <div className="p-6">
          <h2 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition duration-200">
            E-Commerce Landing Page
          </h2>
          <p className="text-gray-600 mb-4 text-sm">
            A fully responsive e-commerce landing page prototype using React.
          </p>
          <div className="flex justify-end">
            <a href="#" className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full hover:bg-blue-200 transition duration-200">
              View Demo
            </a>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>
        </main>
      </Layout>
    </>
  );
}

export default App;
