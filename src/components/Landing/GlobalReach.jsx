import React from "react";

const GlobalReach = () => {
  return (
    <div className=" text-[#FAFAFA] px-6 py-24 text-center font-inter max-w-[1280px] mx-auto">
      <div className="text-[#2563EB] text-[14px] font-semibold mb-4">Alcance global</div>
      <h2 className="text-[24px] font-bold leading-[1.3] mb-4">
        Ya trabajamos con<br />clientes en más de 10 países
      </h2>
      <p className="text-[14px] text-[#A1A1AA] max-w-[640px] mx-auto mb-12">
        Una comunidad global que crece cada mes—impulsada por resultados reales y confianza a largo plazo.
      </p>
      <img
        src="/earth.png"
        alt="Mapa de alcance global"
        className="w-full max-w-[1000px] h-auto mx-auto block"
      />
    </div>
  );
};

export default GlobalReach;
