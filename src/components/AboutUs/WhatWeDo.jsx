// src/components/WhatWeDo.jsx
import React from "react";

export default function WhatWeDo() {
  return (
    <section className="w-full px-6 py-24 md:px-12 bg-black text-white text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Lo Que Hacemos</h2>
        <p className="text-sm text-gray-400 mb-10">Nos especializamos en:</p>
        <div className="aspect-w-16 aspect-h-9">
          <video
            controls
            className="w-full rounded-xl border border-gray-700"
            poster="/video-thumbnail.png"
          >
            <source src="/axi-video.mp4" type="video/mp4" />
            Tu navegador no admite la etiqueta de video.
          </video>
        </div>
      </div>
    </section>
  );
}
