import React from 'react'

export default function RuntimeItem({ data }) {

    const isLeft = data.alignment === 'left';
    const isRight = data.alignment === 'right';

   
  return (
    <div className="relative w-full flex">
          
            <div className="hidden md:block md:w-1/2 md:pr-10 md:text-right">
                {isLeft && (
                    <>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300">{data.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 italic mb-2">{data.company} | {data.location}</p>
                        <div className="inline-block bg-[#284b63] dark:bg-[#d9d9d9] text-white text-sm font-medium py-1 px-3 rounded-full mb-3 shadow-md">
                            {data.period}
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            {data.description}
                        </p>
                    </>
                )}
            </div>

          
            <div className={`absolute left-2 md:left-1/2 transform md:-translate-x-1/2 flex flex-col items-center h-full w-4 z-10`}>
                <div className="w-4 h-4 bg-white border-4 border-[#5ea9ad] rounded-full absolute top-0 z-20"></div>
            </div>
            
         
            <div className={`w-full pl-12 text-left 
                            md:w-1/2 
                            ${isRight ? 'md:pl-10 md:pr-0 md:text-left' : 'md:pr-10 md:pl-0 md:text-right'}`}>
                
              
                {(isRight || (isLeft && window.innerWidth < 768)) && ( 
                    <>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-300">{data.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 italic mb-2">{data.company} | {data.location}</p>
                        <div className="inline-block bg-[#284b63] dark:bg-[#d9d9d9] text-white text-sm font-medium py-1 px-3 rounded-full mb-3 shadow-md">
                            {data.period}
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            {data.description}
                        </p>
                    </>
                )}

              
                {isLeft && window.innerWidth >= 768 && ( 
                    <div className="hidden"> 
                     
                    </div>
                )}
            </div>
        </div>
  )
}
