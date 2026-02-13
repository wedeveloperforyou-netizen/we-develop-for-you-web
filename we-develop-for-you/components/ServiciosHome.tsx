export default function ServiciosHome() {
  return (
    <section id="servicios" className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-24">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
          ¿Cómo podemos ayudarte?
        </h2>

        <p className="mt-4 text-center text-gray-600 max-w-3xl mx-auto">
          Te acompañamos en la digitalización de tu negocio con soluciones claras,
          prácticas y adaptadas a tus necesidades reales.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          <div className="rounded-2xl bg-white p-10 shadow-sm border border-gray-100 transition hover:shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">
              Software a medida
            </h3>
            <p className="mt-4 text-gray-600">
              Desarrollamos aplicaciones adaptadas a tu negocio, sin funciones
              innecesarias ni herramientas genéricas que no encajan contigo.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-10 shadow-sm border border-gray-100 transition hover:shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">
              Automatización de procesos
            </h3>
            <p className="mt-4 text-gray-600">
              Automatizamos tareas repetitivas para que ahorres tiempo, reduzcas
              errores y puedas centrarte en lo importante.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-10 shadow-sm border border-gray-100 transition hover:shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">
              Cumplimiento normativo
            </h3>
            <p className="mt-4 text-gray-600">
              Te ayudamos a cumplir con nuevas normativas como ticket digital y
              facturación electrónica sin complicaciones técnicas.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-10 shadow-sm border border-gray-100 transition hover:shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">
              Digitalización de pymes
            </h3>
            <p className="mt-4 text-gray-600">
              Analizamos tu situación actual y te proponemos mejoras tecnológicas
              realistas, pensadas para crecer paso a paso.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}