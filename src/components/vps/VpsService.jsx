// components/VPSSection.tsx
"use client";

import { CheckIcon } from "lucide-react";
import vpsImage from "/Virtual Private Server image.png";

export function VPSSection() {
  return (
    <section className="w-full bg-background py-16 px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Ilustración */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={vpsImage} alt="VPS" width={480} height={480} className="object-contain"></img>
        </div>

        {/* Contenido */}
        <div className="w-full md:w-1/2 space-y-6">
          <p className="text-muted-foreground">
            Contrata servidores dedicados para ejecutar tus estrategias sin
            límites.
          </p>
          <p className="text-sm text-muted-foreground">
            Los Servidores Privados Virtuales (VPS) son entornos dedicados que
            ofrecen mayor estabilidad, rendimiento y seguridad en comparación
            con soluciones compartidas. Funcionan como un ordenador remoto,
            siempre activo y accesible desde cualquier lugar del mundo.
          </p>
          <p className="text-sm text-muted-foreground">
            En <strong>OnlyGenius</strong>, ofrecemos VPS configurados para
            optimizar el rendimiento en tareas que requieren alta disponibilidad
            y recursos dedicados, ideales para usuarios que necesitan una
            infraestructura confiable y sin interrupciones.
          </p>

          <ul className="space-y-2 text-sm text-muted-foreground">
            {[
              "Alta disponibilidad y estabilidad continua",
              "Configuración optimizada para cargas intensivas",
              "Soporte técnico especializado y atención personalizada",
              "Plan mensual sencillo y sin complicaciones",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <CheckIcon className="w-4 h-4 text-blue-500" />
                {item}
              </li>
            ))}
          </ul>

          <button className="mt-8 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Solicitar VPS →
          </button>
        </div>
      </div>
    </section>
  );
}
