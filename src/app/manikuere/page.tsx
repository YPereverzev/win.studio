import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { PageHero } from "@/components/PageHero";
import { PriceTable } from "@/components/PriceTable";
import { Reveal } from "@/components/Reveal";
import {
  faqsMani,
  images,
  manicureExpressPrices,
  manicurePrices,
  pedicureExpressPrices,
  pedicurePrices,
  spaPrices,
  site,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Maniküre & Pediküre",
  description:
    "Professionelle Maniküre und Pediküre in Grünberg — klassisch, Gel, French und Spa-Pflege bei WIN.Studio.",
};

export default function ManikuerePage() {
  return (
    <>
      <PageHero
        eyebrow="Nagelpflege"
        title="Maniküre und Fußpflege"
        lead={`Gepflegte Hände und Füße mit Präzision und Ruhe — im ${site.name} Atelier in ${site.city}.`}
        image={images.nails}
      />

      <section className="bg-mist px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-deep">
              Über die Behandlung
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl">
              Von klassisch bis Gelmodellage
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-ink-muted sm:text-base">
              Ob dezente Naturpflege oder ausdrucksstarkes Design: Wir formen,
              pflegen und veredeln Ihre Nägel mit hochwertigen Produkten.
              Wählen Sie zwischen Basis-Behandlung oder erweiterter Spa-Pflege
              mit Peeling, Massage und Lack.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted sm:text-base">
              Fußpflege ist mehr als Kosmetik — regelmäßige Pediküre hält Haut
              und Nägel gesund und sorgt für ein leichtes Gefühl im Alltag.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={images.hands}
                alt="Maniküre Detail"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist-warm px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
          <PriceTable title="Maniküre" rows={manicurePrices} />
          <PriceTable title="Express-Maniküre" rows={manicureExpressPrices} />
          <PriceTable title="Pediküre" rows={pedicurePrices} />
          <div className="space-y-16">
            <PriceTable title="Express-Pediküre" rows={pedicureExpressPrices} />
            <PriceTable title="Spa" rows={spaPrices} />
          </div>
        </div>
      </section>

      <Faq items={faqsMani} title="Fragen zur Nagelpflege" />
      <CtaBand
        title="Maniküre-Termin sichern"
        text="Online anfragen oder anrufen — wir finden den passenden Slot für Ihre Pflege."
      />
    </>
  );
}
