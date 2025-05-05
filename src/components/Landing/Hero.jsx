// HeroWithNavbar.jsx
import React from "react";

export default function Hero() {
return (
<div className="bg-[#09090B] text-[#FAFAFA] font-inter w-full overflow-x-hidden min-h-screen">
  <div className="max-w-[1280px] mx-auto px-4 ">

    {/* Hero Section */}
    <div className="text-center py-[25px]">
      <div className="text-[#2563EB] text-[16px] font-semibold leading-[24px]">Desde 2012</div>
      <h1 className="text-[clamp(35px,6vw,48px)] font-bold leading-[56px] my-[10px]">
        Tu puerta de entrada a la gestión de capital <span className="text-[#2563EB]">algorítmica</span>
      </h1>
      <p className="text-[16px] text-[#A1A1AA] max-w-[672px] mx-auto mb-[25px]">
        Tecnología profesional para traders, empresas y estrategias de capital a largo plazo.
      </p>
      <a href="https://calendly.com/onlygenius-support/30min">
        <div className="inline-flex items-center gap-2 bg-[#2563EB] rounded-md px-4 py-2 text-[14px] font-medium text-white cursor-pointer">
          Empezar
          <div className="w-3 h-3 border-t-2 border-r-2 border-white rotate-45"></div>
        </div>
      </a>
    </div>

  </div>
  <div className="text-center ">
      <img
        src="/dash-earth.png"
        alt="Dashboard preview"
        className="max-w-full rounded-[16px]"
      />
    </div>
</div>

);
};
 function Hero1() {
    return (
      <div
        style={{
          position: "relative",
          backgroundColor: "#09090B",
          padding: "96px 24px 160px",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        {/* Imagen del mundo */}
        <img
          src="/earth.png" // Asegurate que coincida con tu nombre de archivo real
          alt="World globe"
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-10%)",
            width: 500,
            maxWidth: "100%",
            opacity: 0.15,
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
  
        {/* Contenido principal */}
        <div style={{ position: "relative", zIndex: 1, maxWidth: 800, margin: "0 auto" }}>
          <div style={{ color: "#2563EB", fontSize: 14, fontWeight: 600 }}>Since 2012</div>
          <h1 style={{ fontSize: 40, fontWeight: 700, marginTop: 12, lineHeight: 1.2 }}>
            Your gateway to <span style={{ color: "#2563EB" }}>algorithmic</span> <br />
            capital management
          </h1>
          <p style={{ color: "#A1A1AA", fontSize: 16, marginTop: 16 }}>
            Professional technology for traders, companies, and long-term capital strategies.
          </p>
          <button
            style={{
              backgroundColor: "#2563EB",
              color: "white",
              border: "none",
              borderRadius: 6,
              padding: "10px 20px",
              fontWeight: 500,
              fontSize: 14,
              marginTop: 32,
              cursor: "pointer",
            }}
          >
            Get started →
          </button>
        </div>
        <div className="text-center mt-50 py-[25px]">
      <img
        src="/dashboard-mockup.png"
        alt="Dashboard preview"
        className="max-w-full rounded-[16px]"
      />
    </div>
      </div>
    );
  }
const HeroSection = () => {
    return (
      <div
        style={{
          backgroundColor: '#09090B',
          padding: '96px 24px',
          textAlign: 'center',
          color: '#FAFAFA',
          fontFamily: 'Inter, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: 960, margin: '0 auto', zIndex: 2, position: 'relative' }}>
          <div style={{ color: '#3B82F6', fontSize: 14, fontWeight: 600 }}>Since 2012</div>
          <h1 style={{ fontSize: 36, fontWeight: 700, margin: '16px 0' }}>
            Your gateway to{' '}
            <span style={{ color: '#3B82F6' }}>algorithmic</span>
            <br />
            capital management
          </h1>
          <p style={{ fontSize: 16, color: '#A1A1AA', maxWidth: 600, margin: '0 auto 24px' }}>
            Professional technology for traders, companies, and long-term capital strategies.
          </p>
          <button
            style={{
              backgroundColor: '#3B82F6',
              color: 'white',
              border: 'none',
              borderRadius: 6,
              padding: '10px 20px',
              fontSize: 14,
              fontWeight: 500,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            Get started
            <span style={{ fontSize: 16, transform: 'rotate(-45deg)' }}>→</span>
          </button>
        </div>
  
        {/* Imagen del mundo */}
        <img
          src="/earth.png" // reemplazá con la ruta de la imagen del mundo
          alt="world globe"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -20%)',
            width: 600,
            zIndex: 0,
            opacity: 0.4,
          }}
        />
  
        {/* Imagen del dashboard encima */}
        <div style={{ marginTop: 64, zIndex: 3, position: 'relative' }}>
          <img
            src="/dashboard-mockup.png" // reemplazá con la ruta de la imagen del dashboard
            alt="dashboard preview"
            style={{ maxWidth: 1200, width: '100%', borderRadius: 12 }}
          />
        </div>
      </div>
    );
  };
  
//   export default HeroSection;
// export default Hero;