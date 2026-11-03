import Link from "next/link";
import { site } from "@/lib/site";

export function CtaBand({
  title = "Bereit für Ihren Termin?",
  text = "Buchen Sie Maniküre, Wimpern oder Waxing — wir freuen uns auf Sie im Atelier.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-moss px-5 py-16 text-mist lg:px-8">
      <div className="pointer-events-none absolute -right-10 top-0 h-56 w-56 rounded-full bg-amber/20 blur-3xl steam-orb" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-mist/75">
            {text}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={site.phoneHref}
            className="rounded-sm bg-mist px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink transition hover:bg-white"
          >
            {site.phone}
          </a>
          <Link
            href="/termin"
            className="rounded-sm border border-mist/35 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-mist transition hover:border-amber-soft hover:text-amber-soft"
          >
            Online anfragen
          </Link>
        </div>
      </div>
    </section>
  );
}
