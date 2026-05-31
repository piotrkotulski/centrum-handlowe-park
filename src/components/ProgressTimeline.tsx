"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";
import { Check, Clock } from "lucide-react";

const completed = [
  "Projekt architektoniczno-budowlany",
  "Fundamenty",
  "Stropy i schody (5 kondygnacji)",
  "Ściany, słupy, podciągi",
  "Stolarka okienna",
  "Fasady aluminiowe przeszklone",
  "Instalacja fotowoltaiczna",
  "Kominy wentylacyjne",
  "Instalacja audiowizualna",
];

const remaining = [
  "Docieplenie fundamentów",
  "Sufity podwieszane",
  "Malowanie",
  "Wylewki posadzkowe",
  "Łazienki",
  "Instalacja CO",
  "Płytki podłogowe",
  "Oświetlenie",
  "Drzwi wewnętrzne",
  "Tynki ozdobne",
];

export function ProgressTimeline() {
  return (
    <section className="py-24 border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] text-gold font-medium mb-4">
              POSTĘP BUDOWY
            </p>
            <h2 className="text-3xl md:text-4xl font-normal">
              Zaawansowanie{" "}
              <span className="text-gradient italic">67%</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-2xl mx-auto mb-16">
            <div className="h-2 bg-dark-card rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "67%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-gold-dark to-gold rounded-full"
              />
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <ScrollReveal>
              <h3 className="flex items-center gap-2 text-sm tracking-wider text-green-500 mb-6">
                <Check size={16} />
                WYKONANE (100%)
              </h3>
            </ScrollReveal>
            <div className="space-y-3">
              {completed.map((item, i) => (
                <ScrollReveal key={item} delay={i * 0.03}>
                  <div className="flex items-center gap-3 py-2 px-4 bg-green-500/5 border border-green-500/10 hover:border-green-500/20 transition-colors">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-green-500" />
                    </div>
                    <span className="text-sm text-foreground/80">{item}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div>
            <ScrollReveal>
              <h3 className="flex items-center gap-2 text-sm tracking-wider text-yellow-500 mb-6">
                <Clock size={16} />
                DO WYKONANIA
              </h3>
            </ScrollReveal>
            <div className="space-y-3">
              {remaining.map((item, i) => (
                <ScrollReveal key={item} delay={i * 0.03}>
                  <div className="flex items-center gap-3 py-2 px-4 bg-yellow-500/5 border border-yellow-500/10 hover:border-yellow-500/20 transition-colors">
                    <div className="w-5 h-5 rounded-full border border-yellow-500/30 flex items-center justify-center shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
                    </div>
                    <span className="text-sm text-foreground/60">{item}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
