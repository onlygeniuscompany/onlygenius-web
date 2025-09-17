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
    role: "IT - PM",
    description: "Desarrollador en OnlyGenius.",
    image: "/ivan.jpeg",
    color: "text-blue-500",
  },
  {
    name: "OM",
    role: "IT",
    description: "Desarrollador en OnlyGenius.",
    image: "/OM.jpeg",
    color: "text-blue-500",
  },
  {
    name: "Nasir Ali",
    role: "Diseñador de Producto",
    description: "Diseñador de productos en OnlyGenius.",
    image: "/IMG_4007.jpeg",
    color: "text-blue-400",
  },
  {
    name: "Victor Peralta",
    role: "IT",
    description: "Desarrollador en OnlyGenius.",
    image: "/Victor.png",
    color: "text-blue-500",
  },
  {
    name: "Matias Marrone",
    role: "Diseñador de Producto",
    description: "Diseñador de productos en OnlyGenius.",
    image: "/Mati.png",
    color: "text-blue-400",
  },
  // {
  //   name: "",
  //   role: "IT",
  //   description: "Desarrollador en OnlyGenius.",
  //   image: "/Imagen1.jpg",
  //   color: "text-blue-500",
  // },
  {
    name: "Jonathan",
    role: "IT",
    description: "Desarrollador en OnlyGenius.",
    image: "/Imagen2.jpg",
    color: "text-blue-500",
  },{
    name: "Pedro Gandola",
    role: "IT",
    description: "Desarrollador en OnlyGenius.",
    image: "/IMG_7621 (1).jpg",
    color: "text-blue-500",
  },
  {
    name: "Nabeel",
    role: "IT",
    description: "Desarrollador en OnlyGenius.",
    image: "/image (2) 1.png",
    color: "text-blue-500",
  },
  {
    name: "Marcel",
    role: "Marketing",
    description: "Videomaker en OnlyGenius.",
    image: "/IMG_7624 (1).jpg",
    color: "text-blue-500",
  },
  {
    name: "Ezequiel",
    role: "Marketing",
    description: "Ads y growth specialist en OnlyGenius.",
    image: "/IMG_7629 (1).png",
    color: "text-blue-500",
  },{
  name: "Carl",
  role: "Quantitative trader",
  description: "Especialista en trading algorítmico en OnlyGenius.",
  image: "/IMG_7627 (1).jpg",
  color: "text-blue-500",
}
];

export default function TeamSection() {
  return (
    <section className="flex items-center justify-center w-full  text-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        <h2 className="text-3xl font-bold">Conoce a nuestro equipo</h2>
        <p className="text-white/70 max-w-2xl mx-auto">
        Un equipo unido por la pasión, impulsado por el desafío y enfocado en transformar el trading con las mejores soluciones tecnológicas y de inversión.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
  {team.map((member, idx) => (
    <div key={idx} className="flex flex-col items-center space-y-3">
      <img
        src={member.image}
        alt={member.name}
        className="w-[160px] aspect-[3/4] object-cover rounded-md"
      />
      <div className={`${member.color} text-sm font-medium`}>{member.role}</div>
      <p className="text-sm text-white/70 text-center">{member.description}</p>
    </div>
  ))}
</div>
      </div>
    </section>
  );
}
