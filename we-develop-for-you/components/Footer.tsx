"use client";

import { useEffect, useRef, useState } from "react";

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={ref}
      className={`relative mt-32 border-t border-white/10 bg-black py-12 transition-all duration-1000
      ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      {/* Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/10 via-cyan-400/10 to-purple-500/10 blur-2xl" />

      <div className="text-center text-sm text-gray-400">
        © 2026 We Develop for You. Todos los derechos reservados.
      </div>
    </footer>
  );
}
