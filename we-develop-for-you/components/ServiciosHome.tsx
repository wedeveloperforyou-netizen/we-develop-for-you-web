import AnimatedBackground from "@/components/AnimatedBackground";
import TechLinesBackground from "@/components/TechLinesBackground";

export default function ServiciosHome() {
  return (
    <section className="relative py-32 text-white overflow-hidden">
      {/* Fondos animados */}
      <AnimatedBackground />
      <TechLinesBackground />

      {/* Contenido */}
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          ¿Cómo podemos ayudarte?
        </h2>

        <p className="mt-4 text-center text-gray-400 max-w-3xl mx-auto">
          Te acompañamos en la digitalización de tu negocio con soluciones claras,
          prácticas y adaptadas a tus necesidades reales.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {/* Card */}
          <div className="rounded-xl border border-white/10 bg-black/40 backdrop-blur p-8
                          transition hover:-translate-y-1 hover:border-purple-500/40
                          hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              🧩 Software a medida
            </h3>
            <p className="mt-4 text-gray-400">
              Desarrollamos aplicaciones adaptadas a tu negocio, sin funciones
              innecesarias ni herramientas genéricas que no encajan contigo.
            </p>
          </div>

          {/* Card */}
          <div className="rounded-xl border border-white/10 bg-black/40 backdrop-blur p-8
                          transition hover:-translate-y-1 hover:border-purple-500/40
                          hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              ⚙️ Automatización de procesos
            </h3>
            <p className="mt-4 text-gray-400">
              Automatizamos tareas repetitivas para que ahorres tiempo, reduzcas
              errores y puedas centrarte en lo importante.
            </p>
          </div>

          {/* Card */}
          <div className="rounded-xl border border-white/10 bg-black/40 backdrop-blur p-8
                          transition hover:-translate-y-1 hover:border-purple-500/40
                          hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              🧾 Cumplimiento normativo
            </h3>
            <p className="mt-4 text-gray-400">
              Te ayudamos a cumplir con nuevas normativas como ticket digital y
              facturación electrónica sin complicaciones técnicas.
            </p>
          </div>

          {/* Card */}
          <div className="rounded-xl border border-white/10 bg-black/40 backdrop-blur p-8
                          transition hover:-translate-y-1 hover:border-purple-500/40
                          hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              📊 Digitalización de pymes
            </h3>
            <p className="mt-4 text-gray-400">
              Analizamos tu situación actual y te proponemos mejoras tecnológicas
              realistas, pensadas para crecer paso a paso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
