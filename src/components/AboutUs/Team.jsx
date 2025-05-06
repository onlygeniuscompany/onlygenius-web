// src/components/TeamSection.jsx
import React from "react";

const team = [
  {
    name: "Alex García",
    role: "Founder & CEO",
    description: "Founder & CEO at OnlyGenius. Lorem ipsum doal sign.",
    image: "/team/alex.jpg", // asegurate de tener estas imágenes en /public/team/
    color: "text-blue-500",
  },
  {
    name: "Amélie Laurent",
    role: "HR Operations",
    description: "Founder & CEO at OnlyGenius. Lorem ipsum doal sign.",
    image: "/team/amelie.jpg",
    color: "text-pink-400",
  },
  {
    name: "Umar Noah",
    role: "Programmer",
    description: "Founder & CEO at OnlyGenius. Lorem ipsum doal sign.",
    image: "/team/umar.jpg",
    color: "text-purple-400",
  },
  {
    name: "Nasir Ali",
    role: "Product Designer",
    description: "Founder & CEO at OnlyGenius. Lorem ipsum doal sign.",
    image: "/team/nasir.jpg",
    color: "text-blue-400",
  },
];

export default function TeamSection() {
  return (
    <section className="w-full bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        <h2 className="text-3xl font-bold">Meet our team</h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {team.map((member, idx) => (
            <div key={idx} className="space-y-3 text-left">
              <img src={member.image} alt={member.name} className="w-full rounded-md object-cover" />
              <div className="font-semibold">{member.name}</div>
              <div className={member.color + " text-sm font-medium"}>{member.role}</div>
              <p className="text-sm text-white/70">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
