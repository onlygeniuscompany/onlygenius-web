// src/components/AboutSection.jsx
import React from "react";

export default function AboutSection() {
  return (
    <section className="w-full px-6 py-24 md:px-12 text-center bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm text-[#2563EB] font-medium mb-4">
          About OnlyGenius
        </p>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
          Empowering Traders with Smart,<br /> Seamless Automation
        </h2>
        <p className="text-base text-gray-300 leading-relaxed">
          At OnlyGenius, we believe in making intelligent trading accessible to
          everyone — from aspiring retail traders to experienced professionals
          managing prop firm accounts. Our mission is simple: to equip you with
          cutting-edge, in-house-built trading algorithms that work for you,
          around the clock.
        </p>
      </div>
    </section>
  );
}
