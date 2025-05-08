import React, { useState } from "react";
import AlgorithmCard from "./AlgorithmCard";
// import PerformanceAccessModal from "./PerformanceAccessModal"; // modal previo

export default function AlgorithmsSection() {
  const [modalOpen, setModalOpen] = useState(false);

  const algorithms = [
    {
      name: "OnlyBlackBox",
      riskLevel: "Low risk",
      riskColor: "bg-green-700",
      avgReturn: "21.4%",
      drawdown: "9.8%",
      sharpe: "2.18",
      winRate: "78.3%",
    },
    {
      name: "OnlySystem",
      riskLevel: "High risk",
      riskColor: "bg-red-700",
      avgReturn: "21.4%",
      drawdown: "9.8%",
      sharpe: "2.18",
      winRate: "78.3%",
    },
    {
      name: "OnlyHedge",
      riskLevel: "Medium risk",
      riskColor: "bg-yellow-600",
      avgReturn: "21.4%",
      drawdown: "9.8%",
      sharpe: "2.18",
      winRate: "78.3%",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h3 className="text-blue-500 text-sm font-medium">Algorithms</h3>
          <h2 className="text-3xl font-bold text-white mt-2">Our Algorithms</h2>
          <p className="text-white/70 mt-2 max-w-xl mx-auto">
            Explore our proven trading algorithms designed to deliver consistent results across various market conditions.
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {algorithms.map((algo, i) => (
            <AlgorithmCard key={i} {...algo} onRequestAccess={() => setModalOpen(true)} />
          ))}
        </div>
      </div>

      {/* <PerformanceAccessModal open={modalOpen} onClose={() => setModalOpen(false)} /> */}
    </section>
  );
}