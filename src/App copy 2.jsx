function App() {
  const rows = [
    {
      feature: "Distribución de ganancias para traders financiados",
      onlyGenius: <span style={{ color: "#22C55E" }}>Hasta el 80%</span>,
      others: "50–60%",
    },
    {
      feature: "Historial auditado",
      onlyGenius: "✔️",
      others: "❌",
    },
    {
      feature: "Totalmente automatizado (sin intervención manual)",
      onlyGenius: "✔️",
      others: "Limitado",
    },
    {
      feature: "Paneles avanzados en tiempo real",
      onlyGenius: "✔️",
      others: "Básico",
    },
    {
      feature: "Soporte experto personalizado",
      onlyGenius: "✔️",
      others: "Soporte genérico",
    },
    {
      feature: "Compatible con múltiples tipos de cuenta",
      onlyGenius: <span style={{ color: "#22C55E" }}>Brokers, Prop Firms, Institucionales</span>,
      others: "Opciones limitadas",
    },
    {
      feature: "Bots de trading personalizados",
      onlyGenius: "✔️",
      others: "❌",
    },
    {
      feature: "Experiencia en gestión de capital",
      onlyGenius: <span style={{ color: "#22C55E" }}>Propio y de terceros</span>,
      others: "Experiencia limitada",
    },
  ];
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
              marginTop:15
            }}
          >
            <img
              src="/White.png"
              alt="Logo"
              style={{ width: 300, height: "auto"  }}
            />
            </div>
        {/* Responsive wrapper */}

        <div style={{ textAlign: "center", padding: "25px 0" }}>
          <div style={heading}>Desde 2012</div>
          <h1
            style={{
              fontSize: "clamp(28px, 6vw, 48px)",
              fontWeight: 700,
              lineHeight: "56px",
              margin: "10px 0",
            }}
          >
            Tu puerta de entrada a la gestión de capital <span style={{ color: "#2563EB" }}>algorítmica</span>
          </h1>
          <p
            style={{
              fontSize: 16,
              color: "#A1A1AA",
              maxWidth: 672,
              margin: "0 auto 25px",
            }}
          >
            Tecnología profesional para traders, empresas y estrategias de capital a largo plazo.
          </p>
          <a href="https://calendly.com/onlygenius-support/30min">
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
          </a>
        </div>

        {/* Imagen del dashboard */}
        <div style={{ textAlign: "center", padding: "25px 0" }}>
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
                  <a href="https://calendly.com/onlygenius-support/30min">

                  <div style={{ color: "#2563EB", fontSize: 14, fontWeight: 500, cursor: "pointer" }} >
                    Saber más →
                  </div>
                  </a>
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
      <div
      style={{
        backgroundColor: "#09090B",
        padding: "96px 24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 48,
        fontFamily: "Inter, sans-serif",
        color: "#FAFAFA",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: 800 }}>
        <div style={{ color: "#2563EB", fontSize: 14, fontWeight: 600 }}>
          Trusted by
        </div>
        <h2
          style={{
            fontSize: 32,
            fontWeight: 700,
            margin: "16px 0",
          }}
        >
         Con la confianza de empresas, traders minoristas y gestores de capital
        </h2>
        <p style={{ color: "#A1A1AA", fontSize: 16 }}>
        Gestionamos cuentas tanto para particulares como para instituciones, ayudándolos a diversificar su capital mediante sistemas algorítmicos eficientes y confiables.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 24,
          width: "100%",
          maxWidth: 1200,
        }}
      >
        {[
  {
    title: "Capital institucional y corporativo",
    desc: "Gestión total o parcial del capital, incluyendo control de riesgo y paneles personalizados.",
    icon: "🏢",
    bg: "#1E1E20",
    iconBg: "#0C0C0E",
  },
  {
    title: "Traders minoristas",
    desc: "Ideal para gestionar cuentas financiadas o personales sin necesidad de conocimientos técnicos.",
    icon: "🛍️",
    bg: "#1E1E20",
    iconBg: "#0C0C0E",
  },
]
.map(({ title, desc, icon, bg, iconBg }, idx) => (
          <div
            key={idx}
            style={{
              flex: "1 1 300px",
              background: "linear-gradient(135deg, #1E1E20, #151518)",
              borderRadius: 12,
              padding: 24,
              color: "#FAFAFA",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              maxWidth: 500,
              minWidth: 280,
            }}
          >
            <div
              style={{
                backgroundColor: iconBg,
                width: 40,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 8,
                fontSize: 20,
              }}
            >
              {icon}
            </div>
            <div style={{ fontSize: 18, fontWeight: 600 }}>{title}</div>
            <div style={{ color: "#A1A1AA", fontSize: 14 }}>{desc}</div>
          </div>
        ))}
      </div>
    </div>
    <div style={{
      backgroundColor: "#09090B",
      padding: "96px 24px",
      fontFamily: "Inter, sans-serif",
      color: "#FAFAFA",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 48,
    }}>
