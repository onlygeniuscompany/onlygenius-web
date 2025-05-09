import React, { useState } from 'react';
export default function NavbarComp () {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = [
    {name:'Servicios',to:'services'},
    {name:'Algoritmos',to:'algoritmos'},
    {name:'Programa de afiliados',to:'afiliados'},
    {name:'FAQs',to:'faq'},
    {name:'Nosotros',to:'nosotros'},
  ];

  return (
    <div className="w-full  border-b border-[#27272A] font-inter relative z-[50]">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center px-[5%] py-4 gap-4 md:gap-0">
        <div className="flex justify-between items-center w-full md:w-auto">
          <a href="/">
            <img src="/White.png" alt="OnlyGenius Logo" className="h-4 " />
          </a>
          <div
            onClick={toggleMenu}
            className="flex flex-col justify-center gap-1 w-6 h-6 z-[60] cursor-pointer md:hidden"
          >
            <div className="h-[2px] bg-white" />
            <div className="h-[2px] bg-white" />
            <div className="h-[2px] bg-white" />
          </div>
        </div>

        <div className="hidden md:flex justify-center gap-8 items-center">
          {navItems.map((item,i) => (
            <a
              key={i}
              href={item.to}
              className="text-[14px] font-medium text-white hover:text-[#2563EB] cursor-pointer transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
        </div>

        <a href="https://www.dashboard.onlygenius.es">
          <div className="hidden md:block bg-[#2563EB] text-white py-2 px-4 rounded-md text-[14px] font-medium whitespace-nowrap cursor-pointer">
            Área del cliente
          </div>
        </a>
      </div>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full flex flex-col gap-4 px-6 py-6 border-t border-[#27272A] bg-[#333333] md:hidden z-50">

          <div className="flex flex-col gap-4 text-center">
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.to}
                className="text-[16px] font-medium text-white hover:text-[#2563EB] transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          <a href="https://www.dashboard.onlygenius.es" className="mt-6">
            <div className="bg-[#2563EB] text-white py-2 px-4 rounded-md text-[14px] font-medium text-center cursor-pointer">
              Área del cliente
            </div>
          </a>
        </div>
      )}
    </div>
  );
};
