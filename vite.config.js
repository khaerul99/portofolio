import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // Penting untuk Dark Mode
  darkMode: 'media', 
  theme: {
    extend: {
      // DEFINISI ANIMASI ORB DISINI
      keyframes: {
        'orb-move': {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.05)' },
          '66%': { transform: 'translate(-20px, 40px) scale(0.95)' },
        }
      },
      animation: {
        // Nama class: 'animate-orb-slow' -> menggunakan keyframes 'orb-move'
        'orb-slow': 'orb-move 15s ease-in-out infinite alternate', 
      },
    },
  },
})
