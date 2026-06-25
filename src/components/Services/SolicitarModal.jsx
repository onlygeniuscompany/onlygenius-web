import React, { useState } from "react";

export default function SolicitarModal({ open, onClose, redirect = null }) {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    privacy: false,
  });

  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const sendRequest = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch(
        `${import.meta.env.VITE_BF_BACKEND_URL}/api/landing-page/onlygenius/request-ecosystem`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name: formData.first_name,
            last_name: formData.last_name,
            email: formData.email,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      // Reset form
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        privacy: false,
      });

      onClose();

      if (redirect) {
        redirect();
      }
    } catch (error) {
      console.error(error);
      alert(error.message || "Ocurrió un error al enviar la solicitud.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-lg bg-[#0F0F11] border border-[#27272A] text-white p-6 shadow-xl max-h-screen overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-base font-semibold">Solicitar datos</h2>

          <button
            onClick={onClose}
            className="text-[#A1A1AA] hover:text-white text-xl"
          >
            &times;
          </button>
        </div>

        <form onSubmit={sendRequest} className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              name="first_name"
              placeholder="Nombre"
              value={formData.first_name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-[#0f0f11] text-white border border-neutral-800"
            />

            <input
              type="text"
              name="last_name"
              placeholder="Apellido"
              value={formData.last_name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-[#0f0f11] text-white border border-neutral-800"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="tucorreo@empresa.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-md bg-[#0f0f11] text-white border border-neutral-800"
          />

          <div className="flex items-start gap-2 text-sm">
            <input
              type="checkbox"
              id="privacy"
              name="privacy"
              checked={formData.privacy}
              onChange={handleChange}
              required
              className="mt-1"
            />

            <label htmlFor="privacy">
              Aceptas nuestra{" "}
              <a href="#" className="text-blue-500 underline">
                política de privacidad
              </a>
              .
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Enviando..." : "Solicitar"}
          </button>
        </form>
      </div>
    </div>
  );
}
