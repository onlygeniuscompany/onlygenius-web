import React from "react";

export default function RealAccountManagement() {
  return (
    <section className="w-full  text-white py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Izquierda: Imagen + logos */}
        <div className="flex-1 w-full">
          <div className="relative">
            <img
              src="/real-account.png" // Asegurate de reemplazar esto con tu path real
              alt="Gestión de Cuenta Real"
              className="rounded-xl w-full max-w-md"
            />
            {/* <div className="absolute bottom-4 left-4 flex gap-4 items-center">
              {["darwinex", "axi", "icmarkets", "blackbull"].map((brand, idx) => (
                <img
                  key={idx}
                  src={`/logos/${brand}.png`} // Reemplazar con tus paths de logos
                  alt={brand}
                  className="h-6 object-contain"
                />
              ))} 
            </div> */}
          </div>
        </div>

        {/* Derecha: Texto */}
        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            Gestión de Cuenta Real (Retail & Corporativo)
          </h3>
          <p className="text-gray-400 mb-6 max-w-lg">
            Ofrecemos gestión algorítmica de cuentas con capital real en brokers regulados, tanto para
            traders minoristas como para empresas que buscan diversificar su capital en los mercados
            financieros sin intervención manual.
          </p>
          <ul className="space-y-4">
            {[
              "No se requieren conocimientos técnicos",
              "Panel personalizado con métricas y control de riesgo",
              "Estrategia adaptada al perfil de cada cliente",
            ].map((point, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">✓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <a href="https://calendly.com/onlygenius-support/30min">
          <button className="mt-8 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Reservar llamada →
          </button>
          </a>
        </div>
      </div>
    </section>
  );
}
