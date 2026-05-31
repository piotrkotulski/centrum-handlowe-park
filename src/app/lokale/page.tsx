import { ScrollReveal } from "@/components/ScrollReveal";
import { FloorPlan } from "@/components/FloorPlan";

export const metadata = {
  title: "Dostępne Lokale | Centrum Handlowe PARK",
  description:
    "Przeglądaj dostępne lokale handlowe, usługowe i mieszkalne w Centrum Handlowym PARK w Częstochowie.",
};

export default function LokalePage() {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-xs tracking-[0.3em] text-gold mb-4">
              DOSTĘPNE LOKALE
            </p>
            <h1 className="text-4xl md:text-6xl font-extralight leading-tight mb-6">
              Interaktywny plan
              <br />
              <span className="text-gradient">budynku</span>
            </h1>
            <p className="text-muted max-w-2xl leading-relaxed">
              Wybierz kondygnację i kliknij na interesujący Cię lokal, aby
              poznać szczegóły. Dostępne lokale handlowe, usługowe, biurowe,
              gastronomiczne oraz mieszkalne.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <FloorPlan />
        </div>
      </section>

      <section className="py-24 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.3em] text-gold mb-4">
                FUNKCJE BUDYNKU
              </p>
              <h2 className="text-3xl md:text-4xl font-extralight">
                Każde piętro — <span className="text-gradient">inne przeznaczenie</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {[
              {
                floor: "Piwnica",
                area: "297,80 m²",
                use: "Usługowo-handlowa + techniczna",
                desc: "Przestrzeń idealna na showroom, magazyn lub salon wystawowy z bezpośrednim dostępem do strefy technicznej budynku.",
              },
              {
                floor: "Parter",
                area: "282,10 m²",
                use: "Usługowo-handlowa + biuro + magazyn",
                desc: "Lokale z witrynami na parterze — najlepsza widoczność i dostępność dla klientów. Idealne na sklep, biuro obsługi czy punkt usługowy.",
              },
              {
                floor: "I Piętro",
                area: "340,20 m²",
                use: "Usługowo-handlowa + magazyn",
                desc: "Rozległa przestrzeń handlowa z magazynem zapleczowym. Idealna na większe formaty handlowe.",
              },
              {
                floor: "II Piętro",
                area: "340,20 m²",
                use: "Usługowo-handlowa + magazyn",
                desc: "Analogiczny układ do I piętra, elastyczna aranżacja przestrzeni z panoramicznym widokiem.",
              },
              {
                floor: "III Piętro",
                area: "200,90 m² + 3 mieszkania",
                use: "Usługowo-gastronomiczna + mieszkalna",
                desc: "Lokal gastronomiczny z potencjałem na taras oraz trzy komfortowe mieszkania z widokiem.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.floor} delay={i * 0.05}>
                <div className="glass p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center group hover:border-gold/30 transition-all">
                  <div className="md:col-span-2">
                    <div className="text-2xl font-light text-gold">
                      {item.floor}
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <div className="text-xs text-muted tracking-wider mb-1">
                      POWIERZCHNIA
                    </div>
                    <div className="text-sm">{item.area}</div>
                  </div>
                  <div className="md:col-span-3">
                    <div className="text-xs text-muted tracking-wider mb-1">
                      PRZEZNACZENIE
                    </div>
                    <div className="text-sm">{item.use}</div>
                  </div>
                  <div className="md:col-span-5">
                    <p className="text-sm text-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
