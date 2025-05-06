// src/components/FeaturesGrid.jsx
import { BarChart2, RefreshCw, Sliders, Users } from "lucide-react";
import React from "react";

const features = [
  {
    icon: <RefreshCw className="text-blue-500 w-6 h-6" />,
    text: "Algoritmos de trading automatizados compatibles con los principales brokers y prop firms",
  },
  {
    icon: <BarChart2 className="text-blue-500 w-6 h-6" />,
    text: "Monitoreo de cuentas en tiempo real en MT4, MT5, cTrader y más",
  },
  {
    icon: <Sliders className="text-blue-500 w-6 h-6" />,
    text: "Estrategias personalizables diseñadas según perfiles de riesgo individuales",
  },
  {
    icon: <Users className="text-blue-500 w-6 h-6" />,
    text: "Oportunidades de afiliación para que crezcas con nosotros y generes ingresos",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="w-full  py-20 px-6 md:px-12">
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
