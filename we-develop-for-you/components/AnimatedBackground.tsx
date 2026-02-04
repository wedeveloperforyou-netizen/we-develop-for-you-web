"use client";

import { useEffect } from "react";

export default function AnimatedBackground() {
  useEffect(() => {
    // Solo para forzar render client-side (evita hydration issues)
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradiente animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-indigo-900 animate-gradient" />

      {/* Ruido sutil */}
      <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')] mix-blend-overlay" />
    </div>
  );
}
