// src/components/ContactForm.jsx
import React from "react";

export default function ContactForm() {
  return (
    <section className="w-full  text-white py-20 px-6">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-blue-500">Contacto</p>
          <h2 className="text-3xl font-bold">Ponete en contacto</h2>
          <p className="text-white/70 mt-2">
          Nos encantaría saber de ti. Completá este formulario.
          </p>
        </div>

        <form className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Nombre"
              className="flex-1 px-4 py-2 rounded-md bg-[#0f0f11] text-white border border-neutral-800"
            />
            <input
              type="text"
              placeholder="Apellido"
              className="flex-1 px-4 py-2 rounded-md bg-[#0f0f11] text-white border border-neutral-800"
            />
          </div>

          <input
            type="email"
            placeholder="tucorreo@empresa.com"
            className="w-full px-4 py-2 rounded-md bg-[#0f0f11] text-white border border-neutral-800"
          />

          <input
            type="tel"
            placeholder="+[34] 0000-1234567"
            className="w-full px-4 py-2 rounded-md bg-[#0f0f11] text-white border border-neutral-800"
          />

          <textarea
            rows="5"
            placeholder="Dejanos tu mensaje..."
            className="w-full px-4 py-2 rounded-md bg-[#0f0f11] text-white border border-neutral-800"
          />

          <div className="flex items-start gap-2 text-sm">
            <input type="checkbox" id="privacy" className="mt-1" />
            <label htmlFor="privacy">
              Aceptás nuestra{" "}
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
    </section>
  );
}
