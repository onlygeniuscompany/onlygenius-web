import React from "react";

export default function AlgorithmCard({
  name,
  riskLevel,
  riskColor,
  avgReturn,
  drawdown,
  sharpe,
  winRate,
  onRequestAccess,
}) {
  return (
    <div className="rounded-xl p-6 flex flex-col gap-4 border border-[#2a2a2a]">
      {/* Header */}
      <div className="flex justify-between items-start">
        <h3 className="text-white text-lg font-semibold">{name}</h3>
        <span
          className='text-xs font-medium px-2 py-0.5 rounded-full text-white ${riskColor}'
        >
          {riskLevel}
        </span>
      </div>

      {/* Video Placeholder */}
      <div className="bg-[#1a1a1a] h-[160px] rounded-lg flex items-center justify-center text-white/30">
        <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17 10.5V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 
          2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3.5l4 4v-11l-4 4z" />
        </svg>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 text-white text-sm">
        <div>
          <p className="text-white/60">Avg. Monthly Return</p>
          <p className="font-semibold">{avgReturn}</p>
        </div>
        <div>
          <p className="text-white/60">Max Drawdown</p>
          <p className="font-semibold">{drawdown}</p>
        </div>
        <div>
          <p className="text-white/60">Sharpe Ratio</p>
          <p className="font-semibold">{sharpe}</p>
        </div>
        <div>
          <p className="text-white/60">Win Rate</p>
          <p className="font-semibold">{winRate}</p>
        </div>
      </div>

      {/* Button */}
      <button
        onClick={onRequestAccess}
        className="mt-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm w-fit self-start"
      >
        Request access →
      </button>
    </div>
  );
}