<div style={{ textAlign: "center", maxWidth: 800 }}>
  <div style={{ color: "#2563EB", fontSize: 14, fontWeight: 600 }}>
    Por qué elegirnos
  </div>
  <h2 style={{ fontSize: 32, fontWeight: 700, margin: "16px 0" }}>
    ¿Por qué elegir OnlyGenius?
  </h2>
  <p style={{ color: "#A1A1AA", fontSize: 16 }}>
    Descubrí las ventajas que nos convierten en la elección preferida de traders algorítmicos en todo el mundo.
  </p>
</div>

      <div style={{
        width: "100%",
        maxWidth: 1000,
        overflowX: "auto",
        borderRadius: 8,
        border: "1px solid #27272A",
      }}>
        <table style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: 14,
        }}>
          <thead>
            <tr style={{ backgroundColor: "#18181B", color: "#A1A1AA", textAlign: "left" }}>
              <th style={{ padding: "16px 24px" }}>Features</th>
              <th style={{ padding: "16px 24px" }}>ONLYGENIUS</th>
              <th style={{ padding: "16px 24px" }}>Other platforms</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(({ feature, onlyGenius, others }, index) => (
              <tr
                key={feature}
                style={{
                  backgroundColor: index % 2 === 0 ? "#101012" : "#09090B",
                }}
              >
                <td style={{ padding: "16px 24px", color: "#FAFAFA" }}>{feature}</td>
                <td style={{ padding: "16px 24px", color: "#FAFAFA" }}>{onlyGenius}</td>
                <td style={{ padding: "16px 24px", color: "#A1A1AA" }}>{others}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    <footer style={{
      backgroundColor: "#09090B",
      color: "#A1A1AA",
      fontFamily: "Inter, sans-serif",
      padding: "64px 24px 32px",
      display: "flex",
      flexDirection: "column",
      gap: 48,
    }}>
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: 48
      }}>
        {/* Left section */}
        <div style={{ flex: 1, minWidth: 240 }}>
          <img src="/White.png" alt="ONLYGENIUS" style={{ width: 180, marginBottom: 24 }} />
          <p style={{ color: "#A1A1AA", fontSize: 14, maxWidth: 280 }}>
            Professional algorithmic capital management for traders, companies, and long-term strategies.
          </p>
          <div style={{ display: "flex", gap: 16, marginTop: 16 }}>
            {["telegram", "instagram", "facebook", "x"].map((platform, i) => (
              <img
                key={i}
                // src={/icons/${platform}.svg} // Asegurate de tener estos íconos en /public/icons/
                alt={platform}
                style={{ width: 20, height: 20, cursor: "pointer" }}
              />
            ))}
          </div>
        </div>

        {/* Center links */}
        <div style={{ display: "flex", gap: 64, flexWrap: "wrap" }}>
          <div>
            <h4 style={{ color: "#FAFAFA", fontSize: 14, fontWeight: 600, marginBottom: 12 }}>Company</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {/* <a href="https://www.onlygenius.es/" style={{ fontSize: 14 }}>About us</a> */}
              <a href="https://www.onlygenius.es/" style={{ fontSize: 14 }}>Services</a>
              <a href="https://www.onlygenius.es/" style={{ fontSize: 14 }}>Contact</a>
            </div>
          </div>
          <div>
            <h4 style={{ color: "#FAFAFA", fontSize: 14, fontWeight: 600, marginBottom: 12 }}>Support</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <a href="https://www.onlygenius.es/" style={{ fontSize: 14 }}>Help center</a>
              <a href="https://www.onlygenius.es/" style={{ fontSize: 14 }}>Documentation</a>
              <a href="https://www.onlygenius.es/" style={{ fontSize: 14 }}>FAQs</a>
              <a href="https://www.onlygenius.es/" style={{ fontSize: 14 }}>Contact support</a>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div style={{ minWidth: 240 }}>
          <h4 style={{ color: "#FAFAFA", fontSize: 14, fontWeight: 600, marginBottom: 12 }}>Stay up to date</h4>
          <form style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                padding: "10px 12px",
                backgroundColor: "#18181B",
                border: "1px solid #27272A",
                borderRadius: 6,
                color: "#FAFAFA",
                fontSize: 14,
                flex: 1,
                minWidth: 180
              }}
            />
            <button
              type="submit"
              style={{
                backgroundColor: "#2563EB",
                borderRadius: 6,
                padding: "10px 16px",
                fontSize: 14,
                fontWeight: 500,
                color: "white",
                border: "none",
                cursor: "pointer"
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom line */}
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        fontSize: 12,
        borderTop: "1px solid #27272A",
        paddingTop: 24,
        gap: 16
      }}>
        <span>© 2050 ONLYGENIUS. All rights reserved.</span>
        <div style={{ display: "flex", gap: 16 }}>
          <a href="https://www.onlygenius.es/">Terms</a>
          <a href="https://www.onlygenius.es/">Cookies</a>
          <a href="https://www.onlygenius.es/">Cookies</a>
        </div>
      </div>
    </footer>
</div>

  )
}

export default App
