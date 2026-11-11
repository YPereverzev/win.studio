import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { PriceTable } from "@/components/PriceTable";
import {
  browPrices,
  images,
  lashExpressNote,
  lashExpressPrices,
  lashJuniorPrices,
  lashRefillNote,
  lashRemovalPrices,
  lashTopPrices,
  manicureExpressPrices,
  manicurePrices,
  pedicureExpressPrices,
  pedicurePrices,
  spaPrices,
  waxingPrices,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Preise",
  description:
    "Transparente Preise für Maniküre, Pediküre, Wimpernverlängerung und Waxing bei WIN.Studio Grünberg.",
};

export default function PreisePage() {
  return (
    <>
      <PageHero
        eyebrow="Transparent"
        title="Unsere Preise"
        lead="Maniküre, Pediküre, Wimpern, Augenbrauen und Waxing — die aktuelle Preisliste von WIN.Studio."
        image={images.detail}
      />

      <section className="bg-mist px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-20">
          <div className="grid gap-16 lg:grid-cols-2">
            <PriceTable title="Maniküre" rows={manicurePrices} />
            <div className="space-y-16">
              <PriceTable title="Express-Maniküre" rows={manicureExpressPrices} />
              <PriceTable title="Spa" rows={spaPrices} />
            </div>
          </div>
          <div className="grid gap-16 lg:grid-cols-2">
            <PriceTable title="Pediküre" rows={pedicurePrices} />
            <PriceTable title="Express-Pediküre" rows={pedicureExpressPrices} />
          </div>
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <PriceTable title="Wimpern — Top Master" rows={lashTopPrices} />
              <p className="mt-4 text-sm text-ink-muted">{lashRefillNote}</p>
            </div>
            <div>
              <PriceTable title="Wimpern — Junior Master" rows={lashJuniorPrices} />
              <p className="mt-4 text-sm text-ink-muted">{lashRefillNote}</p>
            </div>
          </div>
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <PriceTable
                title="Express-Wimpernverlängerung"
                rows={lashExpressPrices}
              />
              <p className="mt-4 text-sm text-ink-muted">{lashExpressNote}</p>
            </div>
            <PriceTable title="Entfernung" rows={lashRemovalPrices} />
          </div>
          <div className="grid gap-16 lg:grid-cols-2">
            <PriceTable
              title="Augenbrauen & Wimpernbehandlungen"
              rows={browPrices}
            />
            <PriceTable title="Waxing für Frauen" rows={waxingPrices} />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
