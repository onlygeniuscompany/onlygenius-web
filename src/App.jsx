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
  return (
    <div style={{
      background: "#09090B",
      color: "#FAFAFA",
      fontFamily: "Inter, sans-serif",
      width: "100%",
      overflowX: "hidden"
    }}>
      {/* Responsive wrapper */}
      <div style={{ padding: "24px 5%", maxWidth: 1440, margin: "0 auto" }}>
        {/* NAVBAR */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
        }}>
          <div style={{ fontWeight: "bold", fontSize: 18, letterSpacing: 2 }}>ONLYGENIUS</div>
          <div style={{
            display: "flex",
            gap: 16,
            flexWrap: "wrap",
            justifyContent: "center",
            flexGrow: 1
          }}>
            {["Services", "Our Algorithms", "Affiliate program", "FAQs", "Partners", "Collections"].map((item) => (
              <div key={item} style={{ fontSize: 14, fontWeight: 500, cursor: "pointer" }}>{item}</div>
            ))}
          </div>
          <div style={{
            backgroundColor: "#2563EB",
            borderRadius: 6,
            padding: "8px 16px",
            fontSize: 14,
            fontWeight: 500,
            color: "white",
            whiteSpace: "nowrap"
          }}>
            Client area
          </div>
        </div>
      </div>
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
        width: "100%",
        padding: "96px 80px",
        background: "#09090B",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "64px",
      }}
    >
      {/* Text Section */}
      <div
        style={{
          width: "100%",
          maxWidth: "1280px",
          padding: "0 24px",
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "418px",
            top: "100px",
            width: "1300px",
            height: "439px",
            background:
              "linear-gradient(87deg, rgba(150,150,150,0.5), rgba(86,86,86,0.5), rgba(228,228,228,0.5))",
            boxShadow: "300px 300px 300px rgba(0,0,0,0.3)",
            borderRadius: "9999px",
            filter: "blur(150px)",
            zIndex: 0,
          }}
        />
        <div
          style={{
            zIndex: 1,
            maxWidth: "576px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div
            style={{
              color: "#2563EB",
              fontSize: 16,
              fontWeight: 600,
              fontFamily: "Inter",
            }}
          >
            Compatibility
          </div>
          <div
            style={{
              color: "#FAFAFA",
              fontSize: 36,
              fontWeight: 700,
              fontFamily: "Inter",
              lineHeight: "40px",
            }}
          >
            Compatible with the most widely used trading platforms
          </div>
          <div
            style={{
              color: "#A1A1AA",
              fontSize: 16,
              fontWeight: 400,
              fontFamily: "Inter",
              lineHeight: "24px",
            }}
          >
            Our systems are ready to operate on:
          </div>
        </div>
      </div>

      {/* Cards and Image */}
      <div
        style={{
          width: "100%",
          maxWidth: "1280px",
          padding: "0 24px",
          display: "flex",
          gap: "64px",
          alignItems: "center",
        }}
      >
        {/* Cards */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          {[
            {
              name: "MetaTrader 4",
              active: false,
              icon: "/MT4 Logo mark.png",
            },
            {
              name: "MetaTrader 5",
              active: true,
              icon: "/MT5 Logo mark.png",
            },
            {
              name: "cTrader",
              active: false,
              icon: "/cTrader mark.png",
            },
          ].map(({ name, active, icon }) => (
            <div
              key={name}
              style={{
                padding: "16px 0 16px 24px",
                borderLeft: active ? "4px solid #2563EB" : "1px solid #27272A",
                borderRight: "1px solid #27272A",
                borderBottom: "1px solid #27272A",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                background: active ? "#18181B" : "transparent",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <img
                  src={icon}
                  alt={`${name} icon`}
                  style={{ width: 25, height: 24 }}
                />
                <div
                  style={{
                    color: "#FAFAFA",
                    fontSize: 20,
                    fontWeight: 500,
                    fontFamily: "Inter",
                  }}
                >
                  {name}
                </div>
              </div>
              <div
                style={{
                  color: "#A1A1AA",
                  fontSize: 16,
                  fontWeight: 400,
                  fontFamily: "Inter",
                }}
              >
                See how our algorithms appear directly in your MT4 terminal with
                real-time performance monitoring and customizable risk settings.
              </div>
            </div>
          ))}
        </div>

        {/* Image */}
        <div style={{ flex: 1, height: "512px", position: "relative" }}>
          <div
            style={{
              width: "1024px",
              height: "682px",
              position: "absolute",
              left: "-86px",
              top: "-46px",
              borderRadius: "12px",
            }}
          >
            <img
              src="/3_2 screen mockup.png"
              alt="Trading platform"
              style={{
                width: "994px",
                height: "682px",
                position: "absolute",
                left: "30px",
                top: "-94px",
                borderRadius: "10px",
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
