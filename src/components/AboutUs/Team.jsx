// src/components/TeamSection.jsx
import React from "react";

const team = [
  {
    name: "Alex García",
    role: "Fundador & CEO",
    description: "Fundador y CEO de OnlyGenius.",
    image: "/alex.jpg",
    color: "text-blue-500",
  },
  {
    name: "Ivan Serralta",
    role: "IT",
    description: "Desarrollador en OnlyGenius.",
    image: "/ivan.jpeg",
    color: "text-purple-400",
  },
  {
    name: "Nasir Ali",
    role: "Diseñador de Producto",
    description: "Diseñador de productos en OnlyGenius.",
    image: "/nasir.jpg",
    color: "text-blue-400",
  },
];

export default function TeamSection() {
  return (
    <section className="flex items-center justify-center w-full bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        <h2 className="text-3xl font-bold">Conocé a nuestro equipo</h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Nuestra filosofía es simple: formar un equipo diverso y apasionado, y fomentar una cultura que te impulse a dar lo mejor de vos.
        </p>

        <div className="items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {team.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center space-y-3">
            <img src={member.image} alt={member.name} className="h-50 w-40 object-cover rounded-md" />
            <div className={member.color + " text-sm font-medium"}>{member.role}</div>
            <p className="text-sm text-white/70 text-center">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
