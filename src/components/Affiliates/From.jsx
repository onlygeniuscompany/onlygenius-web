// import formImage from "../assets/affiliate-form.png"; // Usá la imagen correspondiente

export default function AffiliateForm() {
    return (
      <section className="w-full  text-white py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Formulario */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Postulate para ser Afiliado
            </h2>
  
            <form className="space-y-6">
              <div>
                <label className="block mb-1">Nombre</label>
                <input
                  type="text"
                  placeholder="Ingresá tu nombre"
                  className="w-full bg-[#111] border border-[#333] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
  
              <div>
                <label className="block mb-1">Apellido</label>
                <input
                  type="text"
                  placeholder="Ingresá tu apellido"
                  className="w-full bg-[#111] border border-[#333] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
  
              <div>
                <label className="block mb-1">Correo electrónico</label>
                <input
                  type="email"
                  placeholder="Ingresá tu correo"
                  className="w-full bg-[#111] border border-[#333] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
  
              <div>
                <label className="block mb-2">¿Sos cliente actualmente?</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="client" className="accent-blue-500" />
                    Sí
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="client" className="accent-blue-500" />
                    No
                  </label>
                </div>
              </div>
  
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-2 rounded"
              >
                Enviar
              </button>
            </form>
          </div>
  
          {/* Imagen */}
          <div>
            <img
              src={'/Trader.png'}
              alt="Trader con laptop"
              className="rounded-xl shadow-xl border border-[#222]"
            />
          </div>
        </div>
      </section>
    );
  }
  