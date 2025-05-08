import React from "react";

export default function PartnersSection() {
  return (
    <section className="w-full py-2  text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-sm text-white/70 mb-6">Our Partners</h3>
        <div className="flex flex-wrap justify-center items-center gap-10">
          <img
            src="/metatrader5.png"
            alt="Partner 1"
            className="h-20 object-contain"
          />
          <img
            src="/metatrader5.png"
            alt="Partner 2"
            className="h-20 object-contain"
          />
        </div>
      </div>
    </section>
  );
}