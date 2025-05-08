// HeroWithNavbar.jsx
import React from "react";

export default function Hero() {
return (
<div className="relative text-[#FAFAFA] font-inter w-full overflow-x-hidden min-h-screen">
  <div className="max-w-[1280px] mx-auto px-4 ">
    {/* Hero Section */}
    <div className="text-center py-[25px]">
      <div className="text-[#2563EB] text-[16px] font-semibold leading-[24px]">Desde 2012</div>
      <h1 className="text-[clamp(35px,6vw,48px)] font-bold leading-[56px] my-[10px]">
      Gestión algorítmica de capital,  <span className="text-[#2563EB]">sin complicaciones.</span>
      </h1>
      <p className="text-[16px] text-[#A1A1AA] max-w-[672px] mx-auto mb-[25px]">
        Tecnología profesional para traders, empresas y estrategias de capital a largo plazo.
      </p>
      <a href="https://calendly.com/onlygenius-support/30min">
        <div className="inline-flex items-center gap-2 bg-[#2563EB] rounded-md px-4 py-2 text-[14px] font-medium text-white cursor-pointer">
          Empezar
          <div className="w-3 h-3 border-t-2 border-r-2 border-white rotate-45"></div>
        </div>
      </a>
    </div>

  </div>
  <div className="text-center ">
      <img
        src="/dash-earth.png"
        alt="Dashboard preview"
        className="max-w-full rounded-[16px]"
      />
    </div>
</div>

);
};
