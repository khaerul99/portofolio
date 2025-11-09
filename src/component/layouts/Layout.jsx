// components/Layout.jsx

import React from "react";
import Navbar from "../navbar/Navbar";

export default function Layout({ children }) {
  return (
   
    <div className="relative overflow-hidden">
        <Navbar />
      <div className="max-w-7xl mx-auto pt-20">
        {children}
      </div>
    </div>  
  );
}