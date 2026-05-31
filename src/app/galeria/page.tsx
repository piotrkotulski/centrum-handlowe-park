import { ScrollReveal } from "@/components/ScrollReveal";
import { GalleryGrid } from "@/components/GalleryGrid";

export const metadata = {
  title: "Galeria | Centrum Handlowe PARK",
  description:
    "Galeria zdjęć i wizualizacji inwestycji Centrum Handlowe PARK w Częstochowie.",
};

export default function GaleriaPage() {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-xs tracking-[0.3em] text-gold mb-4">GALERIA</p>
            <h1 className="text-4xl md:text-6xl font-extralight leading-tight mb-6">
              Postęp
              <br />
              <span className="text-gradient">budowy</span>
            </h1>
            <p className="text-muted max-w-2xl leading-relaxed">
              Dokumentacja fotograficzna z placu budowy. Śledź postęp realizacji
              inwestycji Centrum Handlowe PARK.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
