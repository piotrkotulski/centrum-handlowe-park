"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Train, School } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const nearbyPlaces = [
  {
    icon: Navigation,
    title: "Komunikacja",
    desc: "Doskonała dostępność komunikacyjna, bliskość głównych arterii miasta",
  },
  {
    icon: Train,
    title: "Infrastruktura",
    desc: "Otoczenie szkół, przedszkoli, parków i terenów rekreacyjnych",
  },
  {
    icon: School,
    title: "Potencjał",
    desc: "Dynamicznie rozwijająca się dzielnica z rosnącą liczbą mieszkańców",
  },
];

export function LocationMap() {
  return (
    <section className="py-24 md:py-32 border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="section-label mb-4">Lokalizacja</p>
            <h2 className="text-3xl md:text-5xl font-heading font-normal leading-tight">
              Strategiczne <span className="text-gradient italic">położenie</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="glass p-2">
            <div className="relative aspect-[21/9] overflow-hidden">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=19.0850%2C50.8230%2C19.1050%2C50.8340&layer=mapnik&marker=50.8285%2C19.0950"
                className="absolute inset-0 w-full h-full border-0 grayscale-[40%] contrast-[1.05]"
                loading="lazy"
                title="Lokalizacja Centrum Handlowe PARK"
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/60 via-transparent to-background/30" />
              <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 glass px-4 py-2">
                <MapPin size={14} className="text-gold" />
                <span className="text-xs text-foreground">
                  ul. Melchiora Wańkowicza, Częstochowa
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {nearbyPlaces.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="glass p-6 group hover:border-gold/30 transition-all"
              >
                <item.icon size={20} className="text-gold mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-sm tracking-wider text-gold mb-3 font-heading">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
