// src/components/VisionSection.jsx
import React from "react";

export default function VisionSection() {
  return (
    <section className="w-full bg-gradient-to-b from-blue-600 rounded-xl to-blue-700 text-white py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto space-y-4">
        <h3 className="text-sm font-semibold tracking-wide text-white/90">Nuestra Visión</h3>
        <p className="text-xl md:text-2xl font-light leading-relaxed">
          Ser la plataforma líder en soluciones de trading algorítmico inteligentes, transparentes y escalables — empoderando a inversores y traders de todo el mundo para alcanzar un rendimiento constante con el mínimo esfuerzo.
        </p>
      </div>
    </section>
  );
}
