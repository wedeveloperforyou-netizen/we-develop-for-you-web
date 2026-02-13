import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "We Develop for You | Digitalización de PYMES",
  description:
    "Desarrollamos software a medida y automatizamos procesos para pymes. Digitalización, eficiencia y cumplimiento normativo.",
  keywords: [
    "digitalización pymes",
    "software a medida",
    "automatización de procesos",
    "facturación electrónica",
    "ticket digital",
    "desarrollo software valencia",
  ],
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <main className="pt-24">
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}