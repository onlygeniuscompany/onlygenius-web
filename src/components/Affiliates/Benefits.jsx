import {
    FaSyncAlt,
    FaBookOpen,
    FaChartLine,
    FaHeadset,
    FaMoneyBillWave,
  } from "react-icons/fa";
  
  export default function AffiliateBenefits() {
    const features1 = [
      {
        icon: <FaSyncAlt className="text-blue-500 w-6 h-6" />,
        title: "Comisiones recurrentes por referidos",
      },
      {
        icon: <FaBookOpen className="text-blue-500 w-6 h-6" />,
        title: "Acceso a materiales de marketing profesionales",
      },
      {
        icon: <FaChartLine className="text-blue-500 w-6 h-6" />,
        title: "Seguimiento en tiempo real con tu panel de afiliado",
      },
    ];
  
    const features2 = [
      {
        icon: <FaHeadset className="text-blue-500 w-6 h-6" />,
        title: "Soporte prioritario para afiliados",
      },
      {
        icon: <FaMoneyBillWave className="text-blue-500 w-6 h-6" />,
        title: "Pagos transparentes y puntuales",
      },
    ];
  
    return (
      <section className="w-full  text-white py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            ¿Por qué unirte a nuestro programa de afiliados?
          </h2>
          <p className="text-gray-400 mb-12">
            Nosotros operamos. Tú defines tus objetivos.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {features1.map(({ icon, title }, idx) => (
              <div
                key={idx}
                className="bg-[#111] p-6 rounded-lg border border-[#222] flex flex-col items-start gap-4"
              >
                {icon}
                <p className="text-sm text-left">{title}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {features2.map(({ icon, title }, idx) => (
              <div
                key={idx}
                className="bg-[#111] p-6 rounded-lg border border-[#222] flex flex-col items-start gap-4"
              >
                {icon}
                <p className="text-sm text-left">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  