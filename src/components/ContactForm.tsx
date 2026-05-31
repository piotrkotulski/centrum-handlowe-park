"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass p-12 text-center"
      >
        <CheckCircle size={48} className="text-gold mx-auto mb-6" />
        <h3 className="text-xl font-light mb-3">Dziękujemy za wiadomość</h3>
        <p className="text-sm text-muted">
          Skontaktujemy się z Tobą w ciągu 24 godzin.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="glass p-8 space-y-6"
    >
      <h3 className="text-sm tracking-wider text-gold mb-2">
        FORMULARZ KONTAKTOWY
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="text-xs text-muted tracking-wider block mb-2">
            IMIĘ I NAZWISKO
          </label>
          <input
            type="text"
            required
            className="w-full bg-transparent border-b border-dark-border py-3 text-sm text-foreground focus:border-gold outline-none transition-colors placeholder:text-muted/30"
            placeholder="Jan Kowalski"
          />
        </div>
        <div>
          <label className="text-xs text-muted tracking-wider block mb-2">
            TELEFON
          </label>
          <input
            type="tel"
            className="w-full bg-transparent border-b border-dark-border py-3 text-sm text-foreground focus:border-gold outline-none transition-colors placeholder:text-muted/30"
            placeholder="+48 000 000 000"
          />
        </div>
      </div>

      <div>
        <label className="text-xs text-muted tracking-wider block mb-2">
          E-MAIL
        </label>
        <input
          type="email"
          required
          className="w-full bg-transparent border-b border-dark-border py-3 text-sm text-foreground focus:border-gold outline-none transition-colors placeholder:text-muted/30"
          placeholder="jan@przykład.pl"
        />
      </div>

      <div>
        <label className="text-xs text-muted tracking-wider block mb-2">
          INTERESUJĄCY LOKAL
        </label>
        <select className="w-full bg-transparent border-b border-dark-border py-3 text-sm text-foreground focus:border-gold outline-none transition-colors appearance-none cursor-pointer">
          <option value="" className="bg-dark">
            Wybierz lokal...
          </option>
          <option value="handlowy" className="bg-dark">
            Lokal handlowy
          </option>
          <option value="uslugowy" className="bg-dark">
            Lokal usługowy
          </option>
          <option value="biurowy" className="bg-dark">
            Lokal biurowy
          </option>
          <option value="gastronomiczny" className="bg-dark">
            Lokal gastronomiczny
          </option>
          <option value="mieszkalny" className="bg-dark">
            Mieszkanie
          </option>
          <option value="inny" className="bg-dark">
            Inny / nie wiem jeszcze
          </option>
        </select>
      </div>

      <div>
        <label className="text-xs text-muted tracking-wider block mb-2">
          WIADOMOŚĆ
        </label>
        <textarea
          rows={4}
          className="w-full bg-transparent border-b border-dark-border py-3 text-sm text-foreground focus:border-gold outline-none transition-colors resize-none placeholder:text-muted/30"
          placeholder="Opisz czego szukasz..."
        />
      </div>

      <button
        type="submit"
        className="w-full py-4 bg-gold text-dark text-sm tracking-wider font-medium hover:bg-gold-light transition-colors flex items-center justify-center gap-2 group"
      >
        WYŚLIJ ZAPYTANIE
        <Send
          size={14}
          className="group-hover:translate-x-1 transition-transform"
        />
      </button>

      <p className="text-xs text-muted/50 text-center">
        Wysyłając formularz wyrażasz zgodę na przetwarzanie danych osobowych w
        celu odpowiedzi na zapytanie.
      </p>
    </form>
  );
}
