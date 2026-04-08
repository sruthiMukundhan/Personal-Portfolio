"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${
        scrolled
          ? "bg-black/40 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-center py-5">

        {/* CENTER LINKS */}
        <div className="flex gap-12 text-lg font-semibold text-white">

          <a
            href="#about"
            className="relative group transition"
          >
            <span className="group-hover:text-purple-400 
            group-hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.9)] transition">
              About
            </span>

            <span className="absolute left-0 -bottom-1 w-0 h-[2px] 
            bg-purple-400 transition-all duration-300 group-hover:w-full" />
          </a>

          <a
            href="#projects"
            className="relative group transition"
          >
            <span className="group-hover:text-purple-400 
            group-hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.9)] transition">
              Projects
            </span>

            <span className="absolute left-0 -bottom-1 w-0 h-[2px] 
            bg-purple-400 transition-all duration-300 group-hover:w-full" />
          </a>

          <a
            href="#contact"
            className="relative group transition"
          >
            <span className="group-hover:text-purple-400 
            group-hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.9)] transition">
              Contact
            </span>

            <span className="absolute left-0 -bottom-1 w-0 h-[2px] 
            bg-purple-400 transition-all duration-300 group-hover:w-full" />
          </a>

        </div>
      </div>
    </nav>
  );
}