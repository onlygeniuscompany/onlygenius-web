export default function AffiliateDashboardPreview() {
    return (
      <section className="w-full  text-white py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-2">
            Únete a nuestro programa de afiliados
          </h2>
          <p className="text-gray-400 mb-12">
            Nosotros operamos. Tú defines tus objetivos.
          </p>
          <img
            src={'/affiliates.png'}
            alt="Panel de afiliado"
            className="rounded-xl shadow-xl mx-auto border border-[#222]"
          />
        </div>
      </section>
    );
  }
  