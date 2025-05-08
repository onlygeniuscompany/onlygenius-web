// src/components/AboutSection.jsx
import React from "react";

export default function AboutSection() {
  return (
    <section className="w-full px-6 py-24 md:px-12 text-center  text-white">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm text-[#2563EB] font-medium mb-4">
          Sobre OnlyGenius
        </p>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
        Potenciamos a traders con automatización<br /> Inteligencia + escalabilidad.
        </h2>
        <p className="text-base text-gray-300 leading-relaxed">
          En OnlyGenius, creemos en hacer que el trading inteligente sea accesible para todos — desde traders minoristas que recién comienzan hasta profesionales con cuentas fondeadas en prop firms. Nuestra misión es simple: darte acceso a algoritmos de trading de última generación, desarrollados internamente, que trabajen para ti las 24 horas.
        </p>
      </div>
    </section>
  );
}
