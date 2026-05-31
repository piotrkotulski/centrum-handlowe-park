"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const links = [
  { href: "/", label: "Start" },
  { href: "/inwestycja", label: "Inwestycja" },
  { href: "/lokale", label: "Lokale" },
  { href: "/galeria", label: "Galeria" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const heroOverlay = isHome && !scrolled;
  const heroLight = heroOverlay && theme === "light";
  const heroDark = heroOverlay && theme === "dark";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          heroOverlay
            ? "bg-transparent py-6"
            : "nav-scrolled py-3"
        } ${heroLight ? "hero-nav-light" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <div className={`w-10 h-10 border flex items-center justify-center group-hover:bg-gold/10 transition-colors ${heroDark ? "border-white/50" : heroLight ? "border-foreground/30" : "border-gold/50"}`}>
              <span className={`font-bold text-lg ${heroDark ? "text-white" : heroLight ? "text-foreground" : "text-gold"}`}>P</span>
            </div>
            <div className="hidden sm:block">
              <div className={`text-sm font-semibold tracking-[0.2em] ${heroDark ? "text-white" : "text-foreground"}`}>
                CENTRUM HANDLOWE
              </div>
              <div className={`text-xs tracking-[0.3em] font-medium ${heroDark ? "text-white/80" : heroLight ? "text-gold" : "text-gold"}`}>PARK</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wider transition-colors relative group ${heroDark ? "text-white/80 hover:text-white" : heroLight ? "text-foreground/70 hover:text-foreground" : "text-muted hover:text-gold"}`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300 ${heroDark ? "bg-white" : heroLight ? "bg-foreground" : "bg-gold"}`} />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={toggle}
              className={`w-9 h-9 flex items-center justify-center border rounded-full hover:border-gold/50 transition-colors ${heroDark ? "border-white/30" : heroLight ? "border-foreground/20" : "border-dark-border"}`}
              aria-label={theme === "dark" ? "Przełącz na jasny motyw" : "Przełącz na ciemny motyw"}
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === "dark" ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun size={16} className={heroDark ? "text-white" : heroLight ? "text-foreground" : "text-gold"} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon size={16} className={heroDark ? "text-white" : heroLight ? "text-foreground" : "text-gold"} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
            <Link
              href="/kontakt"
              className={`hidden lg:inline-flex rounded-full px-6 py-2.5 border text-sm tracking-wider font-medium transition-all duration-300 ${heroDark ? "border-white/50 text-white hover:bg-white/10" : heroLight ? "border-foreground/30 text-foreground hover:bg-foreground/5" : "border-gold/50 text-gold hover:bg-gold hover:text-dark"}`}
            >
              ZAPYTAJ O LOKAL
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              className={`lg:hidden p-2 ${heroDark ? "text-white" : "text-foreground"}`}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-dark/95 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 text-foreground p-2"
            >
              <X size={28} />
            </button>
            <nav className="flex flex-col items-center gap-8">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-2xl tracking-[0.2em] text-foreground hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
