// src/components/FeaturesGrid.jsx
import { BarChart2, RefreshCw, Sliders, Users } from "lucide-react"; // o cualquier ícono que prefieras
import React from "react";

const features = [
  {
    icon: <RefreshCw className="text-blue-500 w-6 h-6" />,
    text: "Automated Trading Algorithms compatible with leading prop firms and brokers",
  },
  {
    icon: <BarChart2 className="text-blue-500 w-6 h-6" />,
    text: "Real-Time Account Monitoring across MT4, MT5, cTrader, and more",
  },
  {
    icon: <Sliders className="text-blue-500 w-6 h-6" />,
    text: "Customizable Strategies designed to suit individual risk profiles",
  },
  {
    icon: <Users className="text-blue-500 w-6 h-6" />,
    text: "Affiliate Opportunities so you can grow with us and earn along the way",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="w-full bg-black py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#111114] border border-neutral-800 rounded-xl p-6 text-white space-y-4"
          >
            {feature.icon}
            <p className="text-sm text-gray-300 leading-relaxed">{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
