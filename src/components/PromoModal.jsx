import React from "react";

export default function PromoModal({ open, onClose, openSolicitar }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="relative bg-[#0f0f11] border border-[#27272A] rounded-xl p-6 max-w-lg w-full text-white shadow-xl">
        {/* Botón de cerrar */}
        <button
          onClick={onClose}
          className="absolute right-2 top-2 sm:right-4 sm:top-3 text-white/60 hover:text-white text-2xl font-bold"
        >
          ×
        </button>

        {/* Contenido */}
        <div className="flex flex-col items-center text-center gap-4 pt-4">
          <h2 className="text-2xl font-semibold leading-tight">
            ¿Quieres conocer nuestros <br /> resultados?
          </h2>
          <p className="text-white/70 text-sm">Solicítalos ya</p>

          <img
            src="/dashboard-mockup.png"
            alt="Dashboard"
            className="w-full max-w-xs rounded-md border border-[#27272A]"
          />

          <button
            onClick={() => {
              // Podés agregar lógica acá
              openSolicitar();
              onClose();
            }}
            className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 transition text-white rounded-md text-sm font-medium"
          >
            Solicitar
          </button>
        </div>
      </div>
    </div>
  );
}
