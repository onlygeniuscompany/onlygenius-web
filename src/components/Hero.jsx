// HeroWithNavbar.jsx
import React from "react";

const HeroWithNavbar = () => {
return (
<div style={{ background: "#09090B", color: "#FAFAFA", fontFamily: "Inter, sans-serif" }}>
{/* NAVBAR */}
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 80px", maxWidth: 1440, margin: "0 auto" }}>
<div style={{ fontWeight: "bold", fontSize: 18, letterSpacing: 2 }}>ONLYGENIUS</div>
<div style={{ display: "flex", gap: 24 }}>
{["Services", "Our Algorithms", "Affiliate program", "FAQs", "Partners", "Collections"].map((item) => (
<div
key={item}
style={{ fontSize: 14, fontWeight: 500, color: "#FAFAFA", cursor: "pointer" }}
>
{item}
</div>
))}
</div>
<div style={{ backgroundColor: "#2563EB", borderRadius: 6, padding: "8px 16px", fontSize: 14, fontWeight: 500, color: "white", cursor: "pointer" }}>
Client area
</div>
</div>

{/* HERO */}
<div style={{ textAlign: "center", padding: "96px 24px 0", maxWidth: 1280, margin: "0 auto" }}>
<div style={{ fontSize: 16, fontWeight: 600, color: "#2563EB" }}>Since 2012</div>
<h1 style={{ fontSize: 48, fontWeight: 700, lineHeight: "56px", margin: "24px 0", color: "#FAFAFA" }}>
Your gateway to <span style={{ color: "#2563EB" }}>algorithmic</span> capital management
</h1>
<p style={{ fontSize: 18, color: "#A1A1AA", maxWidth: 672, margin: "0 auto 32px" }}>
Professional technology for traders, companies, and long-term capital strategies.
</p>
<div style={{ backgroundColor: "#2563EB", borderRadius: 6, padding: "8px 16px", fontSize: 14, fontWeight: 500, color: "white", display: "inline-flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
Get started
<div style={{ width: 12, height: 12, borderTop: "2px solid white", borderRight: "2px solid white", transform: "rotate(45deg)" }}></div>
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
</div>
);
};

export default HeroWithNavbar;