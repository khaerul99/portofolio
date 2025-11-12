import React from 'react'
import {ToolsItem} from '../../data/data'


export default function Tools() {
  return (
   <section className='min-h-screen flex justify-center items-center px-4 py-20 relative'>
     <div className="max-w-7xl mx-auto p-4">
                <div className="flex justify-center">
                  <div className="flex flex-col items-center text-center w-2xl gap-5">
                    <h2 className="text-4xl font-bold text-center text-black dark:text-white ">
                      User Tools
                    </h2>
                    <div className="flex gap-1">
                      <div className="w-20 bg-[#284b63] dark:bg-[#d9d9d9] h-1 rounded-2xl" />
                      <div className="w-10 bg-[#284b63] dark:bg-[#d9d9d9] h-1 rounded-2xl" />
                      <div className="w-5 bg-[#284b63] dark:bg-[#d9d9d9] h-1 rounded-2xl" />
                    </div>
                    <p className="text-gray-500 dark:text-gray-300">
                      I would like to share the tools I frequently use in
                      creating websites. These tools help me build efficient,
                      scalable, and responsive web applications.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-4 mt-10">
                  {ToolsItem.map((skill) => (
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
  )
}
