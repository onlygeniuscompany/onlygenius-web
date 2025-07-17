import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function AffiliateForm() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
         "service_jz752zq", // reemplaza con tu Service ID
        "template_0xrwwsu",
        formRef.current,
        "ETXgBR_U8k4OCMbYN"     // ← reemplaza con tu Public Key
      )
      .then(
        () => {
          setSent(true);
          setLoading(false);
          formRef.current.reset();
        },
        (error) => {
          console.error(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section className="w-full text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Formulario */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Postulate para ser Afiliado
          </h2>

          {sent && (
            <p className="text-green-400 mb-4">
              ¡Formulario enviado con éxito! Nos pondremos en contacto pronto.
            </p>
          )}

          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="block mb-1">Nombre</label>
              <input
                name="first_name"
                type="text"
                placeholder="Introduce tu nombre"
                required
                className="w-full bg-[#111] border border-[#333] rounded px-4 py-2"
              />
            </div>

            <div>
              <label className="block mb-1">Apellido</label>
              <input
                name="last_name"
                type="text"
                placeholder="Introduce tu apellido"
                required
                className="w-full bg-[#111] border border-[#333] rounded px-4 py-2"
              />
            </div>

            <div>
              <label className="block mb-1">Correo electrónico</label>
              <input
                name="email"
                type="email"
                placeholder="Introduce tu correo"
                required
                className="w-full bg-[#111] border border-[#333] rounded px-4 py-2"
              />
            </div>

            <div>
              <label className="block mb-2">¿Eres cliente actualmente?</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input type="radio" name="is_client" value="Sí" required className="accent-blue-500" />
                  Sí
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="is_client" value="No" className="accent-blue-500" />
                  No
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-2 rounded"
              disabled={loading}
            >
              {loading ? "Enviando..." : "Enviar"}
            </button>
          </form>
        </div>

        {/* Imagen */}
        <div>
          <img
            src="/Trader.png"
            alt="Trader con laptop"
            className="rounded-xl shadow-xl border border-[#222]"
          />
        </div>
      </div>
    </section>
  );
}
