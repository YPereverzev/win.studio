import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { PriceTable } from "@/components/PriceTable";
import { Reveal } from "@/components/Reveal";
import {
  images,
  lashPrices,
  manicurePrices,
  pedicurePrices,
  waxingPrices,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Preise",
  description:
    "Transparente Preise für Maniküre, Pediküre, Wimpernverlängerung und Waxing bei Auralis Nails Dortmund.",
};

export default function PreisePage() {
  return (
    <>
      <PageHero
        eyebrow="Transparent"
        title="Unsere Preise"
        lead="Faire, klare Preise für alle drei Leistungsbereiche — ohne Überraschungen."
        image={images.detail}
      />

      <section className="bg-mist px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-20">
          <div className="grid gap-16 lg:grid-cols-2">
            <PriceTable title="Maniküre" rows={manicurePrices} />
            <PriceTable title="Pediküre" rows={pedicurePrices} />
          </div>
          <div className="grid gap-16 lg:grid-cols-2">
            <PriceTable title="Wimpernverlängerung" rows={lashPrices} />
            <PriceTable title="Waxing" rows={waxingPrices} />
          </div>
          <Reveal>
            <p className="max-w-2xl text-sm leading-relaxed text-ink-muted">
              Alle Angaben sind Richtpreise der Demo. French/Babyboomer und
              individuelle Designs können Aufpreise haben. Gerne beraten wir Sie
              vor Ort zum passenden Paket.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
