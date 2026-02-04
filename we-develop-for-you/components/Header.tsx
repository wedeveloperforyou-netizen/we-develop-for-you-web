import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.svg" alt="We Develop for You"className="h-12 w-auto"/>
          <img src="/logoMedium.svg" alt="We Develop for You"className="h-10 md:h-20 w-auto center"/>
        </Link>
          
        {/* Navegación */}
        <nav className="flex gap-6 text-sm text-gray-300">
          <Link href="/" className="hover:text-white">
            Inicio
          </Link>
          <Link href="/servicios" className="hover:text-white">
            Servicios
          </Link>
          <Link
            href="/contacto"
            className="rounded border border-white/20 px-4 py-1.5 hover:bg-white hover:text-black"
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}
