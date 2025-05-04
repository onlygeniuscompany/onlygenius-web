// import Navbar from "./components/Navbar"
import CompatibilitySection from "./components/CompatibilitySection"
import Hero from "./components/Hero"
import CoreServices from "./components/CoreServices"
function App() {
  const learnMore = {
    color: '#2563EB',
    fontSize: 14,
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    cursor: 'pointer',
    };
    const wrapper = {
      background: "#09090B",
      color: "#FAFAFA",
      fontFamily: "Inter, sans-serif",
      width: "100%",
      overflowX: "hidden",
      minHeight: "100vh",
    };
  
    const container = {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "0 16px",
      width: "90%",
    };
  
    const heading = {
      textAlign: "center",
      color: "#2563EB",
      fontSize: 16,
      fontWeight: 600,
      lineHeight: "24px",
    };
  
    const title = {
      textAlign: "center",
      color: "#FAFAFA",
      fontSize: "clamp(28px, 5vw, 36px)",
      fontWeight: 700,
      lineHeight: "40px",
    };
  
    const subtitle = {
      textAlign: "center",
      color: "#A1A1AA",
      fontSize: 16,
      fontWeight: 400,
      lineHeight: "24px",
    };
  
    const cardStyle = {
      flex: "1 1 0",
      padding: 24,
      backgroundColor: "#09090B",
      borderRadius: 12,
      border: "1px solid #27272A",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      gap: 24,
      minWidth: 280,
    };
  
    return (
      <div style={wrapper}>
        <div style={container}>
          {/* Navbar */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              padding: "24px 0",
              gap: 16,
              marginTop:50
            }}
          >
            <img
              src="/White.png"
              alt="Logo"
              style={{ width: 300, height: "auto"  }}
            />
            </div>
        {/* Responsive wrapper */}

        <div style={{ textAlign: "center", padding: "64px 0" }}>
          <div style={heading}>Desde 2012</div>
          <h1
            style={{
              fontSize: "clamp(28px, 6vw, 48px)",
              fontWeight: 700,
              lineHeight: "56px",
              margin: "24px 0",
            }}
          >
            Tu puerta de entrada a la gestión de capital <span style={{ color: "#2563EB" }}>algorítmica</span>
          </h1>
          <p
            style={{
              fontSize: 16,
              color: "#A1A1AA",
              maxWidth: 672,
              margin: "0 auto 32px",
            }}
          >
            Tecnología profesional para traders, empresas y estrategias de capital a largo plazo.
          </p>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              backgroundColor: "#2563EB",
              borderRadius: 6,
              padding: "8px 16px",
              fontSize: 14,
              fontWeight: 500,
              color: "white",
              cursor: "pointer",
            }}
          >
            Empezar
            <div
              style={{
                width: 12,
                height: 12,
                borderTop: "2px solid white",
                borderRight: "2px solid white",
                transform: "rotate(45deg)",
              }}
            />
          </div>
        </div>

        {/* Imagen del dashboard */}
        <div style={{ textAlign: "center", padding: "64px 0" }}>
          <img
            src="/image (2).png"
            alt="Dashboard preview"
            style={{
              maxWidth: "100%",
              borderRadius: 16,
            }}
          />
        </div>

        {/* Core Services */}
        <div style={{ padding: "64px 0" }}>
          <div style={heading}>Core Services</div>
          <div style={title}>Gestión de cuentas totalmente automatizada. Sin complicaciones.</div>
          <div style={subtitle}>Nosotros operamos. Vos definís los objetivos.</div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 24,
              justifyContent: "center",
              marginTop: 48,
            }}
          >
            {[
              {
                title: "Gestión algorítmica de cuentas",
                desc: "Gestionamos cuentas en brokers o firmas de prop trading usando nuestros algoritmos propietarios. Totalmente automatizado—no necesitás hacer nada.",
                img: "/Bot.png",
              },
              {
                title: "Algoritmos exclusivos de alto rendimiento",
                desc: "Estrategias auditadas y optimizadas para operar en mercados de primer nivel.",
                img: "/Data graph 1.png",
              },
              {
                title: "Robots de trading personalizados",
                desc: "¿Ya tenés una estrategia? La convertimos en un robot funcional (MT4, MT5 o cTrader).",
                img: "/Data graph 1.png",
              },
            ].map(({ title, desc, img }, idx) => (
              <div key={idx} style={cardStyle}>
                <img src={img} alt="" style={{ width: 48, height: 48, borderRadius: 8 }} />
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <div style={{ fontSize: 20, fontWeight: 500 }}>{title}</div>
                  <div style={{ color: "#A1A1AA", fontSize: 16 }}>{desc}</div>
                  <div style={{ color: "#2563EB", fontSize: 14, fontWeight: 500, cursor: "pointer" }}>
                    Saber más →
                  </div>
                </div>
              </div>
            ))}
        </div>
        </div>
        <div
          style={{
            width: '100%',
            padding: '96px 24px',
            background: '#09090B',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            fontFamily: 'Inter, sans-serif',
            alignItems: 'center',
            gap: '64px',
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '1280px',
              display: 'flex',
              flexDirection: window.innerWidth < 1024 ? 'column' : 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 48,
            }}
          >
            {/* Text + Cards */}
            <div
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: 32,
                zIndex: 2,
              }}
            >
              {/* Text */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div
                  style={{
                    color: '#2563EB',
                    fontSize: 14,
                    fontWeight: 600,
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  Compatibilidad
                </div>
                <div
                  style={{
                    color: '#FAFAFA',
                    fontSize: window.innerWidth < 768 ? 24 : 36,
                    fontWeight: 700,
                    fontFamily: 'Inter, sans-serif',
                    lineHeight: '1.2',
                  }}
                >
        Compatible con las plataformas de trading más utilizadas        </div>
                <div
                  style={{
                    color: '#A1A1AA',
                    fontSize: 16,
                    fontWeight: 400,
                    fontFamily: 'Inter, sans-serif',
                    lineHeight: '24px',
                  }}
                >
                  Nuestros sistemas están listos para operar en:
                </div>
              </div>

              {/* Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
  {[
    {
      name: 'MetaTrader 4',
      active: false,
      icon: '/MT4 Logo mark.png',
      description: 'Conectá tu cuenta de MT4 y automatizá tu estrategia usando nuestros algoritmos sin intervención manual.'
    },
    {
      name: 'MetaTrader 5',
      active: true,
      icon: '/MT5 Logo mark.png',
      description: 'Nuestra integración con MT5 permite monitoreo avanzado, múltiples órdenes y ejecución optimizada.'
    },
    {
      name: 'cTrader',
      active: false,
      icon: '/cTrader mark.png',
      description: 'Operá con cTrader y aprovechá las funcionalidades de trading institucional que ofrecemos.'
    },
  ].map(({ name, active, icon, description }) => (
    <div
      key={name}
      style={{
        padding: '16px 24px',
        border: active ? '1px solid #2563EB' : '1px solid #27272A',
        backgroundColor: active ? '#18181B' : 'transparent',
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <img src={icon} alt={`${name} icon`} style={{ width: 24, height: 24 }} />
        <div style={{ color: '#FAFAFA', fontSize: 18, fontWeight: 500 }}>{name}</div>
      </div>
      <div style={{ color: '#A1A1AA', fontSize: 14, lineHeight: '20px' }}>
        {description}
      </div>
    </div>
  ))}
</div>
            </div>

            {/* Image */}
            <div
              style={{
                flex: 1,
                position: 'relative',
                width: '100%',
                maxWidth: 600,
                minWidth: 280,
              }}
            >
              <img
                src="/3_2 screen mockup.png"
                alt="Trading platform"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 12,
                }}
              />
            </div>
          </div>
        </div>
      </div>
</div>

  )
}

export default App
