import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { nombre, empresa, email, mensaje } = await request.json();

    const result = await resend.emails.send({
      from: "WeDevelopForYou <no-reply@resend.dev>",
      to: ["wedeveloperforyou@gmail.com"],
      replyTo: email,
      subject: "📩 Nuevo contacto desde la web",
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Empresa:</strong> ${empresa}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `,
    });

    console.log("✅ Email enviado con Resend:", result);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("❌ Error enviando email:", error);
    return NextResponse.json(
      { ok: false, error: "Error enviando el email" },
      { status: 500 }
    );
  }
}
