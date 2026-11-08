import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { Reveal } from "@/components/Reveal";
import {
  faqsHome,
  images,
  locations,
  reviews,
  services,
  site,
  strengths,
} from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* Full-bleed hero — brand first */}
      <section className="relative isolate min-h-[100svh] overflow-hidden bg-ink text-mist">
        <Image
          src={images.hero}
          alt="Gepflegte Nägel im Atelierlicht"
          fill
          priority
          className="object-cover object-center opacity-50 animate-drift"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-steam-glow opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/30" />
        <div className="absolute inset-0 grain" />

        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-20 pt-28 lg:px-8 lg:pb-24">
          <p className="animate-fade-up font-display text-5xl tracking-tight text-mist sm:text-6xl lg:text-7xl">
            {site.name}
          </p>
          <h1 className="mt-5 max-w-2xl animate-fade-up-delay font-display text-2xl leading-snug text-mist/90 sm:text-3xl lg:text-4xl">
            Maniküre, Wimpern &amp; Waxing in {site.city}
          </h1>
          <p className="mt-5 max-w-lg animate-fade-up-late text-base leading-relaxed text-mist/70">
            Präzise Beauty-Behandlungen in ruhigem Atelier-Ambiente — für Hände,
            Blick und glatte Haut.
          </p>
          <div className="mt-9 flex animate-fade-up-late flex-wrap gap-3">
            <Link
              href="/termin"
              className="rounded-sm bg-amber px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-amber-soft"
            >
              Termin buchen
            </Link>
            <Link
              href="/preise"
              className="rounded-sm border border-mist/35 px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-mist transition hover:border-amber-soft hover:text-amber-soft"
            >
              Preise ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* Three service pillars */}
      <section className="bg-section-wash px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-deep">
              Unsere Leistungen
            </p>
            <h2 className="mt-3 max-w-xl font-display text-3xl tracking-tight text-ink sm:text-4xl">
              Drei Wege zu gepflegtem Auftritt
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.href} delay={i * 90}>
                <Link href={s.href} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={images[s.imageKey]}
                      alt={s.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6 text-mist">
                      <h3 className="font-display text-2xl tracking-tight">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-mist/75">
                        {s.lead}
                      </p>
                      <span className="mt-4 inline-block text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-soft link-underline">
                        Mehr erfahren
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About strip */}
      <section className="relative overflow-hidden bg-ink px-5 py-20 text-mist lg:px-8">
        <div className="pointer-events-none absolute left-1/4 top-0 h-64 w-64 rounded-full bg-amber/10 blur-3xl steam-orb" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[5/4] overflow-hidden">
              <Image
                src={images.studio}
                alt="Atelier-Ambiente"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-soft">
              Willkommen bei {site.shortName}
            </p>
            <h2 className="mt-4 font-display text-3xl tracking-tight sm:text-4xl">
              Nagelstudio mit Liebe zum Detail
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-mist/70 sm:text-base">
              Wir heißen Sie in unserem gemütlichen Atelier willkommen. Service,
              Angebote und Komfort sind darauf ausgerichtet, dass Sie mit
              hochwertigen Ergebnissen und erfüllten Erwartungen gehen — ob
              Maniküre zwischendurch, Wimpern-Neuset oder sanftes Waxing.
            </p>
            <Link
              href="/ueber-uns"
              className="mt-8 inline-flex text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-soft link-underline"
            >
              Über uns
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Strengths */}
      <section className="bg-mist px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
              Unsere Stärken
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {strengths.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-deep">
                  0{i + 1}
                </p>
                <h3 className="mt-3 font-display text-xl text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {item.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="bg-mist-warm px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-deep">
              Standorte
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl">
              Maniküre &amp; Beauty in Dortmund
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
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

      {/* Reviews */}
      <section className="bg-ink px-5 py-20 text-mist lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
              Stimmen unserer Gäste
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={i * 70}>
                <blockquote className="border-l border-amber/40 pl-5">
                  <p className="text-sm leading-relaxed text-mist/75">
                    „{r.text}“
                  </p>
                  <footer className="mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-soft">
                    {r.name}
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Faq items={faqsHome} />
      <CtaBand />
    </>
  );
}
