import Hero from "@/components/Hero";
import ServiciosHome from "@/components/ServiciosHome";
import CumplimientoNormativo from "@/components/CumplimientoNormativo";
import CTAHome from "@/components/CTAHome";
import Contacto from "@/components/Contacto";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiciosHome />
      <CumplimientoNormativo />
      <CTAHome />
      <Contacto />
    </>
  );
}