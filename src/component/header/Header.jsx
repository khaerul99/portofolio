import React from 'react'

export default function Header() {
  return (
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
  )
}
