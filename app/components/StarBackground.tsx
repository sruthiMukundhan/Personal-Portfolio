"use client";

import { useCallback } from "react";
import { Particles } from "@tsparticles/react"; // ✅ FIXED
import { loadFull } from "tsparticles";

export default function StarBackground() {
 ;

  return (
    <Particles
      id="tsparticles"
    
      options={{
        background: { color: "#070711" },
        particles: {
          number: { value: 80 },
          size: { value: 2 },
          move: { enable: true, speed: 1 },
        },
      }}
    />
  );
}