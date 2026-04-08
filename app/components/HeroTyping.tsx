"use client";

import { useEffect, useState } from "react";

export default function HeroTyping() {
  const text = "Sruthi Mukundh";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setDisplayText(text.slice(0, i + 1));
      i++;

      if (i === text.length) clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-5xl md:text-6xl font-bold leading-tight">
      <span className="block text-white">Hola!</span>
      <span className="block text-white">I’m</span>

      <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 
      bg-clip-text text-transparent">
        {displayText}
        <span className="animate-blink text-purple-400 ml-1">|</span>
      </span>
    </h1>
  );
}