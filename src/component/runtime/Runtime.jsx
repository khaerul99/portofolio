import React from 'react'
import { ResumeData } from '../../data/data'
import RuntimeItem from './RuntimeItem'

export default function Runtime() {
    return (
      <div className="max-w-4xl mx-auto py-10 px-4">
            {/* Header Section */}
            <header className="text-center mb-10">
                <p className="text-blue-600 font-medium tracking-wider uppercase text-sm">
                    Education & Experience
                </p>
                <h1 className="text-5xl font-bold text-gray-800 mt-1 mb-4">
                    My Resume
                </h1>
                <p className="text-gray-500 max-w-lg mx-auto">
                    There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
                </p>
            </header>
            
            {/* Timeline Container */}
            <div className="relative">
                {/* Garis Vertikal Utama */}
                {/* Mobile (default): garis di kiri (left-4) */}
                {/* Desktop (md:): garis di tengah (md:left-1/2) */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-px bg-blue-300 h-full"></div>
                
                {/* Render Item Timeline */}
                {ResumeData.map((item, index) => (
                    <div key={item.id} className="mb-10 flex">
                        <RuntimeItem 
                            data={item} 
                            isFirst={index === 0} 
                            isLast={index === ResumeData.length - 1}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}