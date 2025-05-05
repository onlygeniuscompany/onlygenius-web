import React, { useState } from 'react';

export default function NavbarComp () {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = [
    'Services',
    'Our Algorithms',
    'Affiliate program',
    'FAQs',
    'Partners',
    'Collections',
  ];

  return (
    <div className="w-full bg-gradient-to-r from-[#1F1F1F] to-[#0A0A0A] border-b border-[#27272A] font-inter relative z-[50]">
      <div className="flex justify-between items-center px-[5%] py-4">
        <div
          onClick={toggleMenu}
          className="flex flex-col justify-center gap-1 w-6 h-6 z-[60] cursor-pointer md:hidden"
        >
          <div className="h-[2px] bg-white" />
          <div className="h-[2px] bg-white" />
          <div className="h-[2px] bg-white" />
        </div>
        <img src="/White.png" alt="OnlyGenius Logo" className="h-[14px]" />
        <div className="hidden md:block bg-[#2563EB] text-white py-2 px-4 rounded-md text-[14px] font-medium whitespace-nowrap cursor-pointer">
          Client area
        </div>
      </div>

      <div className="hidden md:flex justify-center gap-8 pb-4">
        {navItems.map((item) => (
          <div
            key={item}
            className="text-[14px] font-medium text-[#E4E4E7] cursor-pointer"
          >
            {item}
          </div>
        ))}
      </div>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#0A0A0A] flex flex-col gap-4 px-6 py-6 border-t border-[#27272A] md:hidden">
          {navItems.map((item) => (
            <div
              key={item}
              className="text-[16px] font-medium text-[#E4E4E7] cursor-pointer"
            >
              {item}
            </div>
          ))}
          <a href="https://calendly.com/onlygenius-support/30min"></a>
          <div className="mt-4 bg-[#2563EB] text-white py-2 px-4 rounded-md text-[14px] font-medium text-center cursor-pointer">
            Contacto
          </div>
        </div>
      )}
    </div>
  );
};