export default function ServiciosHome() {
  return (
    <section className="bg-neutral-900 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold">Qué hacemos</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-semibold">Software a medida</h3>
            <p className="mt-2 text-gray-400">
              Aplicaciones adaptadas a tu negocio, sin soluciones genéricas.
            </p>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-semibold">Automatización</h3>
            <p className="mt-2 text-gray-400">
              Eliminamos tareas manuales y mejoramos la eficiencia de tu equipo.
            </p>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-semibold">Cumplimiento digital</h3>
            <p className="mt-2 text-gray-400">
              Facturación electrónica y ticket digital sin complicaciones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
