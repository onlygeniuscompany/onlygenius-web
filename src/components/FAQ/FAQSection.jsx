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
      "No. Nuestro sistema es completamente automatizado. Una vez conectado, los algoritmos se encargan de operar por vos según las estrategias configuradas.",
  },
  {
    question: "¿Cuál es la diferencia entre los algoritmos?",
    answer:
      "Contamos con varios algoritmos optimizados para distintos estilos de trading: conservador, balanceado y agresivo. Cada uno tiene diferentes niveles de riesgo, frecuencia de operación y objetivos de rentabilidad.",
  },
  {
    question: "¿Cómo puedo hacer seguimiento del rendimiento?",
    answer:
      "Te damos acceso a un panel de control en tiempo real donde podés ver el rendimiento de tu cuenta, estadísticas clave y gráficos detallados de cada operación.",
  },
  {
    question: "¿Puedo retirar mis fondos en cualquier momento?",
    answer:
      "Sí. Como cliente, tenés control total sobre tu cuenta. Podés desconectarla del sistema o retirar fondos cuando lo desees, según las condiciones del broker.",
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
    <div
      style={{
        backgroundColor: "#09090B",
        color: "#FAFAFA",
        fontFamily: "Inter, sans-serif",
        padding: "96px 24px",
        maxWidth: 1280,
        margin: "0 auto",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <div style={{ color: "#2563EB", fontSize: 14, fontWeight: 600 }}>Preguntas frecuentes</div>
        <h2 style={{ fontSize: 36, fontWeight: 700, margin: "12px 0" }}>
          Respuestas a tus dudas
        </h2>
        <p style={{ color: "#A1A1AA", fontSize: 16 }}>
          ¿Tenés preguntas? Estamos para ayudarte.
        </p>
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        {faqs.map((faq, idx) => (
          <div key={idx} style={{ borderBottom: "1px solid #27272A", padding: "16px 0" }}>
            <div
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              style={{
                display: "flex",
                justifyContent: "space-between",
                cursor: "pointer",
                fontWeight: 500,
                fontSize: 16,
              }}
            >
              {faq.question}
              <span style={{ transform: openIndex === idx ? "rotate(180deg)" : "rotate(0deg)" }}>
                ▼
              </span>
            </div>
            {openIndex === idx && (
              <p style={{ marginTop: 8, color: "#A1A1AA", fontSize: 14 }}>{faq.answer}</p>
            )}
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: 64,
          backgroundColor: "#18181B",
          padding: "32px",
          borderRadius: 12,
          textAlign: "center",
        }}
      >
        <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>
          ¿Todavía tenés preguntas?
        </h3>
        <p style={{ fontSize: 14, color: "#A1A1AA", marginBottom: 16 }}>
          Si necesitás ayuda, nuestro equipo está listo para asistirte.
        </p>
        <button
          style={{
            backgroundColor: "#2563EB",
            color: "white",
            padding: "8px 16px",
            borderRadius: 6,
            fontWeight: 500,
            fontSize: 14,
            border: "none",
            cursor: "pointer",
          }}
        >
          Contactanos
        </button>
      </div>
    </div>
  );
}
