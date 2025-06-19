import React from "react";

const Conversion = () => {
    return (
    <div className=" px-6 py-12 font-inter flex justify-center">
    <div className="bg-gradient-to-r from-[#18181B] to-[#27272A] px-8 py-6 rounded-xl max-w-[900px] w-full flex justify-between items-center flex-wrap gap-4">
      <div>
        <div className="text-[#FAFAFA] text-[16px] font-semibold mb-2">
        ¿Usas otra plataforma o necesitas una conversión?
        </div>
        <div className="text-[#A1A1AA] text-[14px]">
        Podemos adaptar nuestros algoritmos para funcionar con tu plataforma de trading preferida.
        </div>
      </div>
      <a href="https://calendly.com/onlygenius-support/30min">
      <div className="flex items-center gap-4">
        <span className="text-[#FAFAFA] text-[14px]">Saber más</span>
        <button className="bg-[#2563EB] text-white text-[14px] font-medium px-4 py-2 rounded-md cursor-pointer">
        Reservar llamada →
        </button>
      </div>
      </a>
    </div>
  </div>
    )
}

export default Conversion;