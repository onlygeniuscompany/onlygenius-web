import React from "react";


const InHouseTechnologySection = () => {
    return (
       <div className="bg-[#09090B] px-6 py-24 font-inter text-[#FAFAFA] flex flex-col items-center">
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row justify-between gap-16 items-center">
        <div className="flex-1 flex flex-col gap-6">
          <div className="text-[#3B82F6] text-[14px] font-semibold">Tecnología Propia</div>
          <h2 className="text-[28px] lg:text-[36px] font-bold leading-[1.2] m-0">
            Desarrollado internamente. Sin dependencias de terceros.
          </h2>
          <p className="text-[#A1A1AA] text-[16px] leading-6">
            OnlyGenius se asocia con su propia empresa de desarrollo tecnológico para ofrecer automatización personalizada, paneles de control e integraciones algorítmicas—asegurando control total y flexibilidad.
          </p>
          <div className="flex flex-col gap-4">
            {[ 
              'Algoritmos de trading propietarios con rendimiento comprobado',
              'Personalización total para tus necesidades específicas',
              'Mayor seguridad sin vulnerabilidades externas',
              'Ciclos de desarrollo más rápidos y despliegue ágil de funciones'
            ].map((text, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <img src="/check-icon-blue.svg" alt="ícono de check" width={20} />
                <span className="text-[14px]">{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 min-w-[280px]">
          {[ 
            { label: 'Seguridad de nivel empresarial', color: '#F97316', icon: '🛡️' },
            { label: 'Automatización personalizada', color: '#10B981', icon: '⚙️' },
            { label: 'Paneles avanzados', color: '#3B82F6', icon: '📊' },
            { label: 'Algoritmos propietarios', color: '#A855F7', icon: '🧠' }
          ].map(({ label, color, icon }, index) => (
            <div
              key={index}
              className="flex items-center text-white font-medium text-[14px] px-6 py-4 rounded-md shadow-md relative z-[4]"
              style={{ backgroundColor: color, marginTop: index === 0 ? 0 : -10 }}
            >
              <span className="mr-3">{icon}</span> {label}
            </div>
          ))}
        </div>
        </div>
        </div>
    );
  };
  
  export default InHouseTechnologySection;
  