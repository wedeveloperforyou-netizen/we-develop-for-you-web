import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-3">

          {/* Marca */}
          <div>
            <Link href="#inicio" className="flex items-center gap-3 group">
              <img
                src="/logo.svg"
                alt="WeDevelop"
                className="h-10 w-auto group-hover:scale-105 transition"
              />
              <img
                src="/logoMedium.svg"
                alt="WeDevelop"
                className="h-6 md:h-8 w-auto"
              />
            </Link>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Soluciones tecnológicas y digitalización para pymes.
              Automatización, software a medida y cumplimiento normativo.
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900">
              Servicios
            </h4>

            <ul className="mt-4 space-y-3 text-gray-600">
              <li>
                <Link
                  href="#servicios"
                  className="hover:text-orange-500 transition"
                >
                  Software a medida
                </Link>
              </li>
              <li className="hover:text-orange-500 transition cursor-pointer">
                Automatización de procesos
              </li>
              <li className="hover:text-orange-500 transition cursor-pointer">
                Digitalización empresarial
              </li>
              <li className="hover:text-orange-500 transition cursor-pointer">
                Cumplimiento normativo
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900">
              Contacto
            </h4>

            <ul className="mt-4 space-y-3 text-gray-600">
              <li>Valencia, España</li>
              <li>
                <a
                  href="mailto:wedevelopforyou@gmail.com"
                  className="hover:text-orange-500 transition"
                >
                  wedevelopforyou@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+34603486877"
                  className="hover:text-orange-500 transition"
                >
                  +34 603 486 877
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          © 2026 We Develop for You. Todos los derechos reservados.
        </div>

      </div>
    </footer>
  );
}