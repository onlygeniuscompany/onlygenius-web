import React, { useState } from "react";

export default function PerformanceAccessModal({ open, onClose }) {
  const [accountSize, setAccountSize] = useState("");

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-lg bg-[#0F0F11] border border-[#27272A] text-white p-6 shadow-xl max-h-screen overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-base font-semibold">Request access to performance data</h2>
          <button onClick={onClose} className="text-[#A1A1AA] hover:text-white text-xl">
            &times;
          </button>
        </div>

        <form
          className="space-y-4 text-left"
          action="https://formsubmit.co/el/kulasa"
          method="POST"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value={typeof window !== "undefined" ? window.location.href : ""}
          />
        <div>
            <label className="block text-sm text-[#E4E4E7] mb-1">Empresa de fondeo</label>
            <input name="funding_company" type="text" required placeholder="FTMO, The5ers, otra..." className="w-full px-4 py-2 rounded-md bg-[#18181B] text-white border border-[#27272A] text-sm placeholder-[#52525B]" />
          </div>

          <div>
            <label className="block text-sm text-[#E4E4E7] mb-1">Plataforma utilizada</label>
            <input name="platform" type="text" required placeholder="MT4, MT5, cTrader, otra..." className="w-full px-4 py-2 rounded-md bg-[#18181B] text-white border border-[#27272A] text-sm placeholder-[#52525B]" />
          </div>

          {/* Tamaño de la cuenta */}
          <div>
            <label className="block text-sm text-[#E4E4E7] mb-1">Tamaño de la cuenta</label>
            <select
              name="account_size"
              value={accountSize}
              onChange={(e) => setAccountSize(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-md bg-[#18181B] text-white border border-[#27272A] text-sm"
            >
              <option value="" disabled>
                Seleccioná una opción
              </option>
              <option value="$50k">$50k</option>
              <option value="$100k">$100k</option>
              <option value="$200k">$200k</option>
              <option value="other">Otra (escribir abajo)</option>
            </select>
            {accountSize === "other" && (
              <input
                name="account_size_other"
                type="text"
                placeholder="Otra cantidad..."
                className="w-full mt-2 px-4 py-2 rounded-md bg-[#18181B] text-white border border-[#27272A] text-sm placeholder-[#52525B]"
              />
            )}
          </div>

          <div>
            <label className="block text-sm text-[#E4E4E7] mb-1">Balance actual</label>
            <input name="current_balance" type="text" required placeholder="Escribir..." className="w-full px-4 py-2 rounded-md bg-[#18181B] text-white border border-[#27272A] text-sm placeholder-[#52525B]" />
          </div>

          <div>
            <label className="block text-sm text-[#E4E4E7] mb-1">Fase actual del Challenge</label>
            <select name="challenge_phase" required className="w-full px-4 py-2 rounded-md bg-[#18181B] text-white border border-[#27272A] text-sm">
              <option value="" disabled selected>Seleccioná una opción</option>
              <option value="Fase 1">Fase 1</option>
              <option value="Fase 2">Fase 2</option>
              <option value="Cuenta fondeada">Cuenta fondeada</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-[#E4E4E7] mb-1">Fecha del primer trade</label>
            <input name="first_trade_date" type="date" required className="w-full px-4 py-2 rounded-md bg-[#18181B] text-white border border-[#27272A] text-sm" />
          </div>

          <div>
            <label className="block text-sm text-[#E4E4E7] mb-1">Fecha del último trade</label>
            <input name="last_trade_date" type="date" required className="w-full px-4 py-2 rounded-md bg-[#18181B] text-white border border-[#27272A] text-sm" />
          </div>

          <div>
            <label className="block text-sm text-[#E4E4E7] mb-1">¿Hay alguna regla especial de fondeo o límite a tener en cuenta?</label>
            <textarea name="funding_rules" rows="3" placeholder="Escribir..." className="w-full px-4 py-2 rounded-md bg-[#18181B] text-white border border-[#27272A] text-sm placeholder-[#52525B]"></textarea>
          </div>

          <div>
            <label className="block text-sm text-[#E4E4E7] mb-1">Nombre</label>
            <input name="first_name" type="text" required placeholder="Tu nombre" className="w-full px-4 py-2 rounded-md bg-[#18181B] text-white border border-[#27272A] text-sm placeholder-[#52525B]" />
          </div>

          <div>
            <label className="block text-sm text-[#E4E4E7] mb-1">Apellido</label>
            <input name="last_name" type="text" required placeholder="Tu apellido" className="w-full px-4 py-2 rounded-md bg-[#18181B] text-white border border-[#27272A] text-sm placeholder-[#52525B]" />
          </div>

          <div>
            <label className="block text-sm text-[#E4E4E7] mb-1">Correo electrónico</label>
            <input name="email" type="email" required placeholder="ejemplo@email.com" className="w-full px-4 py-2 rounded-md bg-[#18181B] text-white border border-[#27272A] text-sm placeholder-[#52525B]" />
          </div>

          <div className="flex justify-between pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-md text-sm font-medium text-white bg-[#18181B] border border-[#27272A] hover:bg-[#27272A]"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-md text-sm font-medium bg-[#2563EB] text-white hover:bg-[#1E40AF]"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
