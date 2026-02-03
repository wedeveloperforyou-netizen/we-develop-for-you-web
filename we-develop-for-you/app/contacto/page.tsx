"use client";

import { useState } from "react";

export default function Contacto() {
  const [enviado, setEnviado] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      nombre: formData.get("nombre"),
      empresa: formData.get("empresa"),
      email: formData.get("email"),
      mensaje: formData.get("mensaje"),
    };

    const response = await fetch("/api/contacto", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setEnviado(true);
    }
  }

  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <h1 className="text-3xl font-bold">Contacto</h1>

      {enviado ? (
        <p className="mt-6 text-green-600">
          ¡Gracias! Hemos recibido tu mensaje y te responderemos pronto.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <input
            name="nombre"
            placeholder="Nombre"
            required
            className="w-full rounded border px-4 py-2"
          />

          <input
            name="empresa"
            placeholder="Empresa"
            className="w-full rounded border px-4 py-2"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full rounded border px-4 py-2"
          />

          <textarea
            name="mensaje"
            placeholder="Cuéntanos brevemente qué necesitas"
            required
            className="w-full rounded border px-4 py-2"
          />

          <button
            type="submit"
            className="rounded bg-black px-6 py-2 text-white"
          >
            Enviar mensaje
          </button>
        </form>
      )}
    </main>
  );
}
