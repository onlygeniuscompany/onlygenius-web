import React, { useState, useEffect } from "react";
import AlgorithmCard from "./AlgorithmCard";
import SolicitarModal from "../Services/SolicitarModal";

export default function AlgorithmsSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [redirectWebsite, setRedirectWebsite] = useState(false);

  const algorithms = [
    {
      name: "OnlyBlackBox",
      riskLevel: "Riesgo alto",
      riskColor: "bg-red-700",
      avgReturn: "20.05%",
      drawdown: "-9.75%",
      sharpe: "1.4",
      winRate: "38.88%",
      img:'onlyblackbox.png'
    },
    {
      name: "OnlySystem",
      riskLevel: "Riesgo medio",
      riskColor: "bg-yellow-600",
      avgReturn: "17.9%",
      drawdown: "-8.8%",
      sharpe: "1.39",
      winRate: "41.07%",
      img:'onlysystem.jpg'
    },
    {
      name: "OnlyHedge",
      riskLevel: "Riesgo bajo",
      riskColor: "bg-green-700",
      avgReturn: "15.25%",
      drawdown: "-2.26%",
      sharpe: "1.87",
      winRate: "53.33%",
      img:'onlyhedge.png'
    },
  ];

  useEffect(() => {
    if(redirectWebsite){
      window.open("http://demo.dashboard.onlygenius.es/purchase-services", "_blank");
      setRedirectWebsite(false);
    }
  }, [redirectWebsite]);

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h3 className="text-blue-500 text-sm font-medium">Algoritmos</h3>
          <h2 className="text-3xl font-bold text-white mt-2">Nuestros algoritmos</h2>
          <p className="text-white/70 mt-2 max-w-xl mx-auto">
            Explore nuestros algoritmos comerciales probados, diseñados para ofrecer resultados consistentes en diversas condiciones del mercado.
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {algorithms.map((algo, i) => (
            <AlgorithmCard key={i} {...algo} onRequestAccess={() => setModalOpen(true)} />
          ))}
        </div>
      </div>

      <SolicitarModal open={modalOpen} onClose={() => setModalOpen(false)} redirect={() => setRedirectWebsite(true)}/>
    </section>
  );
}