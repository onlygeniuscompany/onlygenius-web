// src/components/WhyWeExist.jsx
import React from "react";

export default function WhyWeExist() {
  return (
    <section className="w-full bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Text */}
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">Why We Exist</h2>
          <p className="text-sm md:text-base text-white/80 leading-relaxed">
            The trading world moves fast. Manual strategies often fall short in volatile markets.
            That’s where we come in. OnlyGenius was created to bridge the gap between human potential
            and automated precision — helping you trade smarter, not harder.
          </p>
        </div>
        {/* Image */}
        <div className="flex-1 w-full">
          <img
            src="/why-we-exist.png" // Asegurate de tener la imagen en public/ o ajustar el path
            alt="Laptop trading chart"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </section>
  );
}
