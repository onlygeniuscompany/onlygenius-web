import React, { useState } from "react";

const faqs = [
  {
    question: "¿Qué plataformas son compatibles?",
    answer:
      "Trabajamos con brokers y prop firms compatibles con MetaTrader 4, MetaTrader 5 y cTrader. Podemos adaptar nuestros algoritmos a otras plataformas según tus necesidades.",
  },
  {
    question: "¿Cuál es el capital mínimo requerido?",
    answer:
      "El capital mínimo depende del broker o prop firm con el que trabajes. En general, recomendamos comenzar con al menos $500 para obtener resultados significativos.",
  },
  {
    question: "¿Qué tipo de cuentas gestionan?",
    answer:
      "Gestionamos cuentas personales, cuentas fondeadas (prop firms) y cuentas institucionales. Adaptamos nuestros sistemas al tipo de cuenta y objetivos de cada cliente.",
  },
  {
    question: "¿Necesito operar por mi cuenta?",
    answer:
      "No. Nuestro sistema es completamente automatizado. Una vez conectado, los algoritmos se encargan de operar por ti según las estrategias configuradas.",
  },
  {
    question: "¿Cuál es la diferencia entre los algoritmos?",
    answer:
      "Contamos con varios algoritmos optimizados para distintos estilos de trading: conservador, balanceado y agresivo. Cada uno tiene diferentes niveles de riesgo, frecuencia de operación y objetivos de rentabilidad.",
  },
  {
    question: "¿Cómo puedo hacer seguimiento del rendimiento?",
    answer:
      "Te damos acceso a un panel de control en tiempo real donde puedes ver el rendimiento de tu cuenta, estadísticas clave y gráficos detallados de cada operación.",
  },
  {
    question: "¿Puedo retirar mis fondos en cualquier momento?",
    answer:
      "Sí. Como cliente, tienes control total sobre tu cuenta. Puedes desconectarla del sistema o retirar fondos cuando lo desees, según las condiciones del broker.",
  },
  {
    question: "¿Qué nivel de riesgo tienen las estrategias?",
    answer:
      "El nivel de riesgo se adapta a tu perfil y objetivos. Nuestros algoritmos cuentan con controles de riesgo integrados como stop loss, límites de drawdown y monitoreo constante.",
  },
  {
    question: "¿Qué tan seguido se actualizan los algoritmos?",
    answer:
      "Nuestro equipo técnico analiza continuamente los resultados y realiza mejoras cada mes para optimizar el rendimiento y adaptarse a los cambios del mercado.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div id="faqs" className=" text-[#FAFAFA] font-inter px-6 py-24 max-w-[1280px] mx-auto">
    <div className="text-center mb-16">
      <div className="text-[#2563EB] text-[14px] font-semibold">Preguntas frecuentes</div>
      <h2 className="text-[36px] font-bold my-3">Respuestas a tus dudas</h2>
      <p className="text-[#A1A1AA] text-[16px]">¿Tienes preguntas? Estamos para ayudarte.</p>
    </div>

    <div className="max-w-[720px] mx-auto">
      {faqs.map((faq, idx) => (
        <div key={idx} className="border-b border-[#27272A] py-4">
          <div
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            className="flex justify-between cursor-pointer font-medium text-[16px]"
          >
            {faq.question}
            <span className={openIndex === idx ? "rotate-180" : "rotate-0"}>▼</span>
          </div>
          {openIndex === idx && (
            <p className="mt-2 text-[#A1A1AA] text-[14px]">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>

    <div className="mt-16 bg-[#18181B] p-8 rounded-xl text-center">
      <h3 className="text-[18px] font-semibold mb-3">¿Aún tienes preguntas?</h3>
      <p className="text-[14px] text-[#A1A1AA] mb-4">Si necesitas ayuda, nuestro equipo está listo para asistirte.</p>
      <a href="https://calendly.com/onlygenius-support/30min">
      <button className="bg-[#2563EB] text-white px-4 py-2 rounded-md font-medium text-[14px] border-none cursor-pointer">
        Contáctanos
      </button>
      </a>
    </div>
  </div>
  );
}
