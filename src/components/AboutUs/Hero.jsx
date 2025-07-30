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
          OnlyGenius es una empresa especializada en trading algorítmico, que comercializa un conjunto de tres algoritmos de alto valor ("high ticket") que operan de forma simultánea y completamente automatizada. Colabora tanto con inversores minoristas como con empresas que facturan hasta 23 millones de euros.
          <br />Los inversores delegan la gestión en nuestros algoritmos, diversificando parte de su capital personal o empresarial en sistemas auditados, con un sólido historial de rendimiento. Estas estrategias han sido desarrolladas y optimizadas por traders cuantitativos, especialistas en trading algorítmico y profesionales del sector financiero.
          <br />Además, OnlyGenius, junto a su equipo de más de diez programadores, ofrece un servicio integral de automatización de estrategias, transformando sistemas manuales en algoritmos personalizados, adaptados a cualquier tipo de cliente.
        </p>
      </div>
    </section>
  );
}
