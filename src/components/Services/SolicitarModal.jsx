import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function SolicitarModal({ open, onClose }) {
  const form = useRef();
  if (!open) return null;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jz752zq", // reemplaza con tu Service ID
        "template_p6oqlsh",
        form.current,
        "ETXgBR_U8k4OCMbYN" // reemplaza con tu Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          onClose();
        },
        (error) => {
          console.log(error.text);
          alert("Ocurrió un error al enviar el mensaje.");
        }
      );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-lg bg-[#0F0F11] border border-[#27272A] text-white p-6 shadow-xl max-h-screen overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-base font-semibold">Solicitar datos</h2>
          <button onClick={onClose} className="text-[#A1A1AA] hover:text-white text-xl">
            &times;
          </button>
        </div>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <input type="hidden" name="campaign_source" value="solicitar datos" />
          <div className="flex flex-col sm:flex-row gap-2">
  <input
    type="text"
    name="first_name"
    placeholder="Nombre"
    required
    className="w-full px-4 py-2 rounded-md bg-[#0f0f11] text-white border border-neutral-800"
  />
  <input
    type="text"
    name="last_name"
    placeholder="Apellido"
    required
    className="w-full px-4 py-2 rounded-md bg-[#0f0f11] text-white border border-neutral-800"
  />
</div>

          <input
            type="email"
            name="email"
            placeholder="tucorreo@empresa.com"
            required
            className="w-full px-4 py-2 rounded-md bg-[#0f0f11] text-white border border-neutral-800"
          />

         
          <div className="flex items-start gap-2 text-sm">
            <input type="checkbox" id="privacy" required className="mt-1" />
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
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
          >
            Enviar mensaje
          </button>
        </form>
       </div>
    </div>
  );
}
