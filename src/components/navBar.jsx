import React from "react";

export default function NavBar() {
  return (
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
  );
}
