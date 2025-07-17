// CoreServices.jsx
import React from 'react';

const CoreServices = () => {

    return (
        <div className="py-16">
        <div className="text-center text-[#2563EB] text-[16px] font-semibold leading-[24px]">Servicios Principales</div>
        <div className="text-center text-[clamp(28px,5vw,36px)] font-bold leading-[40px] text-[#FAFAFA]">
        Gestión de cuentas totalmente automatizada. Sin complicaciones.
        </div>
        <div className="text-center text-[#A1A1AA] text-[16px] font-normal leading-[24px]">
        Nosotros operamos. Tú defines tus objetivos.
        </div>
        <div className="flex flex-wrap justify-center gap-6 mt-12">
        {[{
            title: "Gestión algorítmica de cuentas",
            desc: "Gestionamos cuentas en brokers o firmas de prop trading usando nuestros algoritmos propietarios. Totalmente automatizado—no necesitás hacer nada.",
            img: "/Bot.png",
        }, {
            title: "Algoritmos exclusivos de alto rendimiento",
            desc: "Estrategias auditadas y optimizadas para operar en mercados de primer nivel.",
            img: "/Data graph 1.png",
        }, {
            title: "Robots de trading personalizados",
            desc: "¿Ya tenés una estrategia? La convertimos en un robot funcional (MT4, MT5 o cTrader).",
            img: "/Data graph 1.png",
        }].map(({ title, desc, img }, idx) => (
            <div
            key={idx}
            className="flex flex-col items-start justify-start gap-6 p-6  border border-[#27272A] rounded-xl min-w-[280px] flex-1"
            >
            <img src={img} alt="" className="w-12 h-12 rounded-lg" />
            <div className="flex flex-col gap-3">
                <div className="text-[20px] font-medium">{title}</div>
                <div className="text-[#A1A1AA] text-[16px]">{desc}</div>
                <a href="https://calendly.com/onlygenius-support/30min">
                <div className="text-[#2563EB] text-[14px] font-medium cursor-pointer">Saber más →</div>
                </a>
            </div>
            </div>
        ))}
        </div>
    </div>

    );
};

export default CoreServices;