import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo + Nombre */}
          <Link href="#inicio" className="flex items-center gap-3">
            
            <img
              src="/logo.svg"
              alt="WeDevelop"
              className="h-10 w-auto"
            />

            <img
              src="/logoMedium.svg"
              alt="WeDevelop"
              className="h-6 sm:h-7 md:h-8 w-auto"
            />

          </Link>

          {/* Navegación */}
          <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-700">
            <Link
              href="#servicios"
              className="hover:text-gray-900 transition"
            >
              Servicios
            </Link>

            <Link
              href="#contacto"
              className="rounded-lg bg-orange-500 px-6 py-2.5 text-white hover:bg-orange-600 transition shadow-sm"
            >
              Solicitar diagnóstico
            </Link>
          </nav>

        </div>
      </div>
    </header>
  );
}