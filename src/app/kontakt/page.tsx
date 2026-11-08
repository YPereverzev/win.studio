import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { images, locations, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie Auralis Nails in Dortmund — Telefon, WhatsApp, E-Mail und Standorte.",
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow="Erreichbarkeit"
        title="Kontakt"
        lead="Fragen zu Terminen, Preisen oder Gutscheinen? Wir sind für Sie da."
        image={images.studio}
      />

      <section className="bg-mist px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-8">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-deep">
                  Telefon &amp; WhatsApp
                </p>
                <a
                  href={site.phoneHref}
                  className="mt-2 block font-display text-3xl text-ink hover:text-amber-deep"
                >
                  {site.phone}
                </a>
                <a
                  href={site.whatsappHref}
                  className="mt-2 inline-block text-sm text-ink-muted link-underline"
                >
                  WhatsApp schreiben
                </a>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-deep">
                  E-Mail
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-2 block text-lg text-ink hover:text-amber-deep"
                >
                  {site.email}
                </a>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-deep">
                  Öffnungszeiten
                </p>
                <p className="mt-2 text-ink-soft">{site.hours}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form className="space-y-4 border border-ink/10 bg-white/40 p-6 sm:p-8">
              <p className="font-display text-2xl text-ink">Nachricht senden</p>
              <label className="block text-sm text-ink-muted">
                Name
                <input
                  name="name"
                  required
                  className="mt-1.5 w-full border border-ink/15 bg-mist px-3 py-2.5 text-ink outline-none ring-amber/40 focus:ring-2"
                />
              </label>
              <label className="block text-sm text-ink-muted">
                E-Mail
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-1.5 w-full border border-ink/15 bg-mist px-3 py-2.5 text-ink outline-none ring-amber/40 focus:ring-2"
                />
              </label>
              <label className="block text-sm text-ink-muted">
                Nachricht
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="mt-1.5 w-full border border-ink/15 bg-mist px-3 py-2.5 text-ink outline-none ring-amber/40 focus:ring-2"
                />
              </label>
              <button
                type="submit"
                className="rounded-sm bg-amber px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-amber-soft"
              >
                Absenden (Demo)
              </button>
              <p className="text-xs text-ink-muted">
                Formular ist nur zur Demonstration — keine Daten werden
                versendet.
              </p>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist-warm px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="font-display text-3xl tracking-tight text-ink">
              Standorte
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {locations.map((loc, i) => (
              <Reveal key={loc.name} delay={i * 70}>
                <div className="border-t border-ink/15 pt-5">
                  <h3 className="font-display text-xl text-ink">{loc.name}</h3>
                  <p className="mt-2 text-sm text-ink-muted">{loc.address}</p>
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
