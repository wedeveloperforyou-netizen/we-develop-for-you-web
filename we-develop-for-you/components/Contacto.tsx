"use client";

import { useState } from "react";

export default function Contacto() {
    const [enviado, setEnviado] = useState(false);
    const [cargando, setCargando] = useState(false);

    async function handleSubmit(e: any) {
        e.preventDefault();
        setCargando(true);

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

        setCargando(false);
    }

    return (
        <section id="contacto" className="bg-gray-50">
            <div className="mx-auto max-w-4xl px-6 py-24">

                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
                    Hablemos sobre tu digitalización
                </h2>

                <p className="mt-6 text-center text-gray-600 max-w-2xl mx-auto">
                    Cuéntanos tu situación y te propondremos una solución clara,
                    práctica y adaptada a tu empresa.
                </p>

                {enviado ? (
                    <div className="mt-12 rounded-2xl bg-blue-50 border border-blue-100 p-8 text-center">
                        <p className="text-blue-800 font-medium">
                            Hemos recibido tu mensaje. Te contactaremos en menos de 24 horas.
                        </p>
                    </div>
                ) : (
                    <form
                        onSubmit={handleSubmit}
                        className="mt-12 space-y-6 rounded-2xl bg-white p-10 shadow-sm border border-gray-100"
                    >

                        <div className="grid gap-6 md:grid-cols-2">
                            <input
                                name="nombre"
                                placeholder="Nombre"
                                required
                                className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-800"
                            />

                            <input
                                name="empresa"
                                placeholder="Empresa"
                                className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-800"
                            />
                        </div>

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-800"
                        />

                        <textarea
                            name="mensaje"
                            placeholder="Cuéntanos brevemente qué necesitas"
                            required
                            rows={4}
                            className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-800"
                        />

                        <button
                            type="submit"
                            disabled={cargando}
                            className="w-full rounded-lg bg-orange-500 py-3 text-white font-semibold transition hover:bg-orange-600 disabled:opacity-60"
                        >
                            {cargando ? "Enviando..." : "Solicitar diagnóstico gratuito"}
                        </button>

                        <div className="text-center pt-4">
                            <a
                                href="https://wa.me/TUNUMERO"
                                target="_blank"
                                className="text-sm text-gray-500 hover:text-gray-800 transition"
                            >
                                O si lo prefieres, escríbenos por WhatsApp
                            </a>
                        </div>

                    </form>
                )}
            </div>
        </section>
    ); 
}