// src/components/WhyWeExist.jsx
import React from "react";

export default function WhyWeExist() {
  return (
    <section className="w-full  text-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Texto */}
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">Por Qué Existimos</h2>
          <p className="text-sm md:text-base text-white/80 leading-relaxed">
            El mundo del trading se mueve rápido. Las estrategias manuales suelen quedarse cortas en mercados volátiles.
            Ahí es donde entramos nosotros. OnlyGenius fue creado para cerrar la brecha entre el potencial humano
            y la precisión automatizada — ayudándote a operar de forma más inteligente, no más difícil.
          </p>
        </div>
        {/* Imagen */}
        <div className="flex-1 w-full">
          <img
            src="/why-we-exist.png"
            alt="Gráfico de trading en laptop"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </section>
  );
}
