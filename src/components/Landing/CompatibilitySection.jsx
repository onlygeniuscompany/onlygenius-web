import React, { useState, useEffect } from "react";

const platforms = [
  {
    name: "MetaTrader 4",
    icon: "/MT4 Logo mark.png",
    image: "/MT4.png",
    description:
      "Conectá tu cuenta de MT4 y automatizá tu estrategia usando nuestros algoritmos sin intervención manual.",
  },
  {
    name: "MetaTrader 5",
    icon: "/MT5 Logo mark.png",
    image: "/MT5.png",
    description:
      "Nuestra integración con MT5 permite monitoreo avanzado, múltiples órdenes y ejecución optimizada.",
  },
  {
    name: "cTrader",
    icon: "/cTrader mark.png",
    image: "/cTraderPC.png",
    description:
      "Operá con cTrader y aprovechá las funcionalidades de trading institucional que ofrecemos.",
  },
];

export default function CompatibilitySection() {
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % platforms.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full px-6 py-24 flex flex-col items-center gap-16">
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
        {/* Text + Cards */}
        <div className="flex flex-col gap-8 z-20 flex-1">
          <div className="flex flex-col gap-4">
            <div className="text-[#2563EB] text-[14px] font-semibold">Compatibilidad</div>
            <div className="text-[#FAFAFA] text-[24px] lg:text-[36px] font-bold leading-tight">
              Compatible con las plataformas de trading más utilizadas
            </div>
            <div className="text-[#A1A1AA] text-[16px] leading-6">
              Nuestros sistemas están listos para operar en:
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {platforms.map(({ name, icon, description }, i) => (
              <div
                key={name}
                onClick={() => setActiveIndex(i)}
                className={`p-4 lg:px-6 border rounded-lg flex flex-col gap-3 cursor-pointer transition-colors duration-300 ${
                  activeIndex === i ? "border-[#2563EB] bg-[#18181B]" : "border-[#27272A]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <img src={icon} alt={`${name} icon`} className="w-6 h-6" />
                  <div className="text-[#FAFAFA] text-[18px] font-medium">{name}</div>
                </div>
                <div className="text-[#A1A1AA] text-[14px] leading-5">{description}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Image */}
        <div className="flex-1 relative w-full max-w-[600px] min-w-[280px]">
          <img
            src={platforms[activeIndex].image}
            alt={platforms[activeIndex].name}
            className="w-full h-auto rounded-xl transition-opacity duration-500"
          />
        </div>
      </div>
    </div>
  );
}
