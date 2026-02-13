export default function Hero() {
  return (
    <section id="inicio" className="relative bg-white overflow-hidden">
      
      {/* Fondo geométrico decorativo */}
      <div className="absolute right-0 top-0 h-full w-1/2 opacity-30 pointer-events-none hidden md:block">
        <svg
          viewBox="0 0 600 600"
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="blueGrad" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#1e3a8a" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>

            <linearGradient id="orangeGrad" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#fb923c" />
            </linearGradient>
          </defs>

          {/* Cubos tipo tarjeta */}
          <polygon points="200,50 350,50 425,175 275,175" fill="url(#orangeGrad)" />
          <polygon points="275,175 425,175 350,300 200,300" fill="url(#blueGrad)" />
          <polygon points="100,250 250,250 325,375 175,375" fill="url(#blueGrad)" />
          <polygon points="325,375 475,375 400,500 250,500" fill="url(#orangeGrad)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-800">
              Impulsamos la digitalización
              <span className="block text-orange-500">
                de tu empresa
              </span>
            </h1>

            <p className="mt-8 text-lg text-gray-600 max-w-xl">
              Diseñamos e implementamos soluciones tecnológicas a medida
              para optimizar procesos, reducir costes operativos y mejorar
              la eficiencia de tu negocio.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#contacto"
                className="rounded-lg bg-orange-500 px-8 py-4 font-semibold text-white hover:bg-orange-600 transition shadow-md"
              >
                Solicitar diagnóstico gratuito
              </a>

              <a
                href="#servicios"
                className="rounded-lg border border-gray-300 px-8 py-4 font-semibold text-gray-700 hover:bg-gray-100 transition"
              >
                Ver servicios
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}