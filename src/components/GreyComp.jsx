import React from "react";

export default function GraySpot({ x = "50%", y = "50%", size = "300px", intensity = "0.2", blur = "30px" }) {
  return (
    <div
      className="absolute pointer-events-none z-0 rounded-full"
      style={{
        top: y,
        left: x,
        width: size,
        height: size,
        transform: "translate(-50%, -50%)",
        backgroundColor: "#DCDCDC",
        opacity: intensity,
        filter: `blur(${blur})`,
      }}
    />
  );
}
