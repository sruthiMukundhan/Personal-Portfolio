"use client";

import HeroTyping from "./HeroTyping";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-20 pt-28 overflow-hidden">

      {/* 🌌 GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 
      w-[900px] h-[400px] bg-purple-600/40 blur-[140px] rounded-full opacity-70" />

      <div className="z-10 max-w-2xl space-y-6">

        {/* 🔥 TYPING HEADING */}
        <HeroTyping />

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-gray-400 leading-relaxed"
        >
          A developer who believes that <span className="text-white">“it works”</span> is only the beginning — not the goal.  
          I build systems with logic, clarity, and intention.  

          From structured databases to clean, modern interfaces — every detail matters.  

          If something feels off, I fix it.  
          If something breaks, I debug it.  
          If something can be better, I redesign it 🚀
        </motion.p>

      </div>
    </section>
  );
}