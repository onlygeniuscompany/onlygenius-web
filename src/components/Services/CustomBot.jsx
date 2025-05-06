import React from "react";

export default function CustomBotDevelopment() {
  return (
    <section className="w-full  text-white py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-5">
        {/* Izquierda: Texto */}
        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            Desarrollo de Bots de Trading Personalizados
          </h3>
          <p className="text-gray-400 mb-6 max-w-lg">
            ¿Ya tenés una estrategia manual o semi-automatizada que funciona? La convertimos en un
            bot de trading totalmente funcional, desarrollado a medida para operar en MT4, MT5 o cTrader.
            Desde traders individuales hasta estrategias institucionales, ofrecemos soluciones de automatización adaptadas
            para llevar tu trading al siguiente nivel.
          </p>
          <ul className="space-y-4">
            {[
              "Automatización precisa basada en tus reglas de entrada, salida y riesgo",
              "Adaptación a tu estilo de trading y marco temporal",
              "Asistencia con pruebas, optimización y mejoras continuas",
              "Opcional: integración con nuestro panel de rendimiento",
            ].map((point, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">✓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <button className="mt-8 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Reservar llamada →
          </button>
        </div>

        {/* Derecha: Imagen del robot */}
        <div className="flex-1 w-full flex justify-center">
          <img
            src="/custom-bot.png"
            alt="Bot de Trading Personalizado"
            className="max-w-xs md:max-w-sm"
          />
        </div>
      </div>
    </section>
  );
}
