export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Fondo animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-purple-700 to-orange-600 animate-gradient" />

      {/* Capa oscura para contraste */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Contenido */}
      <div className="relative mx-auto max-w-6xl px-6 py-40 text-center">

        <h1 className="text-5xl md:text-6xl font-bold text-white">
          Tecnología que trabaja  
          <span className="block bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
            para tu negocio
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-xl text-gray-200">
          Desarrollamos software a medida y automatizamos procesos para que tu pyme
          gane eficiencia, reduzca errores y crezca sin fricción.
        </p>

        <div className="mt-12 flex justify-center gap-4">
          <a
            href="/contacto"
            className="rounded-lg bg-white px-8 py-4 font-semibold text-black hover:bg-gray-200 transition"
          >
            Solicitar diagnóstico
          </a>

          <a
            href="/servicios"
            className="rounded-lg border border-white/40 px-8 py-4 font-semibold text-white hover:bg-white/10 transition"
          >
            Ver servicios
          </a>
        </div>
      </div>
    </section>
  );
}
