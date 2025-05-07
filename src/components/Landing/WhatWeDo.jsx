// src/components/WhatWeDo.jsx
import React from "react";

export default function WhatWeDo() {
  return (
    <section className="w-full px-6 py-24 md:px-12  text-white text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Lo Que Hacemos</h2>
        <p className="text-sm text-gray-400 mb-10">Nos especializamos en:</p>
        <div className="aspect-w-16 aspect-h-9">
        <iframe
          src="https://www.youtube.com/embed/2TPKmfezuDw"
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full aspect-video rounded-xl border border-gray-700"
        />
        </div>
      </div>
    </section>
  );
}
