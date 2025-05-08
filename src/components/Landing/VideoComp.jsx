import { useState } from "react";

export default function TestimonialWithVideo() {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-20 px-6">
      <div className="max-w-9xl mx-auto rounded-xl overflow-hidden bg-[#1b1b1b] flex flex-col md:flex-row">
        {/* Testimonial */}
        <div className="w-full md:w-1/2 p-8 space-y-4">
          <div className="text-yellow-400 text-xl">★★★★★</div>
          <p className="text-white text-lg leading-relaxed">
            I was skeptical about handing over my trading account, but OnlyGenius proved to be a game-changer.
            The automated system outperformed my manual trades consistently!
          </p>
          <div>
            <p className="text-white font-semibold">— Adam M</p>
            <p className="text-white/60 text-sm">Funded Trader (UK)</p>
          </div>
          <div className="flex gap-2 pt-4">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-600 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-600 rounded-full"></span>
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