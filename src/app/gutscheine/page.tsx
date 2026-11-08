import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { images, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gutscheine",
  description:
    "Wellness-Beauty-Gutscheine für Maniküre, Wimpern oder Waxing verschenken — Auralis Nails Dortmund.",
};

const ideas = [
  {
    title: "Maniküre-Gutschein",
    text: "Klassisch, Gel oder Spa — die ideale Aufmerksamkeit für gepflegte Hände.",
  },
  {
    title: "Wimpern-Erlebnis",
    text: "Neuset oder Auffüllen — ein Blick, der bleibt und Freude macht.",
  },
  {
    title: "Waxing-Auszeit",
    text: "Glatte Haut schenken: Gesicht, Beine oder ein kombiniertes Paket.",
  },
];

export default function GutscheinePage() {
  return (
    <>
      <PageHero
        eyebrow="Verschenken"
        title="Gutscheine"
        lead="Schenken Sie Zeit für Pflege und Wohlbefinden — flexibel einlösbar für Maniküre, Wimpern oder Waxing."
        image={images.gift}
      />

      <section className="bg-mist px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
              Beliebtes Geschenk für jeden Anlass
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-ink-muted sm:text-base">
              Geburtstag, Jahrestag oder einfach so: Ein {site.name}-Gutschein
              lässt die Beschenkten selbst wählen — Betrag oder konkrete
              Behandlung. Wir stellen Gutscheine im Studio aus oder senden sie
              digital zu.
            </p>
            <Link
              href="/kontakt"
              className="mt-8 inline-flex rounded-sm bg-amber px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-amber-soft"
            >
              Gutschein anfragen
            </Link>
          </Reveal>
          <Reveal delay={100}>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={images.hands}
                alt="Geschenkidee Beauty"
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
          <div className="grid gap-8 md:grid-cols-3">
            {ideas.map((idea, i) => (
              <Reveal key={idea.title} delay={i * 80}>
                <div className="border-t border-ink/15 pt-6">
                  <h3 className="font-display text-xl text-ink">{idea.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {idea.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Gutschein bestellen" text="Schreiben oder rufen Sie uns an — wir kümmern uns um den Rest." />
    </>
  );
}
