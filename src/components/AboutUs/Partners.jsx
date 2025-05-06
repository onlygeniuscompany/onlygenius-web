// src/components/PartnersSection.jsx
import React from "react";

const partners = [
  { name: "FTMO", logo: "/partners/ftmo.png" },
  { name: "MetaTrader", logo: "/partners/metatrader.png" },
  { name: "Post Affiliate Pro", logo: "/partners/postaffiliatepro.png" },
  { name: "MetaTrader 5", logo: "/partners/metatrader5.png" },
  { name: "cTrader", logo: "/partners/ctrader.png" },
  { name: "The 5%ers", logo: "/partners/5percenters.png" },
  { name: "FundingPips", logo: "/partners/fundingpips.png" },
];

export default function PartnersSection() {
  return (
    <section className="w-full bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold">Who We Work With</h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          We proudly integrate with top-tier platforms, including FTMO, The5ers, MyForexFunds, Darwinex, IC Markets, Axi, and more — offering you flexibility and reach no matter where you trade.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-center mt-10">
          {partners.map((partner, idx) => (
            <div key={idx} className="flex items-center justify-center bg-[#0f0f11] rounded-md p-4">
              <img src={partner.logo} alt={partner.name} className="h-10 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
