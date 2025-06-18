import React, { useState } from "react";
import { Select, SelectItem } from "./ui/Select";

export default function StartModal({ open, onClose }) {
  const [form, setForm] = useState({
    name: "",
    lastname: "",
    email: "",
    accountName: "",
    login: "",
    server: "",
    password: "",
    passRead: "",
    initialBalance: "",
    customAccountSize: "",
    fase: "",
    tipo: "",
    yearsExp: "",
    reason: "",
  });

  if (!open) return null;

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name: form.name,
      lastname: form.lastname,
      email: form.email,
      account: {
        name: form.accountName,
        login: form.login,
        server: form.server,
        password: form.password,
        passRead: form.passRead,
        initialBalance:
          form.initialBalance === "custom"
            ? form.customAccountSize
            : form.initialBalance,
        fase: form.fase,
        tipo: form.tipo,
      },
      experience: {
        years: form.yearsExp,
        reason: form.reason,
      },
    };

    try {
      // await fetch(`${VITE_API_URL}/api/demo-requests/`, {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(payload),
      // });
      onClose();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-lg bg-[#0F0F11] border border-[#27272A] text-white p-6 shadow-xl max-h-screen overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-base font-semibold">Empezar</h2>
          <button onClick={onClose} className="text-[#A1A1AA] hover:text-white text-xl">&times;</button>
        </div>
        <form className="space-y-4 text-left" onSubmit={handleSubmit}>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Nombre"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-[#18181B] text-white border border-[#27272A] text-sm"
            />
            <input
              type="text"
              placeholder="Apellido"
              value={form.lastname}
              onChange={(e) => handleChange("lastname", e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-[#18181B] text-white border border-[#27272A] text-sm"
            />
          </div>
          <input
            type="email"
            placeholder="Correo"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-[#18181B] text-white border border-[#27272A] text-sm"
          />
          <input
            type="text"
            placeholder="Nombre de cuenta"
            value={form.accountName}
            onChange={(e) => handleChange("accountName", e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-[#18181B] text-white border border-[#27272A] text-sm"
          />
          <input
            type="text"
            placeholder="Login"
            value={form.login}
            onChange={(e) => handleChange("login", e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-[#18181B] text-white border border-[#27272A] text-sm"
          />
          <input
            type="text"
            placeholder="Servidor"
            value={form.server}
            onChange={(e) => handleChange("server", e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-[#18181B] text-white border border-[#27272A] text-sm"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={form.password}
            onChange={(e) => handleChange("password", e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-[#18181B] text-white border border-[#27272A] text-sm"
          />
          <input
            type="password"
            placeholder="Contraseña solo lectura"
            value={form.passRead}
            onChange={(e) => handleChange("passRead", e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-[#18181B] text-white border border-[#27272A] text-sm"
          />
          <Select
            value={form.initialBalance}
            onValueChange={(val) => handleChange("initialBalance", val)}
            placeholder="Tamaño de cuenta"
          >
            <SelectItem value="50000">50k</SelectItem>
            <SelectItem value="100000">100k</SelectItem>
            <SelectItem value="custom">Custom</SelectItem>
          </Select>
          {form.initialBalance === "custom" && (
            <input
              type="number"
              placeholder="Tamaño personalizado"
              value={form.customAccountSize}
              onChange={(e) => handleChange("customAccountSize", e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-[#18181B] text-white border border-[#27272A] text-sm"
            />
          )}
          <Select
            value={form.tipo}
            onValueChange={(val) => handleChange("tipo", val)}
            placeholder="Tipo de cuenta"
          >
            <SelectItem value="broker">Broker</SelectItem>
            <SelectItem value="propfirm">Examen de fondeo</SelectItem>
          </Select>
          {form.tipo === "propfirm" && (
            <Select
              value={form.fase}
              onValueChange={(val) => handleChange("fase", val)}
              placeholder="Fase del desafío"
            >
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="Fondeada">Fondeada</SelectItem>
            </Select>
          )}
          <input
            type="text"
            placeholder="Años de experiencia"
            value={form.yearsExp}
            onChange={(e) => handleChange("yearsExp", e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-[#18181B] text-white border border-[#27272A] text-sm"
          />
          <textarea
            rows="3"
            placeholder="¿Para qué necesita los algoritmos?"
            value={form.reason}
            onChange={(e) => handleChange("reason", e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-[#18181B] text-white border border-[#27272A] text-sm"
          />
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
