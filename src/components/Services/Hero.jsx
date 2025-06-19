import React, { useState } from "react";
export default function ServicesSection({Modal}) {
  const [open,setOpen] = useState(false)
  return (
    <section className="w-full  text-white py-24 px-6 md:px-12">

      <div className="max-w-6xl mx-auto text-center">
        {/* Intro */}
        <p className="text-sm text-blue-500 font-medium">Servicios</p>
        <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4">
          Gestión Algorítmica & <br /> Servicios de Automatización
        </h2>
        <p className="text-gray-400 max-w-2xl mb-16">
          OnlyGenius ofrece soluciones completas para inversores individuales, empresas y gestores de capital de terceros
          que buscan rendimiento real de forma totalmente automátizada.
        </p>

        {/* Contenido */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Izquierda: Texto + Características */}
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Gestión de Cuentas Fondeadas (Prop Firms)
            </h3>
            <p className="text-gray-400 mb-6">
              Nuestros algoritmos aprueban y gestionan por tí fases de evaluación y  cuentas fondeadas con empresas como FTMO,
              Funding Pips, The5ers y otras. Aplicamos nuestros propios algoritmos auditados y optimizados en menos de 1H mientras
              tú sólo monitoreas los resultados.
            </p>
            <ul className="space-y-4 text-white">
              {[
                "Automatización total",
                "Reparto de beneficios de hasta el 80%",
                "Mantenimiento con gestión de riesgo",
                "Compatible con MT4, MT5, cTrader",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
             {/* <button className="mt-8 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition mr-4" onClick={()=>setOpen(true)} >
              Empezar
              </button> */}
             <button className="mt-8 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition mr-4" onClick={()=>setOpen(true)}>
               Solicitar datos de resultados 
             </button>
            <a href="https://calendly.com/onlygenius-support/30min">
            <button className="mt-8 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
              Reservar llamada →
            </button>
             </a>
          </div>

          {/* Derecha: Imagen */}
          <img src="/image (5).png" alt="Gráficos y logotipos" className="max-w-[500px] min-w-[280px]" />
        </div>
      </div>
      <Modal open={open} onClose={()=>setOpen(false)}/>
    </section>
  );
}
