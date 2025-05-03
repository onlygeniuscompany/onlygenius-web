// import Navbar from "./components/Navbar"
import CompatibilitySection from "./components/CompatibilitySection"
import Hero from "./components/Hero"
import CoreServices from "./components/CoreServices"
function App() {
  const cardStyle = {
    flex: '1 1 0',
    padding: 24,
    position: 'relative',
    backgroundColor: '#09090B',
    overflow: 'hidden',
    borderRadius: 12,
    border: '1px solid #27272A',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 64,
    };
    
    const heading = {
    textAlign: 'center',
    color: '#2563EB',
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: 600,
    lineHeight: '24px',
    };
    
    const title = {
    alignSelf: 'stretch',
    textAlign: 'center',
    color: '#FAFAFA',
    fontSize: 36,
    fontFamily: 'Inter',
    fontWeight: 700,
    lineHeight: '40px',
    };
    
    const subtitle = {
    alignSelf: 'stretch',
    textAlign: 'center',
    color: '#A1A1AA',
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: 400,
    lineHeight: '24px',
    };
    
    const learnMore = {
    color: '#2563EB',
    fontSize: 14,
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    cursor: 'pointer',
    };
  // <div className="bg-black min-h-screen text-white">
  //     {/* Agrega tus páginas o secciones aquí */}
  //     <Hero/>
  //     <CompatibilitySection/>
  //     <CoreServices/>
  // </div>
      //   <div style={{ padding: "24px 5%", maxWidth: 1440, margin: "0 auto" }}>
      //   {/* NAVBAR */}
      //   <div style={{
      //     display: "flex",
      //     flexWrap: "wrap",
      //     justifyContent: "space-between",
      //     alignItems: "center",
      //     gap: 16,
      //   }}>
      //     <img
          
      //   src="/White.png" // Reemplaza con la ruta de tu logo
      //   alt="Logo"
      //   style={{
      //     width: '250px', // Tamaño del logo en la navbar
      //     height: 'auto', // Mantiene la proporción
      //   }}
      // />
      //     {/* <img src="/White.png" alt="" /> */}
      //     {/* <div style={{ fontWeight: "bold", fontSize: 18, letterSpacing: 2 }}>ONLYGENIUS</div> */}
      //     <div style={{
      //       display: "flex",
      //       gap: 16,
      //       flexWrap: "wrap",
      //       justifyContent: "center",
      //       flexGrow: 1
      //     }}>
      //       {["Services", "Our Algorithms", "Affiliate program", "FAQs", "Partners", "Collections"].map((item) => (
      //         <div key={item} style={{ fontSize: 14, fontWeight: 500, cursor: "pointer" }}>{item}</div>
      //       ))}
      //     </div>
      //     <div style={{
      //       backgroundColor: "#2563EB",
      //       borderRadius: 6,
      //       padding: "8px 16px",
      //       fontSize: 14,
      //       fontWeight: 500,
      //       color: "white",
      //       whiteSpace: "nowrap"
      //     }}>
      //       Client area
      //     </div>
      //   </div>
      // </div>
  return (
    <div style={{
      background: "#09090B",
      color: "#FAFAFA",
      fontFamily: "Inter, sans-serif",
      width: "100%",
      overflowX: "hidden"
    }}>
      <div style={{
            display: "flex",
            gap: 16,
            flexWrap: "wrap",
            justifyContent: "center",
            flexGrow: 1,
            marginTop: 50
          }}>
            <img
          
          src="/White.png" // Reemplaza con la ruta de tu logo
          alt="Logo"
          style={{
            width: '250px', // Tamaño del logo en la navbar
            height: 'auto', // Mantiene la proporción
          }}
        />
          </div>
      {/* Responsive wrapper */}

      {/* HERO */}
      <div style={{ textAlign: "center", padding: "64px 5% 0", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ fontSize: 16, fontWeight: 600, color: "#2563EB" }}>Since 2012</div>
        <h1 style={{ fontSize: 32, fontWeight: 700, lineHeight: "40px", margin: "24px 0" }}>
          Your gateway to <span style={{ color: "#2563EB" }}>algorithmic</span> capital management
        </h1>
        <p style={{ fontSize: 16, color: "#A1A1AA", maxWidth: 672, margin: "0 auto 32px" }}>
          Professional technology for traders, companies, and long-term capital strategies.
        </p>
        <div style={{
          backgroundColor: "#2563EB",
          borderRadius: 6,
          padding: "8px 16px",
          fontSize: 14,
          fontWeight: 500,
          color: "white",
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          cursor: "pointer"
        }}>
          Get started
          <div style={{
            width: 12,
            height: 12,
            borderTop: "2px solid white",
            borderRight: "2px solid white",
            transform: "rotate(45deg)"
          }}></div>
        </div>
      </div>
{/* Dashboard Image */}
<div style={{ display: "flex", justifyContent: "center", padding: "64px 24px" }}>
<img
src="/image (2).png"
alt="dashboard preview"
style={{ maxWidth: 1200, width: "100%", borderRadius: 16 }}
/>
</div>
<div
  style={{
    width: '95%',
    padding: '96px 24px',
    backgroundColor: '#09090B',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 24,
  }}
>
  <div
    style={{
      width: '100%',
      maxWidth: 1280,
      padding: '0 16px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 64,
    }}
  >
    <div
      style={{
        maxWidth: 576,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20,
        textAlign: 'center',
      }}
    >
<div style={heading}>Core Services</div>
<div style={title}>
Fully automated account management. No hassle.
</div>
<div style={subtitle}>
We handle the trading. You define your goals.
</div>
</div>

<div
style={{
display: 'flex',
gap: 24,
width: '100%',
alignItems: 'flex-start',
justifyContent: 'center',
}}
>
{[
{
title: 'Algorithmic account management',
desc: `We manage accounts on brokers or prop firms using our proprietary algorithms.\nFully automated—no action required on your part.`,
img:"/Bot.png"
},
{
title: 'High-performance exclusive algorithms',
desc: `Audited and optimized strategies designed to operate in top-tier trading`,
img:"/Data graph 1.png"
},
{
title: 'Custom-built trading robots',
desc: `Already have a strategy? We turn it into a functional robot (MT4, MT5 or cTrader).`,
img:"/Bot Add.png"
},
].map(({ title, desc, img }, idx) => (
<div key={idx} style={cardStyle}>
<img src={img} style={{ width: 48, height: 48, borderRadius: 8 }} />
<div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
<div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
<div
style={{
color: '#FAFAFA',
fontSize: 20,
fontWeight: 500,
lineHeight: '28px',
}}
>
{title}
</div>
<div
style={{
color: '#A1A1AA',
fontSize: 16,
fontWeight: 400,
lineHeight: '24px',
}}
>
{desc}
</div>
</div>
<div style={learnMore}>
Learn more <span style={{ fontSize: 18 }}>{'→'}</span>
</div>
</div>
</div>
))}
</div>
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
            fontFamily: 'Inter',
          }}
        >
          Compatibility
        </div>
        <div
          style={{
            color: '#FAFAFA',
            fontSize: window.innerWidth < 768 ? 24 : 36,
            fontWeight: 700,
            fontFamily: 'Inter',
            lineHeight: '1.2',
          }}
        >
          Compatible with the most widely used trading platforms
        </div>
        <div
          style={{
            color: '#A1A1AA',
            fontSize: 16,
            fontWeight: 400,
            fontFamily: 'Inter',
            lineHeight: '24px',
          }}
        >
          Our systems are ready to operate on:
        </div>
      </div>

      {/* Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {[
          { name: 'MetaTrader 4', active: false, icon: '/MT4 Logo mark.png' },
          { name: 'MetaTrader 5', active: true, icon: '/MT5 Logo mark.png' },
          { name: 'cTrader', active: false, icon: '/cTrader mark.png' },
        ].map(({ name, active, icon }) => (
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
              See how our algorithms appear directly in your MT4 terminal with real-time performance
              monitoring and customizable risk settings.
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

  )
}

export default App
