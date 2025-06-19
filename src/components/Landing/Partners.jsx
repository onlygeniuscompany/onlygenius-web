import React from "react";

export default function PartnersSection() {
  return (
    <section className="w-full py-16 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="text-center text-[#2563EB] text-[16px] font-semibold leading-[24px]">Our Partners</div>
        <div className="flex flex-wrap justify-center items-center gap-10">
          <img
            src="/forextester.png"
            alt="Partner 2"
            className="h-20 object-contain"
          />
          <img
            src="/Dashprop logo.png"
            alt="Partner 1"
            className="h-15 object-contain "
          />
          <img
            src="/Post-Affiliate-Pro.png"
            alt="Partner 2"
            className="h-20 object-contain"
          />
        </div>
      </div>
    </section>
  );
}