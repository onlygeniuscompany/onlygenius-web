// src/components/Layout.jsx
import React from "react";
import NavbarComp from "./NavbarComp";
import Foot from "./Footer.jsx";

export default function Layout({ children }) {
    return (
      <div className="relative text-[#FAFAFA] font-inter w-full min-h-screen overflow-x-hidden">
        
        {/* Fondo fijo con manchas grises */}
        <div
          className="absolute inset-0 -z-10 pointer-events-none"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 3%,rgba(163, 163, 163, 0.12) 1%, transparent 10%),
              radial-gradient(circle at 40% 3%,rgba(163, 163, 163, 0.12) 1%, transparent 10%),
              radial-gradient(circle at 20% 10%, rgba(163, 163, 163, 0.12) 1%, transparent 20%),
              radial-gradient(circle at 60% 40%, rgba(163, 163, 163, 0.12) 1%, transparent 30%),
              radial-gradient(circle at 40% 60%, rgba(163, 163, 163, 0.12) 1%, transparent 20%),
              radial-gradient(circle at 90% 80%, rgba(163, 163, 163, 0.12) 1%, transparent 25%),
              radial-gradient(circle at 60% 90%, rgba(163, 163, 163, 0.3) 1%, transparent 30%)
            `,
            backgroundColor: "#09090B",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }}
        />
  
        <NavbarComp />
  
        <div className="relative z-10 max-w-[1280px] mx-auto px-4 w-[90%]">
          <main>{children}</main>
          <Foot />
        </div>
      </div>
    );
  }
  
