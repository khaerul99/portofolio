import React from "react";
import { FaGlobe, FaCode } from "react-icons/fa"; // Untuk ikon
import { portfolioData } from "../../data/portofolioData.js";
import { useParams } from "react-router-dom";

export default function PortfolioDetailPage() {
  const { projectId } = useParams();

  const numericId = parseInt(projectId);

  const project = portfolioData.find((p) => p.id === numericId);

  if (!project) {
    return (
      <section className="py-20 text-center dark:bg-gray-900 min-h-screen">
        <h1 className="text-3xl font-bold dark:text-white">
          Loading Project...
        </h1>
        <p className="dark:text-gray-400">
          Please ensure the project ID is valid.
        </p>
      </section>
    );
  }

  return (
    <section
      id="project-detail"
      className="py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Judul dan Kategori */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-[#284b63] uppercase">
            {project.category}
          </p>
          <h1 className="text-5xl font-extrabold my-2 text-gray-900 dark:text-white">
            {project.title}
          </h1>
        </div>

        <div className="mb-12 rounded-xl overflow-hidden shadow-2xl dark:shadow-gray-900/70">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="block max-w-lg h-auto object-cover mx-auto"
          />
        </div>

        {/* GRID DETAIL & DESKRIPSI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* KOLOM KIRI: DETAIL PROYEK */}
          <div className="md:col-span-1 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 h-full">
            <h3 className="text-2xl font-bold mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">
              Project Details
            </h3>

            <div className="space-y-3 text-sm">
              <p>
                <strong>Role:</strong> {project.role}
              </p>
              <p>
                <strong>Duration:</strong> {project.duration}
              </p>
              {/* <p><strong>Client:</strong> Alkaf Store</p> */}

              <p className="pt-2">
                <strong>Tools & Tech:</strong>
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tools &&
                  project.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#284b63] text-white dark:bg-blue-900 dark:text-blue-300 rounded-full text-xs font-semibold"
                    >
                      {tool}
                    </span>
                  ))}
              </div>
            </div>

            {/* Tautan Aksi */}
            <div className="mt-8 space-y-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 px-4 py-2 bg-[#284b63] text-white rounded-lg hover:bg-[#365f7a] transition duration-200"
                >
                  <FaGlobe /> <span>Visit Live Site</span>
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200"
                >
                  <FaCode /> <span>View Repository</span>
                </a>
              )}
              <a href="/">
                <button className="w-full mt-4 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-200">
                  Back to Portfolio
                </button>
              </a>
            </div>
          </div>

          {/* KOLOM KANAN: DESKRIPSI MENDALAM */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Project Overview</h3>
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              {project.description &&
                project.description.map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
            </div>

            {/* Area untuk galeri atau mockups tambahan */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-4">Design Mockups</h3>
              {/* Tambahkan gambar/screenshot lain di sini jika diperlukan */}
              <p className="text-gray-500 dark:text-gray-400">
                [Tambahkan gambar tambahan atau galeri di sini]
              </p>
              {/* Contoh: <img src="/assets/porto/mockup1.jpg" alt="..." className="w-full mt-4 rounded-lg" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
