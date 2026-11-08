"use client";

import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { images, site } from "@/lib/site";

const treatments = [
  "Maniküre",
  "Pediküre",
  "Wimpern — Neuset",
  "Wimpern — Auffüllen",
  "Waxing Gesicht",
  "Waxing Körper",
  "Kombi / Beratung",
];

export default function TerminPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Buchung"
        title="Termin buchen"
        lead="Senden Sie uns Ihre Wunschbehandlung — wir melden uns mit einem Terminvorschlag."
        image={images.hands}
      />

      <section className="bg-mist px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <h2 className="font-display text-3xl tracking-tight text-ink">
              So einfach geht&apos;s
            </h2>
            <ol className="mt-8 space-y-6">
              {[
                "Behandlung und Wunschdatum wählen",
                "Kurze Anfrage absenden",
                "Wir bestätigen per Telefon oder WhatsApp",
              ].map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="font-display text-2xl text-amber-deep">
                    0{i + 1}
                  </span>
                  <span className="pt-1 text-sm text-ink-soft">{step}</span>
                </li>
              ))}
            </ol>
            <p className="mt-10 text-sm text-ink-muted">
              Oder direkt anrufen:{" "}
              <a href={site.phoneHref} className="text-amber-deep link-underline">
                {site.phone}
              </a>
            </p>
          </Reveal>

          <Reveal delay={100}>
            {sent ? (
              <div className="border border-moss/30 bg-moss/5 p-8">
                <p className="font-display text-2xl text-ink">Anfrage erhalten</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  Vielen Dank — in dieser Demo wird nichts versendet. In einer
                  echten Installation würden wir uns zeitnah bei Ihnen melden.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-deep"
                >
                  Neue Anfrage
                </button>
              </div>
            ) : (
              <form
                className="space-y-4 border border-ink/10 bg-white/40 p-6 sm:p-8"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <label className="block text-sm text-ink-muted">
                  Name
                  <input
                    name="name"
                    required
                    className="mt-1.5 w-full border border-ink/15 bg-mist px-3 py-2.5 text-ink outline-none ring-amber/40 focus:ring-2"
                  />
                </label>
                <label className="block text-sm text-ink-muted">
                  Telefon oder WhatsApp
                  <input
                    name="phone"
                    required
                    className="mt-1.5 w-full border border-ink/15 bg-mist px-3 py-2.5 text-ink outline-none ring-amber/40 focus:ring-2"
                  />
                </label>
                <label className="block text-sm text-ink-muted">
                  Behandlung
                  <select
                    name="treatment"
                    required
                    className="mt-1.5 w-full border border-ink/15 bg-mist px-3 py-2.5 text-ink outline-none ring-amber/40 focus:ring-2"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Bitte wählen
                    </option>
                    {treatments.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block text-sm text-ink-muted">
                  Wunschdatum
                  <input
                    type="date"
                    name="date"
                    className="mt-1.5 w-full border border-ink/15 bg-mist px-3 py-2.5 text-ink outline-none ring-amber/40 focus:ring-2"
                  />
                </label>
                <label className="block text-sm text-ink-muted">
                  Bemerkung
                  <textarea
                    name="note"
                    rows={3}
                    className="mt-1.5 w-full border border-ink/15 bg-mist px-3 py-2.5 text-ink outline-none ring-amber/40 focus:ring-2"
                  />
                </label>
                <button
                  type="submit"
                  className="rounded-sm bg-amber px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-amber-soft"
                >
                  Anfrage senden
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
