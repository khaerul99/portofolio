import React from 'react';
import { FaLinkedin, FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="py-20  flex justify-center items-center bg-gray-100 dark:bg-gray-400 w-screen relative left-1/2 -translate-x-1/2 scroll-mt-20">
            <div className="max-w-7xl mx-auto px-4">
                
                {/* GRID UTAMA FOOTER (3 Kolom di Desktop) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    
                    {/* KOLOM 1: INFORMASI & LOGO */}
                    <div>
                        <h2 className="text-3xl font-extrabold text-black dark:text-gray-300 mb-3">PortoFolio</h2>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 max-w-xs">
                            Muhamad Khaerul Rijal, a passionate Frontend Developer committed to building beautiful and user-friendly web applications.
                        </p>
                        
                        {/* Social Media Links */}
                        <div className="flex space-x-4 mt-6">
                            <a href="https://wa.me/6289530185171" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-500 transition duration-200 dark:text-gray-300 dark:hover:text-green-400">
                                <FaWhatsapp className="w-6 h-6" />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700 transition duration-200 dark:text-gray-300 dark:hover:text-blue-500">
                                <FaLinkedin className="w-6 h-6" />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-600 transition duration-200 dark:text-gray-300 dark:hover:text-pink-400">
                                <FaInstagram className="w-6 h-6" />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition duration-200 dark:text-gray-300 dark:hover:text-blue-400">
                                <FaFacebook className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    {/* KOLOM 2: QUICK LINKS */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><a href="#home" className="text-gray-600 dark:text-gray-00 hover:text-[#284b63] transition duration-200">Home</a></li>
                            <li><a href="#about" className="text-gray-600 dark:text-gray-00 hover:text-[#284b63] transition duration-200">About Me</a></li>
                            <li><a href="#services" className="text-gray-600 dark:text-gray-00 hover:text-[#284b63] transition duration-200">Services</a></li>
                            <li><a href="#portfolio" className="text-gray-600 dark:text-gray-00 hover:text-[#284b63] transition duration-200">Portfolio</a></li>
                            <li><a href="#contact" className="text-gray-600 dark:text-gray-00 hover:text-[#284b63] transition duration-200">Contact</a></li>
                        </ul>
                    </div>

                    {/* KOLOM 3: KONTAK DAN LOKASI */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Get In Touch</h3>
                        <ul className="space-y-3">
                            <li className="text-gray-600 dark:text-gray-400">
                                Email: <a href="mailto:your.email@example.com" className="hover:text-[#284b63]">khaerul.r.23@gmail.com</a>
                            </li>
                            <li className="text-gray-600 dark:text-gray-400">
                                Phone: <a href="tel:+6289530185171" className="hover:text-[#284b63]">+62 89530185171</a>
                            </li>
                            <li className="text-gray-600 dark:text-gray-300">
                                Location: Bandung, Indonesia
                            </li>
                        </ul>
                    </div>
                </div>
                
                {/* GARIS PEMISAH */}
                <hr className="my-10 border-gray-300 dark:border-gray-700" />
                
                {/* COPYRIGHT */}
                <div className="text-center text-sm text-gray-500 dark:text-gray-300">
                    &copy; {new Date().getFullYear()} Muhamad Khaerul Rijal. All rights reserved.
                </div>

            </div>
        </footer>
    );
}