import { useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
export default function TestimonialWithVideo() {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-20 px-6">
<div className="max-w-9xl mx-auto rounded-xl overflow-hidden bg-[#1b1b1b] flex flex-col md:flex-row">
        {/* Testimonial */}
        <div className="w-full md:w-1/2 p-8 space-y-4 flex flex-col items-center justify-center text-center">
          <div className="text-yellow-400 text-xl">★★★★★</div>
          <p className="text-white text-lg leading-relaxed flex items-center justify-center gap-2">
            <FaQuoteLeft className="w-4 h-4" />
            <span>Con paciencia y gestión de riesgo, los resultados van a llegar.</span>
            <FaQuoteRight className="w-4 h-4" />
          </p>
          <div>
            <p className="text-white font-semibold">— Alex Bruna</p>
            <p className="text-white/60 text-sm">Trader algoritmico y fundador de onlygenius (ES)</p>
          </div>

        </div>

        {/* Video image */}
        <div className="w-full md:w-1/2 relative">
          <button onClick={() => setOpen(true)} className="w-full h-full">
            <img
              src="/video-thumbnail.png"
              alt="Video thumbnail"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <div className="bg-white text-black rounded-full p-3">
                ▶
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          <div className="relative w-full max-w-3xl aspect-video bg-black">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-white text-xl"
            >
              ✕
            </button>
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/2TPKmfezuDw" // reemplazar por link real
              title="Testimonial"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}