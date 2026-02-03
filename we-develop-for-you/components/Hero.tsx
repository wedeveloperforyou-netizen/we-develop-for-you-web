export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-32 text-center">
      <h1 className="text-5xl font-bold">
        Software a medida y automatización para pymes
      </h1>

      <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-400">
        Digitalizamos tu negocio para que trabajes mejor, reduzcas errores y
        ganes eficiencia con soluciones adaptadas a tu forma de trabajar.
      </p>

      <div className="mt-10 flex justify-center gap-4">
        <a
          href="/contacto"
          className="rounded bg-white px-6 py-3 font-medium text-black"
        >
          Solicitar diagnóstico
        </a>
        <a
          href="/servicios"
          className="rounded border px-6 py-3 font-medium"
        >
          Ver servicios
        </a>
      </div>
    </section>
  );
}
