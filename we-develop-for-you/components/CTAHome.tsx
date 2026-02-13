export default function CTAHome() {
  return (
    <section className="bg-blue-900">
      <div className="mx-auto max-w-7xl px-6 py-24 text-center text-white">

        <h2 className="text-3xl md:text-4xl font-bold">
          ¿Listo para optimizar tu empresa?
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-blue-100 text-lg">
          Cuéntanos tu situación y te propondremos una estrategia
          de digitalización clara, práctica y adaptada a tu negocio.
        </p>

        <a
          href="#contacto"
          className="mt-10 inline-block rounded-lg bg-orange-500 px-8 py-4 font-semibold text-white hover:bg-orange-600 transition shadow-md"
        >
          Solicitar diagnóstico gratuito
        </a>

      </div>
    </section>
  );
}