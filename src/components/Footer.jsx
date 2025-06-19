import React from "react";


const Foot = () =>{
    return (<footer className=" text-[#A1A1AA] font-inter px-6 pt-16 pb-8 flex flex-col gap-12">
        <div className="max-w-[1200px] mx-auto flex flex-wrap justify-between gap-12">
          {/* Left section */}
          <div className="flex-1 min-w-[240px]">
            <a href="/">
            <img src="/White.png" alt="ONLYGENIUS" className="w-[180px] mb-6" />
            </a>
            <p className="text-[14px] max-w-[280px]">
              Gestión algorítmica de capital profesional para traders, empresas y estrategias a largo plazo.
            </p>
            {/* <div className="flex gap-4 mt-4">
              {["telegram", "instagram", "facebook", "x"].map((platform, i) => (
                <img
                  key={i}
                  // src={`/icons/${platform}.svg`}
                  alt={platform}
                  className="w-5 h-5 cursor-pointer"
                />
              ))}
            </div> */}
          </div>
  
          {/* Center links */}
          <div className="flex gap-16 flex-wrap">
            <div>
              <h4 className="text-[#FAFAFA] text-[14px] font-semibold mb-3">Empresa</h4>
              <div className="flex flex-col gap-2 text-[14px]">
                <a href="/services">Servicios</a>
                <a href="/https://calendly.com/onlygenius-support/30min">Contacto</a>
              </div>
            </div>
            <div>
              <h4 className="text-[#FAFAFA] text-[14px] font-semibold mb-3">Soporte</h4>
              <div className="flex flex-col gap-2 text-[14px]">
                <a href="/https://calendly.com/onlygenius-support/30min">Centro de ayuda</a>
                <a href="/faq">Documentación</a>
                <a href="/faq">Preguntas frecuentes</a>
                <a href="/https://calendly.com/onlygenius-support/30min">Contactar con el soporte</a>
              </div>
            </div>
          </div>
  
          {/* Newsletter */}
          <div className="min-w-[240px]">
            <h4 className="text-[#FAFAFA] text-[14px] font-semibold mb-3">Mantente al día</h4>
            <form className="flex gap-2 flex-wrap">
              <input
                type="email"
                placeholder="Introduce tu correo electrónico"
                className="p-2.5 bg-[#18181B] border border-[#27272A] rounded-md text-[#FAFAFA] text-[14px] flex-1 min-w-[180px]"
              />
              <button
                type="submit"
                className="bg-[#2563EB] rounded-md px-4 py-2.5 text-[14px] font-medium text-white border-none cursor-pointer"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>
  
        {/* Bottom line */}
        <div className="max-w-[1200px] mx-auto flex justify-between flex-wrap text-[12px] border-t border-[#27272A] pt-6 gap-4">
          <span>© 2050 ONLYGENIUS. Todos los derechos reservados.</span>
          <div className="flex gap-4">
            <a href="/faq">Términos</a>
            <a href="/faq">Cookies</a>
          </div>
        </div>
      </footer>)
}

export default Foot;    