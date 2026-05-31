import { ScrollReveal } from "@/components/ScrollReveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ProgressTimeline } from "@/components/ProgressTimeline";

export const metadata = {
  title: "O Inwestycji | Centrum Handlowe PARK",
  description:
    "Szczegóły inwestycji Centrum Handlowe PARK w Częstochowie. Stan zaawansowania, parametry techniczne i harmonogram.",
};

export default function InwestycjaPage() {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-xs tracking-[0.3em] text-gold mb-4">
              O INWESTYCJI
            </p>
            <h1 className="text-4xl md:text-6xl font-normal leading-tight mb-6">
              Budynek z
              <br />
              <span className="text-gradient italic">przyszłością</span>
            </h1>
            <p className="text-muted max-w-2xl leading-relaxed">
              Centrum Handlowe PARK to inwestycja łącząca nowoczesną architekturę
              z funkcjonalnością. Budynek handlowo-usługowo-mieszkalny przy
              ul. Melchiora Wańkowicza w Częstochowie.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter end={2146} suffix=" m²" label="Pow. użytkowa" />
            <AnimatedCounter end={7270} suffix=" m³" label="Kubatura" />
            <AnimatedCounter end={460} suffix=" m²" label="Pow. zabudowy" />
            <AnimatedCounter end={808} suffix=" m²" label="Pow. działki" />
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.3em] text-gold mb-4">
                PARAMETRY TECHNICZNE
              </p>
              <h2 className="text-3xl md:text-4xl font-normal">
                Specyfikacja <span className="text-gradient italic">budynku</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: "Typ budynku", value: "Handlowo-usługowo-mieszkalny" },
              { label: "Liczba kondygnacji", value: "5 (piwnica + parter + 3 piętra)" },
              { label: "Pow. użytkowa", value: "2 146,10 m²" },
              { label: "Kubatura", value: "7 270 m³" },
              { label: "Parking", value: "40 miejsc postojowych" },
              { label: "Wskaźnik zabudowy", value: "30,3% (max. 30,5%)" },
              { label: "Pow. biologicznie czynna", value: "23,3% (min. 20%)" },
              { label: "Pozwolenie na budowę", value: "Nr 1244 z 21.12.2016" },
              { label: "Fasady", value: "Aluminiowe przeszklone" },
              { label: "Energia", value: "Instalacja fotowoltaiczna" },
              { label: "Stolarka okienna", value: "Zamontowana (100%)" },
              { label: "Lokalizacja", value: "ul. Wańkowicza, Częstochowa" },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.03}>
                <div className="flex justify-between items-center py-4 px-6 border-b border-dark-border hover:bg-dark-card/50 transition-colors">
                  <span className="text-sm text-muted">{item.label}</span>
                  <span className="text-sm text-foreground font-medium text-right">
                    {item.value}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ProgressTimeline />

      <section className="py-24 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.3em] text-gold mb-4">
                WYCENA
              </p>
              <h2 className="text-3xl md:text-4xl font-normal">
                Wartość <span className="text-gradient italic">inwestycji</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: "Wartość gruntu",
                value: "628 100 zł",
                sublabel: "Niezabudowany",
              },
              {
                label: "Wartość aktualna",
                value: "11 895 800 zł",
                sublabel: "Stan zaawansowania 67%",
              },
              {
                label: "Wartość po ukończeniu",
                value: "17 445 500 zł",
                sublabel: "Prognoza wartości",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.1}>
                <div className="glass p-8 text-center group hover:border-gold/30 transition-all">
                  <p className="text-xs tracking-wider text-muted mb-2">
                    {item.label}
                  </p>
                  <p className="text-2xl md:text-3xl font-light text-gold mb-2">
                    {item.value}
                  </p>
                  <p className="text-xs text-muted">{item.sublabel}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <p className="text-xs text-muted text-center mt-8">
              Operat szacunkowy: mgr inż. Agnieszka Mazur, Kancelaria M-4,
              Częstochowa (29.12.2025). Metoda porównywania parami. Ważny do
              29.12.2026.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
