"use client";

import { motion } from "framer-motion";

export function HomeCTA() {
  return (
    <section className="py-32 md:py-40 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs tracking-[0.3em] text-gold font-medium mb-6">
            ZAINTERESOWANY?
          </p>
          <h2 className="text-3xl md:text-5xl font-normal leading-tight mb-8">
            Znajdź swoje idealne
            <br />
            <span className="text-gradient italic">miejsce w PARK</span>
          </h2>
          <p className="text-muted leading-relaxed mb-10 max-w-lg mx-auto">
            Skontaktuj się z nami, aby poznać szczegóły oferty, umówić się na
            wizytę lub zarezerwować wybrany lokal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={"/kontakt"}
              className="px-10 py-4 bg-gold text-dark text-sm tracking-wider font-medium hover:bg-gold-light transition-colors"
            >
              SKONTAKTUJ SIĘ
            </a>
            <a
              href={"/lokale"}
              className="px-10 py-4 border border-gold/40 text-gold text-sm tracking-wider font-medium hover:bg-gold/10 transition-colors"
            >
              PRZEGLĄDAJ LOKALE
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
