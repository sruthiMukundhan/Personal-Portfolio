"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "BrainByte",
    description:
      "A functional ed-tech platform that enables users to create, consume, and rate educational content, contributing to direct growth."
  },
  {
    title: "PMS",
    description:
      "A secure and intelligent platform designed to streamline prison administration and simplify high-level approvals.",
    github: "https://github.com/sruthiMukundhan/Prisoner-Management-System.git",
  },
  {
    title: "Personal Portflio",
    description:
      "A curated collection of your best professional work, skills, and achievements used to showcase your expertise to clients.",
    github: "https://github.com/yourusername/gradverify",
  },
  {
    title: "Modern GUI",
    description:
      "A system integrating hardware and software to provide seamless interaction and real-time updates for modern applications.",
    github: "https://github.com/yourusername/modern-gui",
  },
  {
    title: "Battery Simulator",
    description:
      "A MATLAB simulation of a Battery Management System designed to adapt to varying climatic conditions and temperature effects.",
    github: "https://github.com/yourusername/battery-simulator",
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen px-20 py-20">
      <h2 className="text-4xl font-bold text-center text-purple-400 mb-16">
        My Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer bg-white/5 backdrop-blur-lg border border-purple-500/20 p-6 rounded-2xl shadow-lg hover:shadow-purple-700/30 transition"
            >
              <h3 className="text-xl font-semibold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400">
                {project.description}
              </p>
            </motion.div>
          </a>
        ))}
      </div>
    </section>
  );
}