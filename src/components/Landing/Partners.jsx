import React from "react";

export default function PartnersSection() {
  return (
    <section className="w-full py-16 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="text-center text-[#2563EB] text-[16px] font-semibold leading-[24px]">Nuestros socios</div>
        <div className="flex flex-wrap justify-center items-center gap-10">
        
          <img
            src="/Logo Dashprop.svg"
            alt="Partner 1"
            className="h-15 object-contain "
          />
        
        </div>
      </div>
    </section>
  );
}