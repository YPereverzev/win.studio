import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { PageHero } from "@/components/PageHero";
import { PriceTable } from "@/components/PriceTable";
import { Reveal } from "@/components/Reveal";
import {
  browPrices,
  faqsLashes,
  images,
  lashExpressNote,
  lashExpressPrices,
  lashJuniorPrices,
  lashRefillNote,
  lashRemovalPrices,
  lashTopPrices,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Wimpernverlängerung",
  description:
    "1:1 und Volumentechnik in Grünberg — Neuauflage, Auffüllen und Express bei WIN.Studio.",
};

const looks = [
  {
    title: "1:1 Methode",
    text: "Eine Extension pro Naturwimper — klar definiert, elegant und alltagstauglich.",
  },
  {
    title: "Volumentechnik",
    text: "Fächertechnik für mehr Dichte bei feinen oder lückigen Naturwimpern.",
  },
  {
    title: "Express",
    text: "Neuauflage oder Auffüllen in kürzerer Zeit — bis 4 Wochen, danach nur Neuanlage.",
  },
];

export default function WimpernPage() {
  return (
    <>
      <PageHero
        eyebrow="Blickfang"
        title="Wimpernverlängerung"
        lead="Natürlicher Schwung oder voller Volumen-Look — gesetzt mit Ruhe, Präzision und hautverträglichen Materialien."
        image={images.lashes}
      />

      <section className="bg-mist px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
              Welcher Look passt zu Ihnen?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-muted sm:text-base">
              Vor jeder Neuanlage beraten wir zu Länge, Curl und Dichte — abgestimmt
              auf Augenform, Lifestyle und Pflegeaufwand.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {looks.map((look, i) => (
              <Reveal key={look.title} delay={i * 80}>
                <div className="border-t border-ink/15 pt-6">
                  <h3 className="font-display text-xl text-ink">{look.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {look.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-20 text-mist lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[5/4] overflow-hidden">
              <Image
                src={images.detail}
                alt="Beauty Detail"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-soft">
              Pflegehinweise
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
              Damit Ihr Set länger hält
            </h2>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-mist/75">
              <li>Erste 24 Stunden: kein Wasser, Dampf oder Make-up am Wimpernkranz</li>
              <li>Ölfreie Produkte im Augenbereich verwenden</li>
              <li>Nicht reiben, zupfen oder mit der Wimpernzange nachformen</li>
              <li>Auffüllen alle 2–3 Wochen empfohlen den Look</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist-warm px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
          <div>
            <PriceTable title="Top Master" rows={lashTopPrices} />
            <p className="mt-4 text-sm text-ink-muted">{lashRefillNote}</p>
          </div>
          <div>
            <PriceTable title="Junior Master" rows={lashJuniorPrices} />
            <p className="mt-4 text-sm text-ink-muted">{lashRefillNote}</p>
          </div>
          <div>
            <PriceTable
              title="Express-Wimpernverlängerung"
              rows={lashExpressPrices}
            />
            <p className="mt-4 text-sm text-ink-muted">{lashExpressNote}</p>
          </div>
          <PriceTable title="Entfernung" rows={lashRemovalPrices} />
          <PriceTable
            title="Augenbrauen & Wimpernbehandlungen"
            rows={browPrices}
          />
        </div>
      </section>

      <Faq items={faqsLashes} title="Fragen zu Wimpern" />
      <CtaBand title="Wimpern-Termin buchen" />
    </>
  );
}
