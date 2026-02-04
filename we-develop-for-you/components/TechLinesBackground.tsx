"use client";

export default function TechLinesBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Línea horizontal principal */}
      <div className="absolute top-1/3 left-0 h-px w-full bg-gradient-to-r
                      from-transparent via-purple-500/40 to-transparent
                      animate-tech-line" />

      {/* Línea horizontal secundaria */}
      <div className="absolute top-2/3 left-0 h-px w-full bg-gradient-to-r
                      from-transparent via-blue-500/30 to-transparent
                      animate-tech-line-slow" />

      {/* Líneas verticales */}
      <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b
                      from-transparent via-purple-400/20 to-transparent" />

      <div className="absolute left-3/4 top-0 w-px h-full bg-gradient-to-b
                      from-transparent via-blue-400/20 to-transparent" />

      {/* Nodos */}
      <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
      <div className="absolute top-2/3 left-3/4 w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
    </div>
  );
}
