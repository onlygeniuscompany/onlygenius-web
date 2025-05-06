import React from "react";

export default function UnderConstruction() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[radial-gradient(circle_at_30%_30%,#1f1f1f,#09090b)] text-[#FAFAFA] text-center px-4">
      <img src="/White.png" alt="OnlyGenius Logo" className="w-120 mb-6" />
      <h1 className="text-2xl sm:text-3xl font-semibold">Estamos trabajando para traerte algo increíble</h1>
      <p className="text-[#A1A1AA] text-base mt-2">Este sitio está en construcción. Vuelve pronto.</p>
    </div>
  );
}
