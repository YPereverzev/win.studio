import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { PageHero } from "@/components/PageHero";
import { PriceTable } from "@/components/PriceTable";
import { Reveal } from "@/components/Reveal";
import { faqsWax, images, waxingPrices } from "@/lib/site";

export const metadata: Metadata = {
  title: "Waxing & Epilation",
  description:
    "Professionelles Waxing für Gesicht und Körper in Grünberg — sanfte Wachs-Epilation mit klaren Hygienestandards.",
};

const zones = [
  {
    title: "Gesicht",
    text: "Augenbrauen, Oberlippe, Kinn oder komplettes Gesicht — präzise Konturen, ruhige Haut.",
  },
  {
    title: "Körper",
    text: "Achseln, Arme und Beine mit hautschonendem Wachs — glattes Ergebnis für Wochen.",
  },
  {
    title: "Intimbereich",
    text: "Intim inkl. Pofalte, Bikini Lines, Pofalte und Pobacken — diskret, hygienisch und mit erfahrener Technik.",
  },
];

export default function WaxingPage() {
  return (
    <>
      <PageHero
        eyebrow="Glatte Haut"
        title="Waxing & Epilation"
        lead="Sanfte Wachsbehandlung für Gesicht und Körper — mit klaren Abläufen, Hygiene und einem Ergebnis, das hält."
        image={images.waxing}
      />

      <section className="bg-mist px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-deep">
              Warum Waxing?
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl">
              Länger glatt, weniger Stoppeln
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-ink-muted sm:text-base">
              Beim Waxing werden Haare samt Wurzel entfernt. Das Ergebnis hält
              typischerweise länger als Rasieren, und nachwachsende Haare wirken
              oft feiner. Wir wählen Wachs und Technik nach Zone und Hauttyp.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="relative aspect-[5/4] overflow-hidden">
              <Image
                src={images.studio}
                alt="Ruhiges Behandlungsambiente"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist-warm px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
              Behandlungszonen
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {zones.map((z, i) => (
              <Reveal key={z.title} delay={i * 80}>
                <div className="border-t border-ink/15 pt-6">
                  <h3 className="font-display text-xl text-ink">{z.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {z.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <PriceTable title="Waxing für Frauen" rows={waxingPrices} />
        </div>
      </section>

      <Faq items={faqsWax} title="Fragen zum Waxing" />
      <CtaBand title="Waxing-Termin anfragen" />
    </>
  );
}
