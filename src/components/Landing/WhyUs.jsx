import React from "react";
const rows = [
    {
      feature: "Distribución de ganancias para traders financiados",
      onlyGenius: <span style={{ color: "#22C55E" }}>Hasta el 80%</span>,
      others: "50–60%",
    },
    {
      feature: "Historial auditado",
      onlyGenius: "✔️",
      others: "❌",
    },
    {
      feature: "Totalmente automatizado (sin intervención manual)",
      onlyGenius: "✔️",
      others: "Limitado",
    },
    {
      feature: "Paneles avanzados en tiempo real",
      onlyGenius: "✔️",
      others: "Básico",
    },
    {
      feature: "Soporte experto personalizado",
      onlyGenius: "✔️",
      others: "Soporte genérico",
    },
    {
      feature: "Compatible con múltiples tipos de cuenta",
      onlyGenius: <span style={{ color: "#22C55E" }}>Brokers, Prop Firms, Institucionales</span>,
      others: "Opciones limitadas",
    },
    {
      feature: "Bots de trading personalizados",
      onlyGenius: "✔️",
      others: "❌",
    },
    {
      feature: "Experiencia en gestión de capital",
      onlyGenius: <span style={{ color: "#22C55E" }}>Propio y de terceros</span>,
      others: "Experiencia limitada",
    },
  ];
const WhyUs = ()=>{
    return (<div className=" px-6 py-24 font-inter text-[#FAFAFA] flex flex-col items-center gap-12">
      <div className="text-center max-w-[800px]">
        <div className="text-[#2563EB] text-[14px] font-semibold">Por qué elegirnos</div>
        <h2 className="text-[32px] font-bold my-4">¿Por qué elegir OnlyGenius?</h2>
        <p className="text-[#A1A1AA] text-[16px]">
          Descubrí las ventajas que nos convierten en la elección preferida de traders algorítmicos en todo el mundo.
        </p>
      </div>

      <div className="w-full max-w-[1000px] overflow-x-auto rounded-lg border border-[#27272A]">
        <table className="w-full min-w-[600px] border-collapse text-[14px]">
          <thead>
            <tr className="bg-[#18181B] text-[#A1A1AA] text-left">
              <th className="py-4 px-6">Features</th>
              <th className="py-4 px-6">ONLYGENIUS</th>
              <th className="py-4 px-6">Other platforms</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(({ feature, onlyGenius, others }, index) => (
              <tr
                key={feature}
                className={`${index % 2 === 0 ? 'bg-[#101012]' : ''}`}
              >
                <td className="py-4 px-6 text-[#FAFAFA]">{feature}</td>
                <td className="py-4 px-6 text-[#FAFAFA]">{onlyGenius}</td>
                <td className="py-4 px-6 text-[#A1A1AA]">{others}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
)}

export default WhyUs;