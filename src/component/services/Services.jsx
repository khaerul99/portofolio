
import { services } from '../../data/data'



export default function Services() {
  return (
     <section
              id="services"
              className="py-20 items-center min-h-screen bg-gray-100 dark:bg-gray-400 w-screen relative left-1/2 -translate-x-1/2 scroll-mt-20"
            >
              <div className="max-w-7xl mx-auto p-4">
                <div className="text-center flex flex-col justify-center items-center mb-20">
                  <p className="text-lg font-medium text-[#284b63] dark:text-gray-300">services</p>
                  <h2 className="text-4xl font-bold mb-4 text-black dark:text-white">
                    Service I Provide
                  </h2>
                  <div className="flex gap-1">
                    <div className="w-20 bg-[#284b63] h-1 rounded-2xl" />
                    <div className="w-10 bg-[#284b63] h-1 rounded-2xl" />
                    <div className="w-5 bg-[#284b63] h-1 rounded-2xl" />
                  </div>
                </div>

                <div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* card */}
                    {services.map((service) => (
                      <div key={service.id}>
                        <div className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-lg shadow-gray-300 dark:shadow-gray-400 hover:scale-105 transition-all duration-150">
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
  )
}
