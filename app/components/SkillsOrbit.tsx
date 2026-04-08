"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  
  "/logos/java-vertical.svg",
  "/logos/python-icon.svg",
  "/logos/mysql-official.svg",
  "/logos/w3_css-icon~old.svg",
  "/logos/w3_html5-icon.svg",
  "/logos/javascript-icon.svg",
  "/logos/tailwindcss-icon.svg",
  "/logos/typescriptlang-icon.svg",
  "/logos/phpmyadmin-ar21~bgwhite.svg",
  "/logos/reactjs-icon.svg",
  "/logos/nextjs-icon.svg",
  "/logos/mongodb-icon.svg",
  "/logos/docker-icon.svg",
  "/logos/vercel-icon.svg",
  "/logos/linux-icon.svg"
];

export default function SkillsOrbit() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-10 relative">

      <div className="absolute w-[700px] h-[700px] bg-purple-600/20 rounded-full blur-[180px]"></div>

      <h2 className="text-4xl font-bold text-purple-400 mb-16 relative z-10">
        Making apps with modern technologies
      </h2>

      <div className="relative z-10 grid grid-cols-5 gap-10">
        {skills.map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className="w-24 h-24 flex items-center justify-center 
                       bg-white/5 backdrop-blur-lg rounded-2xl 
                       border border-white/10 
                       shadow-lg shadow-purple-500/20
                       hover:shadow-purple-500/50
                       transition"
          >
            <Image src={src} alt="skill" width={50} height={50} />
          </motion.div>
        ))}
      </div>

    </section>
  );
}