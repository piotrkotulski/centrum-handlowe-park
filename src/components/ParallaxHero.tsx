"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import { asset } from "@/lib/basePath";

export function ParallaxHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster={asset("/images/hero-building.jpg")}
        >
          <source src={asset("/videos/hero-video-hd.mp4")} type="video/mp4" />
        </video>

        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 hero-gradient" />

        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[120px] animate-float" />
          <div
            className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gold/3 rounded-full blur-[100px]"
            style={{ animationDelay: "3s" }}
          />
        </div>

        <div className="absolute inset-0 opacity-[0.03]">
          <svg width="100%" height="100%">
            <defs>
              <pattern
                id="grid"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 60 0 L 0 0 0 60"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center text-white hero-text"
      >
        <div className="hero-fade-in hero-divider h-px bg-gold mb-8" style={{ animationDelay: "0.3s" }} />

        <p
          className="hero-fade-in hero-location text-xs tracking-[0.4em] text-white mb-6 font-medium"
          style={{ animationDelay: "0.5s" }}
        >
          CZĘSTOCHOWA &mdash; UL. WAŃKOWICZA
        </p>

        <h1
          className="hero-fade-in text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight"
          style={{ animationDelay: "0.7s" }}
        >
          CENTRUM
          <br />
          <span className="text-gradient italic">HANDLOWE</span>
          <br />
          PARK
        </h1>

        <p
          className="hero-fade-in hero-subtitle mt-8 max-w-md text-sm text-white leading-relaxed"
          style={{ animationDelay: "0.9s" }}
        >
          Nowoczesny budynek handlowo-usługowo-mieszkalny. 5 kondygnacji
          komfortu, designu i funkcjonalności.
        </p>

        <div
          className="hero-fade-in mt-10 flex flex-col sm:flex-row gap-4"
          style={{ animationDelay: "1.1s" }}
        >
          <a
            href={asset("/lokale/")}
            className="hero-btn-primary rounded-full px-9 py-3.5 bg-gold text-dark text-sm tracking-wider font-medium hover:bg-gold-light transition-colors"
          >
            ZOBACZ LOKALE
          </a>
          <a
            href={asset("/inwestycja/")}
            className="hero-btn-outline rounded-full px-9 py-3.5 border border-white/50 text-white text-sm tracking-wider hover:border-gold hover:text-gold transition-all"
          >
            O INWESTYCJI
          </a>
        </div>
      </motion.div>

      <div
        className="hero-fade-in absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        style={{ animationDelay: "1.5s" }}
      >
        <div className="animate-bounce-slow">
          <ChevronDown size={20} className="hero-chevron text-white/50" />
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[var(--color-background)] to-transparent z-10" />
    </section>
  );
}
