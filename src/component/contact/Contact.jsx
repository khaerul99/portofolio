import React from 'react';

export default function Contact() {
    // GANTI URL INI DENGAN ENDPOINT UNIK FORMSPREE ANDA
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/xblqreap"; 

    return (
        <section id="contact" className="py-20 bg-white dark:bg-gray-900 scroll-mt-20">
            <div className="max-w-4xl mx-auto px-4">
                
                {/* HEADER */}
                <div className="text-center mb-16">
                    <p className="text-[#284b63] dark:text-gray-300 uppercase font-medium text-lg">Contact With Me</p>
                    <h1 className="text-4xl lg:text-5xl font-extrabold my-3 text-gray-900 dark:text-white">
                        Have an Project in Mind?
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
                        There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
                    </p>
                </div>

                {/* FORMULIR KONTAK */}
                <form 
                    action={FORMSPREE_ENDPOINT} 
                    method="POST"
                    className="space-y-6"
                >
                    {/* Baris 1: Nama & Perusahaan */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Enter your name" 
                            required 
                            className="w-full p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-500 dark:placeholder-gray-400 dark:text-white"
                        />
                        <input 
                            type="text" 
                            name="company" 
                            placeholder="Company (Optional)" 
                            className="w-full p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-500 dark:placeholder-gray-400 dark:text-white"
                        />
                    </div>

                    {/* Baris 2: Email & Telepon */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Enter your email" 
                            required 
                            className="w-full p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-500 dark:placeholder-gray-400 dark:text-white"
                        />
                        <input 
                            type="tel" 
                            name="phone" 
                            placeholder="Phone number" 
                            className="w-full p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-500 dark:placeholder-gray-400 dark:text-white"
                        />
                    </div>

                    {/* Baris 3: Pesan Proyek */}
                    <div>
                        <textarea 
                            name="project_details" 
                            placeholder="Tell me about your project" 
                            rows="6" 
                            required 
                            className="w-full p-4 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-500 dark:placeholder-gray-400 dark:text-white resize-none"
                        ></textarea>
                    </div>

                    {/* Tombol Submit */}
                    <div className="flex justify-center pt-4">
                        <button 
                            type="submit" 
                            className="px-8 py-3 bg-[#284b63] dark:bg-[#d9d9d9] text-white dark:text-[#284b63] font-semibold rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg"
                        >
                            Contact Me
                        </button>
                    </div>
                </form>

            </div>
        </section>
    );
}