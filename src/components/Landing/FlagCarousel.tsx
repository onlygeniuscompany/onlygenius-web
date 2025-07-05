// components/FlagCarousel.tsx
"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useCallback } from "react";

const flags = [
  "/flags/Steps=Step 1.png",
  "/flags/Steps=Step 2.png",
  "/flags/Steps=Step 3.png",
  "/flags/Steps=Step 4.png",
];

export default function FlagCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  // autoplay
  const autoplay = useCallback(() => {
    if (!emblaApi) return;
    if (!emblaApi.canScrollNext()) {
      emblaApi.scrollTo(0);
    } else {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  useEffect(() => {
    const interval = setInterval(autoplay, 2000);
    return () => clearInterval(interval);
  }, [autoplay]);

  return (
    <div className="overflow-hidden w-[300px] mx-auto" ref={emblaRef}>
      <div className="flex">
        {flags.map((src, i) => (
          <div
            key={i}
            className="flex-[0_0_100%] px-2 flex items-center justify-center"
          >
            <img
              src={src}
              alt={`flag-${i}`}
              className="h-[50px] w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
