"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-dark border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 border border-gold/50 flex items-center justify-center">
                <span className="text-gold font-bold text-lg">P</span>
              </div>
              <div>
                <div className="text-sm font-semibold tracking-[0.2em]">
                  CENTRUM HANDLOWE
                </div>
                <div className="text-xs tracking-[0.3em] text-gold">PARK</div>
              </div>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              Nowoczesny budynek handlowo-usługowo-mieszkalny w sercu
              Częstochowy. 5 kondygnacji, 2 146 m² powierzchni użytkowej.
            </p>
          </div>

          <div>
            <h3 className="text-sm tracking-[0.2em] text-gold mb-6">
              NAWIGACJA
            </h3>
            <div className="flex flex-col gap-3">
              {[
                { href: "/", label: "Strona główna" },
                { href: "/inwestycja", label: "O inwestycji" },
                { href: "/lokale", label: "Dostępne lokale" },
                { href: "/galeria", label: "Galeria" },
                { href: "/kontakt", label: "Kontakt" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted text-sm hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm tracking-[0.2em] text-gold mb-6">
              KONTAKT
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href="#"
                className="flex items-center gap-3 text-muted text-sm hover:text-gold transition-colors"
              >
                <MapPin size={16} className="text-gold shrink-0" />
                ul. Melchiora Wańkowicza, Częstochowa
              </a>
              <a
                href="tel:+48000000000"
                className="flex items-center gap-3 text-muted text-sm hover:text-gold transition-colors"
              >
                <Phone size={16} className="text-gold shrink-0" />
                +48 000 000 000
              </a>
              <a
                href="mailto:kontakt@chpark.pl"
                className="flex items-center gap-3 text-muted text-sm hover:text-gold transition-colors"
              >
                <Mail size={16} className="text-gold shrink-0" />
                kontakt@chpark.pl
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-dark-border flex items-center justify-center">
          <p className="text-muted text-xs">
            &copy; 2026 Centrum Handlowe PARK. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}
