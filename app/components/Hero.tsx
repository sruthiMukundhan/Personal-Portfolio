"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-20 overflow-hidden">

      {/* 🌌 TOP GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 
      w-[900px] h-[400px] 
      bg-purple-600/40 blur-[140px] rounded-full opacity-70 pointer-events-none" />

      {/* 🌌 SIDE GLOW */}
      <div className="absolute top-[-100px] right-[-100px] 
      w-[400px] h-[400px] 
      bg-indigo-500/30 blur-[120px] rounded-full opacity-50 pointer-events-none" />

      {/* 🌌 CONTENT */}
      <div className="z-10 max-w-2xl space-y-6">



        {/* HEADING */}
        

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-400 leading-relaxed"
        >
          A developer who believes that <span className="text-white">“it works”</span> is only the beginning — not the goal.  
          I build systems with logic, clarity, and intention.  

          From structured databases to clean, modern interfaces — every detail matters.  

          If something feels off, I fix it.  
          If something breaks, I debug it.  
          If something can be better, I redesign it 🚀
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex gap-4 mt-6"
        >
        </motion.div>
      </div>

    </section>
  );
}