import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <span className="text-xl font-bold">We Develop for You</span>

        <div className="space-x-6">
          <Link href="/">Inicio</Link>
          <Link href="/servicios">Servicios</Link>
          <Link href="/contacto">Contacto</Link>
        </div>
      </nav>
    </header>
  );
}
