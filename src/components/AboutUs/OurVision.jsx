// src/components/VisionSection.jsx
import React from "react";

export default function VisionSection() {
  return (
    <section className="w-full bg-gradient-to-b from-blue-600 to-blue-700 text-white py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto space-y-4">
        <h3 className="text-sm font-semibold tracking-wide text-white/90">Our Vision</h3>
        <p className="text-xl md:text-2xl font-light leading-relaxed">
          To be the leading platform for intelligent, transparent, and scalable algorithmic trading solutions —
          empowering traders worldwide to unlock consistent performance with minimal effort.
        </p>
      </div>
    </section>
  );
}
