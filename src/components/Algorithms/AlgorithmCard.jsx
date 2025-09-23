import React from "react";

export default function AlgorithmCard({
  name,
  riskLevel,
  riskColor,
  avgReturn,
  drawdown,
  sharpe,
  sortino,
  winRate,
  tradeDuration,
  onRequestAccess,
  img,
}) {
  return (
    <div className="rounded-xl p-6 flex flex-col gap-4 border border-[#2a2a2a]">
      {/* Header */}
      <div className="flex justify-between items-start">
        <h3 className="text-white text-lg font-semibold">{name}</h3>
        <span
          className={`text-xs font-medium px-2 py-0.5 rounded-full text-white ${riskColor}`}
        >
          {riskLevel}
        </span>
      </div>

      {/* Video Placeholder */}
      <div className="bg-[#1a1a1a] h-[160px] rounded-lg flex items-center justify-center text-white/30">
        <img src={img} />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 text-white text-sm">
        <div>
          <p className="text-white/60">Media retorno anual</p>
          <p className="font-semibold">{avgReturn}</p>
        </div>
        <div>
          <p className="text-white/60">Max Drawdown</p>
          <p className="font-semibold">{drawdown}</p>
        </div>
        <div>
          <p className="text-white/60">Ratio sharpe</p>
          <p className="font-semibold">{sharpe}</p>
        </div>
        <div>
          <p className="text-white/60">Ratio sortino</p>
          <p className="font-semibold">{sortino}</p>
        </div>
        <div>
          <p className="text-white/60">Winrate</p>
          <p className="font-semibold">{winRate}</p>
        </div>
        <div>
          <p className="text-white/60">Duración media trades</p>
          <p className="font-semibold">{tradeDuration}</p>
        </div>
      </div>

      {/* Button */}
      <button
        onClick={onRequestAccess}
        className="mt-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm w-fit self-start"
      >
        Pedir acceso →
      </button>
    </div>
  );
}
