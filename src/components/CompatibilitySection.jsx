import React from "react";

const CompatibilitySection = () => {
  return (
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
              icon: "../../public/MT4 Logo mark.png",
            },
            {
              name: "MetaTrader 5",
              active: true,
              icon: "../../public/MT5 Logo mark.png",
            },
            {
              name: "cTrader",
              active: false,
              icon: "../../public/cTrader mark.png",
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
              src="../../public/3_2 screen mockup.png"
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
  );
};

export default CompatibilitySection;
