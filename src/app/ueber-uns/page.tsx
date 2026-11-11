import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { images, locations, site, strengths } from "@/lib/site";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Lernen Sie WIN.Studio kennen — Nagelstudio in Grünberg für Maniküre, Wimpern und Waxing.",
};

export default function UeberUnsPage() {
  return (
    <>
      <PageHero
        eyebrow="Das Atelier"
        title={`Über ${site.name}`}
        lead="Ein engagiertes Team, klare Qualitätsstandards und ein Ambiente, in dem Sie ankommen und durchatmen können."
        image={images.studio}
      />

      <section className="bg-mist px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
              Warum unser Salon?
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-ink-muted sm:text-base">
              Wir gelten als echte Profis, weil unser Team sich kontinuierlich
              weiterbildet und Qualifizierungen ernst nimmt. Klare Abläufe und
              hohe Standards sind selbstverständlich — und jeder Gast bekommt
              Aufmerksamkeit und Fürsorge.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted sm:text-base">
              Unser Stil verbindet Eleganz mit entspannter Atmosphäre: Hier
              erleben Sie nicht nur Handpflege oder Wimpern, sondern ein
              ruhiges Wohlfühlerlebnis.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="relative aspect-[5/4] overflow-hidden">
              <Image
                src={images.nails}
                alt="Arbeit im Atelier"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink px-5 py-20 text-mist lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
              Was uns auszeichnet
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {strengths.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <h3 className="font-display text-xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist/70">
                  {item.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist-warm px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
              Unser Salon
            </h2>
          </Reveal>
          <div className="mt-12 grid max-w-md gap-8">
            {locations.map((loc, i) => (
              <Reveal key={loc.name} delay={i * 80}>
                <div className="border-t border-ink/15 pt-6">
                  <h3 className="font-display text-xl text-ink">{loc.name}</h3>
                  <p className="mt-2 text-sm text-ink-muted">{loc.address}</p>
                  <p className="mt-3 text-sm text-ink-soft">{loc.focus}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
