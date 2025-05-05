import React, { useState } from "react";

const faqs = [
  {
    question: "What platforms do you support?",
    answer:
      "We use advanced, in-house–built algorithms to trade on your behalf. Once connected to your broker or prop firm account, our systems operate automatically with zero manual input needed from you.",
  },
  { question: "What is the minimum capital required?", answer: "" },
  { question: "What types of accounts do you manage?", answer: "" },
  { question: "Do I need to trade myself?", answer: "" },
  { question: "What’s the difference between the algorithms?", answer: "" },
  { question: "How do I track performance?", answer: "" },
  { question: "How do I track performance?", answer: "" },
  { question: "How do I track performance?", answer: "" },
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
        <div style={{ color: "#2563EB", fontSize: 14, fontWeight: 600 }}>FAQs</div>
        <h2 style={{ fontSize: 36, fontWeight: 700, margin: "12px 0" }}>
          Frequently Asked Questions
        </h2>
        <p style={{ color: "#A1A1AA", fontSize: 16 }}>
          Have questions? We’re here to help.
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
          Still have questions?
        </h3>
        <p style={{ fontSize: 14, color: "#A1A1AA", marginBottom: 16 }}>
          Have questions or need assistance? Our team is here to help!
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
          Contact us
        </button>
      </div>
    </div>
  );
}