// src/componentsSection.jsx
import React from "react";

const partners = [
  { name: "FTMO", logo: "/ftmo.png" },
  { name: "MetaTrader", logo: "/metatrader.png" },
  { name: "Post Affiliate Pro", logo: "/postaffiliatepro.png" },
  { name: "MetaTrader 5", logo: "/metatrader5.png" },
  { name: "cTrader", logo: "/ctrader.png" },
  { name: "The 5%ers", logo: "/5percenters.png" },
  { name: "FundingPips", logo: "/fundingpips.png" },
];
 
export default function PartnersSection() {
  return (
    <section className="w-full bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold">Con Quiénes Trabajamos</h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Nos integramos con plataformas de primer nivel como FTMO, The5ers, MyForexFunds, Darwinex, IC Markets, Axi y muchas más — ofreciéndote flexibilidad y alcance sin importar dónde operes.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-center mt-10">
          {partners.map((partner, idx) => (
            <div key={idx} className="flex items-center justify-center bg-[#0f0f11] rounded-md p-4">
              <img src={partner.logo} alt={partner.name} className="h-25 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
