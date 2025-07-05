// src/components/Layout.jsx
import React from "react";
import NavbarComp from "./NavbarComp";
import Foot from "./Footer.jsx";

export default function Layout({ children }) {
  return (
    <div className="relative text-[#FAFAFA] font-inter w-full min-h-screen overflow-x-hidden">
      
      {/* Fondo gris con manchas responsivas */}
      <div className="bg-radial-pattern absolute inset-0 -z-10 pointer-events-none" />

      <NavbarComp />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 w-[90%]">
        <main>{children}</main>
        <Foot />
      </div>
    </div>
  );
}
