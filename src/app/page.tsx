import { ParallaxHero } from "@/components/ParallaxHero";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ScrollReveal } from "@/components/ScrollReveal";
import { HomeFeatures } from "@/components/HomeFeatures";
import { VideoShowcase } from "@/components/VideoShowcase";
import { HomeCTA } from "@/components/HomeCTA";
import { LocationMap } from "@/components/LocationMap";
import { asset } from "@/lib/basePath";

export default function Home() {
  return (
    <>
      <ParallaxHero />

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
            <AnimatedCounter end={5} suffix="" label="Kondygnacji" delay={0} />
            <AnimatedCounter end={2146} suffix=" m²" label="Pow. użytkowa" delay={0.1} />
            <AnimatedCounter end={40} suffix="" label="Miejsc parkingowych" delay={0.2} />
            <AnimatedCounter end={67} suffix="%" label="Zaawansowanie budowy" delay={0.3} />
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <p className="section-label mb-4">O projekcie</p>
              <h2 className="text-3xl md:text-5xl font-normal leading-tight mb-6">
                Przestrzeń stworzona
                <br />
                <span className="text-gradient italic">z wizją</span>
              </h2>
              <p className="text-muted leading-relaxed mb-6">
                Centrum Handlowe PARK to nowoczesny budynek
                handlowo-usługowo-mieszkalny zlokalizowany w dynamicznie
                rozwijającej się dzielnicy Częstochowy. Pięć kondygnacji
                zaprojektowanych z myślą o komforcie najemców i mieszkańców.
              </p>
              <p className="text-muted leading-relaxed">
                Przeszklone fasady aluminiowe, instalacja fotowoltaiczna i
                przemyślany układ funkcjonalny to fundamenty tej inwestycji.
                Budynek oferuje lokale handlowe, usługowe, biurowe,
                gastronomiczne oraz mieszkalne.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative">
                <div className="aspect-[4/3] border border-dark-border overflow-hidden relative group">
                  <img
                    src={asset("/images/modern-building.jpg")}
                    alt="Wizualizacja budynku Centrum Handlowe PARK"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-gold/10" />
                <div className="absolute -top-4 -left-4 w-24 h-24 border border-gold/10" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <HomeFeatures />

      <section className="relative h-[60vh] md:h-[85vh] overflow-hidden border-t border-dark-border">
        <img
          src={asset("/images/building-facade.jpg")}
          alt="Gotowa fasada budynku Centrum Handlowe PARK"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/15" />
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-7xl mx-auto w-full px-6 pb-16 md:pb-24">
            <ScrollReveal>
              <p className="section-label band-heading mb-4">Architektura</p>
              <h2 className="band-heading text-white text-3xl md:text-5xl lg:text-6xl font-normal leading-tight max-w-3xl">
                Forma, która <span className="text-gradient italic">definiuje</span>
                <br />
                przestrzeń
              </h2>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <VideoShowcase />

      <LocationMap />

      <HomeCTA />
    </>
  );
}
