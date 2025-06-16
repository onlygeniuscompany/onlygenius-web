import React from "react";


const TrustedBy =()=>{
    return (<div className=" px-6 py-24 flex flex-col items-center gap-12 text-[#FAFAFA]">
        <div className="text-center max-w-[800px]">
          <div className="text-[#2563EB] text-[14px] font-semibold">Con la confianza de</div>
          <h2 className="text-[32px] font-bold my-4">Con la confianza de empresas, traders minoristas y gestores de capital</h2>
          <p className="text-[#A1A1AA] text-[16px]">
            Gestionamos cuentas tanto para particulares como para instituciones, ayudándolos a diversificar su capital mediante sistemas algorítmicos eficientes y confiables.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 w-full max-w-[1200px]">
          {[{
            title: "Capital institucional y corporativo",
            desc: "Gestión total o parcial del capital, incluyendo control de riesgo y paneles personalizados.",
            icon: "🏢",
            iconBg: "bg-[#0C0C0E]",
          }, {
            title: "Traders minoristas",
            desc: "Ideal para gestionar cuentas financiadas o personales sin necesidad de conocimientos técnicos.",
            icon: "🛍️",
            iconBg: "bg-[#0C0C0E]",
          }].map(({ title, desc, icon, iconBg }, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-3 p-6 max-w-[500px] min-w-[280px] bg-gradient-to-br from-[#1E1E20] to-[#151518] rounded-xl"
            >
              <div className={`w-10 h-10 flex items-center justify-center rounded-md text-[20px] ${iconBg}`}>{icon}</div>
              <div className="text-[18px] font-semibold">{title}</div>
              <div className="text-[#A1A1AA] text-[14px]">{desc}</div>
            </div>
          ))}
        </div>
      </div>)
}

export default TrustedBy;