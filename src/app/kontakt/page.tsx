import { ScrollReveal } from "@/components/ScrollReveal";
import { ContactForm } from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = {
  title: "Kontakt | Centrum Handlowe PARK",
  description:
    "Skontaktuj się z nami w sprawie lokali w Centrum Handlowym PARK w Częstochowie.",
};

export default function KontaktPage() {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-xs tracking-[0.3em] text-gold font-medium mb-4">KONTAKT</p>
            <h1 className="text-4xl md:text-6xl font-normal leading-tight mb-6">
              Porozmawiajmy
              <br />
              <span className="text-gradient italic">o Twoim lokalu</span>
            </h1>
            <p className="text-muted max-w-2xl leading-relaxed">
              Jesteś zainteresowany lokalem handlowym, usługowym lub
              mieszkaniem? Skontaktuj się z nami — odpowiemy na wszystkie
              pytania i umówimy wizytę na budowie.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <ScrollReveal>
                <ContactForm />
              </ScrollReveal>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <ScrollReveal delay={0.1}>
                <div className="glass p-8">
                  <h3 className="text-sm tracking-wider text-gold mb-6">
                    DANE KONTAKTOWE
                  </h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <MapPin size={18} className="text-gold mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm text-foreground">Adres inwestycji</p>
                        <p className="text-sm text-muted mt-1">
                          ul. Melchiora Wańkowicza
                          <br />
                          Częstochowa
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Phone size={18} className="text-gold mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm text-foreground">Telefon</p>
                        <a
                          href="tel:+48000000000"
                          className="text-sm text-muted mt-1 hover:text-gold transition-colors"
                        >
                          +48 000 000 000
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Mail size={18} className="text-gold mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm text-foreground">E-mail</p>
                        <a
                          href="mailto:kontakt@chpark.pl"
                          className="text-sm text-muted mt-1 hover:text-gold transition-colors"
                        >
                          kontakt@chpark.pl
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Clock size={18} className="text-gold mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm text-foreground">Godziny kontaktu</p>
                        <p className="text-sm text-muted mt-1">
                          Pon–Pt: 9:00 – 17:00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
