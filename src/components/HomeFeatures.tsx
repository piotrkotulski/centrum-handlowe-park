"use client";

import { ScrollReveal } from "./ScrollReveal";
import { Building2, Sun, Car, Leaf } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "5 Kondygnacji",
    desc: "Piwnica, parter i trzy piętra z różnorodnym przeznaczeniem — od handlu po gastronomię i mieszkania.",
  },
  {
    icon: Sun,
    title: "Fotowoltaika",
    desc: "Zainstalowana instalacja fotowoltaiczna obniżająca koszty eksploatacji całego budynku.",
  },
  {
    icon: Car,
    title: "40 Miejsc Parkingowych",
    desc: "Komfortowy parking z miejscami dla klientów, mieszkańców i pracowników.",
  },
  {
    icon: Leaf,
    title: "Zieleń & Ekologia",
    desc: "Ponad 23% powierzchni biologicznie czynnej. Zieleń urządzona zgodna z MPZP.",
  },
];

export function HomeFeatures() {
  return (
    <section className="py-24 md:py-32 border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] text-gold mb-4">
              CECHY INWESTYCJI
            </p>
            <h2 className="text-3xl md:text-5xl font-extralight">
              Zaprojektowane z <span className="text-gradient">myślą</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 0.1}>
              <div className="glass p-8 h-full group hover:border-gold/30 transition-all duration-500">
                <feature.icon
                  size={28}
                  className="text-gold mb-6 group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="text-base font-medium mb-3">{feature.title}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
