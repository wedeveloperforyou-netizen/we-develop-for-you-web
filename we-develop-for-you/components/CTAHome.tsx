import Link from "next/link";

export default function CTAHome() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 text-center">
      <h2 className="text-3xl font-bold">
        ¿Hablamos de tu proyecto?
      </h2>

      <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
        Cuéntanos tu situación y te ayudamos a encontrar la mejor solución para
        tu negocio, sin compromiso.
      </p>

      <Link
        href="/contacto"
        className="mt-8 inline-block rounded bg-white px-6 py-3 font-medium text-black hover:bg-gray-200 transition"
      >
        Contactar
      </Link>
    </section>
  );
}