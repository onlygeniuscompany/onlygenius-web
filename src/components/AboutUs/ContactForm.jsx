import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jz752zq", // reemplazá con tu Service ID
        form.current,
        "ETXgBR_U8k4OCMbYN" // reemplazá con tu Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Mensaje enviado con éxito!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Ocurrió un error al enviar el mensaje.");
        }
      );
  };

  return (
    <section className="w-full text-white py-20 px-6">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-blue-500">Contacto</p>
          <h2 className="text-3xl font-bold">Ponete en contacto</h2>
          <p className="text-white/70 mt-2">
            Nos encantaría saber de ti. Completá este formulario.
          </p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="first_name"
              placeholder="Nombre"
              required
              className="flex-1 px-4 py-2 rounded-md bg-[#0f0f11] text-white border border-neutral-800"
            />
            <input
              type="text"
              name="last_name"
              placeholder="Apellido"
              required
              className="flex-1 px-4 py-2 rounded-md bg-[#0f0f11] text-white border border-neutral-800"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="tucorreo@empresa.com"
            required
            className="w-full px-4 py-2 rounded-md bg-[#0f0f11] text-white border border-neutral-800"
          />

          <input
            type="tel"
            name="phone"
            placeholder="+[34] 0000-1234567"
            className="w-full px-4 py-2 rounded-md bg-[#0f0f11] text-white border border-neutral-800"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Dejanos tu mensaje..."
            required
            className="w-full px-4 py-2 rounded-md bg-[#0f0f11] text-white border border-neutral-800"
          />

          <div className="flex items-start gap-2 text-sm">
            <input type="checkbox" id="privacy" required className="mt-1" />
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
