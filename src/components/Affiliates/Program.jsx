import React from "react";

export default function AffiliateProgram() {
  return (
    <section className="w-full  text-white py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm text-blue-500 mb-2">Programa de afiliados</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Únete a nuestro programa de afiliados
        </h2>
        <p className="text-gray-400 mb-6">
         Recomienda nuestros servicios de forma profesional y recibe comisiones recurrentes.
        </p>
      </div>

      {/* Sección "Cómo funciona" */}
      <div className="max-w-5xl mx-auto mt-16">
        <h3 className="text-xl font-semibold text-center mb-8">¿Cómo funciona?</h3>
        <p className="text-center text-gray-400 mb-12">
          Nosotros operamos. Tú defines tus objetivos.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            { step: 1, title: "Solicita acceso", description: "Completa un formulario simple" },
            { step: 2, title: "Obtén aprobación", description: "Nuestro equipo revisará tu solicitud" },
            { step: 3, title: "Empieza a ganar", description: "Comienza a ganar comisiones promocionando OnlyGenius" },
          ].map(({ step, title, description }) => (
            <div
              key={step}
              className="bg-[#111] p-6 rounded-lg border border-[#222] flex flex-col items-center"
            >
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mb-4">
                {step}
              </div>
              <h4 className="text-lg font-semibold mb-2">{title}</h4>
              <p className="text-gray-400 text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
